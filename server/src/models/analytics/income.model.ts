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
