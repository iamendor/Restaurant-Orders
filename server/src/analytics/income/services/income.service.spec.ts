import { Test } from "@nestjs/testing";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { IncomeService } from "./income.service";
import { AnalyticsHelperModule } from "../../services/analytics.helper.module";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";

describe("IncomeService", () => {
  let service: IncomeService;
  let prismaAnalytics: PrismaAnalyticsService;

  const mockData = mockAnalytics.map((i) => i.income);
  const mockAnalyticsIds = mockAnalytics.map((i) => i.id);

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaAnalyticsModule, AnalyticsHelperModule],
      providers: [IncomeService],
    }).compile();

    service = module.get<IncomeService>(IncomeService);
    prismaAnalytics = module.get<PrismaAnalyticsService>(
      PrismaAnalyticsService
    );
  });

  it("should list all income by anayltics Id list", async () => {
    prismaAnalytics.income.findMany = jest.fn().mockReturnValue(mockData);

    const list = await service.findMany(mockAnalyticsIds);
    expect(list.length).toBe(mockData.length);
  });
  describe("Summary", () => {
    let summary;
    let expectedSum;
    let expectedAvg;
    let sorted;
    let expectedMedian;
    beforeAll(() => {
      expectedSum = mockData.reduce((a, b) => a + b.total, 0);
      expectedAvg = expectedSum / mockData.length;
      sorted = mockData.sort((a, b) => a.total - b.total);
      expectedMedian = sorted[Math.floor(sorted.length / 2)].total;
    });
    it("should create it", () => {
      summary = service.createSummary(mockData);
      expect(summary).toBeDefined();
    });
    it("should give the average", () => {
      const { average } = summary;
      expect(average).toBe(expectedAvg);
    });
    it("should give the total", () => {
      const { total } = summary;
      expect(total).toBe(expectedSum);
    });
    it("should give the median", () => {
      const { median } = summary;
      expect(median).toBe(expectedMedian);
    });
    it("should give the range of incomes", () => {
      const {
        range: { top, bottom },
      } = summary;

      expect(top).toBe(sorted[sorted.length - 1]);
      expect(bottom).toBe(sorted[0]);
    });
  });
});
