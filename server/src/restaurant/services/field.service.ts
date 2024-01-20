import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/services/prisma.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAddress(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { address: true },
      })
    ).address;
  }

  async getTables(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { tables: true },
      })
    ).tables;
  }
  async getWaiters(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { waiters: true },
      })
    ).waiters;
  }
  async getCategories(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { categories: true },
      })
    ).categories;
  }
  async getVictuals(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { victuals: true },
      })
    ).victuals;
  }
  async getOrders(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { orders: true },
      })
    ).orders;
  }
  async getMeals(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { meals: true },
      })
    ).meals;
  }
  async getCurrency(restaurantId: number) {
    return (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
        include: { currency: true },
      })
    ).currency;
  }
}
