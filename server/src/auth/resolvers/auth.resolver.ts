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
import { TaskService } from "../../resources/task/services/task.service";

@Resolver("Auth")
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly restaurantService: RestaurantService,
    private readonly taskService: TaskService
  ) {}

  @Mutation(() => Restaurant)
  async signup(
    @Args("data", { type: () => CreateRestaurant })
    data: CreateRestaurant
  ) {
    const restaurant = await this.restaurantService.create({
      ...data,
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
