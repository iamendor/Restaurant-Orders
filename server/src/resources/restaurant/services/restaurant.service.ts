import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../prisma/services/prisma.service";
import { Restaurant as PRestaurant, Prisma } from "@prisma/client";
import { SecurityService } from "../../../security/services/security.service";
import {
  CreateRestaurant,
  UpdateRestaurantPasswordData,
  UpdateRestaurantData,
  Restaurant,
  WhereRestaurant,
} from "../../../models/restaurant.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class RestaurantService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly securityService: SecurityService
  ) {}
  async create(data: CreateRestaurant): Promise<Restaurant> {
    const restaurant = await this.prismaService.restaurant.create({
      data: {
        ...data,
        password: this.securityService.hash(data.password),
        address: {
          create: data.address,
        },
        currency: {
          connect: data.currency,
        },
      },
    });
    return restaurant;
  }

  async updatePassword({
    where,
    update,
  }: UpdateRestaurantPasswordData): Promise<Success> {
    const encrypted = this.securityService.hash(update.password);
    await this.prismaService.restaurant.update({
      where: where as Prisma.RestaurantWhereUniqueInput,
      data: {
        password: encrypted,
      },
    });
    return {
      message: "success",
    };
  }

  async update({ where, update }: UpdateRestaurantData): Promise<Restaurant> {
    const restaurant = await this.prismaService.restaurant.update({
      where: where as Prisma.RestaurantWhereUniqueInput,
      data: {
        ...update,
        address: {
          update: update.address && update.address,
        },
        currency: {
          connect: update.currency && update.currency,
        },
      },
    });
    return restaurant;
  }

  async delete(where: WhereRestaurant): Promise<Success> {
    await this.prismaService.restaurant.delete({
      where: where as Prisma.RestaurantWhereUniqueInput,
    });
    return {
      message: "success",
    };
  }

  async find(where: WhereRestaurant): Promise<PRestaurant> {
    const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
      where: where as Prisma.RestaurantWhereUniqueInput,
    });
    return restaurant;
  }
}
