import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../models/openhour.model";
import { OpenHourService } from "../services/openhour.service";
import { ForbiddenException, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { RID } from "../../../auth/decorators/role.decorator";
import { Success } from "../../../models/success.model";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { IdIntercept } from "../../../auth/guards/id.guard";

@Resolver((of) => OpenHour)
export class OpenHourResolver {
  constructor(private readonly openHourService: OpenHourService) {}
  @Mutation(() => OpenHour, { name: "createOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@Args("data") data: CreateOpenHour, @User() { id }: JwtPayload) {
    const openHour = await this.openHourService.create(data, id);
    return openHour;
  }

  @Mutation(() => Success, { name: "createOpenHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateOpenHour] }) data: CreateOpenHour[],
    @User() { id }: JwtPayload
  ) {
    await this.openHourService.createMany(data, id);
    return { message: "success" };
  }

  @Mutation(() => OpenHour, { name: "updateOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async update(
    @Args("data") { where, update }: UpdateOpenHour,
    @User() { id }: JwtPayload
  ) {
    const openHour = await this.openHourService.find(where);
    if (openHour.restaurantId != id) throw new ForbiddenException();

    const updated = await this.openHourService.update({ where, update });
    return updated;
  }

  @Mutation(() => Success, { name: "deleteOpenHour" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async delete(@Args("where") where: WhereOpenHour) {
    await this.openHourService.delete(where);
    return { message: "success" };
  }

  @Query(() => [OpenHour], { name: "openHours" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  list(@RID() restaurantId: number) {
    return this.openHourService.list(restaurantId);
  }
}
