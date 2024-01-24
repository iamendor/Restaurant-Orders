import { MaxPrice, MinPrice, SearchName } from "../rules/victuals.rule";

export interface IVictualFilter {
  name: SearchName;
  min: MinPrice;
  max: MaxPrice;
}
