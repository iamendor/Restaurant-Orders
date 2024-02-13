import { Module } from "@nestjs/common";
import { PrismaStaticModule } from "./static/prisma.static.module";
import { PrismaMainModule } from "./main/prisma.main.module";
import { PrismaAnalyticsModule } from "./analytics/prisma.analytics.module";

@Module({
  imports: [PrismaStaticModule, PrismaMainModule, PrismaAnalyticsModule],
})
export class PrismaModule {}
