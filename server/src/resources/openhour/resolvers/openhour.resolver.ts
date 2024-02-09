import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { OpenHourService } from "../services/openhour.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { RID } from "../../../auth/decorators/role.decorator";
import { Success } from "../../../models/success.model";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { IdGuard } from "../../../auth/guard/id.guard";
import { PermissionDeniedException } from "../../../error";
import {
  CREATE_OPENHOUR_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";

const OpenHourCacheInterceptor = CacheInterceptor({
  prefix: "openhours",
  map: (oh) => ({ ...oh, createdAt: new Date(oh.createdAt) }),
});
const OpenHourClearCacheInterceptor = ClearCacheInterceptor("openhours");

@Resolver((of) => OpenHour)
export class OpenHourResolver {
  constructor(private readonly openHourService: OpenHourService) {}

  @Mutation(() => OpenHour, { name: "createOpenHour" })
  @UseInterceptors(
    OpenHourClearCacheInterceptor,
    TaskInterceptor(CREATE_OPENHOUR_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@Args("data") data: CreateOpenHour, @User() { id }: JwtPayload) {
    const openHours = await this.openHourService.list(id);
    const today = openHours.find((oh) => oh.name == data.name);
    if (today) {
      const updated = await this.openHourService.update({
        where: { id: today.id },
        update: { start: data.start, end: data.end },
      });

      return updated;
    }

    const openHour = await this.openHourService.create(data, id);

    return openHour;
  }

  @Mutation(() => Success, { name: "createOpenHours" })
  @UseInterceptors(
    OpenHourClearCacheInterceptor,
    TaskInterceptor(CREATE_OPENHOUR_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateOpenHour] }) data: CreateOpenHour[],
    @User() { id }: JwtPayload
  ) {
    const current = await this.openHourService.list(id);
    for (let i = 0; i < data.length; i++) {
      const today = current.find((oh) => oh.name == data[i].name);
      if (today) {
        const update = { start: data[i].start, end: data[i].end };
        await this.openHourService.update({
          where: { id: today.id },
          update,
        });
      } else {
        await this.openHourService.create(data[i], id);
      }
    }

    return { message: "success" };
  }

  @Mutation(() => OpenHour, { name: "updateOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(OpenHourClearCacheInterceptor)
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
  @UseInterceptors(OpenHourClearCacheInterceptor)
  async delete(
    @Args("where") where: WhereOpenHour,
    @User() { id }: JwtPayload
  ) {
    const openHour = await this.openHourService.find(where);
    if (openHour.restaurantId != id) throw new PermissionDeniedException();

    await this.openHourService.delete(where);

    return { message: "success" };
  }

  @Query(() => [OpenHour], { name: "openHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(OpenHourCacheInterceptor)
  async list(@RID() restaurantId: number) {
    const openHours = await this.openHourService.list(restaurantId);
    return openHours;
  }
}
