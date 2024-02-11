import { Module } from "@nestjs/common";
import { MealService } from "../services/meal.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { CreateMealGuard, MealGuard } from "./meal.guard";
import { TableService } from "../../table/services/table.service";

@Module({
  providers: [MealService, IdGuard, MealGuard, CreateMealGuard, TableService],
  exports: [MealService, IdGuard, MealGuard, TableService],
})
export class MealGuardModule {}
