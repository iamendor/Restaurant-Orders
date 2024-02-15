import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}
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

  async getOrders(id: number, forTotal = false) {
    const table = await this.prismaService.table.findFirst({
      where: {
        id,
      },
      include: {
        orders: {
          include: {
            victual: forTotal,
          },
        },
      },
    });
    return table.orders;
  }
}
