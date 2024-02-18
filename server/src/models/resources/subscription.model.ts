import { Field, ObjectType } from "@nestjs/graphql";
import { Order } from "./order.model";

@ObjectType()
export class ListenOrders {
  @Field(() => [Order])
  orders: Order[];
}
@ObjectType()
export class ListenOrder {
  @Field(() => Order)
  order: Order;
}


