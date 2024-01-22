import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { OrderService } from "../services/order.service";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { WAITER } from "../../../role/role";

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
    if (order.restaurantId != id) throw new ForbiddenException();
    if (role == WAITER && order.waiterId != req.user.id)
      throw new ForbiddenException();
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
