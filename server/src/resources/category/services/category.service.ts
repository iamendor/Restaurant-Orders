import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  Category,
  CreateCategoryData,
  UpdateCategory,
  WhereCategory,
} from "../../../models/category.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCategoryData): Promise<Category> {
    const { restaurantId, parentId, ...rest } = data;
    const category = await this.prismaService.category.create({
      data: {
        ...rest,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
        parent: parentId && {
          connect: { id: parentId },
        },
        root: !parentId,
      },
    });
    return category;
  }

  async createMany(data: CreateCategoryData[]): Promise<Success> {
    await this.prismaService.category.createMany({
      data,
      skipDuplicates: true,
    });
    return { message: "success" };
  }

  async update(data: UpdateCategory): Promise<Category> {
    const { update, where } = data;
    const updated = await this.prismaService.category.update({
      where: {
        id: where.id,
      },
      data: {
        ...update,
      },
    });
    return updated;
  }

  async delete(where: WhereCategory): Promise<Success> {
    await this.prismaService.category.delete({
      where: {
        id: where.id,
      },
    });
    return { message: "success" };
  }

  async find(where: WhereCategory): Promise<Category> {
    const category = await this.prismaService.category.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return category;
  }
  //TODO: add implementation for recursive tree
  async list(restaurantId: number): Promise<Category[]> {
    const categories = await this.prismaService.category.findMany({
      where: {
        restaurantId,
      },
    });
    return categories;
  }
}
