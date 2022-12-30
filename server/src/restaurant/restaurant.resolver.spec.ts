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
import { MealModule } from "../meal/meal.module";
import { OrderModule } from "../order/order.module";
describe("Restaurant Resolver", () => {
  let resolver: RestaurantResolver;
  let payload: JwtPayload;
  let prisma: PrismaService;
  const mocks = getMocks();
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        PrismaModule,
        AddressModule,
        TableModule,
        WaiterModule,
        CategoryModule,
        MealModule,
        OrderModule,
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
      email: restaurant.email,
    };
  });

  it("updates the restaurant", async () => {
    const updatePayload = { name: "updatedName" };
    const update = await resolver.update(payload, updatePayload);
    expect(update).toBeDefined();
    expect(update.name).toBe(updatePayload.name);
  });

  it("updates password", async () => {
    const update = {
      old: mocks.restaurant.password,
      password: "update",
    };

    const updatePassword = await resolver.updatePassword(payload, update);
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
    const info = await resolver.info(payload);
    expect(info.email).toBe(mocks.restaurant.email);
  });

  it("return address", async () => {
    const { address: addressInfo, ...rest } = mocks.restaurant;
    const address = await resolver.getAddress({
      ...rest,
      id: payload.id,
    });
    expect(address).toBeDefined();
    expect(address).toMatchObject(addressInfo);
  });

  it("return tables of restaurant", async () => {
    const tables = await resolver.getTables({ id: payload.id } as Restaurant);
    expect(tables.length).toEqual(0);
  });
  it("return waiters of restaurant", async () => {
    const waiters = await resolver.getWaiters({ id: payload.id } as Restaurant);
    expect(waiters.length).toEqual(0);
  });
  it("list categories of restaurant", async () => {
    const categories = await resolver.getCategories({
      id: payload.id,
    } as Restaurant);
    expect(categories.length).toEqual(0);
  });
  it("return meals of restaurant", async () => {
    const meals = await resolver.getMeals({ id: payload.id } as Restaurant);
    expect(meals.length).toEqual(0);
  });

  it("list orders of restaurant", async () => {
    const orders = await resolver.getOrders({ id: payload.id } as Restaurant);
    expect(orders.length).toEqual(0);
  });

  it("deletes restaurant", async () => {
    const { message } = await resolver.delete(payload);
    expect(message).toBe("success");
  });
});
