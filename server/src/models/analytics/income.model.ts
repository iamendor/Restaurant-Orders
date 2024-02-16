import { Field, ObjectType } from "@nestjs/graphql";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class Income {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ description: "The total made" })
  total: number;
}

@ObjectType()
export class IncomeRange {
  @Field(() => Income, { description: "The highest income" })
  top: Income;
  @Field(() => Income, { description: "The lowest income" })
  bottom: Income;
}

@ObjectType()
export class IncomeSummary {
  @Field({ description: "The total made at the date" })
  total: number;
  @Field({ description: "The average of the incomes" })
  average: number;
  @Field({ description: "The median of the incomes" })
  median: number;
  @Field(() => IncomeRange, { description: "The highest and lowest income" })
  range: IncomeRange;
}
