import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/services/prisma.service";
import { NotFoundResourceException } from "../../error/errors";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}
  async getRestaurant(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { id },
      include: {
        restaurant: true,
      },
    });
    if (!waiter) throw new NotFoundResourceException("waiter");
    return waiter.restaurant;
  }

  async getOrders(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { id },
      select: {
        orders: true,
      },
    });
    if (!waiter) throw new NotFoundResourceException("waiter");
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
