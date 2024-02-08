import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getGqlFunction, getReq, getRole } from "../../../guard/helper";
import { WAITER } from "../../../role";
import {
  OrderClosedException,
  PermissionDeniedException,
  OrderReadyException,
} from "../../../error";
import { OrderGuard as OrderBaseGuard } from "../../guard";

@Injectable()
export class OrderPropertyGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const req = getReq(ctx);
    const mutation = getGqlFunction(ctx);

    const order = req.order;
    const role = getRole(ctx);

    if (mutation == "updateOrder") {
      if (order.closed) throw new OrderClosedException();
      if (order.isReady) throw new OrderReadyException();
    }
    if (role == WAITER && req.user.id != order.waiterId)
      throw new PermissionDeniedException();
    return true;
  }
}
export const OrderGuard = [OrderBaseGuard, OrderPropertyGuard];
