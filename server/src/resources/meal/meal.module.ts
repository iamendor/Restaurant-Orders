import { Module } from "@nestjs/common";
import { MealResolverModule } from "./resolvers/meal.resolver.module";
@Module({
  imports: [MealResolverModule],
})
export class MealModule {}
