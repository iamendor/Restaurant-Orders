import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriptionServiceMock {
  invalidateOrders() {
    return { message: "success" };
  }
}
