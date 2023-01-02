import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { MealService } from "./meal.service";
import {
  CreateMeal,
  Deleted,
  JwtPayload,
  Meal,
  Order,
  WhereMeal,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { WaiterService } from "../waiter/waiter.service";

@Resolver("Meal")
export class MealResolver {
  constructor(
    private readonly mealService: MealService,
    private waiterService: WaiterService
  ) {}

  @Mutation(() => Meal, { name: "createMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async create(@User() user: JwtPayload, @Args("data") data: CreateMeal) {
    const restaurantId =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.mealService.create(data, restaurantId);
  }

  @Mutation(() => Deleted, { name: "deleteMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  async delete(@User() user: JwtPayload, @Args("where") where: WhereMeal) {
    const restaurantId =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.mealService.delete({ ...where, restaurantId });
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async list(@User() user: JwtPayload) {
    const restaurantId =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.mealService.list(restaurantId);
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereMeal) {
    const restaurantId =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.mealService.find({ ...where, restaurantId });
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Meal) {
    return this.mealService.getOrders(meal.id);
  }
}
