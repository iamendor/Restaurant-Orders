import { Injectable } from "@nestjs/common";

import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { SecurityService } from "../../../security/services/security.service";
import { WhereRestaurant } from "../../../models/resources/restaurant.model";
import {
  UpdateWaiterPassword,
  UpdateWaiter,
  WhereWaiter,
  Waiter,
  CreateWaiter,
} from "../../../models/resources/waiter.model";
import { Success } from "../../../models/resources/success.model";
import { Prisma } from "@prisma/client";
import { VerifyResource } from "../../../interfaces/verify.interface";
import { SUCCESS } from "../../../response";

@Injectable()
export class WaiterService {
  constructor(
    private readonly prismaService: PrismaMainService,
    private readonly securityService: SecurityService
  ) {}

  async create({ restaurantId, ...waiter }: CreateWaiter): Promise<Waiter> {
    const waiterCreated = await this.prismaService.waiter.create({
      data: {
        ...waiter,
        password: this.securityService.hash(waiter.password),
        restaurant: {
          connect: { id: restaurantId },
        },
      },
    });
    return waiterCreated;
  }

  async updatePassword({
    where,
    update,
  }: UpdateWaiterPassword): Promise<Success> {
    await this.prismaService.waiter.update({
      where: where as Prisma.WaiterWhereUniqueInput,
      data: {
        password: this.securityService.hash(update.password),
      },
    });

    return SUCCESS;
    0;
  }

  async update({ update, where }: UpdateWaiter): Promise<Waiter> {
    const updatedWaiter = await this.prismaService.waiter.update({
      where: {
        id: where.id,
      },
      data: update,
    });
    return updatedWaiter;
  }

  async delete(where: WhereWaiter): Promise<Success> {
    await this.prismaService.waiter.delete({
      where: {
        id: where.id,
      },
    });
    return SUCCESS;
    0;
  }

  async find(where: WhereWaiter): Promise<Waiter> {
    const waiter = await this.prismaService.waiter.findUniqueOrThrow({
      where: where as Prisma.WaiterWhereUniqueInput,
    });
    return waiter;
  }

  async list(where: WhereRestaurant): Promise<Waiter[]> {
    const waiters = await this.prismaService.waiter.findMany({
      where: {
        restaurantId: where.id,
      },
    });
    return waiters;
  }

  async validate({ id, restaurantId }: VerifyResource) {
    const waiter = await this.find({ id });
    return waiter.restaurantId == restaurantId;
  }
}
