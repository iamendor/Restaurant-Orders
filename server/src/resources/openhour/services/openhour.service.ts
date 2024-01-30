import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { SomethingWentWrongException } from "../../../error";
import { Success } from "../../../models/success.model";

@Injectable()
export class OpenHourService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateOpenHour, restaurantId: number): Promise<OpenHour> {
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
  }

  async createMany(
    data: CreateOpenHour[],
    restaurantId: number
  ): Promise<Success> {
    await this.prismaService.openingHour.createMany({
      data: data.map((oh) => ({ ...oh, restaurantId })),
      skipDuplicates: true,
    });
    return { message: "success" };
  }

  list(restaurantId: number) {
    return this.prismaService.openingHour.findMany({
      where: {
        restaurantId,
      },
    });
  }

  async update({ where, update }: UpdateOpenHour): Promise<OpenHour> {
    const updated = await this.prismaService.openingHour.update({
      where,
      data: update,
    });
    return updated;
  }

  async delete(where: WhereOpenHour): Promise<Success> {
    await this.prismaService.openingHour.delete({
      where,
    });
    return { message: "success" };
  }

  async find(where: WhereOpenHour): Promise<OpenHour> {
    const openHour = await this.prismaService.openingHour.findUniqueOrThrow({
      where,
    });
    return openHour;
  }
}
