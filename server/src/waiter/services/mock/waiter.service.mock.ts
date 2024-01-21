import { Injectable } from "@nestjs/common";
import { SecurityService } from "../../../security/services/security.service";
import { getMocks } from "../../../../test/helper/mocks";

@Injectable()
export class WaiterServiceMock {
  waiter;
  SUCCESS = "success";
  constructor(private readonly securityService: SecurityService) {
    this.waiter = {
      ...getMocks().waiter,
      id: 1,
      password: securityService.hash(getMocks().waiter.password),
    };
  }
  create({ data, restaurantId }) {
    return { ...data, restaurantId };
  }
  update({ where, update }) {
    this.waiter = { ...this.waiter, ...update };
    return { ...where, ...update, ...this.waiter };
  }
  updatePassword({ update }) {
    this.waiter.password = this.securityService.hash(update.password);
    return { message: this.SUCCESS };
  }
  find(where) {
    return {
      ...this.waiter,
      ...where,
    };
  }
  list() {
    return [this.waiter];
  }
  delete() {
    return { message: this.SUCCESS };
  }
}
