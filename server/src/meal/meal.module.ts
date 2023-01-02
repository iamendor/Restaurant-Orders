import { Module } from "@nestjs/common";
import { MealService } from "./meal.service";
import { MealResolver } from "./meal.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [PrismaModule, WaiterModule],
  providers: [MealResolver, MealService],
  exports: [MealService],
})
export class MealModule {}
