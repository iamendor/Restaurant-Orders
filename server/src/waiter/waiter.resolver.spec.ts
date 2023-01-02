import { Test } from "@nestjs/testing";
import { WaiterResolver } from "./waiter.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { RestaurantModule } from "../restaurant/restaurant.module";
import { WaiterService } from "./waiter.service";
import { PrismaService } from "../prisma/prisma.service";
import { clearMocks, getMocks } from "../../test/helper/mocks";
import { JwtPayload, Waiter } from "../models/model";
import * as bcrypt from "bcrypt";

describe("Waiter Resolver", () => {
  let resolver: WaiterResolver;
  let prisma: PrismaService;
  let payload: JwtPayload;
  let waiterPayload: JwtPayload;
  const mocks = getMocks();

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaModule, RestaurantModule],
      providers: [WaiterService, WaiterResolver],
    }).compile();
    resolver = module.get<WaiterResolver>(WaiterResolver);
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

  it("creates a new waiter", async () => {
    const create = await resolver.create(payload, mocks.waiter);
    expect(create).toBeDefined();
    expect(create.name).toBe(mocks.waiter.name);
    waiterPayload = {
      name: create.name,
      id: create.id,
      sub: create.id,
      role: "waiter",
      email: create.email,
    };
  });

  it("updates the waiter", async () => {
    const update = { name: "updatedWaiter" };
    const updatedWaiter = await resolver.update(payload, {
      update,
      where: {
        id: waiterPayload.id,
      },
    });
    expect(updatedWaiter.name).toBe(update.name);
  });
  it("updates waiter password", async () => {
    const update = {
      password: "updatedPassword",
    };
    const updatedPassword = await resolver.updatePassword(payload, {
      update,
      where: {
        id: waiterPayload.id,
      },
    });
    expect(updatedPassword.message).toBe("success");
    const waiter = await prisma.waiter.findUnique({
      where: { email: mocks.waiter.email },
    });
    expect(bcrypt.compareSync(update.password, waiter.password)).toBeTruthy();
  });

  it("updates with waiter role", async () => {
    const update = {
      password: "updatedWaiterPassword",
      old: "updatedPassword",
    };
    const updatedPassword = await resolver.updatePassword(waiterPayload, {
      update,
    });
    expect(updatedPassword.message).toBe("success");
    const waiter = await prisma.waiter.findUnique({
      where: { email: mocks.waiter.email },
    });
    expect(bcrypt.compareSync(update.password, waiter.password)).toBeTruthy();
  });
  it("returns error because waiter didn't provide the old password", async () => {
    await expect(
      async () =>
        await resolver.updatePassword(waiterPayload, {
          update: { password: "error" },
        })
    ).rejects.toThrowError("old password is not provided");
  });
  it("returns error because restaurant didn't provide the waiter", async () => {
    await expect(
      async () =>
        await resolver.updatePassword(payload, {
          update: { password: "error" },
        })
    ).rejects.toThrowError("no waiter specified");
  });
  it("lists waiters of restaurant", async () => {
    const waiters = await resolver.waiters(payload);
    expect(waiters.length).toEqual(1);
  });
  it("returns info of waiter", async () => {
    const info = await resolver.info(waiterPayload);
    expect(info.name).toBe("updatedWaiter");
  });

  it("returns the restaurant of waiter", async () => {
    const restaurant = await resolver.getRestaurant(
      waiterPayload as unknown as Waiter
    );
    expect(restaurant.id).toBe(payload.id);
  });

  it("list orders of waiter", async () => {
    const orders = await resolver.getOrders(waiterPayload as unknown as Waiter);
    expect(orders.length).toEqual(0);
  });

  it("list meals of waiter", async () => {
    const meals = await resolver.getMeals(waiterPayload as unknown as Waiter);
    expect(meals.length).toEqual(0);
  });

  it("deletes the waiter", async () => {
    const deleted = await resolver.delete(payload, { id: waiterPayload.id });
    expect(deleted.message).toBe("success");
  });
});
