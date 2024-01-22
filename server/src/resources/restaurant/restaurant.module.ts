import { Module } from "@nestjs/common";
import { RestaurantResolverModule } from "./resolvers/restaurant.resolver.module";

@Module({
  imports: [RestaurantResolverModule],
  providers: [],
})
export class RestaurantModule {}
