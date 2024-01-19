import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "./field.service";
import { Meal } from "@prisma/client";
import { Order, Table, Waiter, Restaurant, Currency } from "../../models/model";

@Resolver("Meal")
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

  @ResolveField(() => Currency, { name: "currency" })
  getCurrency(@Parent() meal: Meal) {
    return this.fieldService.getCurrency(meal.id);
  }
}
