import { Order } from "../../models/order.model";
import { IOrderFilter } from "../interfaces/order.interface";
import { Rule } from "../interfaces/rule.interface";
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

export const OrderRules = (): IOrderFilter => ({
  description: new SearchDescription(),
  min: new MinDate(),
  max: new MaxDate(),
  isReady: new IsReady(),
});
