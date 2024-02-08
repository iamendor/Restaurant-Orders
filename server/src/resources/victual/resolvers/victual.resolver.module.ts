import { Module } from "@nestjs/common";
import { FieldResolver } from "./field.resolver";
import { VictualResolver } from "./victual.resolver";
import { VictualServiceModule } from "../services/victual.service.module";
import { CategoryServiceModule } from "../../category/services/category.service.module";
import { VictualGuardModule } from "../guard/victual.guard.module";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [
    VictualServiceModule,
    CategoryServiceModule,
    VictualGuardModule,
    FilterModule,
    CacheModule,
  ],
  providers: [FieldResolver, VictualResolver],
})
export class VictualResolverModule {}
