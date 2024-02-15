import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

import {
  CreateOrder,
  Order,
  UpdateOrder,
  WhereOrder,
} from "../../../models/resources/order.model";
import { Success } from "../../../models/resources/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";
import { Prisma } from "prisma/client/main";

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async create(data: CreateOrder): Promise<Order> {
    const { restaurantId, tableId, productId, waiterId, ...rest } = data;

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

        product: {
          connect: {
            id: productId,
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
  async createMany(data: CreateOrder[]): Promise<Success> {
    await this.prismaService.order.createMany({
      data: data as Prisma.OrderCreateManyInput[],
      skipDuplicates: true,
    });
    return SUCCESS;
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
    return SUCCESS;
  }
  async list(restaurantId: number) {
    const orders = await this.prismaService.order.findMany({
      where: {
        restaurantId,
      },
    });
    return orders;
  }
  async listLatest({ restaurantId, count }) {
    const orders = await this.prismaService.order.findMany({
      where: {
        restaurantId,
      },
      orderBy: {
        id: "desc",
      },
      take: count,
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

  async validate({ id, restaurantId }: VerifyResource) {
    const order = await this.find({ id });
    return order.restaurantId == restaurantId;
  }
}
