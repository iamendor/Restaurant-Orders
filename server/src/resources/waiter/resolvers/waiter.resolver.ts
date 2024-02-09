import { UseGuards, UseInterceptors } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { WaiterService } from "../services/waiter.service";
import { SecurityService } from "../../../security/services/security.service";
import { RESTAURANT, WAITER } from "../../../role";
import { UpdateWaiterGuard } from "../guards/waiter.guard";
import { IdGuard } from "../../../auth/guard/id.guard";
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
import { WaiterFilter } from "../../../models/filter.model";
import {
  CREATE_WAITER_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../filter/interceptors/task.interceptor";
import { AddRID } from "../../pipes/rid.pipe";

const WaiterCacheInterceptor = CacheInterceptor({
  prefix: "waiters",
  map: (waiter) => ({ ...waiter, createdAt: new Date(waiter.createdAt) }),
});
const WaiterClearCacheInterceptor = ClearCacheInterceptor("waiters");

@Resolver((of) => Waiter)
export class WaiterResolver {
  constructor(
    private readonly waiterService: WaiterService,
    private readonly securityService: SecurityService
  ) {}

  @Mutation(() => Waiter, { name: "createWaiter" })
  @UseInterceptors(
    WaiterClearCacheInterceptor,
    TaskInterceptor(CREATE_WAITER_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  create(@Args("data", AddRID) data: CreateWaiter) {
    return this.waiterService.create(data);
  }

  @Mutation(() => Waiter, { name: "updateWaiter" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @UseInterceptors(WaiterClearCacheInterceptor)
  async update(@User() user: JwtPayload, @Args("data") data: UpdateWaiter) {
    const { role } = user;
    const where = role === WAITER ? { id: user.id } : { ...data.where };

    const updated = await this.waiterService.update({
      ...data,
      where,
    });

    return updated;
  }

  @Mutation(() => Success, { name: "updateWaiterPassword" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
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

  //TODO: refactor
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(WaiterClearCacheInterceptor)
  @Mutation(() => Success, { name: "deleteWaiter" })
  async delete(@User() { id }: JwtPayload, @Args("where") where: WhereWaiter) {
    const { restaurantId } = await this.waiterService.find({ id: where.id });

    if (restaurantId != id) throw new PermissionDeniedException();

    const deleted = await this.waiterService.delete(where);

    return deleted;
  }

  @Query(() => [Waiter])
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(WaiterCacheInterceptor, FilterInterceptor("waiters"))
  waiters(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => WaiterFilter })
    _filters?: WaiterFilter
  ) {
    return this.waiterService.list({
      id: restaurantId,
    });
  }

  //TODO: refactor
  @Query(() => Waiter, { name: "waiterInfo" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER))
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
