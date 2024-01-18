import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { FieldModule } from "./field/field.module";
import { SecurityModule } from "../security/security.module";

@Module({
  imports: [FieldModule, SecurityModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
