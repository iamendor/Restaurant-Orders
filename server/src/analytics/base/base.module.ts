import { Module } from "@nestjs/common";
import { AnalyticsResolverModule } from "./resolvers/analytics.resolver.module";

@Module({
  imports: [AnalyticsResolverModule],
})
export class BaseModule {}
