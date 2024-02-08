import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Restaurant } from "../../../models/restaurant.model";
import { Table } from "../../../models/table.model";
import { Victual } from "../../../models/victual.model";
import { Waiter } from "../../../models/waiter.model";
import { Order } from "../../../models/order.model";

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
  @ResolveField(() => Victual, { name: "victual" })
  getVictual(@Parent() order: Order) {
    return this.fieldService.getVictual(order.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() order: Order) {
    return this.fieldService.getTable(order.id);
  }
}
