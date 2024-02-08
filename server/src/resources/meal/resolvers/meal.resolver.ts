import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MealService } from "../services/meal.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { EmptyTableException, PermissionDeniedException } from "../../../error";
import { RESTAURANT, WAITER } from "../../../role";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { MealGuard } from "../guard/meal.guard";
import { GetMeal } from "../decorators/meal.decorator";
import { CreateMeal, Meal, WhereMeal } from "../../../models/meal.model";
import { Success } from "../../../models/success.model";
import { FilterService } from "../../../filter/services/filter.service";
import { MealFilter } from "../../../models/filter.model";
import { CacheService } from "../../../cache/services/cache.service";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  CREATE_MEAL_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";

@Resolver((of) => Meal)
export class MealResolver {
  constructor(
    private readonly mealService: MealService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `meals:${restaurantId}`;
  }

  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @Mutation(() => Meal, { name: "createMeal" })
  @UseInterceptors(TaskInterceptor(CREATE_MEAL_ACTION))
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdGuard)
  async create(
    @RID() restaurantId: number,
    @Args("data") { tableId }: CreateMeal
  ) {
    const tableWithOrders = await this.mealService.getOrdersOfTable(tableId);

    if (tableWithOrders.restaurantId != restaurantId)
      throw new PermissionDeniedException();
    if (tableWithOrders.orders.length == 0) throw new EmptyTableException();

    const { sorted, ...formatTable } =
      this.mealService.formatTable(tableWithOrders);

    const meal = this.mealService.create({
      ...formatTable,
      restaurantId,
      tableId,
      orderIds: sorted.map((ord) => ({ id: ord.id })),
    });

    this.mealService.clearTable(tableId);
    this.clearCache(restaurantId);

    return meal;
  }

  @Mutation(() => Success, { name: "deleteMeal" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), MealGuard)
  async delete(@Args("where") where: WhereMeal, @User() { id }: JwtPayload) {
    const deleted = await this.mealService.delete({ ...where });

    this.clearCache(id);

    return deleted;
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => MealFilter })
    filters?: MealFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });
    if (cached) {
      const remap = cached.map((meal) => ({
        ...meal,
        start: new Date(meal.start),
        end: new Date(meal.end),
      }));

      if (filters) return this.filterService.meal({ data: remap, filters });
      return remap;
    }

    const meals = await this.mealService.list(restaurantId);

    this.cacheService.set({
      key: this.cachePrefix(restaurantId),
      value: JSON.stringify(meals),
      ttl: 120_000,
    });

    if (filters) return this.filterService.meal({ data: meals, filters });
    return meals;
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), MealGuard)
  async find(@GetMeal() meal: Meal, @Args("where") _: WhereMeal) {
    return meal;
  }
}
