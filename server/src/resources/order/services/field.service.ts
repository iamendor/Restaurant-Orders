import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}
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
  async getProduct(id: number) {
    const order = await this.prismaService.order.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        product: true,
      },
    });
    return order.product;
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
