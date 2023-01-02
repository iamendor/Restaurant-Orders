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
  Restaurant,
  Table,
  Waiter,
  WhereMeal,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";

@Resolver("Meal")
export class MealResolver {
  constructor(private readonly mealService: MealService) {}

  private getRestaurantId(user: JwtPayload) {
    return user.role === "restaurant" ? user.id : user.restaurantId;
  }

  @Mutation(() => Meal, { name: "createMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async create(@User() user: JwtPayload, @Args("data") data: CreateMeal) {
    const restaurantId = this.getRestaurantId(user);
    return this.mealService.create(data, restaurantId);
  }

  @Mutation(() => Deleted, { name: "deleteMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  async delete(@User() user: JwtPayload, @Args("where") where: WhereMeal) {
    const restaurantId = this.getRestaurantId(user);
    return this.mealService.delete({ ...where, restaurantId });
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async list(@User() user: JwtPayload) {
    const restaurantId = this.getRestaurantId(user);
    return this.mealService.list(restaurantId);
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereMeal) {
    const restaurantId = this.getRestaurantId(user);
    return this.mealService.find({ ...where, restaurantId });
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Meal) {
    return this.mealService.getOrders(meal.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() meal: Meal) {
    return this.mealService.getTable(meal.id);
  }
  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() meal: Meal) {
    return this.mealService.getWaiter(meal.id);
  }
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() meal: Meal) {
    return this.mealService.getRestaurant(meal.id);
  }
}
