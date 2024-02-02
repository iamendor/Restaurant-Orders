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
  WhereWaiterId,
  WhereWaiterEmail,
} from "../../../models/waiter.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class WaiterService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly securityService: SecurityService
  ) {}

  async create(data: CreateWaiterData): Promise<Waiter> {
    const waiter = await this.prismaService.waiter.create({
      data: {
        ...data.data,
        password: this.securityService.hash(data.data.password),
        restaurant: {
          connect: { id: data.restaurantId },
        },
      },
    });
    return waiter;
  }

  async updatePassword({
    where,
    update,
  }: UpdateWaiterPassword): Promise<Success> {
    await this.prismaService.waiter.update({
      where,
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

  async find(where: WhereWaiterId): Promise<Waiter> {
    const waiter = await this.prismaService.waiter.findUniqueOrThrow({
      where,
    });
    return waiter;
  }

  async findByEmail(where: WhereWaiterEmail) {
    const waiter = await this.prismaService.waiter.findUniqueOrThrow({
      where,
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
