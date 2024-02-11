import { Injectable } from "@nestjs/common";
import { mockOrder } from "../../../../../test/helper/mock.unit";

@Injectable()
export class OrderServiceMock {
  order;
  SUCCESS = "success";
  constructor() {
    this.order = mockOrder;
  }

  create(data) {
    return { ...this.order, ...data };
  }

  createMany() {
    return { message: this.SUCCESS };
  }

  update({ where, update }) {
    return { ...this.order, ...where, ...update };
  }

  delete() {
    return { message: this.SUCCESS };
  }

  list() {
    return [this.order];
  }

  listLatest() {
    return [this.order];
  }

  find(where) {
    return { ...this.order, ...where };
  }
  validate() {
    return true;
  }
}
