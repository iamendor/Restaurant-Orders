import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { RESTAURANT } from "../../../role";
import { FieldService } from "../services/field.service";
import { Category } from "../../../models/resources/category.model";
import { Order } from "../../../models/resources/order.model";
import { Product } from "../../../models/resources/product.model";

@Resolver((of) => Product)
export class FieldResolver {
  constructor(private readonly victualService: FieldService) {}
  @ResolveField(() => Category, { name: "category" })
  getCategory(@Parent() meal: Product) {
    return this.victualService.getCategory(meal.id);
  }

  @ResolveField(() => Category, { name: RESTAURANT })
  getRestaurant(@Parent() meal: Product) {
    return this.victualService.getRestaurant(meal.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() meal: Product) {
    return this.victualService.getOrders(meal.id);
  }
}
