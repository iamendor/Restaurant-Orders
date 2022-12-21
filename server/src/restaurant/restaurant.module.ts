import { Module } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { RestaurantResolver } from "./restaurant.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { AddressModule } from "../address/address.module";

@Module({
  imports: [PrismaModule, AddressModule],
  providers: [RestaurantResolver, RestaurantService],
  exports: [RestaurantService],
})
export class RestaurantModule {}
