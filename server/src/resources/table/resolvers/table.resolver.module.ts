import { Module } from "@nestjs/common";
import { TableServiceModule } from "../services/table.service.module";
import { TableResolver } from "./table.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { IdGuard } from "../../../auth/guards/id.guard";

@Module({
  imports: [TableServiceModule, FilterModule, CacheModule],
  providers: [IdGuard, TableResolver, FieldResolver],
})
export class TableResolverModule {}
