import { Module } from "@nestjs/common";
import { TableService } from "../table.service";
import { TableBaseGuard, TableGuard } from "./table.guard";
import { IdIntercept } from "../../auth/guards/id";

@Module({
  providers: [TableService, TableBaseGuard, IdIntercept, TableGuard],
  exports: [TableBaseGuard, IdIntercept, TableGuard],
})
export class TableGuardModule {}
