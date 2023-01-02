import { Module } from "@nestjs/common";
import { WaiterService } from "./waiter.service";
import { WaiterResolver } from "./waiter.resolver";

@Module({
  providers: [WaiterService, WaiterResolver],
  exports: [WaiterService],
})
export class WaiterModule {}
