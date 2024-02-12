import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import { clearMocks, mock, requestNewRestaurant } from "./helper/functions";
import { NestApplication } from "@nestjs/core";
import req from "./helper/graphql-request";
import { getMutations } from "./helper/mutations";
import { mockRestaurant } from "./helper/mock.unit";
import { getQueries } from "./helper/queries";

describe("Restaurant", () => {
  let app: NestApplication;
  let server;
  let prismaService: PrismaMainService;

  const mutations = getMutations();
  const queries = getQueries();

  let restaurantToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaMainModule],
    }).compile();
    prismaService = moduleFixture.get<PrismaMainService>(PrismaMainService);

    await clearMocks({ prisma: prismaService });
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();

    const { access_token } = await requestNewRestaurant(server);
    restaurantToken = access_token;
  });
  afterAll(async () => await prismaService.$disconnect());

  it("updates the restaurant's name", async () => {
    const update = "updatedName";
    const { body } = await req(server, {
      query: mutations.restaurant.update(),
      variables: {
        update: {
          name: update,
        },
        credentials: mock.auth.restaurant.login,
      },
    }).set("Authorization", restaurantToken);
    const {
      data: {
        updateRestaurant: { name },
        loginRestaurant: { access_token },
      },
    } = body;
    expect(name).toBe(update);
    expect(access_token).toBeDefined();
    restaurantToken = `Bearer ${access_token}`;
  });
  it("updates the restaurant's password and relogin", async () => {
    const update = "updatedPassword";
    const { body } = await req(server, {
      query: mutations.restaurant.updatePassword(),
      variables: {
        update: {
          old: mockRestaurant.password,
          password: update,
        },
        credentials: {
          email: mock.auth.restaurant.login.email,
          password: update,
        },
      },
    }).set("Authorization", restaurantToken);
    const {
      data: {
        updateRestaurantPassword: { message },
        loginRestaurant: { access_token },
      },
    } = body;
    expect(message).toBe("success");
    expect(access_token).toBeDefined();
    restaurantToken = `Bearer ${access_token}`;
  });

  describe("List waiters and info about restaurant", () => {
    let waiters;
    let restaurantInfo;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: queries.restaurant.waitersAndInfo(),
      }).set("Authorization", restaurantToken);
      waiters = body.data.waiters;
      restaurantInfo = body.data.restaurantInfo;
    });

    it("list all waiter of restaurant", async () => {
      expect(waiters).toBeDefined();
      expect(waiters.length).toEqual(0);
    });

    it("return restaurant info", async () => {
      expect(restaurantInfo).toBeDefined();
      expect(restaurantInfo.name).toBe("updatedName");
      expect(restaurantInfo.address).toBeDefined();
    });
  });

  it("deletes the restaurant", async () => {
    const { body } = await req(server, {
      query: mutations.restaurant.delete(),
    }).set("Authorization", restaurantToken);

    const {
      data: {
        deleteRestaurant: { message },
      },
    } = body;
    expect(message).toBe("success");
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
