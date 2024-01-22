import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { TableService } from "../services/table.service";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { IdIntercept } from "../../../auth/guards/id.guard";

@Injectable()
export class TableBaseGuard implements ModelGuard {
  UPDATE = "updateTable";
  DELETE = "deleteTable";
  FIND = "table";
  constructor(private readonly tableService: TableService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { args, req, id, fnContext: mutation } = initGuardProps(ctx);
    let where;
    if (mutation == this.UPDATE) {
      where = args.data.where;
    }
    if (mutation == this.DELETE || mutation == this.FIND) {
      where = args.where;
    }
    const table = await this.tableService.find(where);
    if (table.restaurantId != id) throw new ForbiddenException();
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
