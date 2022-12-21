import { HttpException, UseGuards } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  CreateWaiterData,
  Deleted,
  JwtPayload,
  PasswordUpdated,
  Restaurant,
  UpdateWaiter,
  UpdateWaiterPassword,
  Waiter,
  WhereWaiter,
} from "../models/model";
import { RestaurantService } from "../restaurant/restaurant.service";
import { WaiterService } from "./waiter.service";

@Resolver()
export class WaiterResolver {
  constructor(
    private readonly waiterService: WaiterService,
    private readonly restaurantService: RestaurantService
  ) {}
  private WAITER_NOT_PROVIDED = "no waiter specified";

  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  @Query(() => Waiter)
  waiterInfo(@User() user: JwtPayload) {
    return this.waiterService.find({ id: user.id }, true);
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Waiter)
  createWaiter(
    @User() restaurant: Restaurant,
    @Args("data") data: CreateWaiterData
  ) {
    return this.waiterService.create({
      data,
      restaurantId: restaurant.id,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @Mutation(() => Waiter)
  updateWaiter(@Args("data") data: UpdateWaiter, @User() user: JwtPayload) {
    const { role } = user;
    if (role === "restaurant" && !data.where)
      throw new HttpException(this.WAITER_NOT_PROVIDED, 400);
    const where: WhereWaiter =
      role === "waiter"
        ? { id: user.id }
        : { ...data.where, restaurantId: user.id };
    return this.waiterService.update({
      ...data,
      where,
      role,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @Mutation(() => PasswordUpdated)
  updateWaiterPassword(
    @Args("data") data: UpdateWaiterPassword,
    @User() user: JwtPayload
  ) {
    const { role } = user;
    if (role === "restaurant") {
      if (!data.where) throw new HttpException(this.WAITER_NOT_PROVIDED, 400);
      return this.waiterService.updatePassword({ ...data, role });
    }
    return this.waiterService.updatePassword({
      ...data,
      where: { id: user.id },
      role,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted)
  deleteWaiter(
    @Args("where") where: WhereWaiter,
    @User() restaurant: JwtPayload
  ) {
    return this.waiterService.delete({ ...where, restaurantId: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => [Waiter])
  waiters(@User() restaurant: JwtPayload) {
    return this.restaurantService.listWaiters({ id: restaurant.id });
  }
}
