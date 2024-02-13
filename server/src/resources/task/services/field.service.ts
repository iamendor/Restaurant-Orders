import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";

@Injectable()
export class FieldService {
  constructor(
    private readonly prismaService: PrismaMainService,
    private readonly prismaStaticService: PrismaStaticService
  ) {}

  async getRestaurant(id: number) {
    const task = await this.prismaService.task.findUniqueOrThrow({
      where: { id },
      include: { restaurant: true },
    });
    return task.restaurant;
  }

  getBase(baseId: number) {
    return this.prismaStaticService.task.findUniqueOrThrow({
      where: {
        id: baseId,
      },
    });
  }
}
