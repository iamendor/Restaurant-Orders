import {
  ForbiddenException,
  HttpException,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { User } from "../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  CreateWaiter,
  Deleted,
  JwtPayload,
  Meal,
  Order,
  PasswordUpdated,
  Restaurant,
  UpdateWaiter,
  UpdateWaiterPassword,
  Waiter,
  WhereWaiter,
} from "../models/model";
import { WaiterService } from "./waiter.service";
import { SecurityService } from "../security/security.service";
import { RESTAURANT, WAITER } from "../role/role";
import { UpdateWaiterGuard } from "./waiter.guard";
import { IdIntercept } from "../auth/guards/id";
import { RID } from "../auth/decorators/role.decorator";
import { SomethingWentWrongException } from "../error/errors";
import { Waiter as PWaiter } from "@prisma/client";

@Resolver("Waiter")
export class WaiterResolver {
  constructor(
    private readonly waiterService: WaiterService,
    private readonly securityService: SecurityService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Waiter, { name: "createWaiter" })
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateWaiter) {
    return this.waiterService.create({
      data,
      restaurantId: restaurant.id,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @Mutation(() => Waiter, { name: "updateWaiter" })
  update(@User() user: JwtPayload, @Args("data") data: UpdateWaiter) {
    const { role } = user;
    const where: WhereWaiter =
      role === WAITER
        ? { id: user.id }
        : { ...data.where, restaurantId: user.id };
    return this.waiterService.update({
      ...data,
      where,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @Mutation(() => PasswordUpdated, { name: "updateWaiterPassword" })
  async updatePassword(
    @User() user: JwtPayload,
    @Args("data") data: UpdateWaiterPassword
  ) {
    const { role, id } = user;
    if (role === RESTAURANT) {
      return this.waiterService.updatePassword({ ...data });
    }
    const { password } = (await this.waiterService.find({ id })) as PWaiter;
    if (!data.update.old)
      throw new HttpException("old password is not provided", 400);
    if (
      this.securityService.compare({ str: data.update.old, hash: password })
    ) {
      return this.waiterService.updatePassword({
        ...data,
        where: { id },
      });
    }
    throw new ForbiddenException();
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Deleted, { name: "deleteWaiter" })
  async delete(
    @User() restaurant: JwtPayload,
    @Args("where") where: WhereWaiter
  ) {
    const { restaurantId } = await this.waiterService.find({ id: where.id });
    if (restaurantId != restaurant.id) throw new ForbiddenException();
    return this.waiterService.delete({
      ...where,
      restaurantId: restaurant.id,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  @Query(() => [Waiter])
  async waiters(@RID() restaurantId: number) {
    return this.waiterService.list({
      id: restaurantId,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @Query(() => Waiter, { name: "waiterInfo" })
  async info(@User() user: JwtPayload, @Args("where") where?: WhereWaiter) {
    if (user.role === WAITER) {
      if (!where) return this.waiterService.find({ id: user.id });
      const waiter = await this.waiterService.find({ ...where });
      if (waiter.restaurantId != user.restaurantId)
        throw new ForbiddenException();
      return waiter;
    }
    if (!where) throw new SomethingWentWrongException("no waiter specified");
    const waiter = await this.waiterService.find({ ...where });
    if (waiter.restaurantId != user.id) throw new ForbiddenException();
    return waiter;
  }
}
