import { ConfigModule } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "../services/auth.service";
import { JwtStrategy } from "../strategies/jwt.strategy";
import { PrismaMainModule } from "../../prisma/main/prisma.main.module";
import { SecurityModule } from "../../security/security.module";
import { AuthServiceMock } from "../services/mock/auth.service.mock";
import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { RestaurantServiceMock } from "../../resources/restaurant/services/mock/restaurant.service.mock";
import { TaskService } from "../../resources/task/services/task.service";
import { TaskServiceMock } from "../../resources/task/services/mock/task.service.mock";
import {
  mockCurrency,
  mockRestaurant,
  mockWaiter,
} from "../../../test/helper/mock.unit";
import { CurrencyService } from "../../resources/currency/services/currency.service";
import { CurrencyServiceMock } from "../../resources/currency/services/mock/currency.service.mock";

describe("Auth Resolver", () => {
  let resolver: AuthResolver;
  let jwt: JwtService;

  const restaurant = mockRestaurant;
  const waiter = mockWaiter;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register({ secret: "test" }),
        SecurityModule,
        PrismaMainModule,
      ],
      providers: [
        AuthResolver,
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: RestaurantService, useClass: RestaurantServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        { provide: CurrencyService, useClass: CurrencyServiceMock },
        JwtStrategy,
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
    jwt = module.get<JwtService>(JwtService);
  });

  it("the resolver is defined", () => {
    expect(resolver).toBeDefined();
  });

  it("signup a restaurant", async () => {
    const signup = await resolver.signup({
      ...restaurant,
      currency: mockCurrency,
    });
    expect(signup).toBeDefined();
    expect(signup.name).toBe(restaurant.name);
  });

  it("login the restaurant", async () => {
    const login = await resolver.loginRestaurant({
      email: restaurant.email,
      password: restaurant.password,
    });
    expect(login).toBeDefined();
    expect(login.access_token).toBeDefined();
    expect(jwt.verify(login.access_token)).toBeTruthy();
  });

  describe("Waiter", () => {
    it("login waiter", async () => {
      const {
        waiter: { email, name },
        access_token,
      } = await resolver.loginWaiter({
        email: waiter.email,
        password: waiter.password,
      });
      expect(email).toBe(waiter.email);
      expect(name).toBe(waiter.name);
      expect(access_token).toBeDefined();
      expect(jwt.verify(access_token)).toBeTruthy();
    });
  });
});
