import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryFilter {
  @Field({ nullable: true })
  name?: string;
}
@InputType()
export class MealFilter {
  @Field({ nullable: true })
  minDate?: Date;
  @Field({ nullable: true })
  maxDate?: Date;
  @Field({ nullable: true })
  minPrice?: number;
  @Field({ nullable: true })
  maxPrice?: number;
}

@InputType()
export class OrderFilter {
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  min?: Date;
  @Field({ nullable: true })
  max?: Date;
  @Field({ nullable: true })
  isReady?: boolean;
}

@InputType()
export class VictualFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  min?: number;
  @Field({ nullable: true })
  max?: number;
}

@InputType()
export class WaiterFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  gender?: string;
}

@InputType()
export class TableFilter {
  @Field({ nullable: true })
  name?: string;
}
