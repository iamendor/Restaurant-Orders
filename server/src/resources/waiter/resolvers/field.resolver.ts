import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Meal } from "../../../models/resources/meal.model";
import { Order } from "../../../models/resources/order.model";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { Waiter } from "../../../models/resources/waiter.model";

@Resolver((of) => Waiter)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() waiter: Waiter) {
    return this.fieldService.getRestaurant(waiter.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() waiter: Waiter) {
    return this.fieldService.getOrders(waiter.id);
  }

  @ResolveField(() => [Meal], { name: "meals" })
  getMeals(@Parent() waiter: Waiter) {
    return this.fieldService.getMeals(waiter.id);
  }
}
