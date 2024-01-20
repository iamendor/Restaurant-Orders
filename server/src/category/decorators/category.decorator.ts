import { createParamDecorator } from "@nestjs/common";
import { getReq } from "../../helper/helper";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetCategory = createParamDecorator((data, context) => {
  const ctx = GqlExecutionContext.create(context);
  const req = getReq(ctx);
  return req.category;
});
