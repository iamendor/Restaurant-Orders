import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaService: PrismaMainService) {}
  async getRestaurant(id: number) {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: { id },
      select: {
        restaurant: true,
      },
    });
    return category.restaurant;
  }

  async getVictuals(id: number) {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: { id },
      select: {
        victuals: true,
      },
    });
    return category.victuals;
  }

  async getSubCategories(id: number) {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: { id },
      select: {
        subCategories: true,
      },
    });

    return category.subCategories;
  }

  async getParentCategory(id: number) {
    const category = await this.prismaService.category.findUnique({
      where: { id },
      select: {
        parent: true,
      },
    });

    return category.parent;
  }
}
