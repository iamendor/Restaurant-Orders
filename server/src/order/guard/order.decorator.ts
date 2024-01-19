import { createParamDecorator } from "@nestjs/common";
import { getReq } from "../../helper/helper";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetOrder = createParamDecorator(
  (data, ctx) => getReq(GqlExecutionContext.create(ctx)).order
);
