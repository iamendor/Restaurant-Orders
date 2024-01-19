import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderResolver } from "./order.resolver";
import { SubscriptionModule } from "../subscription/subscription.module";
import { OrderGuardModule } from "./guard/order.guard.module";
import { FieldModule } from './field/field.module';

@Module({
  imports: [SubscriptionModule, OrderGuardModule, FieldModule],
  providers: [OrderResolver, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
