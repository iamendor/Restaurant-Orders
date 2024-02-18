import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { Success } from "../../../models/resources/success.model";
import { Meal, WhereMeal } from "../../../models/resources/meal.model";
import { CreateMealData } from "../../../interfaces/meal.interface";
import { Order } from "../../../models/resources/order.model";

@Injectable()
export class MealService {
  constructor(private readonly prismaService: PrismaMainService) {}
  async clearTable(tableId: number) {
    await this.prismaService.order.updateMany({
      where: {
        tableId: tableId,
      },
      data: {
        tableId: null,
        closed: true,
      },
    });
  }

  formatTable(orders: Order[]) {
    const sorted = orders.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
    );
    const start = sorted[0].createdAt;
    const end = sorted[sorted.length - 1].createdAt;
    const waiterId = sorted[0].waiterId;
    const total = sorted.reduce(
      (acc, c) => acc + c.product.price * c.quantity,
      0
    );
    return { sorted, start, end, waiterId, total };
  }

  async create(data: CreateMealData): Promise<Meal> {
    const { start, end, total, tableId, restaurantId, orderIds, waiterId } =
      data;
    const meal = await this.prismaService.meal.create({
      data: {
        start,
        end,
        total,
        table: {
          connect: { id: tableId },
        },
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
        orders: {
          connect: orderIds,
        },
        waiter: {
          connect: {
            id: waiterId,
          },
        },
      },
    });

    return meal;
  }

  async list(restaurantId: number): Promise<Meal[]> {
    const meals = await this.prismaService.meal.findMany({
      where: {
        restaurantId,
      },
    });
    return meals;
  }

  async find(where: WhereMeal): Promise<Meal> {
    const meal = await this.prismaService.meal.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return meal;
  }
}
