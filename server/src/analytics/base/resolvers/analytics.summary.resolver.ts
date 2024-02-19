import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { AnalyticsSummary } from "../../../models/analytics/analytics.model";
import { IncomeSummary } from "../../../models/analytics/income.model";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { RESTAURANT } from "../../../role";
import { IRange, RangeService } from "../../services/range.service";
import { FilterService } from "../../../filter/services/filter.service";
import { ReadAnalyticsService } from "../services/analytics.read.service";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { IncomeService } from "../../income/services/income.service";
import { PopularProductSummary } from "../../../models/analytics/popularproduct.model";
import { PopularProductService } from "../../product/services/product.service";
import { WaiterOfTheDaySummary } from "../../../models/analytics/waiteroftheday.model";
import { WaiterOfTheDayService } from "../../waiter/services/waiter.service";
import {
  AnalyticsResourceSummaryInterceptor,
  AnalyticsSummaryCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { CreateAnalyticsService } from "../services/analytics.create.service";

export interface SummaryContext {
  analytics: number[];
}

@Resolver((of) => AnalyticsSummary)
export class AnalyticsSummaryResolver {
  constructor(
    private readonly filterService: FilterService,
    private readonly analyticsService: ReadAnalyticsService,
    private readonly rangeService: RangeService,
    private readonly incomeService: IncomeService,
    private readonly productService: PopularProductService,
    private readonly waiterService: WaiterOfTheDayService,
    private readonly createAnalyticsService: CreateAnalyticsService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @Query(() => AnalyticsSummary, { name: "todayAnalytics" })
  async today(
    @User() { id }: JwtPayload,
    @Args("range", { defaultValue: "today" }) _: string
  ) {
    const analytics = await this.createAnalyticsService.create(id);
    const createdAt = new Date();
    const income = this.incomeService.createSummary([
      { ...analytics.income, id: 1, createdAt },
    ]);
    const popularProduct = this.productService.createSummary([
      { ...analytics.popularProduct, id: 1, createdAt, analyticsId: 1 },
    ]);
    const waiter = this.waiterService.createSummary([
      { ...analytics.waiterOfTheDay, id: 1, createdAt },
    ]);

    return { income, popularProduct, waiter, createdAt };
  }

  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  @UseInterceptors(AnalyticsSummaryCacheInterceptor)
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

    ctx.analytics = filtered.map((a) => a.id);
    return { range };
  }

  @ResolveField(() => IncomeSummary, { name: "income" })
  @UseInterceptors(AnalyticsResourceSummaryInterceptor("income"))
  async incomeSummary(
    @Context() { analytics }: SummaryContext,
    @Parent() parent: AnalyticsSummary
  ) {
    if (parent.income) return parent.income;
    const incomes = await this.incomeService.findMany(analytics);
    return this.incomeService.createSummary(incomes);
  }

  @ResolveField(() => PopularProductSummary, { name: "popularProduct" })
  @UseInterceptors(AnalyticsResourceSummaryInterceptor("popularProduct"))
  async popularProductSummary(
    @Context() { analytics }: SummaryContext,
    @Parent() parent: AnalyticsSummary
  ) {
    if (parent.popularProduct) return parent.popularProduct;
    const products = await this.productService.findMany(analytics);
    return this.productService.createSummary(products);
  }

  @ResolveField(() => WaiterOfTheDaySummary, { name: "waiter" })
  @UseInterceptors(AnalyticsResourceSummaryInterceptor("waiter"))
  async waiterOfTheDaySummary(
    @Context() { analytics }: SummaryContext,
    @Parent() parent: AnalyticsSummary
  ) {
    if (parent.waiter) return parent.waiter;
    const bestWaiters = await this.waiterService.findMany(analytics);
    return this.waiterService.createSummary(bestWaiters);
  }
}
