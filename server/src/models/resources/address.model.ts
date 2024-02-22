import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class Address {
  @Field()
  id: number;
  @Field({ description: "Country" })
  country: string;
  @Field({ description: "Zip code" })
  zip: string;
  @Field({ description: "City" })
  city: string;
  @Field({ description: "The first line of address" })
  address1: string;
  @Field({
    nullable: true,
    description: "The second line of address(optional)",
  })
  address2?: string;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateAddress extends OmitType(
  Address,
  ["id", "restaurant", "restaurantId"] as const,
  InputType,
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
export class WhereAddress extends PickType(
  Address,
  ["id", "restaurantId"] as const,
  InputType,
) {}
