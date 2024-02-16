import { Product } from "../../models/resources/product.model";
import { Rule } from "../interfaces/rule.interface";
import { IProductFilter } from "../interfaces/product.interface";
import { MaxLength } from "./max.rule";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Product, string> {
  constructor() {
    super();
  }
  filterFn(name: string) {
    return (product: Product) => product.name.includes(name);
  }
}

export class MinPrice extends RuleBuilder implements Rule<Product, number> {
  constructor() {
    super();
  }

  filterFn(min: number) {
    return (product: Product) => product.price >= min;
  }
}

export class MaxPrice extends RuleBuilder implements Rule<Product, number> {
  constructor() {
    super();
  }

  filterFn(max: number) {
    return (product: Product) => product.price <= max;
  }
}

export const VictualRules = (): IProductFilter => ({
  name: new SearchName(),
  min: new MinPrice(),
  max: new MaxPrice(),
  maxLength: new MaxLength(),
});
