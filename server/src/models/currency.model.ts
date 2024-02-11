import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";

@ObjectType()
export class Currency {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  symbol: string;
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class WhereCurrency extends PickType(
  Currency,
  ["name"] as const,
  InputType
) {}
