import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { DateScalar } from "./date.model";

@ObjectType()
export class OpenHour {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ description: "The day of the opening hour" })
  name: string;
  @Field({ description: "The start of the shift" })
  start: string;
  @Field({ description: "The end of the shift" })
  end: string;
  @Field(() => Restaurant, {
    nullable: true,
    description: "The restaurant of the opening hour",
  })
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateOpenHour extends PickType(
  OpenHour,
  ["start", "end", "name"] as const,
  InputType,
) {
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class UpdateOpenHourData extends PartialType(
  PickType(OpenHour, ["start", "end", "name"] as const, InputType),
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
