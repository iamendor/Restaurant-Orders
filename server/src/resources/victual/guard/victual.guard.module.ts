import { Module } from "@nestjs/common";
import { VictualService } from "../services/victual.service";
import { VictualBaseGuard, VictualGuard } from "./victual.guard";
import { IdGuard } from "../../../auth/guards/id.guard";

@Module({
  providers: [VictualService, VictualBaseGuard, IdGuard, VictualGuard],
  exports: [VictualBaseGuard, IdGuard, VictualGuard],
})
export class VictualGuardModule {}
