import { Module } from "@nestjs/common";
import { MealServiceModule } from "../services/meal.service.module";
import { MealGuardModule } from "../guard/meal.guard.module";
import { MealResolver } from "./meal.resolver";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [MealServiceModule, MealGuardModule],
  providers: [MealResolver, FieldResolver],
})
export class MealResolverModule {}
