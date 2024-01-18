import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const GetRestaurant = createParamDecorator((data, ctx) => {
  const context = GqlExecutionContext.create(ctx).getContext();
  return context.req.restaurant;
});
