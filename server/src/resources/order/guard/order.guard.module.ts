import { Module } from "@nestjs/common";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { OrderService } from "../services/order.service";
import { OrderBaseGuard, OrderGuard } from "./order.guard";

@Module({
  providers: [OrderService, IdIntercept, OrderBaseGuard, OrderGuard],
  exports: [OrderService, IdIntercept, OrderBaseGuard, OrderGuard],
})
export class OrderGuardModule {}
