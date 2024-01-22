import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Address } from "../../../models/address.model";
import { Category } from "../../../models/category.model";
import { Currency } from "../../../models/currency.model";
import { Meal } from "../../../models/meal.order";
import { Order } from "../../../models/order.model";
import { Table } from "../../../models/table.model";
import { Victual } from "../../../models/victual.model";
import { Waiter } from "../../../models/waiter.model";
import { Restaurant } from "../../../models/restaurant.model";

@Resolver((of) => Restaurant)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Address, { name: "address" })
  getAddress(@Parent() { id }: Restaurant) {
    return this.fieldService.getAddress(id);
  }

  @ResolveField(() => [Table], { name: "tables" })
  getTables(@Parent() { id }: Restaurant) {
    return this.fieldService.getTables(id);
  }

  @ResolveField(() => [Waiter], { name: "waiters" })
  getWaiters(@Parent() { id }: Restaurant) {
    return this.fieldService.getWaiters(id);
  }

  @ResolveField(() => [Category], { name: "categories" })
  getCategories(@Parent() { id }: Restaurant) {
    return this.fieldService.getCategories(id);
  }

  @ResolveField(() => [Victual], { name: "victuals" })
  getVictuals(@Parent() { id }: Restaurant) {
    return this.fieldService.getVictuals(id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() { id }: Restaurant) {
    return this.fieldService.getOrders(id);
  }

  @ResolveField(() => [Meal], { name: "meals" })
  getMeals(@Parent() { id }: Restaurant) {
    return this.fieldService.getMeals(id);
  }

  @ResolveField(() => Currency, { name: "currency" })
  getCurrency(@Parent() { id }: Restaurant) {
    return this.fieldService.getCurrency(id);
  }
}
