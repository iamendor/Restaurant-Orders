import { createParamDecorator } from "@nestjs/common";
import { getReq } from "../../helper/helper";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetVictual = createParamDecorator(
  (data, ctx) => getReq(GqlExecutionContext.create(ctx)).victual
);
