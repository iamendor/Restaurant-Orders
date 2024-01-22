import { ConfigModule } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "../services/auth.service";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { PrismaService } from "../../prisma/services/prisma.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { getMocks } from "../../../test/helper/mocks";
import { SecurityModule } from "../../security/security.module";
import { AuthServiceMock } from "../services/mock/auth.service.mock";
import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { RestaurantServiceMock } from "../../resources/restaurant/services/mock/restaurant.service.mock";

describe("Auth Resolver", () => {
  let resolver: AuthResolver;
  let prisma: PrismaService;
  let jwt: JwtService;
  let restaurantId: number;
  const mocks = getMocks();
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register({ secret: "test" }),
        SecurityModule,
        PrismaModule,
      ],
      providers: [
        AuthResolver,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: RestaurantService, useClass: RestaurantServiceMock },
        JwtStrategy,
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);
  });

  it("the resolver is defined", () => {
    expect(resolver).toBeDefined();
  });

  it("signup a restaurant", async () => {
    const signup = await resolver.signup({
      ...mocks.restaurant,
    });
    expect(signup).toBeDefined();
    expect(signup.name).toBe(mocks.restaurant.name);
    restaurantId = signup.id;
  });

  it("login the restaurant", async () => {
    const login = await resolver.loginRestaurant({
      email: mocks.restaurant.email,
      password: mocks.restaurant.password,
    });
    expect(login).toBeDefined();
    expect(login.access_token).toBeDefined();
    expect(jwt.verify(login.access_token)).toBeTruthy();
  });

  describe("Waiter", () => {
    it("login waiter", async () => {
      const { waiter, access_token } = await resolver.loginWaiter({
        email: mocks.waiter.email,
        password: mocks.waiter.password,
      });
      expect(waiter).toBeDefined();
      expect(waiter.email).toBe(mocks.waiter.email);
      expect(waiter.name).toBe(mocks.waiter.name);
      expect(access_token).toBeDefined();
      expect(jwt.verify(access_token)).toBeTruthy();
    });
  });
});
