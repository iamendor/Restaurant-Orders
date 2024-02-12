import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaService) {}

  async getRestaurant(id: number) {
    const task = await this.prismaService.task.findUniqueOrThrow({
      where: { id },
      include: { restaurant: true },
    });
    return task.restaurant;
  }
}
