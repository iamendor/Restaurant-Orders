import { Module } from "@nestjs/common";
import { BaseModule } from "./base/base.module";
import { WaiterOfTheDayModule } from "./waiter/waiter.module";
import { PopularProductModule } from "./product/product.module";

@Module({
  imports: [BaseModule, WaiterOfTheDayModule, PopularProductModule],
})
export class AnalyticsModule {}
