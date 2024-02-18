import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Currency } from "./currency.model";
import { Order } from "./order.model";
import { Restaurant } from "./restaurant.model";
import { Table } from "./table.model";
import { Waiter } from "./waiter.model";
import { DateScalar } from "./date.model";

@ObjectType()
export class Meal {
  @Field()
  id: number;
  @Field(() => DateScalar, {
    description: "The first order's date created in the meal",
  })
  start: Date;
  @Field(() => DateScalar, {
    description: "The last order's date created in the meal",
  })
  end: Date;
  @Field({ description: "The total income of the meal" })
  total: number;
  @Field(() => Waiter, { description: "The waiter who served" })
  waiter?: Waiter;
  @Field(() => Table, { description: "The table of the meal" })
  table?: Table;
  @Field(() => [Order], { description: "Orders created under the meal" })
  orders?: Order[];
  @Field(() => Restaurant, { description: "The restaurant of the meal" })
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateMeal {
  @Field()
  tableId: number;
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class WhereMeal {
  @Field()
  id: number;
  @Field({ nullable: true })
  restaurantId?: number;
}
