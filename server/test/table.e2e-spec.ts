import { NestApplication } from "@nestjs/core";
import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import {
  clearMocks,
  mock,
  requestNewRestaurant,
  requestNewWaiter,
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockTable } from "./helper/mock.unit";

const { table } = mock;
describe("Table", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaMainService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;
  let waiterToken: string;

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

    const { access_token: rt } = await requestNewRestaurant(server);
    const { access_token: wt } = await requestNewWaiter(server, rt);

    restaurantToken = rt;
    waiterToken = wt;
  });

  afterAll(async () => await prismaService.$disconnect());

  describe("Create", () => {
    let createTable;
    let createTables;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: mutations.table.create(),
        variables: {
          data: table.create,
          dataMultiple: [{ name: "mockTable2" }, { name: "mockTable3" }],
        },
      }).set("Authorization", restaurantToken);
      createTable = body.data.createTable;
      createTables = body.data.createTables;
    });
    it("creates a table", () => {
      expect(createTable.name).toBe(mockTable.name);
      id = createTable.id;
    });
    it("creates multiple table", () => {
      expect(createTables.message).toBe("success");
    });
  });
  describe("List and find as restaurant", () => {
    let list;
    let find;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.table.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", restaurantToken);
      list = body.data.tables;
      find = body.data.table;
    });
    it("lists all table", () => {
      expect(list.length).toEqual(3);
    });
    it("find a table", () => {
      expect(find).toBeDefined();
      expect(find.name).toBe(mockTable.name);
    });
  });
  describe("List and find as waiter", () => {
    let tables;
    let table;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.table.listAndFind(),
        variables: {
          where: {
            id,
          },
        },
      }).set("Authorization", waiterToken);
      table = body.data.table;
      tables = body.data.tables;
    });

    it("lists all table", async () => {
      expect(tables.length).toEqual(3);
    });
    it("find a table", async () => {
      expect(table).toBeDefined();
      expect(table.name).toBe(mockTable.name);
    });
  });

  it("updates the table", async () => {
    const update = "updatedName";
    const { body } = await req(server, {
      query: mutations.table.update(),
      variables: {
        data: {
          update: {
            name: update,
          },
          where: {
            id,
          },
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { updateTable },
    } = body;

    expect(updateTable.name).toBe(update);
  });
  it("deletes the table", async () => {
    const { body } = await req(server, {
      query: mutations.table.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const message = body.data.deleteTable.message;
    expect(message).toBe("success");
    expect(await prismaService.table.findUnique({ where: { id } })).toBeNull();
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
