import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { GqlExecutionContext } from "@nestjs/graphql";
import { MealService } from "../services/meal.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { PermissionDeniedException } from "../../../error";

@Injectable()
export class MealBaseGuard implements ModelGuard {
  FIND: string = "meal";
  UPDATE: string = "updateMeal";
  DELETE: string = "deleteMeal";
  constructor(private readonly mealService: MealService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req, fnContext: mutation, id, args } = initGuardProps(ctx);
    let where;
    if (mutation == this.UPDATE) {
      where = args.data.where;
    }
    if (mutation == this.FIND || mutation == this.DELETE) {
      where = args.where;
    }
    const meal = await this.mealService.find(where);
    if (meal.restaurantId != id) throw new PermissionDeniedException();
    req.meal = meal;
    return true;
  }
}

@Injectable()
export class MealGuard implements CanActivate {
  constructor(
    private readonly mealGuard: MealBaseGuard,
    private readonly idIntercept: IdGuard
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const MBG = await this.mealGuard.canActivate(context);
    return IIG && MBG;
  }
}
