import { Module } from "@nestjs/common";
import { CategoryServiceModule } from "../services/category.service.module";
import { CategoryResolver } from "./category.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { IdGuard } from "../../../auth/guards/id.guard";

@Module({
  imports: [CategoryServiceModule, FilterModule, CacheModule],
  providers: [IdGuard, CategoryResolver, FieldResolver],
})
export class CategoryResolverModule {}
