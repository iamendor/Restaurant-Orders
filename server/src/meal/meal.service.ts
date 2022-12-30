import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import {
  CreateMealData,
  CreateMeals,
  Deleted,
  Meal,
  MealsCreated,
  UpdateMeal,
  WhereMeal,
} from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class MealService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryService: CategoryService
  ) {}
  private PERMISSION_DENIED = "permission denied for meal";

  async create(data: CreateMealData): Promise<Meal> {
    const { restaurantId, categoryId, ...rest } = data;
    if (categoryId)
      await this.categoryService.find({ id: categoryId, restaurantId });
    try {
      const meal = await this.prismaService.meal.create({
        data: {
          ...rest,
          restaurant: {
            connect: {
              id: restaurantId,
            },
          },
          category: categoryId
            ? {
                connect: {
                  id: categoryId,
                },
              }
            : {
                create: {
                  ...rest.category,
                  restaurant: {
                    connect: {
                      id: restaurantId,
                    },
                  },
                },
              },
        },
      });
      return meal;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async createMany(data: CreateMeals[]): Promise<MealsCreated> {
    const checked = await Promise.all(
      data.map(async (d) => {
        const { restaurantId, categoryId, ...rest } = d;
        await this.categoryService.find({ id: categoryId, restaurantId });
        return {
          ...rest,
          restaurantId,
          categoryId,
        };
      })
    );
    try {
      await this.prismaService.meal.createMany({
        data: checked,
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update(data: UpdateMeal): Promise<Meal> {
    const { where, update } = data;
    await this.find(where);
    try {
      const updated = await this.prismaService.meal.update({
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

  async delete(where: WhereMeal): Promise<Deleted> {
    await this.find(where);
    try {
      await this.prismaService.meal.delete({
        where: {
          id: where.id,
        },
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async list(restaurantId: number): Promise<Meal[]> {
    const restaurant = await this.prismaService.restaurant.findFirstOrThrow({
      where: {
        id: restaurantId,
      },
      select: {
        meals: true,
      },
    });
    return restaurant.meals;
  }

  async find(where: WhereMeal): Promise<Meal> {
    try {
      const meal = await this.prismaService.meal.findFirstOrThrow({
        where: {
          id: where.id,
        },
      });
      if (meal.restaurantId !== where.restaurantId)
        throw new Error(this.PERMISSION_DENIED);
      return meal;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED)
        throw new HttpException(this.PERMISSION_DENIED, 403);
      throw new NotFoundResourceException("meal");
    }
  }

  async getCategory(id: number) {
    const meal = await this.prismaService.meal.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        category: true,
      },
    });
    return meal.category;
  }

  async getRestaurant(id: number) {
    const meal = await this.prismaService.meal.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        restaurant: true,
      },
    });
    return meal.restaurant;
  }

  async getOrders(id: number) {
    const meal = await this.prismaService.meal.findFirstOrThrow({
      where: {
        id,
      },
      select: {
        orders: true,
      },
    });
    return meal.orders;
  }
}
