import { Injectable } from "@nestjs/common";
import { mockProduct } from "../../../../../test/helper/mock.unit";

@Injectable()
export class ProductServiceMock {
  product;
  SUCCESS = "success";
  constructor() {
    this.product = mockProduct;
  }

  create(data) {
    return data;
  }

  createMany() {
    return { message: this.SUCCESS };
  }

  update({ where, update }) {
    return { ...this.product, ...where, ...update };
  }

  delete() {
    return { message: this.SUCCESS };
  }

  list() {
    return [1, 2].map(() => this.product);
  }

  find(where) {
    return { ...this.product, ...where };
  }
  validate() {
    return true;
  }
}
