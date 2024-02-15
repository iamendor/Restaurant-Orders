import { Global, Module } from "@nestjs/common";
import { PrismaAnalyticsService } from "./services/prisma.analytics.service";
@Global()
@Module({
  providers: [PrismaAnalyticsService],
  exports: [PrismaAnalyticsService],
})
export class PrismaAnalyticsModule {}
