import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";

@Injectable()
export class UpdateWaiterGuard implements CanActivate {
  private WAITER_NOT_PROVIDED = "no waiter specified";

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const { role } = ctx.getContext().req;
    if (role === "restaurant") {
      if (!args.data.where)
        throw new HttpException(this.WAITER_NOT_PROVIDED, 400);
      return true;
    }
    return true;
  }
}
