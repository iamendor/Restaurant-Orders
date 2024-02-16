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
} from "./helper/functions";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import req from "./helper/graphql-request";
import { mockWaiter } from "./helper/mock.unit";

describe("Waiter", () => {
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
    const { access_token: wt, waiter } = await requestNewWaiter(server, rt);

    restaurantToken = rt;
    waiterToken = wt;
    id = waiter.id;
  });
  afterAll(async () => await prismaService.$disconnect());

  it("updates the waiter", async () => {
    const update = "updatedWaiter";
    const { body } = await req(server, {
      query: mutations.waiter.update(),
      variables: {
        data: {
          update: {
            name: update,
          },
        },
      },
    }).set("Authorization", waiterToken);
    const {
      data: { updateWaiter },
    } = body;
    expect(updateWaiter).toBeDefined();
    expect(updateWaiter.name).toBe(update);
  });

  it("updates the waiter as the restaurant", async () => {
    const update = "updatedByRestaurant";
    const { body } = await req(server, {
      query: mutations.waiter.update(),
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
      data: { updateWaiter },
    } = body;
    expect(updateWaiter).toBeDefined();
    expect(updateWaiter.name).toBe(update);
  });

  it("updates the waiter's password and relogin", async () => {
    const update = "updatedPassword";
    const { body } = await req(server, {
      query: mutations.waiter.updatePassword(),
      variables: {
        data: {
          update: {
            password: update,
            old: mockWaiter.password,
          },
        },
        credentials: {
          email: mockWaiter.email,
          password: update,
        },
      },
    }).set("Authorization", waiterToken);

    const {
      data: {
        updateWaiterPassword: { message },
        loginWaiter: { access_token },
      },
    } = body;
    expect(message).toBe("success");
    expect(access_token).toBeDefined();
    waiterToken = `Bearer ${access_token}`;
  });

  it("returns error because old password was not provided", async () => {
    const invalidUpdate = "invalid";
    const { body } = await req(server, {
      query: mutations.waiter.updatePassword(),
      variables: {
        data: {
          update: {
            password: invalidUpdate,
          },
        },
        credentials: {
          email: mockWaiter.email,
          password: invalidUpdate,
        },
      },
    }).set("Authorization", waiterToken);
    const { errors } = body;
    expect(errors.length).toEqual(1);
    expect(errors[0].message).toBe("no old password specified");
  });

  it("updates waiter password as restaurant", async () => {
    const restaurantUpdate = "updatedRestaurantPassword";
    const { body } = await req(server, {
      query: mutations.waiter.updatePassword(),
      variables: {
        data: {
          update: {
            password: restaurantUpdate,
          },
          where: {
            id,
          },
        },
        credentials: {
          email: mockWaiter.email,
          password: restaurantUpdate,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: {
        updateWaiterPassword: { message },
        loginWaiter: { access_token },
      },
    } = body;
    expect(message).toBe("success");
    expect(access_token).toBeDefined();
    waiterToken = `Bearer ${access_token}`;
  });

  it("returns error because no waiter specified", async () => {
    const restaurantUpdate = "updatedRestaurantPassword";
    const { body } = await req(server, {
      query: mutations.waiter.updatePassword(),
      variables: {
        data: {
          update: {
            password: restaurantUpdate,
          },
        },
        credentials: {
          email: mockWaiter.email,
          password: restaurantUpdate,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      errors: [error],
    } = body;
    expect(error.message).toBe("no waiter specified");
  });

  it("returns waiter info", async () => {
    const { body } = await req(server, {
      query: queries.waiter.info(),
    }).set("Authorization", waiterToken);

    const {
      data: { waiterInfo },
    } = body;
    expect(waiterInfo).toBeDefined();
    expect(waiterInfo.id).toBe(id);
    expect(waiterInfo.name).toBe("updatedByRestaurant");
  });

  it("returns waiter info with restaurant authorization", async () => {
    const { body } = await req(server, {
      query: queries.waiter.info(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: { waiterInfo },
    } = body;
    expect(waiterInfo).toBeDefined();
    expect(waiterInfo.id).toBe(id);
    expect(waiterInfo.name).toBe("updatedByRestaurant");
  });

  it("deletes the waiter", async () => {
    const { body } = await req(server, {
      query: mutations.waiter.delete(),
      variables: {
        where: {
          id,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: {
        deleteWaiter: { message },
      },
    } = body;
    expect(message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
