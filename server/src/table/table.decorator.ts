import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetTable = createParamDecorator((data, ctx) => {
  const req = GqlExecutionContext.create(ctx).getContext().req;
  return req.table;
});
