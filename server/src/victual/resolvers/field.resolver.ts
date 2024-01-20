import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Victual } from "@prisma/client";
import { Category, Order } from "../../models/model";
import { RESTAURANT } from "../../role/role";
import { FieldService } from "../services/field.service";

@Resolver()
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
