import { Module } from "@nestjs/common";
import { CategoryServiceModule } from "../services/category.service.module";
import { CategoryGuardModule } from "../guard/category.guard.module";
import { CategoryResolver } from "./category.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [
    CategoryServiceModule,
    CategoryGuardModule,
    FilterModule,
    CacheModule,
  ],
  providers: [CategoryResolver, FieldResolver],
})
export class CategoryResolverModule {}
