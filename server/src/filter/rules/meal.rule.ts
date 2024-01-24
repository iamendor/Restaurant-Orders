import { Meal } from "../../models/meal.model";
import { Rule } from "../interfaces/rule.interface";
import { RuleBuilder } from "./rule";

export class MinDate extends RuleBuilder implements Rule<Meal, Date> {
  constructor() {
    super();
  }

  filterFn(min: Date) {
    return (meal: Meal) => meal.start >= min;
  }
}

export class MaxDate extends RuleBuilder implements Rule<Meal, Date> {
  constructor() {
    super();
  }
  filterFn(max: Date) {
    return (meal: Meal) => meal.end <= max;
  }
}

export class MinPrice extends RuleBuilder implements Rule<Meal, number> {
  constructor() {
    super();
  }

  filterFn(min: number) {
    return (meal: Meal) => meal.total >= min;
  }
}

export class MaxPrice extends RuleBuilder implements Rule<Meal, number> {
  constructor() {
    super();
  }
  filter(data: Meal[], max: number): Meal[] {
    return data.filter(this.filterFn(max));
  }
  filterFn(max: number) {
    return (meal: Meal) => meal.total <= max;
  }
}

export const MealRules = () => ({
  minDate: new MinDate(),
  maxDate: new MaxDate(),
  minPrice: new MinPrice(),
  maxPrice: new MaxPrice(),
});
