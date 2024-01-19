import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { NotFoundResourceException } from "../../error/errors";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}
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
  async getVictual(id: number) {
    const order = await this.prismaService.order.findFirst({
      where: {
        id,
      },
      select: {
        victual: true,
      },
    });
    if (!order) throw new NotFoundResourceException("order");
    return order.victual;
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
