import { Args, Mutation, Resolver } from "@nestjs/graphql";
import {
  AuthRestaurantResponse,
  CreateRestaurantInput,
  LoginRestaurantInput,
  Restaurant,
} from "src/models/model";
import { RestaurantService } from "src/restaurant/restaurant.service";
import { AuthService } from "./auth.service";

@Resolver("Auth")
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService
  ) {}

  @Mutation(() => AuthRestaurantResponse)
  async signup(
    @Args("data", { type: () => CreateRestaurantInput })
    data: CreateRestaurantInput
  ) {
    const restaurant = await this.restaurantService.create({
      ...data,
    });
    return {
      access_token: this.authService.generateRestaurantJwt(
        restaurant as Restaurant
      ),
      restaurant,
    };
  }

  @Mutation(() => AuthRestaurantResponse)
  async loginRestaurant(
    @Args("credentials") credentials: LoginRestaurantInput
  ) {
    return this.authService.loginRestaurant(credentials);
  }
}
