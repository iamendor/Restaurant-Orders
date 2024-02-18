import { Category } from "../../models/resources/category.model";
import { ICategoryFilter } from "../interfaces/category.interface";
import { Rule } from "../interfaces/rule.interface";
import { MaxLength } from "./max.rule";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Category, string> {
  filterFn(name: string) {
    return (category: Category) => category.name.includes(name);
  }
}

export class Root extends RuleBuilder implements Rule<Category, boolean> {
  filterFn(check: boolean) {
    return (category: Category) => {
      if (check) return category.root;
      return true;
    };
  }
}

export const CategoryRules = (): ICategoryFilter => ({
  name: new SearchName(),
  maxLength: new MaxLength(),
  root: new Root(),
});
