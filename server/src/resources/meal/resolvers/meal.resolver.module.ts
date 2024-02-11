import { Module } from "@nestjs/common";
import { MealServiceModule } from "../services/meal.service.module";
import { MealGuardModule } from "../guard/meal.guard.module";
import { MealResolver } from "./meal.resolver";
import { FieldResolver } from "./field.resolver";
import { FilterModule } from "../../../filter/filter.module";
import { CacheModule } from "../../../cache/cache.module";
import { TaskServiceModule } from "../../task/services/task.service.module";
import { TableServiceModule } from "../../table/services/table.service.module";

@Module({
  imports: [
    MealServiceModule,
    TableServiceModule,
    MealGuardModule,
    FilterModule,
    CacheModule,
    TaskServiceModule,
  ],
  providers: [MealResolver, FieldResolver],
})
export class MealResolverModule {}
