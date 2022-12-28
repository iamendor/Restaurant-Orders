import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealResolver } from "./meal.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryModule } from "../category/category.module";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [PrismaModule, CategoryModule, WaiterModule],
  providers: [MealResolver, MealService],
  exports: [MealService],
})
export class MealModule {}
