import { MaxLength } from "../rules/max.rule";
import { MaxDate, MaxPrice, MinDate, MinPrice } from "../rules/meal.rule";

export interface IMealFilter {
  minDate: MinDate;
  maxDate: MaxDate;
  minPrice: MinPrice;
  maxPrice: MaxPrice;
  maxLength: MaxLength;
}
