import { Test } from "@nestjs/testing";
import { RestaurantResolver } from "./restaurant.resolver";
import { RestaurantService } from "../services/restaurant.service";
import { RestaurantGuardModule } from "../guard/restaurant.guard.module";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { RestaurantServiceMock } from "../services/mock/restaurant.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  mockRestaurant,
  mockRestaurantPayload,
} from "../../../../test/helper/mock.unit";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { CurrencyService } from "../../currency/services/currency.service";
import { CurrencyServiceMock } from "../../currency/services/mock/currency.service.mock";
import { PrismaStaticModule } from "../../../prisma/static/prisma.static.module";
import { Restaurant } from "prisma/client/main";

describe("Restaurant Resolver", () => {
  const SUCCESS = "success";
  let resolver: RestaurantResolver;
  let payload: JwtPayload = mockRestaurantPayload;
  const rst: Restaurant = { ...mockRestaurant, currencyId: 1 };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaMainModule, PrismaStaticModule, RestaurantGuardModule],
      providers: [
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: CurrencyService, useClass: CurrencyServiceMock },
        { provide: RestaurantService, useClass: RestaurantServiceMock },
        RestaurantResolver,
      ],
    }).compile();
    resolver = module.get<RestaurantResolver>(RestaurantResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("updates the restaurant", async () => {
    const updatePayload = { name: "updatedName" };
    const update = await resolver.update(rst, updatePayload);
    expect(update).toBeDefined();
    expect(update.name).toBe(updatePayload.name);
  });

  it("updates password", async () => {
    const update = {
      old: rst.password,
      password: "update",
    };

    const updatePassword = await resolver.updatePassword(update, payload);
    expect(updatePassword.message).toBe(SUCCESS);
  });

  it("return restaurant info", () => {
    const info = resolver.info(rst);
    expect(info.email).toBe(mockRestaurant.email);
  });

  it("deletes restaurant", async () => {
    const deleteRestaurant = await resolver.delete(payload);
    expect(deleteRestaurant.message).toBe(SUCCESS);
  });
});
