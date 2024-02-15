import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { AuthService } from "../services/auth.service";
import {
  Restaurant,
  CreateRestaurant,
  AuthRestaurant,
  LoginRestaurant,
} from "../../models/resources/restaurant.model";
import { AuthWaiter, LoginWaiter } from "../../models/resources/waiter.model";
import { TaskService } from "../../resources/task/services/task.service";
import { CurrencyService } from "../../resources/currency/services/currency.service";

@Resolver("Auth")
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService,
    private readonly taskService: TaskService,
    private readonly currencyService: CurrencyService
  ) {}

  @Mutation(() => Restaurant)
  async signup(
    @Args("data", { type: () => CreateRestaurant })
    data: CreateRestaurant
  ) {
    const currency = await this.currencyService.find(data.currency);

    const restaurant = await this.restaurantService.create({
      ...data,
      currencyId: currency.id,
    });

    this.taskService.init(restaurant.id);

    return restaurant;
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
