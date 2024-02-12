import { CanActivate, ExecutionContext, mixin } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { PermissionDeniedException } from "../../error";

export const RoleGuard = (...roles: string[]) => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const req = GqlExecutionContext.create(context).getContext().req;
      const { role } = req.user;
      if (!roles.includes(role)) throw new PermissionDeniedException();
      return true;
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
