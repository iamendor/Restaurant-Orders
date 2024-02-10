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
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockCategory } from "./helper/mock.unit";

describe("Category", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

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

    const { access_token: rt } = await requestNewRestaurant(server);
    const { access_token: wt } = await requestNewWaiter(server, rt);

    restaurantToken = rt;
    waiterToken = wt;
  });
  afterAll(async () => await prismaService.$disconnect());

  describe("Create", () => {
    let create;
    let createMultiple;
    beforeAll(async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { restaurantId: _, parentId: __, id: ___, ...rest } = mockCategory;
      const { body } = await req(server, {
        query: mutations.category.create(),
        variables: {
          data: rest,
          dataMultiple: [2, 3].map((i) => ({ name: rest.name + i })),
        },
      }).set("Authorization", restaurantToken);
      create = body.data.createCategory;
      createMultiple = body.data.createCategories;
    });
    it("creates a category", () => {
      expect(create.name).toBe(mockCategory.name);
      id = create.id;
    });
    it("creates multiple categories", async () => {
      expect(createMultiple.message).toBe("success");
    });
  });

  it("updates the category", async () => {
    const update = "updatedCategory";
    const { body } = await req(server, {
      query: mutations.category.update(),
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
      data: { updateCategory },
    } = body;
    expect(updateCategory).toBeDefined();
    expect(updateCategory.name).toBe(update);
  });

  describe("List and find as restaurant", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.category.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      list = body.data.categories;
      find = body.data.category;
    });
    it("list", () => {
      expect(list).toBeDefined();
      expect(list.length).toEqual(3);
    });
    it("find", () => {
      expect(find.name).toBe("updatedCategory");
    });
  });
  describe("List and find as waiter", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.category.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      list = body.data.categories;
      find = body.data.category;
    });
    it("list", () => {
      expect(list).toBeDefined();
      expect(list.length).toEqual(3);
    });
    it("find", () => {
      expect(find.name).toBe("updatedCategory");
    });
  });
  it("deletes category", async () => {
    const { body } = await req(server, {
      query: mutations.category.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { deleteCategory },
    } = body;
    expect(deleteCategory.message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
