import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { MealService } from "./meal.service";
import {
  Category,
  CreateMeal,
  CreateMeals,
  Deleted,
  JwtPayload,
  Meal,
  MealsCreated,
  Order,
  UpdateMeal,
  WhereMeal,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { HttpException, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { WaiterService } from "../waiter/waiter.service";

@Resolver("Meal")
export class MealResolver {
  constructor(
    private readonly mealService: MealService,
    private readonly waiterService: WaiterService
  ) {}

  @Mutation(() => Meal, { name: "createMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateMeal) {
    if (!data.category && !data.categoryId)
      throw new HttpException("category or categoryId is required", 400);
    return this.mealService.create({ ...data, restaurantId: restaurant.id });
  }

  @Mutation(() => MealsCreated, { name: "createMeals" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  createMany(
    @User() restaurant: JwtPayload,
    @Args("data") data: CreateMeals[]
  ) {
    return this.mealService.createMany(
      data.map((meal) => ({ ...meal, restaurantId: restaurant.id }))
    );
  }

  @Mutation(() => Meal, { name: "updateMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  update(@User() restaurant: JwtPayload, @Args("data") data: UpdateMeal) {
    return this.mealService.update({
      ...data,
      where: { ...data.where, restaurantId: restaurant.id },
    });
  }

  @Mutation(() => Deleted, { name: "deleteMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  delete(@User() restaurant: JwtPayload, @Args("where") where: WhereMeal) {
    return this.mealService.delete({ ...where, restaurantId: restaurant.id });
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async list(@User() user: JwtPayload) {
    const id =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;

    return this.mealService.list(id);
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereMeal) {
    const id =
      user.role === "restaurant"
        ? user.id
        : (await this.waiterService.getRestaurant(user.email)).id;
    return this.mealService.find({ ...where, restaurantId: id });
  }

  @ResolveField(() => Category, { name: "category" })
  getCategory(@Parent() meal: Meal) {
    return this.mealService.getCategory(meal.id);
  }

  @ResolveField(() => Category, { name: "restaurant" })
  getRestaurant(@Parent() meal: Meal) {
    return this.mealService.getRestaurant(meal.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Meal) {
    return this.mealService.getOrders(meal.id);
  }
}
