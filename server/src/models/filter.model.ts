import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  maxLength?: number;
  @Field({ nullable: true })
  root?: boolean;
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
  @Field({ nullable: true })
  maxLength?: number;
}

@InputType()
export class OrderFilter {
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true, defaultValue: "false" })
  isClosed?: "true" | "false" | "all";
  @Field({ nullable: true })
  min?: Date;
  @Field({ nullable: true })
  max?: Date;
  @Field({ nullable: true })
  isReady?: boolean;
  @Field({ nullable: true })
  maxLength?: number;
}

@InputType()
export class VictualFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  min?: number;
  @Field({ nullable: true })
  max?: number;
  @Field({ nullable: true })
  maxLength?: number;
}

@InputType()
export class WaiterFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  gender?: string;
  @Field({ nullable: true })
  maxLength?: number;
}

@InputType()
export class TableFilter {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  maxLength?: number;
}

@InputType()
export class TaskFilter {
  @Field({ nullable: true })
  done?: "true" | "false" | "all";
}
