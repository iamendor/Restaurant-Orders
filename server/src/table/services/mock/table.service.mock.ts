import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../test/helper/mocks";

@Injectable()
export class TableServiceMock {
  private mockTable;
  private SUCCESS = "success";
  constructor() {
    this.mockTable = { ...getMocks().table(), id: 1 };
  }
  create(data) {
    return { ...data, id: 1 };
  }
  createMany() {
    return { message: this.SUCCESS };
  }
  update({ where, update }) {
    return {
      ...this.mockTable,
      ...where,
      ...update,
    };
  }
  list() {
    return [1, 2, 3].map((i) => this.mockTable);
  }
  find(where) {
    return { ...where, ...this.mockTable };
  }
  delete() {
    return { message: this.SUCCESS };
  }
}
