import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Waiter } from "@prisma/client";
import { Restaurant, Order, Meal } from "../../models/model";
import { FieldService } from "./field.service";

@Resolver("Waiter")
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
