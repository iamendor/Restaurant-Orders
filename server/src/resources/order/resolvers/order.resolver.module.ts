import { Module } from "@nestjs/common";
import { OrderServiceModule } from "../services/order.service.module";
import { OrderResolver } from "./order.resolver";
import { FieldResolver } from "./field.resolver";
import { SubscriptionModule } from "../../../subscription/subscription.module";
import { FilterModule } from "../../../filter/filter.module";
import { OpenGuardModule } from "../../openhour/guard/open.guard.module";
import { CacheModule } from "../../../cache/cache.module";
import { TaskServiceModule } from "../../task/services/task.service.module";

@Module({
  imports: [
    SubscriptionModule,
    OrderServiceModule,
    FilterModule,
    OpenGuardModule,
    CacheModule,
    TaskServiceModule,
  ],
  providers: [OrderResolver, FieldResolver],
})
export class OrderResolverModule {}
