import { Module } from "@nestjs/common";
import { RestaurantGuard } from "./restaurant.guard";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RestaurantService } from "../services/restaurant.service";
import { SecurityService } from "../../../security/services/security.service";

@Module({
  providers: [SecurityService, RestaurantService, IdGuard, RestaurantGuard],
  exports: [SecurityService, RestaurantService, IdGuard, RestaurantGuard],
})
export class RestaurantGuardModule {}
