import { Module } from "@nestjs/common";
import { TableService } from "./table.service";
import { TableResolver } from "./table.resolver";
import { FieldModule } from "./field/field.module";
import { TableGuardModule } from "./guard/table.guard.module";

@Module({
  providers: [TableResolver, TableService],
  exports: [TableService],
  imports: [FieldModule, TableGuardModule],
})
export class TableModule {}
