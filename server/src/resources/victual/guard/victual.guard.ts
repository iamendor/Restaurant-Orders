import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ModelGuard, initGuardProps } from "../../../guard/helper";
import { VictualService } from "../services/victual.service";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { PermissionDeniedException } from "../../../error";

@Injectable()
export class VictualBaseGuard implements ModelGuard {
  UPDATE = "updateVictual";
  DELETE = "deleteVictual";
  FIND = "victual";
  constructor(private readonly victualService: VictualService) {}
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
    const victual = await this.victualService.find(where);
    if (victual.restaurantId != id) throw new PermissionDeniedException();
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
