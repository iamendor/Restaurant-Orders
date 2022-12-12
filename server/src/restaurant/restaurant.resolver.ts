import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { GetUser } from "src/auth/decorators/user.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RoleGuard } from "src/auth/guards/role-guard";
import {
  AuthRestaurantResponse,
  JwtPayload,
  RestaurantDeleteResponse,
  RestaurantPasswordUpdatedResponse,
  UpdateRestaurantDataInput,
  UpdateRestaurantDataPassword,
} from "src/models/model";
import { RestaurantService } from "./restaurant.service";

@Resolver("Restaurant")
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => AuthRestaurantResponse)
  async updateRestaurant(
    @GetUser() restaurant: JwtPayload,
    @Args("update")
    update: UpdateRestaurantDataInput
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
  @Mutation(() => RestaurantPasswordUpdatedResponse)
  async updateRestaurantPassword(@GetUser() restaurant: JwtPayload, @Args('update') update: UpdateRestaurantDataPassword){
    return this.restaurantService.updatePassword({where: {id: restaurant.id}, update})
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => RestaurantDeleteResponse)
  async deleteRestaurant(@GetUser() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }
}
