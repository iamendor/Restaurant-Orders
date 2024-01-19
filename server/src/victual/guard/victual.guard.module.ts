import { Module } from "@nestjs/common";
import { VictualService } from "../victual.service";
import { VictualBaseGuard, VictualGuard } from "./victual.guard";
import { IdIntercept } from "../../auth/guards/id";

@Module({
  providers: [VictualService, VictualBaseGuard, IdIntercept, VictualGuard],
  exports: [VictualBaseGuard, IdIntercept, VictualGuard],
})
export class VictualGuardModule {}
