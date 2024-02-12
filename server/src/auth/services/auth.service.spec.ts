import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { WaiterService } from "../../resources/waiter/services/waiter.service";
import { SecurityModule } from "../../security/security.module";
import { PrismaModule } from "../../prisma/prisma.module";
import { RestaurantServiceMock } from "../../resources/restaurant/services/mock/restaurant.service.mock";
import { WaiterServiceMock } from "../../resources/waiter/services/mock/waiter.service.mock";

import { JwtPayload } from "../../interfaces/jwt.interface";
import { mockRestaurant, mockWaiter } from "../../../test/helper/mock.unit";
import { Restaurant } from "../../models/restaurant.model";

describe("AuthService", () => {
  let service: AuthService;
  let jwt: JwtService;

  const credentials = {
    email: mockRestaurant.email,
    password: mockRestaurant.password,
  };
  const wCredentials = {
    email: mockWaiter.email,
    password: mockWaiter.password,
  };

  const invalidCredentials = {
    email: mockWaiter.email,
    password: "invalid",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: "test",
        }),
        SecurityModule,
        PrismaModule,
      ],
      providers: [
        AuthService,
        { provide: RestaurantService, useClass: RestaurantServiceMock },
        { provide: WaiterService, useClass: WaiterServiceMock },
      ],
    }).compile();
    jwt = module.get<JwtService>(JwtService);

    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should validate a restaurant", async () => {
    const restaurantValidated = await service.validateRestaurant(credentials);
    expect(restaurantValidated).not.toBeNull();
  });
  it("should validate a waiter", async () => {
    const waiterValidated = await service.validateWaiter(wCredentials);
    expect(waiterValidated).not.toBeNull();
  });

  it("should return null 'cause credentials invalid", async () => {
    const invalidRestaurant =
      await service.validateRestaurant(invalidCredentials);
    const invalidWaiter = await service.validateWaiter(invalidCredentials);
    expect(invalidRestaurant).toBeNull();
    expect(invalidWaiter).toBeNull();
  });
  it("should generate jwt for restaurant", async () => {
    const payload = service.generateRestaurantJwt(mocks.restaurantModel);
    expect(typeof payload === "string").toBeTruthy();
    const decoded: JwtPayload = jwt.decode(payload) as JwtPayload;
    expect(decoded.sub).toBe(1);
    expect(decoded.name).toBe("Test Kft.");
    expect(decoded.role).toBe("restaurant");
  });
  it("should generate jwt for waiter", async () => {
    const payload = service.generateWaiterJwt(mockWaiter);
    expect(payload).toBeDefined();
    const decoded: JwtPayload = jwt.decode(payload) as JwtPayload;
    expect(decoded.sub).toBe(1);
    expect(decoded.name).toBe(mockWaiter.name);
    expect(decoded.role).toBe("waiter");
  });
});
