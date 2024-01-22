import { Module } from "@nestjs/common";
import { OrderServiceModule } from "../services/order.service.module";
import { OrderGuardModule } from "../guard/order.guard.module";
import { OrderResolver } from "./order.resolver";
import { FieldResolver } from "./field.resolver";
import { SubscriptionModule } from "../../../subscription/subscription.module";

@Module({
  imports: [SubscriptionModule, OrderServiceModule, OrderGuardModule],
  providers: [OrderResolver, FieldResolver],
})
export class OrderResolverModule {}
