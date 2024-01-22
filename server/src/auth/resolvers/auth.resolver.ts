import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { AuthService } from "../services/auth.service";
import {
  Restaurant,
  CreateRestaurant,
  AuthRestaurant,
  LoginRestaurant,
} from "../../models/restaurant.model";
import { AuthWaiter, LoginWaiter } from "../../models/waiter.model";

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
