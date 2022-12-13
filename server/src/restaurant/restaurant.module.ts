import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { PrismaModule } from "src/prisma/prisma.module";
import { WaiterModule } from "src/waiter/waiter.module";

@Module({
  imports: [PrismaModule, WaiterModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
