import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMeal, Deleted, Meal, Order, WhereMeal } from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class MealService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateMeal, restaurantId: number): Promise<Meal> {
    const table = await this.prismaService.table.findFirst({
      where: { id: data.tableId },
      include: {
        orders: {
          include: {
            victual: true,
          },
        },
      },
    });
    if (!table) throw new NotFoundResourceException("table");
    if (table.restaurantId !== restaurantId)
      throw new HttpException(
        "permission denied for table",
        HttpStatus.FORBIDDEN
      );
    if (table.orders.length === 0) {
      throw new HttpException("no orders to close table", 400);
    }

    const sorted = table.orders.sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
    const start = sorted[0].createdAt;
    const end = sorted[sorted.length - 1].createdAt;
    const waiterId = sorted[0]?.waiterId;
    const total = sorted.reduce((acc, c) => acc + c.victual.price, 0);
    const meal = await this.prismaService.meal.create({
      data: {
        start,
        end,
        total,
        table: {
          connect: { id: table.id },
        },
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
        orders: {
          connect: [
            ...sorted.map((ord) => ({
              id: ord.id,
            })),
          ],
        },
        waiter: {
          connect: {
            id: waiterId,
          },
        },
      },
    });
    await this.prismaService.order.updateMany({
      where: {
        tableId: data.tableId,
      },
      data: {
        tableId: null,
      },
    });
    return meal;
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
      if (meal.restaurantId !== where.restaurantId) {
        throw new Error("permission denied");
      }
      return meal;
    } catch (e) {
      if (e.message === "permission denied")
        throw new HttpException(
          "permission denied for meal",
          HttpStatus.FORBIDDEN
        );
      throw new NotFoundResourceException("meal");
    }
  }

  async delete(where: WhereMeal): Promise<Deleted> {
    try {
      await this.prismaService.meal.delete({ where: { id: where.id } });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async getOrders(id: number): Promise<Order[]> {
    const meal = await this.prismaService.meal.findFirst({
      where: { id },
      include: { orders: true },
    });
    return meal.orders;
  }
}
