import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { JwtModule } from "@nestjs/jwt";
import { Config } from "../config";
import { ConfigService } from "@nestjs/config";
import { RestaurantModule } from "../restaurant/restaurant.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [
    RestaurantModule,
    WaiterModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: Config.getJwtConfig,
    }),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
