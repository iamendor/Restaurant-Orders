import { Module } from "@nestjs/common";
import { OpenHourService } from "../services/openhour.service";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { OpenGuard, OpenGuardBase } from "./open.guard";

@Module({
  providers: [OpenHourService, IdIntercept, OpenGuardBase, OpenGuard],
  exports: [IdIntercept, OpenGuardBase, OpenGuard],
})
export class OpenGuardModule {}
