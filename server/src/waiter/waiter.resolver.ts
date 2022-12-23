import { HttpException, UseGuards } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  CreateWaiter,
  Deleted,
  JwtPayload,
  PasswordUpdated,
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

  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  @Query(() => Waiter, { name: "waiterInfo" })
  info(@User() user: JwtPayload, @Args("where") where?: WhereWaiter) {
    if (user.role === "waiter")
      return this.waiterService.find({ id: user.id }, true);
    return this.waiterService.find({ ...where, restaurantId: user.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Waiter, { name: "createWaiter" })
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateWaiter) {
    return this.waiterService.create({
      data,
      restaurantId: restaurant.id,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  @Mutation(() => Waiter, { name: "updateWaiter" })
  update(@User() user: JwtPayload, @Args("data") data: UpdateWaiter) {
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
  @Mutation(() => PasswordUpdated, { name: "updateWaiterPassword" })
  updatePassword(
    @User() user: JwtPayload,
    @Args("data") data: UpdateWaiterPassword
  ) {
    const { role } = user;
    if (role === "restaurant") {
      if (!data.where) throw new HttpException(this.WAITER_NOT_PROVIDED, 400);
      return this.waiterService.updatePassword({ ...data, role });
    }
    if (!data.update.old)
      throw new HttpException("old password is not provided", 400);
    return this.waiterService.updatePassword({
      ...data,
      where: { id: user.id },
      role,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted, { name: "deleteWaiter" })
  delete(@User() restaurant: JwtPayload, @Args("where") where: WhereWaiter) {
    return this.waiterService.delete({ ...where, restaurantId: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => [Waiter])
  waiters(@User() restaurant: JwtPayload) {
    return this.restaurantService.listWaiters({ id: restaurant.id });
  }
}
