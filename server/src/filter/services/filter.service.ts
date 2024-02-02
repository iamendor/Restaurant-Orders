import { Injectable } from "@nestjs/common";
import { WaiterRules } from "../rules/waiters.rule";
import { Waiter } from "../../models/waiter.model";
import { Victual } from "../../models/victual.model";
import { Category } from "../../models/category.model";
import { Order } from "../../models/order.model";
import { Meal } from "../../models/meal.model";
import { IWaiterFilter } from "../interfaces/waiter.interface";
import { IVictualFilter } from "../interfaces/victual.interface";
import { VictualRules } from "../rules/victuals.rule";
import { ICategoryFilter } from "../interfaces/category.interface";
import { CategoryRules } from "../rules/categories.rule";
import { IOrderFilter } from "../interfaces/order.interface";
import { OrderRules } from "../rules/orders.rule";
import { IMealFilter } from "../interfaces/meal.interface";
import { MealRules } from "../rules/meal.rule";
import {
  CategoryFilter,
  MealFilter,
  OrderFilter,
  VictualFilter,
  WaiterFilter,
} from "../../models/filter.model";
import { Table } from "../../models/table.model";
import { ITableFilter } from "../interfaces/table.interface";
import { TableRules } from "../rules/tables.rule";

interface IFilter<T> {
  data: T[];
  filters:
    | WaiterFilter
    | CategoryFilter
    | OrderFilter
    | VictualFilter
    | MealFilter;
}

@Injectable()
export class FilterService {
  private wRules: IWaiterFilter;
  private vRules: IVictualFilter;
  private cRules: ICategoryFilter;
  private oRules: IOrderFilter;
  private mRules: IMealFilter;
  private tRules: ITableFilter;

  constructor() {
    this.wRules = WaiterRules();
    this.vRules = VictualRules();
    this.cRules = CategoryRules();
    this.oRules = OrderRules();
    this.mRules = MealRules();
    this.tRules = TableRules();
  }
  private filter({ data, filters }, rules) {
    let filtered = data;
    const filterKeys = Object.keys(filters);
    for (let i = 0; i < filterKeys.length; i++) {
      const filterData = filters[filterKeys[i]];
      const rule = rules[filterKeys[i]];
      filtered = rule.filter(filtered, filterData);
    }
    return filtered;
  }
  waiters(data: IFilter<Waiter>) {
    return this.filter(data, this.wRules) as Waiter[];
  }
  victual(data: IFilter<Victual>) {
    return this.filter(data, this.vRules) as Victual[];
  }
  categories(data: IFilter<Category>): Category[] {
    return this.filter(data, this.cRules) as Category[];
  }
  orders(data: IFilter<Order>) {
    return this.filter(data, this.oRules) as Order[];
  }
  meal(data: IFilter<Meal>) {
    return this.filter(data, this.mRules) as Meal[];
  }
  tables(data: IFilter<Table>) {
    return this.filter(data, this.tRules) as Table[];
  }
}
