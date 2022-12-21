import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import {
  CreateWaiter,
  Deleted,
  PasswordUpdated,
  UpdateWaiter,
  UpdateWaiterPassword,
  Waiter,
  WaiterModel,
  WhereWaiter,
} from "../models/model";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class WaiterService {
  constructor(private readonly prismaService: PrismaService) {}
  private PERMISSION_DENIED = "permission denied";
  private ERROR = "something went wrong";

  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }

  async create(data: CreateWaiter): Promise<Waiter> {
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
      throw new HttpException(this.ERROR, 400);
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

  async find(
    where: WhereWaiter,
    ignoreRestaurant = false
  ): Promise<WaiterModel> {
    try {
      const { restaurantId: _, ...query } = where;
      const waiter = await this.prismaService.waiter.findUniqueOrThrow({
        where: {
          ...query,
        },
      });
      if (!ignoreRestaurant) {
        if (waiter.restaurantId !== where.restaurantId)
          throw new Error(this.PERMISSION_DENIED);
      }
      return waiter;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED)
        throw new HttpException(this.PERMISSION_DENIED, 403);
      throw new NotFoundException("waiter not found");
    }
  }
}
