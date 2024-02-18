import { NestApplication } from "@nestjs/core";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import {
  clearMocks,
  requestNewRestaurant,
  requestNewWaiter,
  createCategory,
  createProduct,
  createTable,
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockOrder } from "./helper/mock.unit";

describe("Order", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaMainService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

  let restaurantId: number;
  let categoryId: number;
  let tableId: number;
  let productId: number;
  let id: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaMainModule],
    }).compile();
    prismaService = moduleFixture.get<PrismaMainService>(PrismaMainService);

    await clearMocks({ prisma: prismaService });
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
    const today = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ][new Date().getDay() == 0 ? 6 : new Date().getDay() - 1];

    const { access_token: rt, restaurant } = await requestNewRestaurant(server);
    const { access_token: wt } = await requestNewWaiter(server, rt);
    const category = await createCategory({
      prisma: prismaService,
      restaurantId: restaurant.id,
    });
    await prismaService.openingHour.create({
      data: {
        name: today,
        start: "00:00:00",
        end: "23:59:59",
        restaurant: { connect: { id: restaurant.id } },
      },
    });
    restaurantId = restaurant.id;
    categoryId = category.id;
    restaurantToken = rt;
    waiterToken = wt;
  });
  afterAll(async () => await prismaService.$disconnect());

  describe("Create", () => {
    let order;

    let create;
    let multiple;
    beforeAll(async () => {
      const product = await createProduct({
        prisma: prismaService,
        restaurantId,
        categoryId: categoryId,
      });
      const table = await createTable({
        prisma: prismaService,
        restaurantId,
      });
      productId = product.id;
      tableId = table.id;

      order = {
        ...mockOrder,
        restaurantId: undefined,
        tableId,
        productId,
        createdAt: undefined,
        id: undefined,
        closed: undefined,
      };
    });
    it("runs the request", async () => {
      const { body } = await req(server, {
        query: mutations.order.create(),
        variables: {
          data: order,
          dataMultiple: [order, order],
        },
      }).set("Authorization", waiterToken);
      [create, multiple] = [body.data.createOrder, body.data.createOrders];
    });
    it("create an order", () => {
      expect(create.description).toBe("this is a mock order");
      id = create.id;
    });
    it("create 2 order", () => {
      expect(multiple.message).toBe("success");
    });
  });
  it("updates the order", async () => {
    const { body } = await req(server, {
      query: mutations.order.update(),
      variables: {
        data: {
          where: {
            id,
          },
          update: {
            isReady: true,
          },
        },
      },
    }).set("Authorization", waiterToken);
    const {
      data: { updateOrder },
    } = body;
    expect(updateOrder.isReady).toBeTruthy();
  });
  describe("List and find as restaurant", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.order.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      [list, find] = [body.data.orders, body.data.order];
    });
    it("list", () => {
      expect(list.length).toEqual(3);
    });
    it("find", () => {
      expect(find.description).toBe("this is a mock order");
    });
  });
  describe("List and find as waiter", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.order.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      [list, find] = [body.data.orders, body.data.order];
    });
    it("list", () => {
      expect(list.length).toEqual(3);
    });
    it("find", () => {
      expect(find.description).toBe("this is a mock order");
    });
  });
  it("deletes the order", async () => {
    const { body } = await req(server, {
      query: mutations.order.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { deleteOrder },
    } = body;
    expect(deleteOrder.message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
