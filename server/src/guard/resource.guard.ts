import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
} from "@nestjs/common";
import { ModelGuard, initGuardProps } from "./helper";
import { IdGuard } from "../auth/guard/id.guard";
import { GqlExecutionContext } from "@nestjs/graphql";
import {
  PermissionDeniedException,
  SomethingWentWrongException,
} from "../error";
import { PrismaMainService } from "../prisma/main/services/prisma.main.service";

export interface CreateResourceGuard {
  UPDATE: string;
  DELETE: string;
  FIND: string;
  Inject: any;
}

export function ResourceGuard({
  UPDATE,
  DELETE,
  FIND,
  Inject,
}: CreateResourceGuard) {
  @Injectable()
  class ResourceGuardClass implements ModelGuard {
    FIND: string;
    UPDATE: string;
    DELETE: string;
    service: any;
    constructor(
      public readonly idGuard: IdGuard,
      public readonly prismaService: PrismaMainService
    ) {
      this.FIND = FIND;
      this.DELETE = DELETE;
      this.UPDATE = UPDATE;
      this.service = new Inject(prismaService);
    }
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const IIG = this.idGuard.canActivate(context);

      const ctx = GqlExecutionContext.create(context);
      const { args, req, id, fnContext: mutation } = initGuardProps(ctx);
      let where;

      if (mutation == this.UPDATE) where = args.data.where;
      else if (mutation == this.DELETE || mutation == this.FIND)
        where = args.where;
      else {
        throw new SomethingWentWrongException("invalid resource specified");
      }

      const resource = await this.service.find(where);
      if (resource.restaurantId != id) throw new PermissionDeniedException();

      req[this.FIND] = resource;

      return true;
    }
  }
  const guardMixin = mixin(ResourceGuardClass);
  return guardMixin;
}
