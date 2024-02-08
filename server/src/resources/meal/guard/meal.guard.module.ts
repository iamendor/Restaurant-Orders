import { Module } from "@nestjs/common";
import { MealService } from "../services/meal.service";
import { IdGuard } from "../../../auth/guards/id.guard";
import { MealBaseGuard, MealGuard } from "./meal.guard";

@Module({
  providers: [MealService, IdGuard, MealBaseGuard, MealGuard],
  exports: [MealService, IdGuard, MealBaseGuard, MealGuard],
})
export class MealGuardModule {}
