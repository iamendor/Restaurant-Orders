import { Root, SearchName } from "../rules/categories.rule";
import { MaxLength } from "../rules/max.rule";

export interface ICategoryFilter {
  name: SearchName;
  maxLength: MaxLength;
  root: Root;
}
