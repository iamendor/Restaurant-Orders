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
import { Product } from "./product.model";
import { DateScalar } from "./date.model";

@ObjectType()
export class Order {
  @Field()
  id: number;
  @Field({ nullable: true })
  description?: string;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field()
  quantity: number;
  @Field()
  isReady: boolean;
  @Field()
  closed: boolean;
  @Field()
  waiterId: number;
  @Field(() => Waiter)
  waiter?: Waiter;
  @Field(() => Table)
  table?: Table;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field(() => Product)
  product?: Product;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateOrder {
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  waiterId?: number;
  @Field()
  tableId: number;
  @Field()
  productId: number;
  @Field({ nullable: true })
  restaurantId?: number;
  @Field({ nullable: true })
  isReady?: boolean;
  @Field({ nullable: true })
  quantity?: number;
}

@InputType()
export class WhereOrder extends PickType(Order, ["id"] as const, InputType) {}

@InputType()
export class UpdateOrderData extends PartialType(
  PickType(Order, ["description", "isReady", "quantity"] as const, InputType)
) {
  @Field({ nullable: true })
  tableId?: number;
  @Field({ nullable: true })
  productId?: number;
}

@InputType()
export class UpdateOrder {
  @Field(() => WhereOrder)
  where: WhereOrder;
  @Field(() => UpdateOrderData)
  update: UpdateOrderData;
}

@ObjectType()
export class ListenOrder extends Order {
  @Field({ nullable: true })
  action?: string;
}