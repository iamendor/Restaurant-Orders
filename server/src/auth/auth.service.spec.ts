import { JwtModule, JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { RestaurantModule } from "../restaurant/restaurant.module";
import { WaiterModule } from "../waiter/waiter.module";
import { AuthService } from "./auth.service";
import * as bcrypt from "bcrypt";
import { RestaurantService } from "../restaurant/restaurant.service";
import { WaiterService } from "../waiter/waiter.service";
import { mockRestaurant } from "../restaurant/restaurant.service.spec";
import { JwtPayload, Restaurant, WaiterModel } from "../models/model";
import { mockWaiter } from "../waiter/waiter.service.spec";

const returnPassword = {
  password: bcrypt.hashSync("test", 10),
};

describe("AuthService", () => {
  let service: AuthService;
  let jwt: JwtService;
  const credentials = {
    email: "test@gmail.com",
    password: "test",
  };

  const invalidCredentials = {
    email: "test@gmail.com",
    password: "invalid",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          secret: "test",
        }),
        WaiterModule,
        RestaurantModule,
      ],
      providers: [AuthService],
    }).compile();
    const restaurantService = module.get<RestaurantService>(RestaurantService);
    const waiterService = module.get<WaiterService>(WaiterService);
    jwt = module.get<JwtService>(JwtService);
    restaurantService.find = jest.fn().mockReturnValue(returnPassword);
    waiterService.find = jest.fn().mockReturnValue(returnPassword);

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
    const waiterValidated = await service.validateWaiter(credentials);
    expect(waiterValidated).not.toBeNull();
  });

  it("should return null 'cause credentials invalid", async () => {
    const invalidRestaurant = await service.validateRestaurant(
      invalidCredentials
    );
    const invalidWaiter = await service.validateWaiter(invalidCredentials);
    expect(invalidRestaurant).toBeNull();
    expect(invalidWaiter).toBeNull();
  });
  it("should generate jwt for restaurant", async () => {
    const payload = service.generateRestaurantJwt(mockRestaurant as Restaurant);
    expect(typeof payload === "string").toBeTruthy();
    const decoded: JwtPayload = jwt.decode(payload) as JwtPayload;
    expect(decoded.sub).toBe(1);
    expect(decoded.name).toBe("Test Kft.");
    expect(decoded.role).toBe("restaurant");
  });
  it("should generate jwt for waiter", async () => {
    const payload = service.generateWaiterJwt(mockWaiter as WaiterModel);
    expect(typeof payload === "string").toBeTruthy();
    const decoded: JwtPayload = jwt.decode(payload) as JwtPayload;
    expect(decoded.sub).toBe(1);
    expect(decoded.name).toBe("waiter1");
    expect(decoded.role).toBe("waiter");
  });
});
