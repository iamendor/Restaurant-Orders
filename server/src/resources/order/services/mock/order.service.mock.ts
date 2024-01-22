import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../../test/helper/mocks";

@Injectable()
export class OrderServiceMock {
  order;
  SUCCESS = "success";
  constructor() {
    this.order = { ...getMocks().order, id: 1 };
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

  find(where) {
    return { ...this.order, ...where };
  }
}
