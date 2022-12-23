import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import {
  CreateRestaurant,
  Restaurant,
  WhereRestaurant,
  RestaurantModel,
  Deleted,
  Waiter,
  PasswordUpdated,
  UpdateRestaurantData,
  UpdateRestaurantDataPassword,
} from "../models/model";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class RestaurantService {
  constructor(private readonly prismaService: PrismaService) {}
  private ERROR = "something went wrong";
  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }
  async create(data: CreateRestaurant): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.create({
        data: {
          ...data,
          password: this.hashPassword(data.password),
          address: {
            create: data.address,
          },
        },
      });
      return restaurant;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async updatePassword({
    where,
    update,
  }: UpdateRestaurantDataPassword): Promise<PasswordUpdated> {
    const restaurant = await this.find(where);
    if (!bcrypt.compareSync(update.old, restaurant.password)) {
      throw new UnauthorizedException("invalid password");
    }
    try {
      const encrypted = this.hashPassword(update.password);
      await this.prismaService.restaurant.update({
        where,
        data: {
          password: encrypted,
        },
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async update(update: UpdateRestaurantData): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.update({
        where: update.where,
        data: {
          ...update.data,
          address: {
            update: update.data.address && update.data.address,
          },
        },
      });
      return restaurant;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async delete(where: WhereRestaurant): Promise<Deleted> {
    try {
      await this.prismaService.restaurant.delete({
        where,
      });
      return {
        message: "success",
      };
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  async find(where: WhereRestaurant): Promise<RestaurantModel> {
    try {
      const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
        where: {
          ...where,
        },
      });
      return restaurant;
    } catch (e) {
      console.log(e);
      throw new NotFoundException("restaurant not found");
    }
  }

  async listWaiters(where: WhereRestaurant): Promise<Waiter[]> {
    try {
      const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
        where,
        include: {
          waiters: true,
        },
      });
      return restaurant.waiters;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }
}
