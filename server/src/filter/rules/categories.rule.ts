import { Category } from "../../models/category.model";
import { ICategoryFilter } from "../interfaces/category.interface";
import { Rule } from "../interfaces/rule.interface";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Category, string> {
  filterFn(name: string) {
    return (category: Category) => category.name.includes(name);
  }
}

export const CategoryRules = (): ICategoryFilter => ({
  name: new SearchName(),
});
