import { Resolver, Subscription } from "@nestjs/graphql";
import { ListenOrder, Order } from "../../../models/order.model";
import { UseGuards } from "@nestjs/common";
import { RID } from "../../../auth/decorators/role.decorator";
import { IdGuard } from "../../../auth/guard/id.guard";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { WAITER, RESTAURANT } from "../../../role";
import { SubscriptionService } from "../../../subscription/services/subscription.service";

@Resolver((of) => Order)
export class OrderSubscriptionResolver {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Subscription(() => [ListenOrder], { resolve: (payload) => payload.orders })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  async listenOrders(@RID() restaurantId: number) {
    return this.subscriptionService.listenOrders(restaurantId);
  }
}
