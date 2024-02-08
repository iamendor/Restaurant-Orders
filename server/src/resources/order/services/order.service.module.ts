import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { FieldService } from "./field.service";

@Module({
  providers: [OrderService, FieldService],
  exports: [OrderService, FieldService],
})
export class OrderServiceModule {}
