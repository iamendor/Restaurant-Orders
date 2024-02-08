import { Rule } from "../interfaces/rule.interface";

export class MaxLength implements Rule<any, number> {
  filter(data: any[], max: number) {
    return data.slice(0, max - 1);
  }
  filterFn: (check: number) => (data: any) => boolean;
}
