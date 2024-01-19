import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealResolver } from "./meal.resolver";
import { MealGuardModule } from "./guard/meal.guard.module";
import { FieldModule } from './field/field.module';
@Module({
  imports: [MealGuardModule, FieldModule],
  providers: [MealResolver, MealService],
  exports: [MealService],
})
export class MealModule {}
