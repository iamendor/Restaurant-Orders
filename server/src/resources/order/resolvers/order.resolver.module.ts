import { Module } from "@nestjs/common";
import { OrderServiceModule } from "../services/order.service.module";
import { OrderResolver } from "./order.resolver";
import { FieldResolver } from "./field.resolver";
import { SubscriptionModule } from "../../../subscription/subscription.module";
import { FilterModule } from "../../../filter/filter.module";
import { OpenGuardModule } from "../../openhour/guard/open.guard.module";
import { CacheModule } from "../../../cache/cache.module";
import { TaskServiceModule } from "../../task/services/task.service.module";
import { OrderSubscriptionResolver } from "./order.subscription.resolver";
import { TableServiceModule } from "../../table/services/table.service.module";
import { VictualServiceModule } from "../../victual/services/victual.service.module";

@Module({
  imports: [
    SubscriptionModule,
    OrderServiceModule,
    FilterModule,
    OpenGuardModule,
    CacheModule,
    TaskServiceModule,
    TableServiceModule,
    VictualServiceModule,
  ],
  providers: [OrderResolver, OrderSubscriptionResolver, FieldResolver],
})
export class OrderResolverModule {}
