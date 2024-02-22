import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  mixin,
} from "@nestjs/common";
import { CacheService } from "../cache/services/cache.service";
import { Observable, of, tap } from "rxjs";
import { GqlExecutionContext } from "@nestjs/graphql";
import { getRIDFRomUser } from "../guard/helper";

export interface ICacheInterceptor {
  prefix?: string;
  map?: (data: any) => any;
  restaurant?: boolean;
  ttl?: number;
}

export const ClearCacheInterceptor = (prefix: string) => {
  @Injectable()
  class CCI implements NestInterceptor {
    logger: Logger = new Logger();
    constructor(public readonly cacheService: CacheService) {}
    intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Observable<any> {
      const ctx = GqlExecutionContext.create(context);
      const restaurantId = getRIDFRomUser(ctx);

      return next.handle().pipe(
        tap(() => {
          this.cacheService.del(`${prefix}:${restaurantId}`);
        }),
      );
    }
  }

  const interceptor = mixin(CCI);

  return interceptor;
};

export const CacheInterceptor = ({
  prefix,
  map,
  restaurant,
  ttl,
}: ICacheInterceptor) => {
  @Injectable()
  class CI implements NestInterceptor {
    logger: Logger = new Logger();
    constructor(public readonly cacheService: CacheService) {
      if (restaurant == undefined) restaurant = true;
    }

    async intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Promise<Observable<any>> {
      const ctx = GqlExecutionContext.create(context);
      const restaurantId = restaurant && getRIDFRomUser(ctx);
      const key = restaurant ? `${prefix}:${restaurantId}` : prefix;

      const cached = await this.cacheService.get({
        key,
        json: true,
      });
      if (cached) {
        this.logger.log(`Cache found for ${key}`, "CacheInterceptor");
        if (!map) return of(cached);
        return of(cached.map(map));
      }

      return next.handle().pipe(
        tap((data) => {
          if (!cached) {
            this.cacheService.set({
              key: prefix,
              value: JSON.stringify(data),
              ttl: ttl,
            });
          }
        }),
      );
    }
  }

  const interceptor = mixin(CI);

  return interceptor;
};

@Injectable()
export class AnalyticsSummaryCacheInterceptor implements NestInterceptor {
  constructor(private readonly cacheService: CacheService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context);
    const { range } = ctx.getArgs();
    const req = ctx.getContext();
    const restaurantId = getRIDFRomUser(ctx);
    const key = `analytics_summary:${range}:${restaurantId}`;
    const cached = await this.cacheService.get({ key, json: true });
    if (cached) {
      req.analytics = cached;
      return of({ createdAt: new Date(), range });
    }

    return next.handle().pipe(
      tap(() =>
        this.cacheService.set({
          key,
          value: JSON.stringify(req.analytics),
          ttl: 60,
        }),
      ),
    );
  }
}

export const AnalyticsResourceSummaryInterceptor = (
  resource: "income" | "waiter" | "popularProduct",
) => {
  @Injectable()
  class CI implements NestInterceptor {
    constructor(public readonly cacheService: CacheService) {}
    //map functions
    income(stats) {
      return {
        ...stats,
        createdAt: new Date(stats.createdAt),
        range: {
          top: {
            ...stats.range.top,
            createdAt: new Date(stats.range.top.createdAt),
          },
          bottom: {
            ...stats.range.bottom,
            createdAt: new Date(stats.range.bottom.createdAt),
          },
        },
      };
    }
    waiter(stats) {
      return stats;
    }
    popularProduct(stats) {
      return stats;
    }

    async intercept(
      context: ExecutionContext,
      next: CallHandler<any>,
    ): Promise<Observable<any>> {
      const ctx = GqlExecutionContext.create(context);
      const range = ctx.getRoot().range;
      const restaurantId = getRIDFRomUser(ctx);
      const key = `analytics_summary:${resource}:${range}:${restaurantId}`;
      const cached = await this.cacheService.get({ key, json: true });
      if (cached) return of(this[resource](cached));

      return next
        .handle()
        .pipe(
          tap((data) =>
            this.cacheService.set({
              key,
              value: JSON.stringify(data),
              ttl: 60,
            }),
          ),
        );
    }
  }
  const interceptor = mixin(CI);
  return interceptor;
};
