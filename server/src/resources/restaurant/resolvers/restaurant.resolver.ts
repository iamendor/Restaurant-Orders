import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { RestaurantService } from "../services/restaurant.service";
import { RestaurantGuard } from "../guard/restaurant.guard";
import { RESTAURANT, WAITER } from "../../../role/role";
import { GetRestaurant } from "../decorators/restaurant.decorator";
import { Restaurant as PRestaurant } from "@prisma/client";
import { SecurityService } from "../../../security/services/security.service";
import { JwtPayload } from "../../../models/jwt.model";
import {
  Restaurant,
  UpdateRestaurant,
  UpdateRestaurantPassword,
} from "../../../models/restaurant.model";
import { Success } from "../../../models/other.model";

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly securityService: SecurityService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"), RestaurantGuard)
  @Mutation(() => Restaurant, { name: "updateRestaurant" })
  update(
    @GetRestaurant() { id }: Restaurant,
    @Args("update")
    update: UpdateRestaurant
  ) {
    return this.restaurantService.update({
      where: { id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Success, { name: "updateRestaurantPassword" })
  async updatePassword(
    @Args("update") update: UpdateRestaurantPassword,
    @User() { id }: JwtPayload
  ) {
    const { password } = (await this.restaurantService.find({
      id,
    })) as PRestaurant;
    if (!this.securityService.compare({ str: update.old, hash: password }))
      throw new UnauthorizedException();
    return this.restaurantService.updatePassword({
      where: { id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Success, { name: "deleteRestaurant" })
  async delete(@User() restaurant: JwtPayload) {
    const deleted = await this.restaurantService.delete({ id: restaurant.id });
    console.log(deleted);
    return deleted;
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), RestaurantGuard)
  @Query(() => Restaurant, { name: "restaurantInfo" })
  info(@GetRestaurant() restaurant: Restaurant) {
    return restaurant;
  }
}