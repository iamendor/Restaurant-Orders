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
import {
  CreateMeal,
  Meal,
  WhereMeal,
} from "../../../models/resources/meal.model";
import { Success } from "../../../models/resources/success.model";
import { MealFilter } from "../../../models/resources/filter.model";
import {
  CREATE_MEAL_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import { GetMeal } from "../../../decorators";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { FieldService } from "../../table/services/field.service";
import { MinArrayPipe } from "../../../pipes/array.pipe";

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
    const orders = await this.fieldService.getOrders(tableId, true);

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
