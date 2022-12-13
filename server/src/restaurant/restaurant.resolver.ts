import {  UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { Restaurant } from "@prisma/client";
import { User } from "src/auth/decorators/user.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RoleGuard } from "src/auth/guards/role-guard";
import {
  AuthRestaurant,
  CreateWaiterData,
  Deleted,
  JwtPayload,
  RestaurantPasswordUpdated,
  UpdateRestaurantData,
  UpdateRestaurantDataPassword,
  UpdateWaiter,
  Waiter,
  WaiterResponse,
  WhereWaiter,
} from "src/models/model";
import { WaiterService } from "src/waiter/waiter.service";
import { RestaurantService } from "./restaurant.service";

@Resolver("Restaurant")
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly waiterService: WaiterService
  ) {}
  //Restaurant
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => AuthRestaurant)
  async updateRestaurant(
    @User() restaurant: JwtPayload,
    @Args("update")
    update: UpdateRestaurantData
  ) {
    const updatedRestaurant = await this.restaurantService.update({
      where: { id: restaurant.id },
      data: update,
    });
    return {
      message: "success",
      access_token: "123",
      restaurant: updatedRestaurant,
    };
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => RestaurantPasswordUpdated)
  updateRestaurantPassword(
    @User() restaurant: JwtPayload,
    @Args("update") update: UpdateRestaurantDataPassword
  ) {
    return this.restaurantService.updatePassword({
      where: { id: restaurant.id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted)
  deleteRestaurant(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  //Waiter
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => WaiterResponse)
  createWaiter(
    @User() restaurant: Restaurant,
    @Args("data") data: CreateWaiterData
  ) {
    return this.waiterService.create({
      data,
      restaurantId: restaurant.id,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => WaiterResponse)
  updateWaiter(
    @Args("data") data: UpdateWaiter,
    @User() restaurant: JwtPayload
  ) {
    return this.waiterService.update({
      ...data,
      where: { ...data.where, restaurant: restaurant.id },
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted)
  deleteWaiter(
    @Args("where") where: WhereWaiter,
    @User() restaurant: JwtPayload
  ) {
    return this.waiterService.delete({ ...where, restaurant: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => [WaiterResponse])
  waiters(@User() restaurant: JwtPayload) {
    return this.restaurantService.listWaiters({ id: restaurant.id });
  }
}
