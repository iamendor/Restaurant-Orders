import { Module } from "@nestjs/common";
import { AddressModule } from "./address/address.module";
import { CategoryModule } from "./category/category.module";
import { CurrencyModule } from "./currency/currency.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { TableModule } from "./table/table.module";
import { VictualModule } from "./victual/victual.module";
import { WaiterModule } from "./waiter/waiter.module";
import { OpenHourModule } from "./openhour/openhour.module";
import { OrderModule } from "./order/order.module";
import { MealModule } from "./meal/meal.module";
import { TaskModule } from "./task/task.module";

@Module({
  imports: [
    AddressModule,
    CategoryModule,
    CurrencyModule,
    RestaurantModule,
    TableModule,
    VictualModule,
    WaiterModule,
    OpenHourModule,
    OrderModule,
    MealModule,
    TaskModule,
  ],
})
export class ResourceModule {}
