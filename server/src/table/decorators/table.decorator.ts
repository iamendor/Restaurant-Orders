import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getReq } from "../../helper/helper";

export const GetTable = createParamDecorator((data, ctx) => {
  const context = GqlExecutionContext.create(ctx);
  const req = getReq(context);
  return req.table;
});
