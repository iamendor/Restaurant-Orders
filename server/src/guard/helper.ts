import { CanActivate, ExecutionContext } from "@nestjs/common";

export const extractRIdFromContext = (ctx) => ctx.getContext().req.restaurantId;

export const getGqlFunction = (ctx) => ctx.getInfo().path.key;

export const getReq = (ctx) => ctx.getContext().req;

export const getRole = (ctx) => ctx.getContext().req.user.role;

export const initGuardProps = (ctx) => {
  const req = getReq(ctx);
  const args = ctx.getArgs();
  const fnContext = getGqlFunction(ctx);
  const id = extractRIdFromContext(ctx);
  const role = getRole(ctx);
  return { req, args, fnContext, id, role };
};

export abstract class ModelGuard implements CanActivate {
  abstract canActivate(context: ExecutionContext): Promise<boolean>;
  abstract FIND: string;
  abstract UPDATE: string;
  abstract DELETE: string;
}
