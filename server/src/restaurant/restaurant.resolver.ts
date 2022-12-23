import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AddressService } from "../address/address.service";
import { User } from "../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  Address,
  Deleted,
  JwtPayload,
  PasswordUpdated,
  Restaurant,
  UpdateRestaurant,
  UpdateRestaurantPassword,
} from "../models/model";
import { RestaurantService } from "./restaurant.service";

@Resolver("Restaurant")
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly addressService: AddressService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Restaurant, { name: "updateRestaurant" })
  update(
    @User() restaurant: JwtPayload,
    @Args("update")
    update: UpdateRestaurant
  ) {
    return this.restaurantService.update({
      where: { id: restaurant.id },
      data: update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => PasswordUpdated, { name: "updateRestaurantPassword" })
  updatePassword(
    @User() restaurant: JwtPayload,
    @Args("update") update: UpdateRestaurantPassword
  ) {
    return this.restaurantService.updatePassword({
      where: { id: restaurant.id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted, { name: "deleteRestaurant" })
  delete(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => Restaurant, { name: "restaurantInfo" })
  info(@User() restaurant: JwtPayload) {
    return this.restaurantService.find({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @ResolveField(() => Address, { name: "address" })
  getAddress(@Parent() restaurant: Restaurant) {
    return this.addressService.find({ restaurantId: restaurant.id });
  }
}
