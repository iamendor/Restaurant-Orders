import { TestingModule, Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { CoreModule } from "../src/core/core.module";
import { PrismaMainModule } from "../src/prisma/main/prisma.main.module";
import { PrismaMainService } from "../src/prisma/main/services/prisma.main.service";
import { clearMocks, mock } from "./helper/functions";
import { NestApplication } from "@nestjs/core";
import { getMutations } from "./helper/mutations";
import req from "./helper/graphql-request";
import { mockRestaurant, mockWaiter } from "./helper/mock.unit";

//TODO: open handles fix
describe("Authentication", () => {
  const { auth } = mock;

  let app: NestApplication;
  let server;

  const mutations = getMutations();

  let prismaService: PrismaMainService;
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
  });

  describe("Restaurant", () => {
    let signup;
    let loginRestaurant;
    beforeAll(async () => {
      const { body } = await req(server, {
        query: mutations.restaurant.signupAndLogin(),
        variables: {
          data: auth.restaurant.signup,
          credentials: auth.restaurant.login,
        },
      });
      signup = body.data.signup;
      loginRestaurant = body.data.loginRestaurant;
    });

    it("should signup restaurant", () => {
      expect(signup.name).toBe(mockRestaurant.name);
      expect(signup.address.address1).toBe(mockRestaurant.address.address1);
    });

    it("should login and return jwt token", async () => {
      expect(loginRestaurant.restaurant).toBeDefined();
      expect(loginRestaurant.access_token).toBeDefined();
      restaurantToken = `Bearer ${loginRestaurant.access_token}`;
    });

    it("returns unauthorized on login because of invalid password", async () => {
      const invalidCredentials = {
        email: mockRestaurant.email,
        password: "invalidPassword",
      };
      const { body } = await req(server, {
        query: mutations.restaurant.login(),
        variables: {
          credentials: invalidCredentials,
        },
      });
      const {
        errors: [error],
      } = body;
      const {
        extensions: { code },
      } = error;

      expect(code).toEqual(401);
      expect(body.data).toBeNull();
    });
  });

  describe("Waiter", () => {
    let createWaiter;
    let loginWaiter;

    let id: number;

    beforeAll(async () => {
      const { body } = await req(server, {
        query: mutations.waiter.create(),
        variables: {
          data: auth.waiter.signup,
          credentials: auth.waiter.login,
        },
      }).set("Authorization", restaurantToken);
      createWaiter = body.data.createWaiter;
      loginWaiter = body.data.loginWaiter;
    });
    it("should create a new waiter", async () => {
      expect(createWaiter).not.toBeNull();
      expect(createWaiter.name).toBe(mockWaiter.name);
      expect(createWaiter.gender).toBe(mockWaiter.gender);
      id = createWaiter.id;
    });
    it("logins the waiter", async () => {
      expect(loginWaiter).not.toBeNull();
      expect(loginWaiter.waiter.name).toBe(mockWaiter.name);
      expect(loginWaiter.access_token).toBeDefined();
    });
    it("return unauthorized on login because password is invalid", async () => {
      const invalidCredentials = {
        email: mockWaiter.email,
        password: "invalidPassword",
      };
      const { body } = await req(server, {
        query: mutations.waiter.login(),
        variables: {
          credentials: invalidCredentials,
        },
      });
      const { data } = body;
      expect(data).toBeNull();
    });
  });

  afterAll(async () => await prismaService.$disconnect(), 10_000);
});
