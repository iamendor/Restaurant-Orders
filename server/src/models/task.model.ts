import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class BaseTask {
  @Field()
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class Task {
  @Field()
  id: number;

  @Field()
  done: boolean;

  @Field(() => Restaurant)
  restaurant?: Restaurant;

  @Field(() => BaseTask)
  base?: BaseTask;

  @Field()
  baseId: number;
}
