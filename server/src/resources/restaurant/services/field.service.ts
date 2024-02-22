import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";

@Injectable()
export class FieldService {
  constructor(
    private readonly prismaService: PrismaMainService,
    private readonly prismaStaticService: PrismaStaticService
  ) {}

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
        include: { products: true },
      })
    ).products;
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
    const currencyId = (
      await this.prismaService.restaurant.findFirst({
        where: { id: restaurantId },
      })
    ).currencyId;

    return this.prismaStaticService.currency.findFirst({
      where: { id: currencyId },
    });
  }

  async isOpen(restaurantId: number) {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = new Date();
    date.setFullYear(1970, 0, 1);

    const openHour = await this.prismaService.openingHour.findFirst({
      where: { restaurantId, name: days[date.getDay() - 1] },
    });
    if (!openHour) return false;
    const { start, end } = openHour;
    const startDate = new Date(`1970-01-01T${start}`);
    const endDate = new Date(`1970-01-01T${end}`);

    return date >= startDate && date <= endDate;
  }

  async getTasks(restaurantId: number) {
    const tasks = await this.prismaService.task.findMany({
      where: { restaurantId },
    });
    return tasks;
  }

  getSettings(restaurantId: number) {
    return this.prismaService.settings.findUniqueOrThrow({
      where: { restaurantId },
    });
  }
}
