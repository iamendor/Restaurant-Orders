import { Module } from "@nestjs/common";
import { WaiterService } from "./waiter.service";
import { FieldService } from "./field.service";
import { SecurityService } from "../../security/services/security.service";

@Module({
  providers: [SecurityService, WaiterService, FieldService],
  exports: [WaiterService, FieldService],
})
export class WaiterServiceModule {}
