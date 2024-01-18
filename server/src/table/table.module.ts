import { Module } from "@nestjs/common";
import { TableService } from "./table.service";
import { TableResolver } from "./table.resolver";
import { FieldModule } from './field/field.module';

@Module({
  providers: [TableResolver, TableService],
  exports: [TableService],
  imports: [FieldModule],
})
export class TableModule {}
