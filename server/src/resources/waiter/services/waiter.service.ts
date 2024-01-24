import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../../../error/errors";
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

@Injectable()
export class WaiterService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly securityService: SecurityService
  ) {}

  async create(data: CreateWaiterData): Promise<Waiter> {
    try {
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
    } catch (e) {
      if (e.code == "P2002")
        throw new SomethingWentWrongException("email is already registered");

      throw new SomethingWentWrongException(e.message);
    }
  }

  async updatePassword({
    where,
    update,
  }: UpdateWaiterPassword): Promise<Success> {
    try {
      await this.prismaService.waiter.update({
        where,
        data: {
          password: this.securityService.hash(update.password),
        },
      });

      return {
        message: "success",
      };
    } catch (e) {
      console.log(e);
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update({ update, where }: UpdateWaiter): Promise<Waiter> {
    try {
      const updatedWaiter = await this.prismaService.waiter.update({
        where: {
          id: where.id,
        },
        data: update,
      });
      return updatedWaiter;
    } catch (e) {
      if (e.code === "P2002") {
        throw new SomethingWentWrongException("email is already registered");
      }
      throw new SomethingWentWrongException(e.message);
    }
  }

  async delete(where: WhereWaiter): Promise<Success> {
    try {
      await this.prismaService.waiter.delete({
        where: {
          id: where.id,
        },
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async find(where: WhereWaiter): Promise<Waiter> {
    try {
      const waiter = await this.prismaService.waiter.findUniqueOrThrow({
        where,
      });
      return waiter;
    } catch (e) {
      throw new NotFoundResourceException("waiter");
    }
  }

  async list(where: WhereRestaurant): Promise<Waiter[]> {
    try {
      const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
        where,
        include: {
          waiters: true,
        },
      });
      return restaurant.waiters;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }
}
