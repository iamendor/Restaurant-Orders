import { Injectable } from "@nestjs/common";
import { mockMeal, mockOrder } from "../../../../../test/helper/mock.unit";

@Injectable()
export class MealServiceMock {
  meal;
  order;
  constructor() {
    this.meal = mockMeal;
    this.order = mockOrder;
  }

  clearTable() {
    return;
  }

  formatTable() {
    return {
      ...this.meal,
      sorted: [this.order],
    };
  }

  create(data) {
    return data;
  }

  list() {
    return [this.meal];
  }

  find(where) {
    return { ...this.meal, ...where };
  }

  delete() {
    return { message: "success" };
  }
}
