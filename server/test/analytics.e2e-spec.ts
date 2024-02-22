import { INestApplication } from "@nestjs/common";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import {
  clearAnalytics,
  clearMocks,
  createAnalytics,
  requestNewRestaurant,
} from "./helper/functions";
import { PrismaAnalyticsService } from "../src/prisma/analytics/services/prisma.analytics.service";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";

describe("Analytics", () => {
  let app: INestApplication;
  let server;

  let prismaMain: PrismaMainService;
  let prismaAnalytics: PrismaAnalyticsService;

  let restaurantToken: string;

  const queries = getQueries();

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaMainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    prismaMain = moduleFixture.get<PrismaMainService>(PrismaMainService);
    prismaAnalytics = moduleFixture.get<PrismaAnalyticsService>(
      PrismaAnalyticsService,
    );

    await app.init();
    server = app.getHttpServer();

    await clearMocks({ prisma: prismaMain });
    await clearAnalytics({ prisma: prismaAnalytics });

    const { access_token, restaurant } = await requestNewRestaurant(server);
    restaurantToken = access_token;

    await createAnalytics({
      prisma: prismaAnalytics,
      restaurantId: restaurant.id,
    });
  });

  afterAll(async () => await prismaMain.$disconnect(), 10_000);

  it("should list all analytics", async () => {
    const { body } = await req(server, {
      query: queries.analytics.list(),
    }).set("Authorization", restaurantToken);
    const {
      data: { analytics },
    } = body;

    expect(analytics.length).toBe(7);
  });
});
