import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getReq } from "../../helper/helper";

export const GetRestaurant = createParamDecorator((data, context) => {
  const ctx = GqlExecutionContext.create(context);
  const req = getReq(ctx);
  return req.restaurant;
});
