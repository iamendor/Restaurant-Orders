import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}
  async getCategory(id: number) {
    const meal = await this.prismaService.victual.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        category: true,
      },
    });
    return meal.category;
  }

  async getRestaurant(id: number) {
    const meal = await this.prismaService.victual.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        restaurant: true,
      },
    });
    return meal.restaurant;
  }

  async getOrders(id: number) {
    const meal = await this.prismaService.victual.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        orders: true,
      },
    });
    return meal.orders;
  }
}
