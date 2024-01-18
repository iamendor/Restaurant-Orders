import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import {
  CreateVictualData,
  CreateVictuals,
  Deleted,
  UpdateVictual,
  Victual,
  VictualsCreated,
  WhereVictual,
} from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class VictualService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryService: CategoryService
  ) {}

  async create(data: CreateVictualData): Promise<Victual> {
    const { restaurantId, categoryId, ...rest } = data;
    try {
      const meal = await this.prismaService.victual.create({
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

  async createMany(data: CreateVictuals[]): Promise<VictualsCreated> {
    const checked = await Promise.all(
      data.map(async (d) => {
        const { restaurantId, categoryId, ...rest } = d;
        return {
          ...rest,
          restaurantId,
          categoryId,
        };
      })
    );
    try {
      await this.prismaService.victual.createMany({
        data: checked,
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update(data: UpdateVictual): Promise<Victual> {
    const { where, update } = data;
    try {
      const updated = await this.prismaService.victual.update({
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

  async delete(where: WhereVictual): Promise<Deleted> {
    try {
      await this.prismaService.victual.delete({
        where: {
          id: where.id,
        },
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async list(restaurantId: number): Promise<Victual[]> {
    const restaurant = await this.prismaService.restaurant.findFirstOrThrow({
      where: {
        id: restaurantId,
      },
      select: {
        victuals: true,
      },
    });
    return restaurant.victuals;
  }

  async find(where: WhereVictual): Promise<Victual> {
    try {
      const meal = await this.prismaService.victual.findFirstOrThrow({
        where: {
          id: where.id,
        },
      });
      return meal;
    } catch (e) {
      throw new NotFoundResourceException("meal");
    }
  }

  async getCategory(id: number) {
    const meal = await this.prismaService.victual.findFirstOrThrow({
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
    const meal = await this.prismaService.victual.findFirstOrThrow({
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
    const meal = await this.prismaService.victual.findFirstOrThrow({
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
