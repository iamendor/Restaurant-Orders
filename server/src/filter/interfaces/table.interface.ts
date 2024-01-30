import { MaxLength } from "../rules/max.rule";
import { SearchName } from "../rules/tables.rule";

export interface ITableFilter {
  name: SearchName;
  maxLength: MaxLength;
}
