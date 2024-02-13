import { Global, Module } from "@nestjs/common";
import { PrismaStaticService } from "../static/services/prisma.static.service";
@Global()
@Module({
  providers: [PrismaStaticService],
})
export class PrismaAnalyticsModule {}
