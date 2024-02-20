import { TestingModule, Test } from "@nestjs/testing";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { ReadAnalyticsService } from "../services/analytics.read.service";
import { ReadAnalyticsServiceMock } from "../services/mock/analytics.read.service.mock";
import { AnalyticsSummaryResolver } from "./analytics.summary.resolver";
import { AnalyticsHelperModule } from "../../services/analytics.helper.module";
import { PopularProductServiceModule } from "../../product/services/product.service.module";
import { WaiterOfTheDayServiceModule } from "../../waiter/services/waiter.service.module";
import { PopularProductService } from "../../product/services/product.service";
import { WaiterOfTheDayService } from "../../waiter/services/waiter.service";
import { IncomeService } from "../../income/services/income.service";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { IncomeServiceModule } from "../../income/services/income.service.module";
import { AnalyticsSummary } from "../../../models/analytics/analytics.model";
import { CreateAnalyticsService } from "../services/analytics.create.service";

describe("AnalyticsSummaryResolver", () => {
  let resolver: AnalyticsSummaryResolver;

  const mockData = mockAnalytics;
  const mockAnalyticsIds = mockData.map((m) => m.id);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PrismaMainModule,
        PrismaAnalyticsModule,
        FilterModule,
        AnalyticsHelperModule,
        PopularProductServiceModule,
        WaiterOfTheDayServiceModule,
        IncomeServiceModule,
      ],
      providers: [
        { provide: ReadAnalyticsService, useClass: ReadAnalyticsServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        CreateAnalyticsService,
        AnalyticsSummaryResolver,
      ],
    }).compile();

    resolver = module.get<AnalyticsSummaryResolver>(AnalyticsSummaryResolver);
    const pp = module.get<PopularProductService>(PopularProductService);
    const w = module.get<WaiterOfTheDayService>(WaiterOfTheDayService);
    const inc = module.get<IncomeService>(IncomeService);

    pp.findMany = jest
      .fn()
      .mockReturnValue(mockData.map((i) => i.popularProduct));
    w.findMany = jest
      .fn()
      .mockReturnValue(mockData.map((i) => i.waiterOfTheDay));
    inc.findMany = jest.fn().mockReturnValue(mockData.map((i) => i.income));
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("should create summary of income", async () => {
    const incomeSummary = await resolver.incomeSummary(
      {
        analytics: mockAnalyticsIds,
      },
      {} as AnalyticsSummary
    );
    expect(incomeSummary).toBeDefined();
  });

  it("should create summary of the best waiters", async () => {
    const waiterSummary = await resolver.waiterOfTheDaySummary(
      {
        analytics: mockAnalyticsIds,
      },
      {} as AnalyticsSummary
    );
    expect(waiterSummary).toBeDefined();
  });

  it("should create summary of income", async () => {
    const popularProductSummary = await resolver.popularProductSummary(
      {
        analytics: mockAnalyticsIds,
      },
      {} as AnalyticsSummary
    );
    expect(popularProductSummary).toBeDefined();
  });
});
