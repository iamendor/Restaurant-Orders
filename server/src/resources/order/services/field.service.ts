import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}
  async getRestaurant(id: number) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        restaurant: true,
      },
    });
    return order.restaurant;
  }

  async getTable(id: number) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        table: true,
      },
    });
    return order.table;
  }
  async getVictual(id: number) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        victual: true,
      },
    });
    return order.victual;
  }
  async getWaiter(id: number) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        waiter: true,
      },
    });
    return order.waiter;
  }
}
