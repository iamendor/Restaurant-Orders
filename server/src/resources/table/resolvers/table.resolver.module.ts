import { Module } from "@nestjs/common";
import { TableGuardModule } from "../guard/table.guard.module";
import { TableServiceModule } from "../services/table.service.module";
import { TableResolver } from "./table.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [TableGuardModule, TableServiceModule, FilterModule, CacheModule],
  providers: [TableResolver, FieldResolver],
})
export class TableResolverModule {}
