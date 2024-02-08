import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { OpenHourResolver } from "./openhour.resolver";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [CacheModule],
  providers: [OpenHourService, OpenHourResolver],
})
export class OpenHourResolverModule {}
