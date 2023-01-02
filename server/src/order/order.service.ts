import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateOrder,
  Deleted,
  InvalidateQuery,
  Order,
  OrdersCreated,
  UpdateOrder,
  WhereOrder,
} from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";
import { PubSub } from "graphql-subscriptions";

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}
  private getCurrentDate() {
    return new Date().toLocaleString();
  }

  async create(data: CreateOrder): Promise<Order> {
    const { restaurantId, tableId, mealId, waiterId, ...rest } = data;
    const formatted = {
      ...rest,
      isReady: false,
      description: rest.description || "",
      createdAt: this.getCurrentDate(), //?
    };
    try {
      const order = await this.prismaService.order.create({
        data: {
          ...formatted,
          restaurant: {
            connect: {
              id: restaurantId,
            },
          },
          table: {
            connect: {
              id: tableId,
            },
          },
          meal: {
            connect: {
              id: mealId,
            },
          },
          waiter: {
            connect: {
              id: waiterId,
            },
          },
        },
      });
      return order;
    } catch (e) {
      console.log(e);
      throw new SomethingWentWrongException(e.message);
    }
  }
  async createMany(data: Required<CreateOrder>[]): Promise<OrdersCreated> {
    const formatted = data.map((order) => {
      return {
        ...order,
        createdAt: this.getCurrentDate(),
      };
    });
    try {
      await this.prismaService.order.createMany({
        data: formatted,
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
  async update(data: UpdateOrder): Promise<Order> {
    const { update, where } = data;
    await this.find(where);
    try {
      const updatedOrder = await this.prismaService.order.update({
        where: {
          id: where.id,
        },
        data: {
          ...update,
        },
      });
      return updatedOrder;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
  async delete(where: WhereOrder): Promise<Deleted> {
    await this.find(where);
    try {
      await this.prismaService.order.delete({
        where: {
          id: where.id,
        },
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
  async list(restaurantId: number) {
    const restaurant = await this.prismaService.restaurant.findFirst({
      where: {
        id: restaurantId,
      },
      select: {
        orders: true,
      },
    });
    if (!restaurant) throw new NotFoundResourceException("restaurant");
    return restaurant.orders;
  }
  async find(where: WhereOrder) {
    const order = await this.prismaService.order.findUnique({
      where: {
        id: where.id,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    if (order.restaurantId !== where.restaurantId) {
      throw new HttpException("permission denied for order", 403);
    }
    return order;
  }

  async getRestaurant(id: number) {
    const order = await this.prismaService.order.findFirst({
      where: {
        id,
      },
      select: {
        restaurant: true,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    return order.restaurant;
  }

  async getTable(id: number) {
    const order = await this.prismaService.order.findFirst({
      where: {
        id,
      },
      select: {
        table: true,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    return order.table;
  }
  async getMeal(id: number) {
    const order = await this.prismaService.order.findFirst({
      where: {
        id,
      },
      select: {
        meal: true,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    return order.meal;
  }
  async getWaiter(id: number) {
    const order = await this.prismaService.order.findFirst({
      where: {
        id,
      },
      select: {
        waiter: true,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    return order.waiter;
  }

  
}
