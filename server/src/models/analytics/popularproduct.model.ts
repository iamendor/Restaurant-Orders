import { Field, ObjectType } from "@nestjs/graphql";
import { Victual } from "../resources/victual.model";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class PopularProduct {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Victual)
  numberOne: Victual;
  @Field(() => Victual)
  numberTwo: Victual;
  @Field(() => Victual)
  numberThree: Victual;
}
