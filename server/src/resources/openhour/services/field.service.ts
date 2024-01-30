import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRestaurant(id: number) {
    return (
      await this.prismaService.openingHour.findUnique({
        where: { id },
        include: { restaurant: true },
      })
    ).restaurant;
  }
}
