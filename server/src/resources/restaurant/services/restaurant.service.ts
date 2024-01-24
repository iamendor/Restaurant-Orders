import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
import { Restaurant as PRestaurant } from "@prisma/client";
import { SecurityService } from "../../../security/services/security.service";
import {
  CreateRestaurant,
  UpdateRestaurantPasswordData,
  UpdateRestaurantData,
  WhereRestaurant,
  Restaurant,
} from "../../../models/restaurant.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class RestaurantService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly securityService: SecurityService
  ) {}
  async create(data: CreateRestaurant): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.create({
        data: {
          ...data,
          password: this.securityService.hash(data.password),
          address: {
            create: data.address,
          },
          currency: {
            create: data.currency,
          },
        },
      });
      return restaurant;
    } catch (e) {
      if (e.code === "P2002") {
        throw new SomethingWentWrongException("email is already registered");
      }
      throw new SomethingWentWrongException(e.message);
    }
  }

  async updatePassword({
    where,
    update,
  }: UpdateRestaurantPasswordData): Promise<Success> {
    try {
      const encrypted = this.securityService.hash(update.password);
      await this.prismaService.restaurant.update({
        where,
        data: {
          password: encrypted,
        },
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update(data: UpdateRestaurantData): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.update({
        where: data.where,
        data: {
          ...data.update,
          address: {
            update: data.update.address && data.update.address,
          },
          currency: {
            update: data.update.currency && data.update.currency,
          },
        },
      });
      return restaurant;
    } catch (e) {
      if (e.code === "P2002") {
        throw new SomethingWentWrongException("email is already registered");
      }
      throw new SomethingWentWrongException(e.message);
    }
  }

  async delete(where: WhereRestaurant): Promise<Success> {
    try {
      await this.prismaService.restaurant.delete({
        where,
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new NotFoundResourceException("restaurant");
    }
  }

  async find(where: WhereRestaurant): Promise<PRestaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
        where: {
          ...where,
        },
      });
      return restaurant;
    } catch (e) {
      throw new NotFoundResourceException("restaurant");
    }
  }
}
