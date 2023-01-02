import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { AddressModule } from "../address/address.module";
import { TableModule } from "../table/table.module";
import { WaiterModule } from "../waiter/waiter.module";
import { CategoryModule } from "../category/category.module";
import { OrderModule } from "../order/order.module";
import { VictualModule } from "../victual/victual.module";
import { MealModule } from "../meal/meal.module";
import { CurrencyModule } from "../currency/currency.module";

@Module({
  imports: [
    AddressModule,
    TableModule,
    WaiterModule,
    CategoryModule,
    VictualModule,
    OrderModule,
    MealModule,
    CurrencyModule
  ],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
