import { Injectable } from "@nestjs/common";

import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { Restaurant as PRestaurant, Prisma } from "prisma/client/main";
import { SecurityService } from "../../../security/services/security.service";
import {
  CreateRestaurant,
  UpdateRestaurantPasswordData,
  UpdateRestaurantData,
  Restaurant,
  WhereRestaurant,
} from "../../../models/resources/restaurant.model";
import { Success } from "../../../models/resources/success.model";
import { CurrencyService } from "../../currency/services/currency.service";
import { SUCCESS } from "../../../response";

@Injectable()
export class RestaurantService {
  constructor(
    private readonly prismaService: PrismaMainService,
    private readonly securityService: SecurityService,
    private readonly currencyService: CurrencyService
  ) {}
  async create({ currency, ...data }: CreateRestaurant): Promise<Restaurant> {
    const restaurant = await this.prismaService.restaurant.create({
      data: {
        ...data,
        password: this.securityService.hash(data.password),
        address: {
          create: data.address,
        },
        currencyId: data.currencyId,
        settings: {
          create: {
            enableAnalytics: false,
          },
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
    return SUCCESS;
  }

  async update({
    where,
    update: { currency: _currency, ...update },
  }: UpdateRestaurantData): Promise<Restaurant> {
    const currency = _currency
      ? await this.currencyService.find(_currency)
      : null;
    const restaurant = await this.prismaService.restaurant.update({
      where: where as Prisma.RestaurantWhereUniqueInput,
      data: {
        ...update,
        address: {
          update: update.address && update.address,
        },
        currencyId: _currency && currency.id,
        settings: {
          update: update.settings && update.settings,
        },
      },
    });
    return restaurant;
  }

  async delete(where: WhereRestaurant): Promise<Success> {
    await this.prismaService.restaurant.delete({
      where: where as Prisma.RestaurantWhereUniqueInput,
    });
    return SUCCESS;
  }

  async find(where: WhereRestaurant): Promise<PRestaurant> {
    const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
      where: where as Prisma.RestaurantWhereUniqueInput,
    });
    return restaurant;
  }
}
