import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetMeal = createParamDecorator(
  (data, ctx) => GqlExecutionContext.create(ctx).getContext().req.meal
);
