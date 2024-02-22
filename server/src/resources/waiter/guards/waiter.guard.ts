import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { RESTAURANT } from "../../../role";
import { getReq } from "../../../guard/helper";
import { NotSpecifiedException } from "../../../error";

@Injectable()
export class UpdateWaiterGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const { role } = getReq(ctx);
    if (role === RESTAURANT) {
      if (!args.data.where) throw new NotSpecifiedException("waiter");
      return true;
    }
    return true;
  }
}
