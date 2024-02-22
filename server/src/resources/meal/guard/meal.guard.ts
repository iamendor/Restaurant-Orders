import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { GqlExecutionContext } from "@nestjs/graphql";
import { MealService } from "../services/meal.service";
import { IdGuard } from "../../../auth/guard/id.guard";
import { Observable } from "rxjs";
import { TableService } from "../../table/services/table.service";
import { PermissionDeniedException } from "../../../error";

@Injectable()
export class MealGuard implements ModelGuard {
  FIND: string = "meal";
  UPDATE: string = "updateMeal";
  DELETE: string = "deleteMeal";
  constructor(
    private readonly mealService: MealService,
    private readonly idGuard: IdGuard,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.idGuard.canActivate(context);
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
export class CreateMealGuard implements CanActivate {
  constructor(
    private readonly idGuard: IdGuard,
    private readonly tableService: TableService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.idGuard.canActivate(context);
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const user = ctx.getContext().req.user;
    const tableId = args.data.tableId;
    const table = await this.tableService.find({ id: tableId });
    if (table.restaurantId != user.restaurantId)
      throw new PermissionDeniedException();

    return true;
  }
}
