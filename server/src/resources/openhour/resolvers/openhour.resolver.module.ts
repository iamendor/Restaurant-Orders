import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { OpenHourResolver } from "./openhour.resolver";
import { CacheModule } from "../../../cache/cache.module";
import { TaskServiceModule } from "../../task/services/task.service.module";
import { IdGuard } from "../../../auth/guard/id.guard";

@Module({
  imports: [CacheModule, TaskServiceModule],
  providers: [OpenHourService, IdGuard, OpenHourResolver],
})
export class OpenHourResolverModule {}
