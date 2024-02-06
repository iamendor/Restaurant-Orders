import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { WaiterService } from "../services/waiter.service";
import { SecurityService } from "../../../security/services/security.service";
import { RESTAURANT, WAITER } from "../../../role";
import { UpdateWaiterGuard } from "../guards/waiter.guard";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import {
  AuthException,
  NotSpecifiedException,
  PermissionDeniedException,
} from "../../../error";
import { Waiter as PWaiter } from "@prisma/client";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Waiter,
  CreateWaiter,
  UpdateWaiter,
  WhereWaiter,
  UpdateWaiterPassword,
} from "../../../models/waiter.model";
import { Success } from "../../../models/success.model";
import { FilterService } from "../../../filter/services/filter.service";
import { WaiterFilter } from "../../../models/filter.model";
import { CacheService } from "../../../cache/services/cache.service";

@Resolver((of) => Waiter)
export class WaiterResolver {
  constructor(
    private readonly waiterService: WaiterService,
    private readonly securityService: SecurityService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `waiters:${restaurantId}`;
  }

  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Waiter, { name: "createWaiter" })
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateWaiter) {
    const waiter = await this.waiterService.create({
      data,
      restaurantId: id,
    });

    this.clearCache(id);

    return waiter;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @Mutation(() => Waiter, { name: "updateWaiter" })
  async update(
    @User() user: JwtPayload,
    @Args("data") data: UpdateWaiter,
    @RID() restaurantId: number
  ) {
    const { role } = user;
    const where = role === WAITER ? { id: user.id } : { ...data.where };

    const updated = await this.waiterService.update({
      ...data,
      where,
    });

    this.clearCache(restaurantId);

    return updated;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @Mutation(() => Success, { name: "updateWaiterPassword" })
  async updatePassword(
    @User() user: JwtPayload,
    @Args("data") data: UpdateWaiterPassword
  ) {
    const { role, id } = user;
    if (role === RESTAURANT) {
      if (!data.where) throw new NotSpecifiedException("waiter");
      return this.waiterService.updatePassword({ ...data });
    }

    const { password } = (await this.waiterService.find({ id })) as PWaiter;

    if (!data.update.old) throw new NotSpecifiedException("old password");

    if (!this.securityService.compare({ str: data.update.old, hash: password }))
      throw new AuthException();

    return this.waiterService.updatePassword({
      ...data,
      where: { id },
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Success, { name: "deleteWaiter" })
  async delete(@User() { id }: JwtPayload, @Args("where") where: WhereWaiter) {
    const { restaurantId } = await this.waiterService.find({ id: where.id });

    if (restaurantId != id) throw new PermissionDeniedException();

    const deleted = await this.waiterService.delete(where);

    this.clearCache(id);

    return deleted;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  @Query(() => [Waiter])
  async waiters(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => WaiterFilter })
    filters?: WaiterFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });

    if (cached) {
      if (filters) return this.filterService.waiters({ data: cached, filters });
      return cached;
    }

    const waiters = await this.waiterService.list({
      id: restaurantId,
    });

    if (filters) return this.filterService.waiters({ data: waiters, filters });

    return waiters;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
  @Query(() => Waiter, { name: "waiterInfo" })
  async info(
    @User() user: JwtPayload,
    @Args("where", { nullable: true }) where?: WhereWaiter
  ) {
    if (user.role === WAITER) {
      if (!where) return this.waiterService.find({ id: user.id });

      const waiter = await this.waiterService.find({ ...where });

      if (waiter.restaurantId != user.restaurantId)
        throw new PermissionDeniedException();

      return waiter;
    }
    if (!where) throw new NotSpecifiedException("waiter");

    const waiter = await this.waiterService.find({ ...where });

    if (waiter.restaurantId != user.id) throw new PermissionDeniedException();

    return waiter;
  }
}
