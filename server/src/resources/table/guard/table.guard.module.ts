import { Module } from "@nestjs/common";
import { TableService } from "../services/table.service";
import { TableBaseGuard, TableGuard } from "./table.guard";
import { IdGuard } from "../../../auth/guards/id.guard";

@Module({
  providers: [TableService, TableBaseGuard, IdGuard, TableGuard],
  exports: [TableBaseGuard, IdGuard, TableGuard],
})
export class TableGuardModule {}
