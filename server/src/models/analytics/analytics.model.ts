import { Field, ObjectType } from "@nestjs/graphql";
import { Income, IncomeSummary } from "./income.model";
import { WaiterOfTheDay, WaiterOfTheDaySummary } from "./waiteroftheday.model";
import { DateScalar } from "../resources/date.model";
import { PopularProduct, PopularProductSummary } from "./popularproduct.model";

@ObjectType()
export class Analytics {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Income, { description: "List of income" })
  income?: Income;
  @Field(() => PopularProduct, { description: "List of popular products" })
  popularProduct?: PopularProduct;
  @Field(() => WaiterOfTheDay, { description: "List of best waiters" })
  waiterOfTheDay?: WaiterOfTheDay;
}

@ObjectType()
export class AnalyticsSummary {
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ description: "The range of the summary" })
  range: string;
  @Field(() => IncomeSummary, { description: "The summary of the income" })
  income: IncomeSummary;
  @Field(() => PopularProductSummary, {
    description: "The summary of the popular products",
  })
  popularProduct: PopularProductSummary;
  @Field(() => WaiterOfTheDaySummary, {
    description: "The summary of the best waiters",
  })
  waiter: WaiterOfTheDaySummary;
}
