import { Args, Context, Query, ResolveField, Resolver } from "@nestjs/graphql";
import {
  Analytics,
  AnalyticsSummary,
} from "../../../models/analytics/analytics.model";
import { IncomeSummary } from "../../../models/analytics/income.model";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT } from "../../../role";
import { IRange, RangeService } from "../../services/range.service";
import { FilterService } from "../../../filter/services/filter.service";
import { ReadAnalyticsService } from "../services/analytics.read.service";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { IncomeService } from "../../income/services/income.service";

@Resolver((of) => AnalyticsSummary)
export class AnalyticsSummaryResolver {
  constructor(
    private readonly filterService: FilterService,
    private readonly analyticsService: ReadAnalyticsService,
    private readonly rangeService: RangeService,
    private readonly incomeService: IncomeService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Query(() => AnalyticsSummary, { name: "analyticsSummary" })
  async summary(
    @User() { id }: JwtPayload,
    @Context() ctx,
    @Args("range", { defaultValue: "week" }) range: IRange
  ) {
    const { start } = this.rangeService.calculate(range);
    const analytics = await this.analyticsService.list(id);
    const filtered =
      range != "all"
        ? this.filterService.analytics({
            data: analytics,
            filters: { min: start },
          })
        : analytics;

    ctx.analytics = filtered;
    return { createdAt: new Date() };
  }

  @ResolveField(() => IncomeSummary, { name: "income" })
  async incomeSummary(@Context() { analytics }: { analytics: Analytics[] }) {
    const incomes = await this.incomeService.findMany(
      analytics.map((a) => a.id)
    );
    return this.incomeService.createSummary(incomes);
  }
}
