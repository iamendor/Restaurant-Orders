import { Module } from "@nestjs/common";
import { RestaurantBaseGuard, RestaurantGuard } from "./restaurant.guard";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RestaurantService } from "../services/restaurant.service";
import { SecurityService } from "../../../security/services/security.service";

@Module({
  providers: [
    SecurityService,
    RestaurantService,
    RestaurantBaseGuard,
    IdIntercept,
    RestaurantGuard,
  ],
  exports: [
    SecurityService,
    RestaurantService,
    RestaurantBaseGuard,
    IdIntercept,
    RestaurantGuard,
  ],
})
export class RestaurantGuardModule {}
