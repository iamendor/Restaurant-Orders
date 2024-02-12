import { Module } from "@nestjs/common";
import { CategoryServiceModule } from "../services/category.service.module";
import { CategoryResolver } from "./category.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { IdGuard } from "../../../auth/guard/id.guard";
import { TaskServiceModule } from "../../task/services/task.service.module";
import { AddRID } from "../../../pipes/rid.pipe";

@Module({
  imports: [
    CategoryServiceModule,
    FilterModule,
    CacheModule,
    TaskServiceModule,
  ],
  providers: [IdGuard, CategoryResolver, FieldResolver],
})
export class CategoryResolverModule {}
