import { Injectable } from "@nestjs/common";
import { SecurityService } from "../../../../security/services/security.service";
import { mockWaiter } from "../../../../../test/helper/mock.unit";

@Injectable()
export class WaiterServiceMock {
  waiter;
  SUCCESS = "success";
  constructor(private readonly securityService: SecurityService) {
    this.waiter = {
      ...mockWaiter,
      id: 1,
      password: securityService.hash(mockWaiter.password),
    };
  }
  create(data) {
    return data;
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
  validate() {
    return true;
  }
}
