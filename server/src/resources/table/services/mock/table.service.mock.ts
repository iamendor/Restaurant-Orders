import { Injectable } from "@nestjs/common";
import { mockTable } from "../../../../../test/helper/mock.unit";

@Injectable()
export class TableServiceMock {
  private table;
  private SUCCESS = "success";
  constructor() {
    this.table = mockTable;
  }
  create(data) {
    return { ...data, id: 1 };
  }
  createMany() {
    return { message: this.SUCCESS };
  }
  update({ where, update }) {
    this.table = {
      ...this.table,
      ...where,
      ...update,
    };
    return {
      ...this.table,
      ...where,
      ...update,
    };
  }
  list() {
    return [1, 2, 3].map((i) => this.table);
  }
  find(where) {
    return { ...where, ...this.table };
  }
  delete() {
    return { message: this.SUCCESS };
  }
  validate() {
    return true;
  }
}
