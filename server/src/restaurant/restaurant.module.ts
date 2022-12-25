import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { AddressModule } from "../address/address.module";
import { TableModule } from "../table/table.module";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [PrismaModule, AddressModule, TableModule, WaiterModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
