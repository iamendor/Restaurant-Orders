import { Field, ObjectType } from "@nestjs/graphql";
import { Waiter } from "../resources/waiter.model";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class WaiterOfTheDay {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Waiter)
  waiter: Waiter;
  @Field()
  waiterId: number;
}
