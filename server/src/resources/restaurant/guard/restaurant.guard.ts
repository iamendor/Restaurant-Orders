import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RestaurantService } from "../services/restaurant.service";
import { getReq } from "../../../guard/helper";
import { IdGuard } from "../../../auth/guard/id.guard";

//TODO: refactor
@Injectable()
export class RestaurantBaseGuard implements CanActivate {
  constructor(private readonly restaurantService: RestaurantService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
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
@Injectable()
export class RestaurantGuard implements CanActivate {
  constructor(
    private readonly idInterceptGuard: IdGuard,
    private readonly restaurantBaseGuard: RestaurantBaseGuard
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idInterceptGuard.canActivate(context);
    const RBG = await this.restaurantBaseGuard.canActivate(context);
    return IIG && RBG;
  }
}
