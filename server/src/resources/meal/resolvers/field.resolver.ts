import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Order } from "../../../models/order.model";
import { Restaurant } from "../../../models/restaurant.model";
import { Table } from "../../../models/table.model";
import { Waiter } from "../../../models/waiter.model";
import { Meal } from "../../../models/meal.model";

@Resolver((of) => Meal)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Meal) {
    return this.fieldService.getOrders(meal.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() meal: Meal) {
    return this.fieldService.getTable(meal.id);
  }
  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() meal: Meal) {
    return this.fieldService.getWaiter(meal.id);
  }
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() meal: Meal) {
    return this.fieldService.getRestaurant(meal.id);
  }
}
