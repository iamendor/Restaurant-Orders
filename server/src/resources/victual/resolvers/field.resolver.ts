import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { RESTAURANT } from "../../../role/role";
import { FieldService } from "../services/field.service";
import { Category } from "../../../models/category.model";
import { Order } from "../../../models/order.model";
import { Victual } from "../../../models/victual.model";

@Resolver((of) => Victual)
export class FieldResolver {
  constructor(private readonly victualService: FieldService) {}
  @ResolveField(() => Category, { name: "category" })
  getCategory(@Parent() meal: Victual) {
    return this.victualService.getCategory(meal.id);
  }

  @ResolveField(() => Category, { name: RESTAURANT })
  getRestaurant(@Parent() meal: Victual) {
    return this.victualService.getRestaurant(meal.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Victual) {
    return this.victualService.getOrders(meal.id);
  }
}