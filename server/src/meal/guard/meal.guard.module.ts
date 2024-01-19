import { Module } from "@nestjs/common";
import { MealService } from "../meal.service";
import { IdIntercept } from "../../auth/guards/id";
import { MealBaseGuard, MealGuard } from "./meal.guard";

@Module({
  providers: [MealService, IdIntercept, MealBaseGuard, MealGuard],
  exports: [MealService, IdIntercept, MealBaseGuard, MealGuard],
})
export class MealGuardModule {}
