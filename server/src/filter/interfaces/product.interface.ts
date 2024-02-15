import { MaxLength } from "../rules/max.rule";
import { MaxPrice, MinPrice, SearchName } from "../rules/products.rule";

export interface IProductFilter {
  name: SearchName;
  min: MinPrice;
  max: MaxPrice;
  maxLength: MaxLength;
}
