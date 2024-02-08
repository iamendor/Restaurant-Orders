import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { OrderService } from "../services/order.service";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { WAITER } from "../../../role";
import {
  OrderClosedException,
  PermissionDeniedException,
  OrderReadyException,
} from "../../../error";

@Injectable()
export class OrderBaseGuard implements ModelGuard {
  UPDATE = "updateOrder";
  DELETE = "deleteOrder";
  FIND = "order";
  LISTEN = "listenOrder";
  constructor(private readonly orderService: OrderService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { args, req, id, fnContext: mutation, role } = initGuardProps(ctx);
    let where;
    if (mutation == this.UPDATE) {
      where = args.data.where;
    }
    if (
      mutation == this.DELETE ||
      mutation == this.FIND ||
      mutation == this.LISTEN
    ) {
      where = args.where;
    }
    const order = await this.orderService.find(where);
    if (order.restaurantId != id) throw new PermissionDeniedException();
    if (mutation == this.UPDATE) {
      if (order.closed) throw new OrderClosedException();
      if (order.isReady) throw new OrderReadyException();
    }
    if (role == WAITER && order.waiterId != req.user.id)
      throw new PermissionDeniedException();
    req.order = order;
    return true;
  }
}

@Injectable()
export class OrderGuard implements CanActivate {
  constructor(
    private readonly idIntercept: IdIntercept,
    private readonly orderGuard: OrderBaseGuard
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const OBG = this.orderGuard.canActivate(context);
    return IIG && OBG;
  }
}
