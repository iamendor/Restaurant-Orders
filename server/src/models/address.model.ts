import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class Address {
  @Field()
  id: number;
  @Field()
  country: string;
  @Field()
  zip: string;
  @Field()
  city: string;
  @Field()
  address1: string;
  @Field()
  address2: string;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateAddress extends OmitType(
  Address,
  ["id", "restaurant", "restaurantId"] as const,
  InputType
) {}

@InputType()
export class UpdateAddress {
  @Field()
  country?: string;
  @Field()
  zip?: string;
  @Field()
  city?: string;
  @Field()
  address1?: string;
  @Field()
  address2?: string;
}

@InputType()
export class WhereAddress extends PickType(Address, [
  "id",
  "restaurantId",
] as const) {}
