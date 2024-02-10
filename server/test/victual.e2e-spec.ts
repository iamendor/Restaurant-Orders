import { NestApplication } from "@nestjs/core";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaModule } from "../src/prisma/prisma.module";
import { PrismaService } from "../src/prisma/services/prisma.service";
import {
  clearMocks,
  createCategory,
  requestNewRestaurant,
  requestNewWaiter,
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockVictual } from "./helper/mock.unit";
import { mock } from "./helper/functions";

describe("Victual", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

  let categoryId: number;
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
        query: mutations.victual.create(),
        variables: {
          data: {
            ...mock.victual.create,
            categoryId,
          },
          dataVictuals: [
            ...[1, 2].map((i) => ({
              ...mock.victual.create,
              categoryId,
              name: `MockVictual${i}`,
            })),
          ],
        },
      }).set("Authorization", restaurantToken);
      create = body.data.createVictual;
      createMultiple = body.data.createVictuals;
    });

    it("creates a victual", () => {
      expect(create.name).toBe(mockVictual.name);
      id = create.id;
    });
    it("creates multiple victual", () => {
      expect(createMultiple.message).toBe("success");
    });
  });

  it("updates victual", async () => {
    const update = "updated";
    const { body } = await req(server, {
      query: mutations.victual.update(),
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
        updateVictual: { name },
      },
    } = body;
    expect(name).toBe(update);
  });
  describe("List and find as restaurant", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.victual.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      list = body.data.victuals;
      find = body.data.victual;
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
        query: queries.victual.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      list = body.data.victuals;
      find = body.data.victual;
    });
    it("list", async () => {
      expect(list.length).toEqual(3);
    });
    it("find", async () => {
      expect(find.name).toBe("updated");
    });
  });
  it("deletes victual", async () => {
    const { body } = await req(server, {
      query: mutations.victual.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { deleteVictual },
    } = body;
    expect(deleteVictual).toBeDefined();
    expect(deleteVictual.message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
