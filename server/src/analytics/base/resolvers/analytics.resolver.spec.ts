import { TestingModule, Test } from "@nestjs/testing";
import { mockAnalytics } from "../../../../test/helper/mock.analytics";
import { ReadAnalyticsService } from "../services/analytics.read.service";
import { AnalyticsResolver } from "./analytics.resolver";
import { ReadAnalyticsServiceMock } from "../services/mock/analytics.read.service.mock";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { mockRestaurantPayload } from "../../../../test/helper/mock.unit";

describe("AnalyticsResolver", () => {
  let resolver: AnalyticsResolver;

  const mockData = mockAnalytics;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FilterModule],
      providers: [
        { provide: ReadAnalyticsService, useClass: ReadAnalyticsServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        AnalyticsResolver,
      ],
    }).compile();

    resolver = module.get<AnalyticsResolver>(AnalyticsResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("should list analytics", async () => {
    const analytics = await resolver.list(mockRestaurantPayload);
    expect(analytics).toBeDefined();
    expect(analytics).toMatchObject(mockData);
  });
});
