import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

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
  }
  async createMany(data: Required<CreateOrder>[]): Promise<Success> {
    await this.prismaService.order.createMany({
      data,
      skipDuplicates: true,
    });
    return { message: "success" };
  }
  async update(data: UpdateOrder): Promise<Order> {
    const { update, where } = data;
    const updatedOrder = await this.prismaService.order.update({
      where: {
        id: where.id,
      },
      data: {
        ...update,
      },
    });
    return updatedOrder;
  }
  async delete(where: WhereOrder): Promise<Success> {
    await this.prismaService.order.delete({
      where: {
        id: where.id,
      },
    });
    return { message: "success" };
  }
  async list(restaurantId: number) {
    const orders = await this.prismaService.order.findMany({
      where: {
        restaurantId,
      },
    });
    return orders;
  }
  async find(where: WhereOrder) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return order;
  }
}
