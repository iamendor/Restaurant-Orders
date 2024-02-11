import { NestApplication } from "@nestjs/core";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaModule } from "../src/prisma/prisma.module";
import { PrismaService } from "../src/prisma/services/prisma.service";
import {
  clearMocks,
  requestNewRestaurant,
  requestNewWaiter,
  createCategory,
  createTable,
  createVictual,
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";

describe("Meal", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

  let tableId: number;
  let id: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaModule],
    }).compile();
    prismaService = moduleFixture.get<PrismaService>(PrismaService);

    await clearMocks({ prisma: prismaService });
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();

    const { access_token: rt, restaurant } = await requestNewRestaurant(server);
    const { access_token: wt, waiter } = await requestNewWaiter(server, rt);
    const category = await createCategory({
      prisma: prismaService,
      restaurantId: restaurant.id,
    });

    const victual = await createVictual({
      prisma: prismaService,
      restaurantId: restaurant.id,
      categoryId: category.id,
    });
    const table = await createTable({
      prisma: prismaService,
      restaurantId: restaurant.id,
    });

    await prismaService.order.create({
      data: {
        restaurant: { connect: { id: restaurant.id } },
        table: { connect: { id: table.id } },
        victual: { connect: { id: victual.id } },
        waiter: { connect: { id: waiter.id } },
      },
    });

    tableId = table.id;
    restaurantToken = rt;
    waiterToken = wt;
  });
  afterAll(async () => await prismaService.$disconnect());

  it("creates a meal", async () => {
    const { body } = await req(server, {
      query: mutations.meal.create(),
      variables: {
        data: {
          tableId,
        },
      },
    }).set("Authorization", waiterToken);
    const {
      data: { createMeal },
    } = body;

    expect(createMeal).toBeDefined();
    expect(createMeal.total).toEqual(1.1);
    id = createMeal.id;
  });

  describe("List and find meal as restaurant", () => {
    let list, find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.meals.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      [list, find] = [body.data.meals, body.data.meal];
    });

    it("list", () => {
      expect(list.length).toEqual(1);
    });
    it("find", () => {
      expect(find.id).toBe(id);
    });
  });

  describe("List and find meal as waiter", () => {
    let list, find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.meals.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      [list, find] = [body.data.meals, body.data.meal];
    });

    it("list", () => {
      expect(list.length).toEqual(1);
    });
    it("find", () => {
      expect(find.id).toBe(id);
    });
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
