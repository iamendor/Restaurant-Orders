import { Order } from "../../models/resources/order.model";
import { IOrderFilter } from "../interfaces/order.interface";
import { Rule } from "../interfaces/rule.interface";
import { MaxLength } from "./max.rule";
import { RuleBuilder } from "./rule";

export class SearchDescription
  extends RuleBuilder
  implements Rule<Order, string>
{
  constructor() {
    super();
  }
  filterFn(check: string) {
    return ({ description }: Order) =>
      description ? description.includes(check) : true;
  }
}

export class MinDate extends RuleBuilder implements Rule<Order, Date> {
  constructor() {
    super();
  }
  filterFn(min: Date) {
    return (order: Order) => order.createdAt >= min;
  }
}

export class MaxDate extends RuleBuilder implements Rule<Order, Date> {
  constructor() {
    super();
  }
  filterFn(max: Date) {
    return (order: Order) => order.createdAt <= max;
  }
}

export class IsReady extends RuleBuilder implements Rule<Order, boolean> {
  constructor() {
    super();
  }
  filterFn(isReady: boolean) {
    return (order: Order) => order.isReady == isReady;
  }
}

export class IsClosed extends RuleBuilder implements Rule<Order, string> {
  constructor() {
    super();
  }

  filterFn(isClosed: string) {
    switch (isClosed) {
      case "true":
        return (order: Order) => order.closed;
      case "false":
        return (order: Order) => !order.closed;
      case "all":
        return (order: Order) => true;
      default:
        return () => true;
    }
  }
}

export const OrderRules = (): IOrderFilter => ({
  description: new SearchDescription(),
  min: new MinDate(),
  max: new MaxDate(),
  isReady: new IsReady(),
  isClosed: new IsClosed(),
  maxLength: new MaxLength(),
});
