import { Test } from "@nestjs/testing";
import { WaiterOfTheDayService } from "./waiter.service";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";

describe("WaiterService", () => {
  let service: WaiterOfTheDayService;
  let prismaAnalytics: PrismaAnalyticsService;

  const mockData = mockAnalytics.map((i) => i.waiterOfTheDay);
  const analyticsIds = mockData.map((i) => i.analyticsId);

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaAnalyticsModule],
      providers: [WaiterOfTheDayService],
    }).compile();
    service = module.get<WaiterOfTheDayService>(WaiterOfTheDayService);
    prismaAnalytics = module.get<PrismaAnalyticsService>(
      PrismaAnalyticsService,
    );
  });

  it("should find many by list of analytics ids", async () => {
    prismaAnalytics.waiterOfTheDay.findMany = jest
      .fn()
      .mockReturnValue(mockData);
    const list = await service.findMany(analyticsIds);
    expect(list.length).toBe(mockData.length);
  });

  describe("Summary", () => {
    let summary;
    let expectedBest;

    beforeAll(() => {
      expectedBest = Object.entries(
        mockData.reduce(
          (a, b) => ({
            ...a,
            [b.waiterId]: (a[b.waiterId] || 0) + 1,
          }),
          {},
        ),
      )
        .sort((a: any, b: any) => b[1] - a[1])
        .map((i) => Number(i[0]))[0];
    });

    it("should create summary", () => {
      summary = service.createSummary(mockData);
      expect(summary).toBeDefined();
    });

    it("should show the best waiter's id", () => {
      const { best } = summary;
      expect(best).toBe(expectedBest);
    });
  });
});
