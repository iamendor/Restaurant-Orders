import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

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

    const openHour = await this.prismaService.openingHour.findFirst({
      where: { restaurantId, name: days[date.getDay() - 1] },
    });
    if (!openHour) return false;
    const { start, end } = openHour;
    const startDate = new Date(`1970-01-01T${start}`);
    const endDate = new Date(`1970-01-01T${end}`);
    const checkDate = new Date(`1970-01-01T${date.toLocaleTimeString()}`);
    return checkDate >= startDate && checkDate <= endDate;
  }

  async getTasks(restaurantId: number) {
    const tasks = await this.prismaService.task.findMany({
      where: { restaurantId },
      include: { base: true },
    });
    return tasks.map(({ id, base, done }) => ({
      id,
      name: base.name,
      done,
    }));
  }
}
