import { Field, InputType, ObjectType, PickType } from "@nestjs/graphql";

@ObjectType()
export class Currency {
  @Field()
  id: number;
  @Field({ description: "Name" })
  name: string;
  @Field({ description: "Symbol" })
  symbol: string;
  @Field({
    nullable: true,
    description: "This is only used inside api, always returns null!",
  })
  restaurantId?: number;
}

@InputType()
export class WhereCurrency extends PickType(
  Currency,
  ["name"] as const,
  InputType,
) {}
