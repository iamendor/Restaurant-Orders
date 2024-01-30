import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { OpenHourResolver } from "./openhour.resolver";

@Module({
  providers: [OpenHourService, OpenHourResolver],
})
export class OpenHourResolverModule {}
