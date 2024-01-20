import { Module } from "@nestjs/common";
import { RestaurantResolver } from "./restaurant.resolver";
import { RestaurantServiceModule } from "../services/restaurant.service.module";
import { RestaurantGuardModule } from "../guard/restaurant.guard.module";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [RestaurantServiceModule, RestaurantGuardModule],
  providers: [RestaurantResolver, FieldResolver],
})
export class RestaurantResolverModule {}
