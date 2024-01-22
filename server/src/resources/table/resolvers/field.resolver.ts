import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Order } from "../../../models/order.model";
import { Restaurant } from "../../../models/restaurant.model";
import { Table } from "../../../models/table.model";

@Resolver((of) => Table)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() { id }: Table) {
    return this.fieldService.getRestaurant(id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() { id }: Table) {
    return this.fieldService.getOrders(id);
  }
}
