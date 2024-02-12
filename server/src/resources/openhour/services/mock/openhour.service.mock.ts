import { Injectable } from "@nestjs/common";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../../models/openhour.model";
import { Success } from "../../../../models/success.model";
import { mockOpenHour } from "../../../../../test/helper/mock.unit";
import { SUCCESS } from "../../../../response";

@Injectable()
export class OpenHourServiceMock {
  openHour: OpenHour;
  constructor() {
    this.openHour = mockOpenHour;
  }

  create(data: CreateOpenHour): OpenHour {
    return { ...this.openHour, ...data, restaurantId: 1, id: 1 };
  }

  createMany(data: CreateOpenHour[]): Success {
    return SUCCESS;
  }

  list(restaurantId: number) {
    return [1, 2].map((i) => ({ ...this.openHour, id: 1, restaurantId }));
  }

  update({ where, update }: UpdateOpenHour) {
    return { ...this.openHour, ...where, ...update, restaurantId: 1 };
  }

  find(where: WhereOpenHour) {
    return { ...this.openHour, ...where, restaurantId: 1 };
  }

  delete() {
    return SUCCESS;
  }
  isAlreadyCreated() {
    return false;
  }
  validate() {
    return true;
  }
}
