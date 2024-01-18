import { Module } from "@nestjs/common";
import { RestaurantBaseGuard, RestaurantGuard } from "./restaurant.guard";
import { IdIntercept } from "../../auth/guards/id";
import { RestaurantService } from "../restaurant.service";
import { SecurityService } from "../../security/security.service";

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
