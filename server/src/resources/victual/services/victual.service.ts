import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
import {
  CreateVictualData,
  UpdateVictual,
  WhereVictual,
  Victual,
} from "../../../models/victual.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class VictualService {
  constructor(private readonly prismaService: PrismaService) {}

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
          category: {
            connect: {
              id: categoryId,
            },
          },
        },
      });
      return meal;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async createMany(data: CreateVictualData[]): Promise<Success> {
    const checked = data.map((d) => {
      const { restaurantId, categoryId, ...rest } = d;
      return {
        ...rest,
        restaurantId,
        categoryId,
      };
    });

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

  async delete(where: WhereVictual): Promise<Success> {
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
}
