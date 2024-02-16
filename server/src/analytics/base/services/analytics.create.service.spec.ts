import { Test, TestingModule } from "@nestjs/testing";
import { CreateAnalyticsService } from "./analytics.create.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaAnalyticsModule } from "../../../prisma/analytics/prisma.analytics.module";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import {
  mockIncome,
  mockPopularFood,
  mockWaiterOfTheDay,
} from "../../../../test/helper/mock.analytics";

describe("AnalyticsService", () => {
  let service: CreateAnalyticsService;
  let prismaAnalytics: PrismaAnalyticsService;
  let prismaMain: PrismaMainService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, PrismaAnalyticsModule],
      providers: [CreateAnalyticsService],
    }).compile();

    service = module.get<CreateAnalyticsService>(CreateAnalyticsService);
    prismaAnalytics = module.get<PrismaAnalyticsService>(
      PrismaAnalyticsService
    );

    prismaMain = module.get<PrismaMainService>(PrismaMainService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("create an income model for restaurant", async () => {
    prismaMain.meal.findMany = jest.fn().mockReturnValue(mockIncome);

    const income = await service.createIncome(1);
    expect(income.total).toBeDefined();
  });
  it("find the most popular foods today", async () => {
    prismaMain.order.groupBy = jest.fn().mockReturnValueOnce(mockPopularFood);

    const orders = await service.createPopularProduct(1);
    expect(orders).toBeDefined();
  });
  it("find the waiter of the day by the order number made by the waiter", async () => {
    prismaMain.order.groupBy = jest
      .fn()
      .mockReturnValueOnce(mockWaiterOfTheDay);

    const waiterOfTheDay = await service.createWaiterOfTheDay(1);
    expect(waiterOfTheDay).toBeDefined();
  });
  it("trigger creating analytics for all restaurant where it is enabled", async () => {
    prismaMain.order.groupBy = jest
      .fn()
      .mockReturnValueOnce(mockPopularFood)
      .mockReturnValueOnce(mockWaiterOfTheDay);
    prismaAnalytics.analytics.create = jest.fn().mockImplementation(() => {});

    const isSuccess = await service.trigger();
    expect(isSuccess).toBeTruthy();
  });
});
