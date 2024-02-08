import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { OpenGuard } from "./open.guard";

@Module({
  providers: [OpenHourService, IdGuard, OpenGuard],
  exports: [IdGuard, OpenGuard, OpenHourService],
})
export class OpenGuardModule {}
