import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";

import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
import {
  Category,
  CreateCategoryData,
  UpdateCategory,
  WhereCategory,
} from "../../../models/category.model";
import { Success } from "../../../models/other.model";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateCategoryData): Promise<Category> {
    try {
      const { restaurantId, ...rest } = data;
      const category = await this.prismaService.category.create({
        data: {
          ...rest,
          restaurant: {
            connect: {
              id: restaurantId,
            },
          },
        },
      });
      return category;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async createMany(data: CreateCategoryData[]): Promise<Success> {
    try {
      await this.prismaService.category.createMany({
        data,
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update(data: UpdateCategory): Promise<Category> {
    const { update, where } = data;
    try {
      const updated = await this.prismaService.category.update({
        where: {
          id: where.id,
        },
        data: {
          ...update,
        },
      });
      return updated;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async delete(where: WhereCategory): Promise<Success> {
    try {
      await this.prismaService.category.delete({
        where: {
          id: where.id,
        },
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async find(where: WhereCategory): Promise<Category> {
    try {
      const category = await this.prismaService.category.findFirstOrThrow({
        where: {
          id: where.id,
        },
      });
      return category;
    } catch (e) {
      throw new NotFoundResourceException("category");
    }
  }

  async list(restaurantId: number): Promise<Category[]> {
    const { categories } = await this.prismaService.restaurant.findUnique({
      where: {
        id: restaurantId,
      },
      include: {
        categories: true,
      },
    });
    return categories;
  }
}