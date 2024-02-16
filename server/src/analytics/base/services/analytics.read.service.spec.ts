import { TestingModule, Test } from "@nestjs/testing";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { ReadAnalyticsService } from "./analytics.read.service";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";

describe("AnalyticsService", () => {
  let service: ReadAnalyticsService;
  let prisma: PrismaAnalyticsService;

  const mockData = mockAnalytics;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaAnalyticsModule],
      providers: [ReadAnalyticsService],
    }).compile();

    service = module.get<ReadAnalyticsService>(ReadAnalyticsService);
    prisma = module.get<PrismaAnalyticsService>(PrismaAnalyticsService);

    prisma.analytics.findMany = jest.fn().mockReturnValue(mockAnalytics);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should list analytics", async () => {
    const list = await service.list(1);
    expect(list.length).toBe(mockData.length);
  });
});
