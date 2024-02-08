import { Module } from "@nestjs/common";
import { MealServiceModule } from "../services/meal.service.module";
import { MealGuardModule } from "../guard/meal.guard.module";
import { MealResolver } from "./meal.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";

@Module({
  imports: [MealServiceModule, MealGuardModule, FilterModule, CacheModule],
  providers: [MealResolver, FieldResolver],
})
export class MealResolverModule {}
