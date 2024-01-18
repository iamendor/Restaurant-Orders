import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { TableService } from "./table.service";

@Injectable()
export class TableGuard implements CanActivate {
  private UPDATE = "updateTable";
  private DELETE = "deleteTable";
  private FIND = "table";
  constructor(private readonly tableService: TableService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const restaurantId = ctx.getContext().req.restaurantId;
    const key = ctx.getInfo().path.key;
    let where;
    if (key == this.UPDATE) {
      where = args.data.where;
    }
    if (key == this.DELETE || key == this.FIND) {
      where = args.where;
    }
    const table = await this.tableService.find(where);
    if (table.restaurantId != restaurantId) throw new ForbiddenException();
    ctx.getContext().req.table = table;
    return true;
  }
}
