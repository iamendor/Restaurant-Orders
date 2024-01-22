import { Module } from "@nestjs/common";
import { RestaurantModule } from "./resources/restaurant/restaurant.module";
import { AuthModule } from "./auth/auth.module";
import { WaiterModule } from "./resources/waiter/waiter.module";
import { AddressModule } from "./resources/address/address.module";
import { TableModule } from "./resources/table/table.module";
import { CategoryModule } from "./resources/category/category.module";
import { VictualModule } from "./resources/victual/victual.module";
import { OrderModule } from "./resources/order/order.module";
import { CoreModule } from "./core/core.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { MealModule } from "./resources/meal/meal.module";
import { PrismaModule } from "./prisma/prisma.module";
import { CurrencyModule } from "./resources/currency/currency.module";
import { SecurityModule } from "./security/security.module";

@Module({
  imports: [
    PrismaModule,
    CoreModule,
    AuthModule,
    RestaurantModule,
    WaiterModule,
    AddressModule,
    TableModule,
    CategoryModule,
    VictualModule,
    OrderModule,
    SubscriptionModule,
    MealModule,
    CurrencyModule,
    SecurityModule,
  ],
})
export class AppModule {}
