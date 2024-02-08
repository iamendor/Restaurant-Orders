import { Module } from "@nestjs/common";
import { FieldResolver } from "./field.resolver";
import { VictualResolver } from "./victual.resolver";
import { VictualServiceModule } from "../services/victual.service.module";
import { CategoryServiceModule } from "../../category/services/category.service.module";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { IdGuard } from "../../../auth/guard/id.guard";
import { TaskServiceModule } from "../../task/services/task.service.module";

@Module({
  imports: [
    VictualServiceModule,
    CategoryServiceModule,
    FilterModule,
    CacheModule,
    TaskServiceModule,
  ],
  providers: [IdGuard, FieldResolver, VictualResolver],
})
export class VictualResolverModule {}
