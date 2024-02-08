import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { IdGuard } from "../../../auth/guards/id.guard";
import { OpenGuard, OpenGuardBase } from "./open.guard";

@Module({
  providers: [OpenHourService, IdGuard, OpenGuardBase, OpenGuard],
  exports: [IdGuard, OpenGuardBase, OpenGuard],
})
export class OpenGuardModule {}
