import { Module } from "@nestjs/common";
import { FieldResolver } from "./field.resolver";
import { AddressModule } from "../../address/address.module";
import { CategoryModule } from "../../category/category.module";
import { CurrencyModule } from "../../currency/currency.module";
import { MealModule } from "../../meal/meal.module";
import { OrderModule } from "../../order/order.module";
import { TableModule } from "../../table/table.module";
import { VictualModule } from "../../victual/victual.module";
import { WaiterModule } from "../../waiter/waiter.module";

@Module({
  imports: [
    AddressModule,
    TableModule,
    WaiterModule,
    CategoryModule,
    VictualModule,
    OrderModule,
    MealModule,
    CurrencyModule,
  ],
  providers: [FieldResolver],
  exports: [FieldResolver],
})
export class FieldModule {}
