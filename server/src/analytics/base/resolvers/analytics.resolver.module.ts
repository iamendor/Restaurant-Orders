import { Module } from "@nestjs/common";
import { AnalyticsResolver } from "./analytics.resolver";
import { AnalyticsServiceModule } from "../services/analytics.service.module";
import { FieldResolver } from "./field.resolver";
import { CacheModule } from "../../../cache/cache.module";
import { FilterModule } from "../../../filter/filter.module";
import { AnalyticsSummaryResolver } from "./analytics.summary.resolver";
import { AnalyticsHelperModule } from "../../services/analytics.helper.module";
import { IncomeServiceModule } from "../../income/services/income.service.module";
import { PopularProductServiceModule } from "../../product/services/product.service.module";
import { WaiterOfTheDayServiceModule } from "../../waiter/services/waiter.service.module";

@Module({
  imports: [
    AnalyticsServiceModule,
    CacheModule,
    FilterModule,
    AnalyticsHelperModule,
    IncomeServiceModule,
    PopularProductServiceModule,
    WaiterOfTheDayServiceModule,
  ],
  providers: [AnalyticsResolver, AnalyticsSummaryResolver, FieldResolver],
})
export class AnalyticsResolverModule {}
