import { Table } from "../../models/resources/table.model";
import { Rule } from "../interfaces/rule.interface";
import { ITableFilter } from "../interfaces/table.interface";
import { MaxLength } from "./max.rule";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Table, string> {
  constructor() {
    super();
  }
  filterFn(name: string) {
    return (table: Table) => table.name == name;
  }
}

export const TableRules = (): ITableFilter => ({
  name: new SearchName(),
  maxLength: new MaxLength(),
});
