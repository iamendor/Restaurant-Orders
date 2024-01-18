import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RestaurantService } from "./restaurant.service";

@Injectable()
export class RestaurantGuard implements CanActivate {
  constructor(private readonly restaurantService: RestaurantService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const id = ctx.req.restaurantId;
    const { password: _, ...restaurant } = await this.restaurantService.find({
      id,
    });
    ctx.req.restaurant = restaurant;
    return true;
  }
}
