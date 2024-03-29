import {
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RestaurantService } from "../services/restaurant.service";
import { RestaurantGuard } from "../guard/restaurant.guard";
import { RESTAURANT, WAITER } from "../../../role";
import { Restaurant as PRestaurant } from "prisma/client/main";
import { SecurityService } from "../../../security/services/security.service";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Restaurant,
  UpdateRestaurant,
  UpdateRestaurantPassword,
} from "../../../models/resources/restaurant.model";
import { Success } from "../../../models/resources/success.model";
import { GetRestaurant } from "../../../decorators";
import { ExcludePassowrdInterceptor } from "../../../interceptors/exclude.interceptor";

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly securityService: SecurityService,
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), RestaurantGuard)
  @UseInterceptors(ExcludePassowrdInterceptor)
  @Mutation(() => Restaurant, { name: "updateRestaurant" })
  async update(
    @GetRestaurant() { id }: Restaurant,
    @Args("update")
    update: UpdateRestaurant,
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
    @User() { id }: JwtPayload,
  ) {
    const { password } = (await this.restaurantService.find({
      id,
    })) as PRestaurant;

    if (!this.securityService.compare({ str: update.old, hash: password })) {
      throw new UnauthorizedException();
    }
    return this.restaurantService.updatePassword({
      where: { id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Mutation(() => Success, { name: "deleteRestaurant" })
  delete(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), RestaurantGuard)
  @UseInterceptors(ExcludePassowrdInterceptor)
  @Query(() => Restaurant, { name: "restaurantInfo" })
  info(@GetRestaurant() restaurant: Restaurant) {
    return restaurant;
  }
}
