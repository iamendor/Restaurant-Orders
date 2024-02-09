import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MealService } from "../services/meal.service";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { EmptyTableException } from "../../../error";
import { RESTAURANT, WAITER } from "../../../role";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { CreateMealGuard, MealGuard } from "../guard/meal.guard";
import { CreateMeal, Meal, WhereMeal } from "../../../models/meal.model";
import { Success } from "../../../models/success.model";
import { MealFilter } from "../../../models/filter.model";
import {
  CREATE_MEAL_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import { GetMeal } from "../../decorators";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../filter/interceptors/task.interceptor";
import { AddRID } from "../../pipes/rid.pipe";
import { FieldService } from "../services/field.service";

const MealCacheInterceptor = CacheInterceptor({
  prefix: "meals",
  map: (meal) => ({
    ...meal,
    start: new Date(meal.start),
    end: new Date(meal.end),
  }),
});
const MealClearCacheInterceptor = ClearCacheInterceptor("meals");

@Resolver((of) => Meal)
export class MealResolver {
  constructor(
    private readonly mealService: MealService,
    private readonly fieldService: FieldService
  ) {}

  @Mutation(() => Meal, { name: "createMeal" })
  @UseInterceptors(
    MealClearCacheInterceptor,
    TaskInterceptor(CREATE_MEAL_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), CreateMealGuard)
  async create(
    @Args("data", { type: () => CreateMeal }, AddRID)
    { tableId, restaurantId }: Required<CreateMeal>
  ): Promise<Meal> {
    const orders = await this.fieldService.getOrders(tableId);

    if (orders.length == 0) throw new EmptyTableException();

    const { sorted, ...data } = this.mealService.formatTable(orders);

    const meal = this.mealService.create({
      ...data,
      restaurantId,
      tableId,
      orderIds: sorted.map((ord) => ({ id: ord.id })),
    });

    this.mealService.clearTable(tableId);

    return meal;
  }

  @Mutation(() => Success, { name: "deleteMeal" })
  @UseInterceptors(MealClearCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), MealGuard)
  async delete(@Args("where") where: WhereMeal) {
    await this.mealService.delete(where);
  }

  @Query(() => [Meal], { name: "meals" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  @UseInterceptors(MealCacheInterceptor, FilterInterceptor("meals"))
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => MealFilter })
    _filter?: MealFilter
  ) {
    return this.mealService.list(restaurantId);
  }

  @Query(() => Meal, { name: "meal" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), MealGuard)
  async find(@GetMeal() meal: Meal, @Args("where") _: WhereMeal) {
    return meal;
  }
}
