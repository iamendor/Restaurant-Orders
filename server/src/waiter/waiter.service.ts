import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import {
  CreateWaiterData,
  Deleted,
  PasswordUpdated,
  UpdateWaiter,
  UpdateWaiterPassword,
  Waiter,
  WaiterModel,
  WhereRestaurant,
  WhereWaiter,
} from "../models/model";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class WaiterService {
  constructor(private readonly prismaService: PrismaService) {}
  private PERMISSION_DENIED = "permission denied for waiter";

  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }

  async create(data: CreateWaiterData): Promise<Waiter> {
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
      if (e.code)
        throw new SomethingWentWrongException("email is already registered");

      throw new SomethingWentWrongException(e.message);
    }
  }

  async updatePassword({
    where,
    update,
    role,
  }: UpdateWaiterPassword): Promise<PasswordUpdated> {
    if (role === "waiter") {
      const { password: oldPassword } = await this.find(where, true);
      if (!bcrypt.compareSync(update.old, oldPassword)) {
        throw new UnauthorizedException("invalid password");
      }
    }
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
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update({ update, where, role }: UpdateWaiter): Promise<Waiter> {
    if (role === "restaurant") await this.find(where);
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
      throw new SomethingWentWrongException(e.message);
    }
  }

  async find(
    where: WhereWaiter,
    ignoreRestaurant = false
  ): Promise<WaiterModel> {
    try {
      const { restaurantId, ...query } = where;
      const waiter = await this.prismaService.waiter.findUniqueOrThrow({
        where: {
          ...query,
        },
      });

      if (!ignoreRestaurant) {
        if (waiter.restaurantId !== restaurantId)
          throw new Error(this.PERMISSION_DENIED);
      }
      return waiter;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED)
        throw new HttpException(this.PERMISSION_DENIED, 403);
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

  async getRestaurant(email: string) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { email: email },
      include: {
        restaurant: true,
      },
    });
    if (!waiter) throw new NotFoundResourceException("waiter");
    return waiter.restaurant;
  }

  async getOrders(id: number) {
    const waiter = await this.prismaService.waiter.findFirst({
      where: { id },
      select: {
        orders: true,
      },
    });
    if (!waiter) throw new NotFoundResourceException("waiter");
    return waiter.orders;
  }
}
