import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}
  async getRestaurant(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { id },
      include: {
        restaurant: true,
      },
    });
    return waiter.restaurant;
  }

  async getOrders(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { id },
      select: {
        orders: true,
      },
    });
    return waiter.orders;
  }

  async getMeals(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: {
        id,
      },
      select: {
        meals: true,
      },
    });
    return waiter.meals;
  }
}
