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
import {
  CREATE_OPENHOUR_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";
import { OpenHourGuard } from "../../guard";

const OpenHourCacheInterceptor = CacheInterceptor({
  prefix: "openhours",
  map: (oh) => ({ ...oh, createdAt: new Date(oh.createdAt) }),
});
const OpenHourClearCacheInterceptor = ClearCacheInterceptor("openhours");

@Resolver((of) => OpenHour)
export class OpenHourResolver {
  constructor(private readonly openHourService: OpenHourService) {}

  private async isAlreadyCreated(
    data: CreateOpenHour,
    restaurantId: number,
    list?: OpenHour[]
  ): Promise<OpenHour> {
    if (!list) {
      list = await this.openHourService.list(restaurantId);
    }
    return list.find((oh) => oh.name == data.name);
  }

  //TODO: pipe
  @Mutation(() => OpenHour, { name: "createOpenHour" })
  @UseInterceptors(
    OpenHourClearCacheInterceptor,
    TaskInterceptor(CREATE_OPENHOUR_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@Args("data") data: CreateOpenHour, @User() { id }: JwtPayload) {
    const isCreated = await this.isAlreadyCreated(data, id);
    if (isCreated) {
      return await this.openHourService.update({
        where: { id: isCreated.id },
        update: { start: data.start, end: data.end },
      });
    }

    return this.openHourService.create(data, id);
  }

  //TODO: pipe
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
      const today = await this.isAlreadyCreated(data[i], id, current);
      if (today) {
        const update = { start: data[i].start, end: data[i].end };
        await this.openHourService.update({
          where: { id: today.id },
          update,
        });
        data.splice(i, 1);
      }
    }
    await this.openHourService.createMany(data, id);

    return { message: "success" };
  }

  @Mutation(() => OpenHour, { name: "updateOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), OpenHourGuard)
  @UseInterceptors(OpenHourClearCacheInterceptor)
  update(@Args("data") { where, update }: UpdateOpenHour) {
    return this.openHourService.update({ where, update });
  }

  @Mutation(() => Success, { name: "deleteOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), OpenHourGuard)
  @UseInterceptors(OpenHourClearCacheInterceptor)
  async delete(@Args("where") where: WhereOpenHour) {
    return this.openHourService.delete(where);
  }

  @Query(() => [OpenHour], { name: "openHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  @UseInterceptors(OpenHourCacheInterceptor)
  async list(@RID() restaurantId: number) {
    return this.openHourService.list(restaurantId);
  }
}
