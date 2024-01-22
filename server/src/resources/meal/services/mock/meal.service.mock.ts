import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../../test/helper/mocks";

@Injectable()
export class MealServiceMock {
  meal;
  order;
  constructor() {
    this.meal = getMocks().meal();
    this.order = getMocks().order({
      restaurantId: 1,
      victualId: 1,
      tableId: 1,
      waiterId: 1,
    });
  }

  getOrdersOfTable() {
    return {
      restaurantId: 1,
      restaurant: {
        currency: {
          id: 1,
        },
      },
      orders: [this.order],
    };
  }

  clearTable() {
    return;
  }

  formatTable() {
    return {
      sorted: this.getOrdersOfTable().orders,
      start: this.meal.start,
      end: this.meal.end,
      waiterId: 1,
      total: this.meal.total,
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
