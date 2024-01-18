import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { extractRIdFromContext, getGqlFunction } from "../../helper/helper";
import { CategoryService } from "../category.service";
import { IdIntercept } from "../../auth/guards/id";

@Injectable()
export class CategoryBaseGuard implements CanActivate {
  private UPDATE = "updateCategory";
  private DELETE = "deleteCategory";
  private FIND = "category";
  constructor(private readonly categoryService: CategoryService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const restaurantId = extractRIdFromContext(ctx);
    const key = getGqlFunction(ctx);
    let where;
    if (key == this.UPDATE) {
      where = args.data.where;
    }
    if (key == this.DELETE || key == this.FIND) {
      where = args.where;
    }
    const cat = await this.categoryService.find(where);
    if (cat.restaurantId != restaurantId) throw new ForbiddenException();
    ctx.getContext().req.category = cat;
    return true;
  }
}
@Injectable()
export class CategoryGuard implements CanActivate {
  constructor(
    private readonly categoryGuard: CategoryBaseGuard,
    private readonly idIntercept: IdIntercept
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const CBG = await this.categoryGuard.canActivate(context);
    return IIG && CBG;
  }
}
