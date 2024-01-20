import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { FieldService } from "./field.service";

@Module({
  providers: [MealService, FieldService],
  exports: [MealService, FieldService],
})
export class MealServiceModule {}
