import { MaxLength } from "../rules/max.rule";
import {
  IsClosed,
  IsReady,
  MaxDate,
  MinDate,
  SearchDescription,
} from "../rules/orders.rule";

export interface IOrderFilter {
  description: SearchDescription;
  min: MinDate;
  max: MaxDate;
  isReady: IsReady;
  isClosed: IsClosed;
  maxLength: MaxLength;
}
