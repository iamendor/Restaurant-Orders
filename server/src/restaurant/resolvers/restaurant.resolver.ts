import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { User } from "../../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../../auth/guards/jwt.guard";
import { RoleGuard } from "../../auth/guards/role.guard";
import {
  Deleted,
  JwtPayload,
  PasswordUpdated,
  Restaurant,
  UpdateRestaurant,
  UpdateRestaurantPassword,
} from "../../models/model";
import { RestaurantService } from "../services/restaurant.service";
import { RestaurantGuard } from "../guard/restaurant.guard";
import { RESTAURANT, WAITER } from "../../role/role";
import { GetRestaurant } from "../decorators/restaurant.decorator";
import { Restaurant as PRestaurant } from "@prisma/client";
import { SecurityService } from "../../security/services/security.service";

@Resolver("Restaurant")
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
      data: update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => PasswordUpdated, { name: "updateRestaurantPassword" })
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
  @Mutation(() => Deleted, { name: "deleteRestaurant" })
  delete(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), RestaurantGuard)
  @Query(() => Restaurant, { name: "restaurantInfo" })
  info(@GetRestaurant() restaurant: Restaurant) {
    return restaurant;
  }
}
