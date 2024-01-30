import { Injectable, ExecutionContext, CanActivate } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RESTAURANT } from "../../role";
import { getReq } from "../../guard/helper";

@Injectable()
export class IdIntercept implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const req = getReq(ctx);
    const user = req.user;
    req.restaurantId = user.role == RESTAURANT ? user.id : user.restaurantId;
    return true;
  }
}
