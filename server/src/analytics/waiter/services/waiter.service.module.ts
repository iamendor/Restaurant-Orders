import { Module } from "@nestjs/common";
import { FieldService } from "./field.service";
import { WaiterOfTheDayService } from "./waiter.service";

@Module({
  providers: [FieldService, WaiterOfTheDayService],
  exports: [FieldService, WaiterOfTheDayService],
})
export class WaiterOfTheDayServiceModule {}
