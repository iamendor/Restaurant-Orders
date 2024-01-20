import { Module } from "@nestjs/common";
import { AuthServiceModule } from "../services/auth.service.module";
import { AuthResolver } from "./auth.resolver";
import { RestaurantServiceModule } from "../../restaurant/services/restaurant.service.module";

@Module({
  imports: [AuthServiceModule, RestaurantServiceModule],
  providers: [AuthResolver],
})
export class AuthResolverModule {}
