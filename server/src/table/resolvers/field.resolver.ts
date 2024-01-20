import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Table } from "@prisma/client";
import { Restaurant, Order } from "../../models/model";
import { FieldService } from "../services/field.service";

@Resolver("Table")
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
