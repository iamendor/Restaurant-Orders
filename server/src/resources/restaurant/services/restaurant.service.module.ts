import { Module } from "@nestjs/common";
import { SecurityService } from "../../../security/services/security.service";
import { RestaurantService } from "./restaurant.service";
import { FieldService } from "./field.service";
import { CurrencyServiceModule } from "../../currency/services/currency.service.module";

@Module({
  imports: [CurrencyServiceModule],
  providers: [SecurityService, RestaurantService, FieldService],
  exports: [RestaurantService, FieldService],
})
export class RestaurantServiceModule {}
