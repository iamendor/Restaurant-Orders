import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../prisma/services/prisma.service";
import { SecurityService } from "../../../security/services/security.service";
import { WhereRestaurant } from "../../../models/restaurant.model";
import {
  CreateWaiterData,
  UpdateWaiterPassword,
  UpdateWaiter,
  WhereWaiter,
  Waiter,
} from "../../../models/waiter.model";
import { Success } from "../../../models/success.model";
import { Prisma } from "@prisma/client";

@Injectable()
export class WaiterService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly securityService: SecurityService
  ) {}

  async create(waiter: CreateWaiterData): Promise<Waiter> {
    const waiterCreated = await this.prismaService.waiter.create({
      data: {
        ...waiter.data,
        password: this.securityService.hash(waiter.data.password),
        restaurant: {
          connect: { id: waiter.restaurantId },
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

    return {
      message: "success",
    };
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
    return {
      message: "success",
    };
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
}
