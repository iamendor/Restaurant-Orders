import { Injectable } from "@nestjs/common";
import { SUCCESS } from "../../../response";

@Injectable()
export class SubscriptionServiceMock {
  invalidateOrders() {
    return SUCCESS;
  }
}
