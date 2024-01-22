import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}
  async getRestaurant(id: number) {
    const table = await this.prismaService.table.findFirst({
      where: {
        id,
      },
      include: {
        restaurant: true,
      },
    });
    return table.restaurant;
  }

  async getOrders(id: number) {
    const table = await this.prismaService.table.findFirst({
      where: {
        id,
      },
      include: {
        orders: true,
      },
    });
    return table.orders;
  }
}
