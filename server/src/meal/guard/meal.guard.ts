import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { ModelGuard, initGuardProps } from "../../helper/helper";
import { GqlExecutionContext } from "@nestjs/graphql";
import { MealService } from "../services/meal.service";
import { IdIntercept } from "../../auth/guards/id.guard";

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
    if (meal.restaurantId != id) throw new ForbiddenException();
    req.meal = meal;
    return true;
  }
}

@Injectable()
export class MealGuard implements CanActivate {
  constructor(
    private readonly mealGuard: MealBaseGuard,
    private readonly idIntercept: IdIntercept
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const MBG = await this.mealGuard.canActivate(context);
    return IIG && MBG;
  }
}
