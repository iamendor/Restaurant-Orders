import { Args, Mutation, Resolver } from "@nestjs/graphql";
import {
  AuthRestaurant,
  CreateRestaurant,
  LoginRestaurant,
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

  @Mutation(() => AuthRestaurant)
  async signup(
    @Args("data", { type: () => CreateRestaurant })
    data: CreateRestaurant
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

  @Mutation(() => AuthRestaurant)
  async loginRestaurant(@Args("credentials") credentials: LoginRestaurant) {
    return this.authService.loginRestaurant(credentials);
  }
}
