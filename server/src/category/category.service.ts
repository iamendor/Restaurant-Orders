import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  CategoriesCreated,
  Category,
  CreateCategoryData,
  Deleted,
  UpdateCategory,
  WhereCategory,
} from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  private PERMISSION_DENIED = "permission denied for table";

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

  async createMany(data: CreateCategoryData[]): Promise<CategoriesCreated> {
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
    await this.find(where);
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

  async delete(where: WhereCategory): Promise<Deleted> {
    await this.find(where);
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
      if (category.restaurantId !== where.restaurantId) {
        throw new Error(this.PERMISSION_DENIED);
      }
      return category;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED)
        throw new HttpException(this.PERMISSION_DENIED, HttpStatus.FORBIDDEN);
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

  async getRestaurant(id: number) {
    const category = await this.prismaService.category.findFirstOrThrow({
      where: { id },
      select: {
        restaurant: true,
      },
    });
    return category.restaurant;
  }

  async getMeals(id: number) {
    const category = await this.prismaService.category.findFirstOrThrow({
      where: { id },
      select: {
        meals: true,
      },
    });
    return category.meals;
  }
}
