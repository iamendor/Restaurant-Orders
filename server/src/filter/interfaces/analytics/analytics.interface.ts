import { MaxDate, MinDate } from "../../rules/analytics/analytics.rule";

export interface IAnalyticsFilter {
  min: MinDate;
  max: MaxDate;
}
