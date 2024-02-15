import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Address } from "../../../models/resources/address.model";
import { Category } from "../../../models/resources/category.model";
import { Currency } from "../../../models/resources/currency.model";
import { Meal } from "../../../models/resources/meal.model";
import { Order } from "../../../models/resources/order.model";
import { Table } from "../../../models/resources/table.model";
import { Victual } from "../../../models/resources/victual.model";
import { Waiter } from "../../../models/resources/waiter.model";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { Task } from "../../../models/resources/task.model";
import { Settings } from "../../../models/resources/settings.model";

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

  @ResolveField(() => Boolean, { name: "open" })
  isOpen(@Parent() { id }: Restaurant) {
    return this.fieldService.isOpen(id);
  }

  @ResolveField(() => [Task], { name: "tasks" })
  getTasks(@Parent() { id }: Restaurant) {
    return this.fieldService.getTasks(id);
  }

  @ResolveField(() => Settings, { name: "settings" })
  getSettings(@Parent() { id }: Restaurant) {
    return this.fieldService.getSettings(id);
  }
}
