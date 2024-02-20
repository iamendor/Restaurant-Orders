import { Field, ObjectType } from "@nestjs/graphql";
import { Waiter } from "../resources/waiter.model";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class WaiterOfTheDay {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Waiter, { description: "The waiter of the day", nullable: true })
  waiter?: Waiter;
  @Field({ nullable: true })
  waiterId: number;
}

@ObjectType()
export class WaiterOfTheDaySummary {
  @Field(() => Number, { description: "The best waiter", nullable: true })
  best?: number;
}
