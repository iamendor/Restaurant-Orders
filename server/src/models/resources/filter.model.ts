import { Field, InputType } from "@nestjs/graphql";
import { DateScalar } from "./date.model";

@InputType()
export class CategoryFilter {
  @Field({ nullable: true, description: "Use it for searching by name" })
  name?: string;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
  @Field({
    nullable: true,
    description: "Check if category is a root category(or not)",
  })
  root?: boolean;
}
@InputType()
export class MealFilter {
  @Field({
    nullable: true,
    description: "Exclude data created later the date",
  })
  minDate?: Date;
  @Field({
    nullable: true,
    description: "Exclude data created before the date",
  })
  maxDate?: Date;
  @Field({
    nullable: true,
    description: "Exclude data that has less total income",
  })
  minPrice?: number;
  @Field({
    nullable: true,
    description: "Exclude data that has more total income",
  })
  maxPrice?: number;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
}

@InputType()
export class OrderFilter {
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true, defaultValue: "false" })
  isClosed?: "true" | "false" | "all";
  @Field({
    nullable: true,
    description: "Exclude data created later the date",
  })
  min?: Date;
  @Field({
    nullable: true,
    description: "Exclude data created before the date",
  })
  max?: Date;
  @Field({ nullable: true, description: "Check if it is ready(or not)" })
  isReady?: boolean;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
}

@InputType()
export class ProductFilter {
  @Field({ nullable: true, description: "Use it for searching by name" })
  name?: string;
  @Field({ nullable: true, description: "Exclude data that has less price" })
  min?: number;
  @Field({ nullable: true, description: "Exclude data that has more price" })
  max?: number;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
}

@InputType()
export class WaiterFilter {
  @Field({ nullable: true, description: "Use it for searching by name" })
  name?: string;
  @Field({ nullable: true, description: "Use it for searching by email" })
  email?: string;
  @Field({ nullable: true, description: "Use it for searching by gender" })
  gender?: string;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
}

@InputType()
export class TableFilter {
  @Field({ nullable: true, description: "Use it for searching by name" })
  name?: string;
  @Field({ nullable: true, description: "Add max length of list" })
  maxLength?: number;
}

@InputType()
export class TaskFilter {
  @Field({
    nullable: true,
    description: "Exclude task that has been done(or not)",
  })
  done?: "true" | "false" | "all";
}

@InputType()
export class AnalyticsFilter {
  @Field(() => DateScalar, {
    nullable: true,
    description: "Exclude data created later the date",
  })
  min?: Date;

  @Field(() => DateScalar, {
    nullable: true,
    description: "Exclude data created before the date",
  })
  max?: Date;
}
