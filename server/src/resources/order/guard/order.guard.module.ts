import { Module } from "@nestjs/common";
import { OrderService } from "../services/order.service";
import { IdGuard } from "../../../auth/guard/id.guard";

@Module({
  providers: [OrderService, IdGuard],
  exports: [OrderService, IdGuard],
})
export class OrderGuardModule {}
