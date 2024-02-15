import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/resources/openhour.model";
import { Success } from "../../../models/resources/success.model";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";

@Injectable()
export class OpenHourService {
  constructor(private readonly prismaService: PrismaMainService) {}

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
    return SUCCESS;
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
    return SUCCESS;
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
