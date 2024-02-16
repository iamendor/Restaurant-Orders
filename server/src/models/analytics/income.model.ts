import { Field, ObjectType } from "@nestjs/graphql";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class Income {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field()
  total: number;
}

@ObjectType()
export class IncomeRange {
  @Field(() => Income)
  top: Income;
  @Field(() => Income)
  bottom: Income;
}

@ObjectType()
export class IncomeSummary {
  @Field()
  total: number;
  @Field()
  average: number;
  @Field()
  median: number;
  @Field(() => IncomeRange)
  range: IncomeRange;
}
