import { Waiter } from "../../models/waiter.model";
import { Rule } from "../interfaces/rule.interface";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Waiter, string> {
  constructor() {
    super();
  }

  filterFn(keyword: string) {
    return (waiter: Waiter) => waiter.name.includes(keyword);
  }
}

export class Email extends RuleBuilder implements Rule<Waiter, string> {
  constructor() {
    super();
  }

  filterFn(keyword: string) {
    return (waiter: Waiter) => waiter.email.includes(keyword);
  }
}

export class Gender extends RuleBuilder implements Rule<Waiter, string> {
  constructor() {
    super();
  }

  filterFn(keyword: string) {
    return (waiter: Waiter) => waiter.gender == keyword;
  }
}

export const WaiterRules = () => ({
  name: new SearchName(),
  email: new Email(),
  gender: new Gender(),
});
