import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getReq } from "../guard/helper";

export const ResourceDecorator = (key: string) =>
  createParamDecorator((_, context) => {
    const ctx = GqlExecutionContext.create(context);
    const req = getReq(ctx);
    return req[key];
  });
