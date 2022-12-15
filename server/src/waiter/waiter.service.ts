import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import {
  CreateWaiter,
  Deleted,
  PasswordUpdated,
  UpdateWaiter,
  UpdateWaiterPassword,
  Waiter,
  WaiterResponse,
  WhereWaiter,
} from "src/models/model";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class WaiterService {
  constructor(private readonly prismaService: PrismaService) {}
  private PERMISSION_DENIED = "denied";
  private ERROR = "something went wrong";

  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }

  async create(data: CreateWaiter): Promise<WaiterResponse> {
    try {
      const waiter = await this.prismaService.waiter.create({
        data: {
          ...data.data,
          password: this.hashPassword(data.data.password),
          restaurant: {
            connect: { id: data.restaurantId },
          },
        },
      });
      return waiter;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async updatePassword({
    where,
    update,
  }: UpdateWaiterPassword): Promise<PasswordUpdated> {
    await this.find(where);
    try {
      await this.prismaService.waiter.update({
        where,
        data: {
          password: this.hashPassword(update.password),
        },
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async update({ update, where }: UpdateWaiter): Promise<WaiterResponse> {
    await this.find(where);
    try {
      const updatedWaiter = await this.prismaService.waiter.update({
        where: {
          id: where.id,
        },
        data: update,
      });
      return updatedWaiter;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async delete(where: WhereWaiter): Promise<Deleted> {
    await this.find(where);
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
      throw new HttpException(this.ERROR, 400);
    }
  }

  async find(where: WhereWaiter, ignoreRestaurant = false): Promise<Waiter> {
    try {
      const { restaurant: _, ...query } = where;
      const waiter = await this.prismaService.waiter.findUniqueOrThrow({
        where: {
          ...query,
        },
      });
      if (!ignoreRestaurant) {
        if (waiter.restaurantId !== where.restaurant)
          throw new Error(this.PERMISSION_DENIED);
      }
      return waiter as Waiter;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED)
        throw new HttpException("permission denied", 403);
      throw new NotFoundException("waiter not found");
    }
  }
}
