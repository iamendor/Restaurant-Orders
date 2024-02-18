import { Injectable } from "@nestjs/common";
import { PubSub } from "graphql-subscriptions";
import { ListenOrder } from "../../models/resources/order.model";

@Injectable()
export class SubscriptionService {
  pubSub: PubSub;
  constructor() {
    this.pubSub = new PubSub();
  }
  async invalidateOrders(restaurantId: number, ...orders: ListenOrder[]) {
    this.pubSub.publish(`orders:${restaurantId}`, { orders: [...orders] });
  }
  listenOrders(restaurantId: number) {
    return this.pubSub.asyncIterator(`orders:${restaurantId}`);
  }
}
