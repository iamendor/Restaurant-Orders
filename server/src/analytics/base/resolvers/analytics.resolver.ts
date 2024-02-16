import { Args, Query, Resolver } from "@nestjs/graphql";
import {
  Analytics,
  AnalyticsSummary,
} from "../../../models/analytics/analytics.model";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT } from "../../../role";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { ReadAnalyticsService } from "../services/analytics.read.service";
import { CacheInterceptor } from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AnalyticsFilter } from "../../../models/resources/filter.model";

const AnalyticsCacheInterceptor = CacheInterceptor({
  prefix: "analytics",
  map: (data) => ({ ...data, createdAt: new Date(data.createdAt) }),
});

@Resolver(() => Analytics)
export class AnalyticsResolver {
  constructor(private readonly analyticsService: ReadAnalyticsService) {}
  @Query(() => [Analytics], { name: "analytics" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(AnalyticsCacheInterceptor, FilterInterceptor("analytics"))
  list(
    @User() { id }: JwtPayload,
    @Args("filter", { nullable: true, type: () => AnalyticsFilter })
    _?: AnalyticsFilter
  ) {
    return this.analyticsService.list(id);
  }
}
