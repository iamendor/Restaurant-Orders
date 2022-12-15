import { CanActivate, ExecutionContext, mixin } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const RoleGuard = (...roles: string[]) => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const req = GqlExecutionContext.create(context).getContext().req;
      const { role } = req.user;
      return roles.includes(role);
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
