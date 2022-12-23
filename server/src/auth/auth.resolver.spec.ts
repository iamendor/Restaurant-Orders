import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import { Config } from "../config";
import { RestaurantModule } from "../restaurant/restaurant.module";
import { WaiterModule } from "../waiter/waiter.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { PrismaService } from "../prisma/prisma.service";
import { PrismaModule } from "../prisma/prisma.module";
import * as bcrypt from "bcrypt";
import { clearMocks, getMocks } from "../../test/helper/mocks";

export const checkRestaurantInDatabase = async (
  prisma: PrismaService,
  id: number
) => {
  return (await prisma.restaurant.findUnique({ where: { id } })) ? true : false;
};

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
        RestaurantModule,
        PrismaModule,
        WaiterModule,
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: Config.getJwtConfig,
        }),
      ],
      providers: [AuthResolver, AuthService, JwtStrategy],
      exports: [AuthService],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
    prisma = module.get<PrismaService>(PrismaService);
    jwt = module.get<JwtService>(JwtService);

    await clearMocks({ prisma });
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
    expect(await checkRestaurantInDatabase(prisma, signup.id)).toBeTruthy();
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
    beforeAll(async () => {
      await prisma.waiter.create({
        data: {
          ...mocks.waiter,
          password: bcrypt.hashSync(mocks.waiter.password, 10),
          restaurant: {
            connect: {
              id: restaurantId,
            },
          },
        },
      });
    });

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
