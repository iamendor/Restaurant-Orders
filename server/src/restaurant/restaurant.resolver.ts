import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AddressService } from "src/address/address.service";
import { User } from "src/auth/decorators/user.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RoleGuard } from "src/auth/guards/role-guard";
import {
  Address,
  AuthRestaurant,
  Deleted,
  JwtPayload,
  PasswordUpdated,
  Restaurant,
  UpdateRestaurantData,
  UpdateRestaurantDataPassword,
} from "src/models/model";
import { RestaurantService } from "./restaurant.service";

@Resolver("Restaurant")
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly addressService: AddressService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => AuthRestaurant)
  async updateRestaurant(
    @User() restaurant: JwtPayload,
    @Args("update")
    update: UpdateRestaurantData
  ) {
    const updatedRestaurant = await this.restaurantService.update({
      where: { id: restaurant.id },
      data: update,
    });
    return {
      message: "success",
      access_token: "123",
      restaurant: updatedRestaurant,
    };
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => PasswordUpdated)
  updateRestaurantPassword(
    @User() restaurant: JwtPayload,
    @Args("update") update: UpdateRestaurantDataPassword
  ) {
    return this.restaurantService.updatePassword({
      where: { id: restaurant.id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted)
  deleteRestaurant(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => Restaurant)
  restaurantInfo(@User() restaurant: JwtPayload) {
    return this.restaurantService.find({ id: restaurant.id });
  }

  @ResolveField(() => Address, { name: "address" })
  getAddress(@Parent() restaurant: Restaurant) {
    console.log(restaurant);
    return this.addressService.find({ restaurantId: restaurant.id });
  }
}
