import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Meal } from "./meal.model";

@ObjectType()
export class Currency {
  @Field()
  id: number;
  @Field()
  currency: string;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field(() => [Meal])
  meals?: Meal[];
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateCurrency extends PickType(
  Currency,
  ["currency"] as const,
  InputType
) {}

@InputType()
export class WhereCurrency extends PartialType(
  PickType(Currency, ["restaurantId", "id"] as const, InputType)
) {}

@InputType()
export class UpdateCurrency {
  @Field()
  currency: string;
}
