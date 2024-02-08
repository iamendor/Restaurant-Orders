import { Module } from "@nestjs/common";
import { IdGuard } from "../../../auth/guards/id.guard";
import { OrderService } from "../services/order.service";
import { OrderBaseGuard, OrderGuard } from "./order.guard";

@Module({
  providers: [OrderService, IdGuard, OrderBaseGuard, OrderGuard],
  exports: [OrderService, IdGuard, OrderBaseGuard, OrderGuard],
})
export class OrderGuardModule {}
