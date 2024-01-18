import { Test } from "@nestjs/testing";
import { RestaurantResolver } from "./restaurant.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { AddressModule } from "../address/address.module";
import { RestaurantService } from "./restaurant.service";
import { PrismaService } from "../prisma/prisma.service";
import { clearMocks, getMocks } from "../../test/helper/mocks";
import { JwtPayload, Restaurant } from "../models/model";
import * as bcrypt from "bcrypt";
import { TableModule } from "../table/table.module";
import { WaiterModule } from "../waiter/waiter.module";
import { CategoryModule } from "../category/category.module";
import { OrderModule } from "../order/order.module";
import { VictualModule } from "../victual/victual.module";
import { MealModule } from "../meal/meal.module";
import { CurrencyModule } from "../currency/currency.module";
import { SecurityModule } from "../security/security.module";
import { RestaurantGuardModule } from "./guard/restaurant.guard.module";
describe("Restaurant Resolver", () => {
  let resolver: RestaurantResolver;
  let payload: JwtPayload;
  let prisma: PrismaService;
  let rst: Restaurant;
  const mocks = getMocks();
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        SecurityModule,
        PrismaModule,
        AddressModule,
        TableModule,
        WaiterModule,
        CategoryModule,
        VictualModule,
        OrderModule,
        MealModule,
        CurrencyModule,
        RestaurantGuardModule,
      ],
      providers: [RestaurantResolver, RestaurantService],
    }).compile();
    resolver = module.get<RestaurantResolver>(RestaurantResolver);
    prisma = module.get<PrismaService>(PrismaService);
    const restaurant = await clearMocks({ prisma, createRestaurant: true });
    payload = {
      name: restaurant.name,
      id: restaurant.id,
      sub: restaurant.id,
      role: "restaurant",
    };
    rst = restaurant;
  });

  it("updates the restaurant", async () => {
    const updatePayload = { name: "updatedName" };
    const update = await resolver.update(rst, updatePayload);
    expect(update).toBeDefined();
    expect(update.name).toBe(updatePayload.name);
  });

  it("updates password", async () => {
    const update = {
      old: mocks.restaurant.password,
      password: "update",
    };

    const updatePassword = await resolver.updatePassword(update, payload);
    expect(updatePassword.message).toBe("success");
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: payload.id,
      },
    });
    expect(
      bcrypt.compareSync(update.password, restaurant.password)
    ).toBeTruthy();
  });

  it("return restaurant info", async () => {
    const info = await resolver.info(rst);
    expect(info.email).toBe(mocks.restaurant.email);
  });
});
