import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Waiter } from "./waiter.model";
import { Table } from "./table.model";
import { Restaurant } from "./restaurant.model";
import { Victual } from "./victual.model";

@ObjectType()
export class Order {
  @Field()
  id: number;
  @Field()
  description: string;
  @Field()
  createdAt: string;
  @Field()
  isReady: boolean;
  @Field(() => Waiter)
  waiter?: Waiter;
  @Field(() => Table)
  table?: Table;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field(() => Victual)
  victual?: Victual;
}

@InputType()
export class CreateOrder {
  @Field()
  description: string;
  @Field()
  waiterId: number;
  @Field()
  tableId: number;
  @Field()
  victualId: number;
  @Field()
  restaurantId: number;
}

@InputType()
export class WhereOrder extends PickType(Order, ["id"] as const, InputType) {}

@InputType()
export class UpdateOrderData extends PartialType(
  PickType(Order, ["description", "isReady"] as const)
) {
  @Field()
  tableId?: number;
  @Field()
  victualId?: number;
}

@InputType()
export class UpdateOrder {
  @Field(() => WhereOrder)
  where: WhereOrder;
  @Field(() => UpdateOrderData)
  update: UpdateOrderData;
}