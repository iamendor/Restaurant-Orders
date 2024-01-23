import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Currency } from "./currency.model";
import { Order } from "./order.model";
import { Restaurant } from "./restaurant.model";
import { Table } from "./table.model";
import { Waiter } from "./waiter.model";

@ObjectType()
export class Meal {
  @Field()
  id: number;
  @Field()
  start: string;
  @Field()
  end: string;
  @Field()
  total: number;
  @Field(() => Waiter)
  waiter?: Waiter;
  @Field(() => Table)
  table?: Table;
  @Field(() => [Order])
  orders?: Order[];
  @Field(() => Currency)
  currency?: Currency;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateMeal {
  @Field()
  tableId: number;
}

@InputType()
export class WhereMeal {
  @Field()
  id: number;
  @Field({ nullable: true })
  restaurantId?: number;
}
