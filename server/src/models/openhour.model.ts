import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class OpenHour {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  start: string;
  @Field()
  end: string;
  @Field(() => Restaurant, { nullable: true })
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateOpenHour extends PickType(
  OpenHour,
  ["start", "end", "name"] as const,
  InputType
) {}

@InputType()
export class UpdateOpenHourData extends PartialType(
  PickType(OpenHour, ["start", "end", "name"] as const, InputType)
) {}

@InputType()
export class WhereOpenHour {
  @Field()
  id: number;
}

@InputType()
export class UpdateOpenHour {
  @Field(() => WhereOpenHour)
  where: WhereOpenHour;
  @Field(() => UpdateOpenHourData)
  update: UpdateOpenHourData;
}
