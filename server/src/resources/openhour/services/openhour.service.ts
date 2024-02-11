import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { Success } from "../../../models/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";

@Injectable()
export class OpenHourService {
  constructor(private readonly prismaService: PrismaService) {}

  async isAlreadyCreated(
    data: CreateOpenHour,
    list?: OpenHour[]
  ): Promise<OpenHour> {
    if (!list) {
      list = await this.list(data.restaurantId);
    }
    return list.find((oh) => oh.name == data.name);
  }

  async create({ restaurantId, ...data }: CreateOpenHour): Promise<OpenHour> {
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

  async createMany(data: Required<CreateOpenHour>[]): Promise<Success> {
    await this.prismaService.openingHour.createMany({
      data,
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

  async validate({ id, restaurantId }: VerifyResource) {
    const oh = await this.find({ id });
    return oh.restaurantId == restaurantId;
  }
}
