import { Module } from "@nestjs/common";
import { CreateAnalyticsService } from "./analytics.create.service";
import { ReadAnalyticsService } from "./analytics.read.service";
import { FieldService } from "./field.service";

@Module({
  providers: [CreateAnalyticsService, ReadAnalyticsService, FieldService],
  exports: [CreateAnalyticsService, ReadAnalyticsService, FieldService],
})
export class AnalyticsServiceModule {}
