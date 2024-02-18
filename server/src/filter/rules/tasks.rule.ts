import { Task } from "../../models/resources/task.model";
import { Rule } from "../interfaces/rule.interface";
import { RuleBuilder } from "./rule";

export class IsDone extends RuleBuilder implements Rule<Task, string> {
  filterFn(done: string) {
    return (task: Task) => {
      switch (done) {
        case "true":
          return task.done;
        case "false":
          return !task.done;
        default:
          return true;
      }
    };
  }
}

export const TaskRules = () => ({
  done: new IsDone(),
});
