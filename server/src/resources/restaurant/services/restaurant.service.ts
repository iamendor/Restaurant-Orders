import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../prisma/services/prisma.service";
import { Restaurant as PRestaurant } from "@prisma/client";
import { SecurityService } from "../../../security/services/security.service";
import {
  CreateRestaurant,
  UpdateRestaurantPasswordData,
  UpdateRestaurantData,
  Restaurant,
  WhereRestaurantId,
  WhereRestaurantEmail,
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
          create: data.currency,
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
      where,
      data: {
        password: encrypted,
      },
    });
    return {
      message: "success",
    };
  }

  async update(data: UpdateRestaurantData): Promise<Restaurant> {
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
  }

  async delete(where: WhereRestaurantId): Promise<Success> {
    await this.prismaService.restaurant.delete({
      where,
    });
    return {
      message: "success",
    };
  }

  async find(where: WhereRestaurantId): Promise<PRestaurant> {
    const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
      where,
    });
    return restaurant;
  }

  async findByEmail(where: WhereRestaurantEmail): Promise<PRestaurant> {
    const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
      where,
    });
    return restaurant;
  }
}
