import { Module } from "@nestjs/common";
import { RestaurantBaseGuard, RestaurantGuard } from "./restaurant.guard";
import { IdGuard } from "../../../auth/guards/id.guard";
import { RestaurantService } from "../services/restaurant.service";
import { SecurityService } from "../../../security/services/security.service";

@Module({
  providers: [
    SecurityService,
    RestaurantService,
    RestaurantBaseGuard,
    IdGuard,
    RestaurantGuard,
  ],
  exports: [
    SecurityService,
    RestaurantService,
    RestaurantBaseGuard,
    IdGuard,
    RestaurantGuard,
  ],
})
export class RestaurantGuardModule {}
