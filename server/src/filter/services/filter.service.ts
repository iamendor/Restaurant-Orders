import { Injectable } from "@nestjs/common";
import { WaiterRules } from "../rules/waiters.rule";
import { Waiter } from "../../models/resources/waiter.model";
import { Victual } from "../../models/resources/victual.model";
import { Category } from "../../models/resources/category.model";
import { Order } from "../../models/resources/order.model";
import { Meal } from "../../models/resources/meal.model";
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
  TaskFilter,
  VictualFilter,
  WaiterFilter,
} from "../../models/resources/filter.model";
import { Table } from "../../models/resources/table.model";
import { ITableFilter } from "../interfaces/table.interface";
import { TableRules } from "../rules/tables.rule";
import { ITaskFilter } from "../interfaces/task.interface";
import { TaskRules } from "../rules/tasks.rule";
import { Task } from "../../models/resources/task.model";
import { IAnalyticsFilter } from "../interfaces/analytics/analytics.interface";
import { AnalyticsRules } from "../rules/analytics/analytics.rule";
import { Analytics } from "../../models/analytics/analytics.model";

interface IFilter<T> {
  data: T[];
  filters:
    | WaiterFilter
    | CategoryFilter
    | OrderFilter
    | VictualFilter
    | MealFilter
    | TaskFilter;
}

@Injectable()
export class FilterService {
  private wRules: IWaiterFilter;
  private vRules: IVictualFilter;
  private cRules: ICategoryFilter;
  private oRules: IOrderFilter;
  private mRules: IMealFilter;
  private tRules: ITableFilter;
  private tkRules: ITaskFilter;
  private aRules: IAnalyticsFilter;

  constructor() {
    this.wRules = WaiterRules();
    this.vRules = VictualRules();
    this.cRules = CategoryRules();
    this.oRules = OrderRules();
    this.mRules = MealRules();
    this.tRules = TableRules();
    this.tkRules = TaskRules();
    this.aRules = AnalyticsRules();
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
  victuals(data: IFilter<Victual>) {
    return this.filter(data, this.vRules) as Victual[];
  }
  categories(data: IFilter<Category>): Category[] {
    return this.filter(data, this.cRules) as Category[];
  }
  orders(data: IFilter<Order>) {
    return this.filter(data, this.oRules) as Order[];
  }
  meals(data: IFilter<Meal>) {
    return this.filter(data, this.mRules) as Meal[];
  }
  tables(data: IFilter<Table>) {
    return this.filter(data, this.tRules) as Table[];
  }
  tasks(data: IFilter<Task>) {
    return this.filter(data, this.tkRules) as Task[];
  }
  analytics(data: IFilter<Analytics>) {
    return this.filter(data, this.aRules) as Analytics[];
  }
}
