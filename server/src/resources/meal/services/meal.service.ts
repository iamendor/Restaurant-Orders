import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
import { CreateMealData, Success } from "../../../models/other.model";
import { Meal, WhereMeal } from "../../../models/meal.model";

@Injectable()
export class MealService {
  constructor(private readonly prismaService: PrismaService) {}
  getOrdersOfTable(tableId: number) {
    return this.prismaService.table.findFirst({
      where: { id: tableId },
      include: {
        restaurant: {
          select: {
            currency: true,
            id: true,
          },
        },
        orders: {
          include: {
            victual: true,
          },
        },
      },
    });
  }
  async clearTable(tableId: number) {
    await this.prismaService.order.updateMany({
      where: {
        tableId: tableId,
      },
      data: {
        tableId: null,
      },
    });
  }
  formatTable(table: any) {
    const sorted = table.orders.sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
    const start = sorted[0].createdAt;
    const end = sorted[sorted.length - 1].createdAt;
    const waiterId = sorted[0].waiterId;
    const total = sorted.reduce((acc, c) => acc + c.victual.price, 0);
    return { sorted, start, end, waiterId, total };
  }

  async create(data: CreateMealData): Promise<Meal> {
    try {
      const {
        start,
        end,
        total,
        tableId,
        restaurantId,
        currencyId,
        orderIds,
        waiterId,
      } = data;
      const meal = await this.prismaService.meal.create({
        data: {
          start,
          end,
          total,
          table: {
            connect: { id: tableId },
          },
          currency: {
            connect: {
              id: currencyId,
            },
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
    } catch (e) {
      throw new SomethingWentWrongException();
    }
  }

  async list(restaurantId: number): Promise<Meal[]> {
    const restaurant = await this.prismaService.restaurant.findFirst({
      where: {
        id: restaurantId,
      },
      select: {
        meals: true,
      },
    });
    return restaurant.meals;
  }

  async find(where: WhereMeal): Promise<Meal> {
    try {
      const meal = await this.prismaService.meal.findUniqueOrThrow({
        where: {
          id: where.id,
        },
      });
      return meal;
    } catch (e) {
      throw new NotFoundResourceException("meal");
    }
  }

  async delete(where: WhereMeal): Promise<Success> {
    try {
      await this.prismaService.meal.delete({ where: { id: where.id } });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
}
