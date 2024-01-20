import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Restaurant } from "@prisma/client";
import {
  Address,
  Table,
  Waiter,
  Category,
  Victual,
  Order,
  Meal,
  Currency,
} from "../../models/model";
import { FieldService } from "../services/field.service";

@Resolver("Restaurant")
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
