import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
import { Order } from "@prisma/client";
import {
  CreateOrder,
  UpdateOrder,
  WhereOrder,
} from "../../../models/order.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateOrder): Promise<Order> {
    const { restaurantId, tableId, victualId, waiterId, ...rest } = data;

    try {
      const order = await this.prismaService.order.create({
        data: {
          ...rest,
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
          victual: {
            connect: {
              id: victualId,
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
  async createMany(data: Required<CreateOrder>[]): Promise<Success> {
    try {
      await this.prismaService.order.createMany({
        data,
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
  async update(data: UpdateOrder): Promise<Order> {
    const { update, where } = data;
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
  async delete(where: WhereOrder): Promise<Success> {
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
    return order;
  }
}
