import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { CategoryService } from "../services/category.service";
import { IdGuard } from "../../../auth/guards/id.guard";
import { PermissionDeniedException } from "../../../error";

@Injectable()
export class CategoryBaseGuard implements ModelGuard {
  UPDATE = "updateCategory";
  DELETE = "deleteCategory";
  FIND = "category";
  constructor(private readonly categoryService: CategoryService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { args, id, fnContext: mutation } = initGuardProps(ctx);

    let where;
    if (mutation == this.UPDATE) {
      where = args.data.where;
    }
    if (mutation == this.DELETE || mutation == this.FIND) {
      where = args.where;
    }
    const cat = await this.categoryService.find(where);
    if (cat.restaurantId != id) throw new PermissionDeniedException();
    ctx.getContext().req.category = cat;
    return true;
  }
}
@Injectable()
export class CategoryGuard implements CanActivate {
  constructor(
    private readonly categoryGuard: CategoryBaseGuard,
    private readonly idIntercept: IdGuard
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const CBG = await this.categoryGuard.canActivate(context);
    return IIG && CBG;
  }
}
