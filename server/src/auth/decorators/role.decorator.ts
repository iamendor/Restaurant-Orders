import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RESTAURANT } from "../../role";

export const Role = createParamDecorator((data, ctx) => {
  const context = GqlExecutionContext.create(ctx).getContext();
  const user = context.req.user;
  return user.role;
});

export const RID = createParamDecorator((data, ctx) => {
  const context = GqlExecutionContext.create(ctx).getContext();
  const user = context.req.user;
  const restaurantId = user.role == RESTAURANT ? user.id : user.restaurantId;
  return restaurantId;
});
