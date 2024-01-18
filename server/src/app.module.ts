import { Module } from "@nestjs/common";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { AuthModule } from "./auth/auth.module";
import { WaiterModule } from "./waiter/waiter.module";
import { AddressModule } from "./address/address.module";
import { TableModule } from "./table/table.module";
import { CategoryModule } from "./category/category.module";
import { VictualModule } from "./victual/victual.module";
import { OrderModule } from "./order/order.module";
import { CoreModule } from "./core/core.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { MealModule } from "./meal/meal.module";
import { PrismaModule } from "./prisma/prisma.module";
import { CurrencyModule } from './currency/currency.module';
import { SecurityModule } from './security/security.module';

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
