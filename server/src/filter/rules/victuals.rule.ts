import { Victual } from "../../models/victual.model";
import { Rule } from "../interfaces/rule.interface";
import { IVictualFilter } from "../interfaces/victual.interface";
import { MaxLength } from "./max.rule";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Victual, string> {
  constructor() {
    super();
  }
  filterFn(name: string) {
    return (victual: Victual) => victual.name.includes(name);
  }
}

export class MinPrice extends RuleBuilder implements Rule<Victual, number> {
  constructor() {
    super();
  }

  filterFn(min: number) {
    return (victual: Victual) => victual.price >= min;
  }
}

export class MaxPrice extends RuleBuilder implements Rule<Victual, number> {
  constructor() {
    super();
  }

  filterFn(max: number) {
    return (victual: Victual) => victual.price <= max;
  }
}

export const VictualRules = (): IVictualFilter => ({
  name: new SearchName(),
  min: new MinPrice(),
  max: new MaxPrice(),
  maxLength: new MaxLength(),
});
