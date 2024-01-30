import { Injectable } from "@nestjs/common";
import {
  CreateOpenHour,
  OpenHour,
  UpdateOpenHour,
  WhereOpenHour,
} from "../../../../models/openhour.model";
import { getMocks } from "../../../../../test/helper/mocks";
import { Success } from "../../../../models/success.model";

@Injectable()
export class OpenHourServiceMock {
  openHour: OpenHour;
  constructor() {
    this.openHour = getMocks().openingHour();
  }

  create(data: CreateOpenHour): OpenHour {
    return { ...data, restaurantId: 1, id: 1 };
  }

  createMany(data: CreateOpenHour[]): Success {
    return { message: "success" };
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
    return { message: "success" };
  }
}
