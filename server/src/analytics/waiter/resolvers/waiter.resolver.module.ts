import { Module } from "@nestjs/common";
import { WaiterOfTheDayServiceModule } from "../services/waiter.service.module";
import { FieldResolver } from "./field.resolver";
import { SummaryFieldResolver } from "./field.summary.resolver";

@Module({
  imports: [WaiterOfTheDayServiceModule],
  providers: [FieldResolver, SummaryFieldResolver],
})
export class WaiterOfTheDayResolverModule {}
