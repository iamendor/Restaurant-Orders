import { Injectable, UnauthorizedException } from "@nestjs/common";
import {
  CreateRestaurant,
  Restaurant,
  WhereRestaurant,
  RestaurantModel,
  Deleted,
  PasswordUpdated,
  UpdateRestaurantData,
  UpdateRestaurantDataPassword,
} from "../models/model";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class RestaurantService {
  constructor(private readonly prismaService: PrismaService) {}
  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }
  async create(data: CreateRestaurant): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.create({
        data: {
          ...data,
          password: this.hashPassword(data.password),
          address: {
            create: data.address,
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
  }: UpdateRestaurantDataPassword): Promise<PasswordUpdated> {
    const restaurant = await this.find(where);
    if (!bcrypt.compareSync(update.old, restaurant.password)) {
      throw new UnauthorizedException("invalid password");
    }
    try {
      const encrypted = this.hashPassword(update.password);
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

  async update(update: UpdateRestaurantData): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.update({
        where: update.where,
        data: {
          ...update.data,
          address: {
            update: update.data.address && update.data.address,
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

  async delete(where: WhereRestaurant): Promise<Deleted> {
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

  async find(where: WhereRestaurant): Promise<RestaurantModel> {
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
