import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";

@ObjectType()
export class BaseTask {
  @Field()
  id: number;

  @Field({ description: "Name" })
  name: string;
}

@ObjectType()
export class Task {
  @Field()
  id: number;

  @Field({ description: "Returns if task is done" })
  done: boolean;

  @Field(() => Restaurant)
  restaurant?: Restaurant;

  @Field(() => BaseTask, { description: "Description" })
  base?: BaseTask;

  @Field()
  baseId: number;
}
