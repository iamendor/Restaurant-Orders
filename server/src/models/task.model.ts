import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class Task {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  done: boolean;

  @Field(() => Restaurant)
  restaurant?: Restaurant;
}
