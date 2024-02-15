import { Module } from "@nestjs/common";
import { AnalyticsResolver } from "./analytics.resolver";
import { AnalyticsServiceModule } from "../services/analytics.service.module";
import { FieldResolver } from "./field.resolver";
import { CacheModule } from "../../../cache/cache.module";
import { FilterModule } from "../../../filter/filter.module";

@Module({
  imports: [AnalyticsServiceModule, CacheModule, FilterModule],
  providers: [AnalyticsResolver, FieldResolver],
})
export class AnalyticsResolverModule {}
