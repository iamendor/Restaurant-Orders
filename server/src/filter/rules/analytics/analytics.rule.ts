import { Analytics } from "../../../models/analytics/analytics.model";
import { IAnalyticsFilter } from "../../interfaces/analytics/analytics.interface";
import { Rule } from "../../interfaces/rule.interface";
import { RuleBuilder } from "../rule";

export class MinDate extends RuleBuilder implements Rule<Analytics, Date> {
  constructor() {
    super();
  }
  filterFn(min: Date) {
    return (analytics: Analytics) => {
      return analytics.createdAt >= min;
    };
  }
}

export class MaxDate extends RuleBuilder implements Rule<Analytics, Date> {
  constructor() {
    super();
  }
  filterFn(max: Date) {
    return (analytics: Analytics) => analytics.createdAt <= max;
  }
}

export const AnalyticsRules = (): IAnalyticsFilter => ({
  min: new MinDate(),
  max: new MaxDate(),
});
