import { Injectable } from "@nestjs/common";
import { mockVictual } from "../../../../../test/helper/mock.unit";

@Injectable()
export class VictualServiceMock {
  victual;
  SUCCESS = "success";
  constructor() {
    this.victual = mockVictual;
  }

  create(data) {
    return data;
  }

  createMany() {
    return { message: this.SUCCESS };
  }

  update({ where, update }) {
    return { ...this.victual, ...where, ...update };
  }

  delete() {
    return { message: this.SUCCESS };
  }

  list() {
    return [1, 2].map(() => this.victual);
  }

  find(where) {
    return { ...this.victual, ...where };
  }
  validate() {
    return true;
  }
}
