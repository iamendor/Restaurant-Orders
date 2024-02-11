import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RestaurantService } from "../services/restaurant.service";
import { getReq } from "../../../guard/helper";
import { IdGuard } from "../../../auth/guard/id.guard";

@Injectable()
export class RestaurantGuard implements CanActivate {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly idGuard: IdGuard
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.idGuard.canActivate(context);
    const ctx = GqlExecutionContext.create(context);
    const req = getReq(ctx);
    const id = req.restaurantId;
    const { password: _, ...restaurant } = await this.restaurantService.find({
      id,
    });
    req.restaurant = restaurant;
    return true;
  }
}
