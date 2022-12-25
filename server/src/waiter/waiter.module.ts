import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterService } from "./waiter.service";
import { WaiterResolver } from "./waiter.resolver";

@Module({
  imports: [PrismaModule],
  providers: [WaiterService, WaiterResolver],
  exports: [WaiterService],
})
export class WaiterModule {}
