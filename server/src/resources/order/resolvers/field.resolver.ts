import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { Table } from "../../../models/resources/table.model";
import { Product } from "../../../models/resources/product.model";
import { Waiter } from "../../../models/resources/waiter.model";
import { Order } from "../../../models/resources/order.model";

@Resolver((of) => Order)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() order: Order) {
    return this.fieldService.getRestaurant(order.id);
  }
  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() order: Order) {
    return this.fieldService.getWaiter(order.id);
  }
  @ResolveField(() => Product, { name: "product" })
  getVictual(@Parent() order: Order) {
    return this.fieldService.getProduct(order.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() order: Order) {
    return this.fieldService.getTable(order.id);
  }
}
