import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import {
  CreateVictualData,
  UpdateVictual,
  WhereVictual,
  Victual,
} from "../../../models/resources/victual.model";
import { Success } from "../../../models/resources/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";

@Injectable()
export class VictualService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async create(data: CreateVictualData): Promise<Victual> {
    const { restaurantId, categoryId, ...rest } = data;
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

    await this.prismaService.victual.createMany({
      data: checked,
      skipDuplicates: true,
    });
    return SUCCESS;
  }

  async update(data: UpdateVictual): Promise<Victual> {
    const { where, update } = data;
    const updated = await this.prismaService.victual.update({
      where: {
        id: where.id,
      },
      data: {
        ...update,
      },
    });
    return updated;
  }

  async delete(where: WhereVictual): Promise<Success> {
    await this.prismaService.victual.delete({
      where: {
        id: where.id,
      },
    });
    return SUCCESS;
  }

  async list(restaurantId: number): Promise<Victual[]> {
    const victuals = await this.prismaService.victual.findMany({
      where: {
        restaurantId: restaurantId,
      },
    });
    return victuals;
  }

  async find(where: WhereVictual): Promise<Victual> {
    const meal = await this.prismaService.victual.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
    return meal;
  }

  async validate({ id, restaurantId }: VerifyResource) {
    const victual = await this.find({ id });
    return victual.restaurantId == restaurantId;
  }
}
