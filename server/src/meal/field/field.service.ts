import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { Waiter, Table, Restaurant, Order, Currency } from "@prisma/client";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}
  async getWaiter(id: number): Promise<Waiter> {
    const meal = await this.prismaService.meal.findFirst({
      where: { id },
      include: { waiter: true },
    });
    return meal.waiter;
  }

  async getTable(id: number): Promise<Table> {
    const meal = await this.prismaService.meal.findFirst({
      where: { id },
      include: { table: true },
    });
    return meal.table;
  }

  async getRestaurant(id: number): Promise<Restaurant> {
    const meal = await this.prismaService.meal.findFirst({
      where: { id },
      include: { restaurant: true },
    });
    return meal.restaurant;
  }
  async getOrders(id: number): Promise<Order[]> {
    const meal = await this.prismaService.meal.findFirst({
      where: { id },
      include: { orders: true },
    });
    return meal.orders;
  }

  async getCurrency(id: number): Promise<Currency> {
    const meal = await this.prismaService.meal.findFirst({
      where: {
        id,
      },
      include: { currency: true },
    });
    return meal.currency;
  }
}
