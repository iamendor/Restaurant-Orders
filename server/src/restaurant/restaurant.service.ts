import {
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import {
  CreateRestaurant,
  RestaurantResponse,
  UpdateRestaurant,
  WhereRestaurant,
  Restaurant,
  Deleted,
  UpdateRestaurantPassword,
  RestaurantPasswordUpdated,
  Waiter,
  WaiterResponse,
} from "src/models/model";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class RestaurantService {
  constructor(private readonly prismaService: PrismaService) {}
  private ERROR = "something went wrong";
  private hashPassword(pw: string) {
    return bcrypt.hashSync(pw, 10);
  }
  async create(data: CreateRestaurant): Promise<RestaurantResponse> {
    try {
      const restaurant = await this.prismaService.restaurant.create({
        data: {
          ...data,
          password: this.hashPassword(data.password),
          address: {
            create: data.address,
          },
        },
        include: {
          address: true,
        },
      });
      return restaurant;
    } catch (e) {
      throw new HttpException(this.ERROR, 400);
    }
  }

  //TODO: update password

  async updatePassword({
    where,
    update,
  }: UpdateRestaurantPassword): Promise<RestaurantPasswordUpdated> {
    const MESSAGE_WRONG_PASSWORD = "wrong password";
    try {
      const restaurant = await this.find(where);
      if (!bcrypt.compareSync(update.old, restaurant.password)) {
        throw new Error(MESSAGE_WRONG_PASSWORD);
      }
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
      if (e.message === MESSAGE_WRONG_PASSWORD) {
        throw new UnauthorizedException("invalid password");
      }
      throw new HttpException(this.ERROR, 400);
    }
  }

  async update(update: UpdateRestaurant): Promise<RestaurantResponse> {
    try {
      const restaurant = await this.prismaService.restaurant.update({
        where: update.where,
        data: {
          ...update.data,
          address: {
            update: update.data.address && update.data.address,
          },
        },
        include: {
          address: true,
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

  async find(where: WhereRestaurant): Promise<Restaurant> {
    try {
      const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
        where: {
          ...where,
        },
      });
      return restaurant;
    } catch (e) {
      throw new NotFoundException("restaurant not found");
    }
  }

  async listWaiters(where: WhereRestaurant): Promise<WaiterResponse[]> {
    try {
      const restaurant = await this.prismaService.restaurant.findUnique({
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
