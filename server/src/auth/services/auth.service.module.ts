import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RestaurantServiceModule } from "../../resources/restaurant/services/restaurant.service.module";
import { WaiterServiceModule } from "../../resources/waiter/services/waiter.service.module";
import { SecurityModule } from "../../security/security.module";

@Module({
  imports: [SecurityModule, RestaurantServiceModule, WaiterServiceModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthServiceModule {}
