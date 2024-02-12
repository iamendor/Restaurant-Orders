import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async getRestaurant(id: number) {
    const task = await this.prismaService.task.findUniqueOrThrow({
      where: { id },
      include: { restaurant: true },
    });
    return task.restaurant;
  }
}
