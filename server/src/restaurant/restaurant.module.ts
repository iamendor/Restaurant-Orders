import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { FieldModule } from "./field/field.module";
import { SecurityModule } from "../security/security.module";
import { RestaurantGuardModule } from "./guard/restaurant.guard.module";

@Module({
  imports: [RestaurantGuardModule, FieldModule, SecurityModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
