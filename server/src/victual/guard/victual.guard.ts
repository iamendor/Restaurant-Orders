import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import {
  extractRIdFromContext,
  getGqlFunction,
  getReq,
} from "../../helper/helper";
import { VictualService } from "../victual.service";
import { IdIntercept } from "../../auth/guards/id";

@Injectable()
export class VictualBaseGuard implements CanActivate {
  private UPDATE = "updateVictual";
  private DELETE = "deleteVictual";
  private FIND = "victual";
  constructor(private readonly victualService: VictualService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const args = ctx.getArgs();
    const req = getReq(ctx);
    const id = extractRIdFromContext(ctx);
    const mutation = getGqlFunction(ctx);
    let where;
    if (mutation == this.UPDATE) {
      where = args.data.where;
    }
    if (mutation == this.DELETE || mutation == this.FIND) {
      where = args.where;
    }
    const victual = await this.victualService.find(where);
    if (victual.restaurantId != id) throw new ForbiddenException();
    req.victual = victual;
    return true;
  }
}
@Injectable()
export class VictualGuard implements CanActivate {
  constructor(
    private readonly victualGuard: VictualBaseGuard,
    private readonly idIntercept: IdIntercept
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const IIG = this.idIntercept.canActivate(context);
    const VBG = this.victualGuard.canActivate(context);
    return IIG && VBG;
  }
}
