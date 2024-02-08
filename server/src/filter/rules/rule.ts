import { Rule } from "../interfaces/rule.interface";

export class RuleBuilder implements Rule<any, any> {
  filter(data: any[], payload: any): any[] {
    return data.filter(this.filterFn(payload));
  }
  filterFn(check: any) {
    return (data: any) => true;
  }
}
