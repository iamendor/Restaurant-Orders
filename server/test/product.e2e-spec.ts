import { NestApplication } from "@nestjs/core";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import {
  clearMocks,
  createCategory,
  requestNewRestaurant,
  requestNewWaiter,
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockProduct } from "./helper/mock.unit";
import { mock } from "./helper/functions";

describe("Product", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaMainService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

  let categoryId: number;
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

    const { access_token: rt, restaurant } = await requestNewRestaurant(server);
    const { access_token: wt } = await requestNewWaiter(server, rt);
    const category = await createCategory({
      prisma: prismaService,
      restaurantId: restaurant.id,
    });

    categoryId = category.id;
    restaurantToken = rt;
    waiterToken = wt;
  });
  afterAll(async () => await prismaService.$disconnect());

  describe("Create", () => {
    let create;
    let createMultiple;

    beforeAll(async () => {
      const { body } = await req(server, {
        query: mutations.product.create(),
        variables: {
          data: {
            ...mock.product.create,
            categoryId,
          },
          dataProducts: [
            ...[1, 2].map((i) => ({
              ...mock.product.create,
              categoryId,
              name: `MockProduct${i}`,
            })),
          ],
        },
      }).set("Authorization", restaurantToken);
      create = body.data.createProduct;
      createMultiple = body.data.createProducts;
    });

    it("creates a product", () => {
      expect(create.name).toBe(mockProduct.name);
      id = create.id;
    });
    it("creates multiple product", () => {
      expect(createMultiple.message).toBe("success");
    });
  });

  it("updates product", async () => {
    const update = "updated";
    const { body } = await req(server, {
      query: mutations.product.update(),
      variables: {
        data: {
          where: {
            id,
          },
          update: {
            name: update,
          },
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: {
        updateProduct: { name },
      },
    } = body;
    expect(name).toBe(update);
  });
  describe("List and find as restaurant", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.product.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      list = body.data.products;
      find = body.data.product;
    });
    it("list", async () => {
      expect(list.length).toEqual(3);
    });
    it("find", async () => {
      expect(find.name).toBe("updated");
    });
  });
  describe("List and find as waiter", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.product.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      list = body.data.products;
      find = body.data.product;
    });
    it("list", async () => {
      expect(list.length).toEqual(3);
    });
    it("find", async () => {
      expect(find.name).toBe("updated");
    });
  });
  it("deletes product", async () => {
    const { body } = await req(server, {
      query: mutations.product.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { deleteProduct },
    } = body;
    expect(deleteProduct).toBeDefined();
    expect(deleteProduct.message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
