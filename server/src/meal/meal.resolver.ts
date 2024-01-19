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
  Currency,
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
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";
import { RESTAURANT, WAITER } from "../role/role";
import { IdIntercept } from "../auth/guards/id";
import { RID } from "../auth/decorators/role.decorator";
import { MealGuard } from "./guard/meal.guard";
import { GetMeal } from "./guard/meal.decorator";

@Resolver("Meal")
export class MealResolver {
  constructor(private readonly mealService: MealService) {}

  @Mutation(() => Meal, { name: "createMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept)
  async create(
    @RID() restaurantId: number,
    @Args("data") { tableId }: CreateMeal
  ) {
    const tableWithOrders = await this.mealService.getOrdersOfTable(tableId);
    if (!tableWithOrders) throw new NotFoundResourceException("table");
    if (tableWithOrders.restaurantId != restaurantId)
      throw new ForbiddenException();
    if (tableWithOrders.orders.length == 0)
      throw new HttpException("no order on table", HttpStatus.BAD_REQUEST);
    const { sorted, ...formatTable } =
      this.mealService.formatTable(tableWithOrders);
    const meal = this.mealService.create({
      ...formatTable,
      restaurantId,
      tableId,
      currencyId: tableWithOrders.restaurant.currency.id,
      orderIds: sorted.map((ord) => ({ id: ord.id })),
    });
    if (!meal) throw new SomethingWentWrongException();
    await this.mealService.clearTable(tableId);
    return meal;
  }

  @Mutation(() => Deleted, { name: "deleteMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), MealGuard)
  async delete(@Args("where") where: WhereMeal) {
    return this.mealService.delete({ ...where });
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async list(@RID() restaurantId: number) {
    return this.mealService.list(restaurantId);
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), MealGuard)
  async find(@GetMeal() meal: Meal) {
    return meal;
  }

  
}
