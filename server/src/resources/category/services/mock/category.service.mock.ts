import { Injectable } from "@nestjs/common";
import { mockCategory } from "../../../../../test/helper/mock.unit";

@Injectable()
export class CategoryServiceMock {
  category;
  SUCCESS = "success";
  constructor() {
    this.category = mockCategory;
  }

  create(data) {
    return data;
  }

  createMany() {
    return { message: this.SUCCESS };
  }

  update({ where, update }) {
    this.category;
    return { ...this.category, ...where, ...update };
  }

  delete() {
    return { message: this.SUCCESS };
  }

  find(where) {
    return { ...this.category, ...where, restaurantId: 1 };
  }

  list() {
    return [1, 2].map(() => this.category);
  }

  validate() {
    return true;
  }
}
