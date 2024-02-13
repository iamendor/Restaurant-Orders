import { Module } from "@nestjs/common";
import { AuthServiceModule } from "../services/auth.service.module";
import { AuthResolver } from "./auth.resolver";
import { RestaurantServiceModule } from "../../resources/restaurant/services/restaurant.service.module";
import { TaskServiceModule } from "../../resources/task/services/task.service.module";
import { CurrencyServiceModule } from "../../resources/currency/services/currency.service.module";

@Module({
  imports: [
    AuthServiceModule,
    RestaurantServiceModule,
    TaskServiceModule,
    CurrencyServiceModule,
  ],
  providers: [AuthResolver],
})
export class AuthResolverModule {}
