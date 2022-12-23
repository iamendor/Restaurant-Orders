import { Args, Mutation, Resolver } from "@nestjs/graphql";
import {
  AuthRestaurant,
  AuthWaiter,
  CreateRestaurant,
  LoginRestaurant,
  LoginWaiter,
  Restaurant,
} from "../models/model";
import { RestaurantService } from "../restaurant/restaurant.service";
import { AuthService } from "./auth.service";

@Resolver("Auth")
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService
  ) {}

  @Mutation(() => Restaurant)
  signup(
    @Args("data", { type: () => CreateRestaurant })
    data: CreateRestaurant
  ) {
    return this.restaurantService.create({
      ...data,
    });
  }

  @Mutation(() => AuthRestaurant)
  loginRestaurant(@Args("credentials") credentials: LoginRestaurant) {
    return this.authService.loginRestaurant(credentials);
  }

  @Mutation(() => AuthWaiter)
  loginWaiter(@Args("credentials") credentials: LoginWaiter) {
    return this.authService.loginWaiter(credentials);
  }
}
