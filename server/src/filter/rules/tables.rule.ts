import { Table } from "../../models/table.model";
import { Rule } from "../interfaces/rule.interface";
import { ITableFilter } from "../interfaces/table.interface";
import { RuleBuilder } from "./rule";

export class SearchName extends RuleBuilder implements Rule<Table, string> {
  constructor() {
    super();
  }
  filterFn(name: string) {
    return (table: Table) => table.name == name;
  }
}

export const TableRules = () => ({
  name: new SearchName(),
});
