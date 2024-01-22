import { Module } from "@nestjs/common";
import { TableGuardModule } from "../guard/table.guard.module";
import { TableServiceModule } from "../services/table.service.module";
import { TableResolver } from "./table.resolver";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [TableGuardModule, TableServiceModule],
  providers: [TableResolver, FieldResolver],
})
export class TableResolverModule {}
