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
import { Waiter as PWaiter } from "prisma/client/main";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Waiter,
  CreateWaiter,
  UpdateWaiter,
  WhereWaiter,
  UpdateWaiterPassword,
} from "../../../models/resources/waiter.model";
import { Success } from "../../../models/resources/success.model";
import { WaiterFilter } from "../../../models/resources/filter.model";
import {
  CREATE_WAITER_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { WaiterGuard } from "../../../guard";
import { ExcludePassowrdInterceptor } from "../../../interceptors/exclude.interceptor";

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
    ExcludePassowrdInterceptor,
    WaiterClearCacheInterceptor,
    TaskInterceptor(CREATE_WAITER_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  create(@Args("data", AddRID) data: CreateWaiter) {
    return this.waiterService.create(data);
  }

  @Mutation(() => Waiter, { name: "updateWaiter" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), UpdateWaiterGuard)
  @UseInterceptors(ExcludePassowrdInterceptor, WaiterClearCacheInterceptor)
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

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), WaiterGuard)
  @UseInterceptors(WaiterClearCacheInterceptor)
  @Mutation(() => Success, { name: "deleteWaiter" })
  async delete(@User() { id }: JwtPayload, @Args("where") where: WhereWaiter) {
    return this.waiterService.delete(where);
  }

  @Query(() => [Waiter])
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(
    WaiterCacheInterceptor,
    FilterInterceptor("waiters"),
    ExcludePassowrdInterceptor
  )
  waiters(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => WaiterFilter })
    _filters?: WaiterFilter
  ) {
    return this.waiterService.list({
      id: restaurantId,
    });
  }

  @Query(() => Waiter, { name: "waiterInfo" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(ExcludePassowrdInterceptor)
  async info(
    @User() user: JwtPayload,
    @RID() restaurantId: number,
    @Args("where", { nullable: true }) where?: WhereWaiter
  ) {
    const find = user.role == WAITER ? { id: user.id } : where;

    if (!find) throw new NotSpecifiedException("waiter");

    const waiter = await this.waiterService.find(find);

    if (waiter.restaurantId != restaurantId)
      throw new PermissionDeniedException();

    return waiter;
  }
}
