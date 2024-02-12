import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async getRestaurant(id: number) {
    return (
      await this.prismaService.openingHour.findUnique({
        where: { id },
        include: { restaurant: true },
      })
    ).restaurant;
  }
}
