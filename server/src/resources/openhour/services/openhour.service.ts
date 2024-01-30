import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { SomethingWentWrongException } from "../../../error/errors";
import { Success } from "../../../models/success.model";

@Injectable()
export class OpenHourService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateOpenHour, restaurantId: number): Promise<OpenHour> {
    try {
      const openHour = await this.prismaService.openingHour.create({
        data: {
          ...data,
          restaurant: {
            connect: {
              id: restaurantId,
            },
          },
        },
      });
      return openHour;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async createMany(
    data: CreateOpenHour[],
    restaurantId: number
  ): Promise<Success> {
    try {
      await this.prismaService.openingHour.createMany({
        data: data.map((oh) => ({ ...oh, restaurantId })),
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  list(restaurantId: number) {
    return this.prismaService.openingHour.findMany({
      where: {
        restaurantId,
      },
    });
  }

  async update({ where, update }: UpdateOpenHour): Promise<OpenHour> {
    try {
      const updated = await this.prismaService.openingHour.update({
        where,
        data: update,
      });
      return updated;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async delete(where: WhereOpenHour): Promise<Success> {
    try {
      await this.prismaService.openingHour.delete({
        where,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async find(where: WhereOpenHour): Promise<OpenHour> {
    try {
      const openHour = await this.prismaService.openingHour.findUniqueOrThrow({
        where,
      });
      return openHour;
    } catch (e) {
      throw new SomethingWentWrongException();
    }
  }
}
