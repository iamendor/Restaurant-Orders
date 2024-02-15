import { Field, ObjectType } from "@nestjs/graphql";
import { Income, IncomeSummary } from "./income.model";
import { WaiterOfTheDay } from "./waiteroftheday.model";
import { DateScalar } from "../resources/date.model";
import { PopularProduct } from "./popularproduct.model";

@ObjectType()
export class Analytics {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Income)
  income?: Income;
  @Field(() => PopularProduct)
  popularProduct?: PopularProduct;
  @Field(() => WaiterOfTheDay)
  waiterOfTheDay?: WaiterOfTheDay;
}

@ObjectType()
export class AnalyticsSummary {
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => IncomeSummary)
  income: IncomeSummary;
  popularProduct;
  waiterOfTheDay;
}
