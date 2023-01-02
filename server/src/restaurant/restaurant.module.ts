import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { AddressModule } from "../address/address.module";
import { TableModule } from "../table/table.module";
import { WaiterModule } from "../waiter/waiter.module";
import { CategoryModule } from "../category/category.module";
import { OrderModule } from "../order/order.module";
import { VictualModule } from "../victual/victual.module";
import { MealModule } from "../meal/meal.module";

@Module({
  imports: [
    PrismaModule,
    AddressModule,
    TableModule,
    WaiterModule,
    CategoryModule,
    VictualModule,
    OrderModule,
    MealModule,
  ],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
