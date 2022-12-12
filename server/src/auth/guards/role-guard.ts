import { CanActivate, ExecutionContext, mixin } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const RoleGuard = (role: string) => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const req = GqlExecutionContext.create(context).getContext().req;
      const { role: userRole } = req.user;
      return userRole === role;
    }
  }

  const guard = mixin(RoleGuardMixin);
  return guard;
};
