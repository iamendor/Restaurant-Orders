import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterService } from "./waiter.service";
import { WaiterResolver } from "./waiter.resolver";
import { RestaurantModule } from "../restaurant/restaurant.module";

@Module({
  imports: [PrismaModule, RestaurantModule],
  providers: [WaiterService, WaiterResolver],
  exports: [WaiterService],
})
export class WaiterModule {}
