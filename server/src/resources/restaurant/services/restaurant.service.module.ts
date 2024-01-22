import { Module } from "@nestjs/common";
import { SecurityService } from "../../../security/services/security.service";
import { RestaurantService } from "./restaurant.service";
import { FieldService } from "./field.service";

@Module({
  providers: [SecurityService, RestaurantService, FieldService],
  exports: [RestaurantService, FieldService],
})
export class RestaurantServiceModule {}
