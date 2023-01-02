import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { RestaurantModule } from "../restaurant/restaurant.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [RestaurantModule, WaiterModule],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
