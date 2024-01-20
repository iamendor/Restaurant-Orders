import { Module } from "@nestjs/common";
import { TableService } from "../services/table.service";
import { TableBaseGuard, TableGuard } from "./table.guard";
import { IdIntercept } from "../../auth/guards/id.guard";

@Module({
  providers: [TableService, TableBaseGuard, IdIntercept, TableGuard],
  exports: [TableBaseGuard, IdIntercept, TableGuard],
})
export class TableGuardModule {}
