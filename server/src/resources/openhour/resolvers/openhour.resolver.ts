import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { OpenHourService } from "../services/openhour.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { RID } from "../../../auth/decorators/role.decorator";
import { Success } from "../../../models/success.model";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { PermissionDeniedException } from "../../../error";
import { CacheService } from "../../../cache/services/cache.service";

@Resolver((of) => OpenHour)
export class OpenHourResolver {
  constructor(
    private readonly openHourService: OpenHourService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `openhours:${restaurantId}`;
  }

  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @Mutation(() => OpenHour, { name: "createOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@Args("data") data: CreateOpenHour, @User() { id }: JwtPayload) {
    const openHour = await this.openHourService.create(data, id);

    this.clearCache(id);

    return openHour;
  }

  @Mutation(() => Success, { name: "createOpenHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateOpenHour] }) data: CreateOpenHour[],
    @User() { id }: JwtPayload
  ) {
    const openHours = await this.openHourService.createMany(data, id);

    this.clearCache(id);

    return openHours;
  }

  @Mutation(() => OpenHour, { name: "updateOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async update(
    @Args("data") { where, update }: UpdateOpenHour,
    @User() { id }: JwtPayload
  ) {
    const openHour = await this.openHourService.find(where);
    if (openHour.restaurantId != id) throw new PermissionDeniedException();

    const updated = await this.openHourService.update({ where, update });
    return updated;
  }

  @Mutation(() => Success, { name: "deleteOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async delete(
    @Args("where") where: WhereOpenHour,
    @User() { id }: JwtPayload
  ) {
    const openHour = await this.openHourService.find(where);
    if (openHour.restaurantId != id) throw new PermissionDeniedException();

    await this.openHourService.delete(where);

    this.clearCache(id);

    return { message: "success" };
  }

  @Query(() => [OpenHour], { name: "openHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  async list(@RID() restaurantId: number) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });

    if (cached)
      return cached.map((oh) => ({ ...oh, createdAt: new Date(oh.createdAt) }));

    const openHours = await this.openHourService.list(restaurantId);

    this.cacheService.set({
      key: this.cachePrefix(restaurantId),
      value: JSON.stringify(openHours),
      ttl: 120_000,
    });

    return openHours;
  }
}
