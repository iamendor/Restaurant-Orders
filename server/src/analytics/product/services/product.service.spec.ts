import { Test } from "@nestjs/testing";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { PopularProductService } from "./product.service";

describe("PopularProductService", () => {
  let service: PopularProductService;
  let prismaAnalytics: PrismaAnalyticsService;

  const mockData = mockAnalytics.map((data) => data.popularProduct);
  const mockAnalyticsIds = mockAnalytics.map((data) => data.id);

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaAnalyticsModule],
      providers: [PopularProductService],
    }).compile();

    service = module.get<PopularProductService>(PopularProductService);

    prismaAnalytics = module.get<PrismaAnalyticsService>(
      PrismaAnalyticsService
    );
  });

  it("should find all popular product based on list of analytics ids", async () => {
    prismaAnalytics.popularProduct.findMany = jest
      .fn()
      .mockReturnValue(mockData);

    const list = await service.findMany(mockAnalyticsIds);
    expect(list.length).toBe(mockData.length);
  });

  describe("Summary", () => {
    let summary;
    it("should create", () => {
      summary = service.createSummary(mockData);
      expect(summary).toBeDefined();
    });
    it("should have a toplist", () => {
      const { toplist } = summary;
      expect(toplist).toBeDefined();
      expect(toplist.numberOne).toBeDefined();
      expect(toplist.numberTwo).toBeDefined();
      expect(toplist.numberThree).toBeDefined();
    });
  });
});
