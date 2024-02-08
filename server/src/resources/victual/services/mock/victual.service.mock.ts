import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../../test/helper/mocks";

@Injectable()
export class VictualServiceMock {
  category;
  SUCCESS = "success";
  constructor() {
    this.category = { ...getMocks().category, id: 1 };
  }

  create(data) {
    return data;
  }

  createMany() {
    return { message: this.SUCCESS };
  }

  update({ where, update }) {
    return { ...this.category, ...where, ...update };
  }

  delete() {
    return { message: this.SUCCESS };
  }

  list() {
    return [1, 2].map(() => this.category);
  }

  find(where) {
    return { ...this.category, ...where };
  }
}
