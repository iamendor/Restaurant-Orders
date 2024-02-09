import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  mixin,
} from "@nestjs/common";
import { Observable, map } from "rxjs";
import { FilterService } from "../services/filter.service";
import { GqlExecutionContext } from "@nestjs/graphql";

type FilterInterceptorOptions =
  | "waiters"
  | "meals"
  | "openhours"
  | "victuals"
  | "categories"
  | "orders"
  | "tables"
  | "tasks";

export const FilterInterceptor = (resource: FilterInterceptorOptions) => {
  @Injectable()
  class FI implements NestInterceptor {
    constructor(public readonly filterService: FilterService) {}
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>
    ): Observable<any> | Promise<Observable<any>> {
      const ctx = GqlExecutionContext.create(context);
      const filter = ctx.getArgs().filter;

      return next.handle().pipe(
        map((data) => {
          if (!filter) return data;
          const filtered = this.filterService[resource]({
            data,
            filters: filter,
          });
          return filtered;
        })
      );
    }
  }
  const interceptor = mixin(FI);

  return interceptor;
};
