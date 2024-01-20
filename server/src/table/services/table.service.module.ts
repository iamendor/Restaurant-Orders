import { Module } from "@nestjs/common";
import { TableService } from "./table.service";
import { FieldService } from "./field.service";

@Module({
  providers: [TableService, FieldService],
  exports: [TableService, FieldService],
})
export class TableServiceModule {}
