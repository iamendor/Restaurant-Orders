import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { TableService } from "../table.service";
import {
  extractRIdFromContext,
  getGqlFunction,
  getReq,
} from "../../helper/helper";
import { IdIntercept } from "../../auth/guards/id";
import { Observable } from "rxjs";

@Injectable()
export class TableBaseGuard implements CanActivate {
  private UPDATE = "updateTable";
  private DELETE = "deleteTable";
  private FIND = "table";
  constructor(private readonly tableService: TableService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const restaurantId = extractRIdFromContext(ctx);
    const req = getReq(ctx);
    const key = getGqlFunction(ctx);
    let where;
    if (key == this.UPDATE) {
      where = args.data.where;
    }
    if (key == this.DELETE || key == this.FIND) {
      where = args.where;
    }
    const table = await this.tableService.find(where);
    if (table.restaurantId != restaurantId) throw new ForbiddenException();
    req.table = table;
    return true;
  }
}

@Injectable()
export class TableGuard implements CanActivate {
  constructor(
    private readonly tableGuard: TableBaseGuard,
    private readonly idIntercept: IdIntercept
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IDG = this.idIntercept.canActivate(context);
    const TG = await this.tableGuard.canActivate(context);
    return IDG && TG;
  }
}
