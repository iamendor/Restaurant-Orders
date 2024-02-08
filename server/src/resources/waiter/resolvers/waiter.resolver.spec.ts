import { Test } from "@nestjs/testing";
import { WaiterResolver } from "./waiter.resolver";
import { PrismaModule } from "../../../prisma/prisma.module";
import { WaiterService } from "../services/waiter.service";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { getMocks } from "../../../../test/helper/mocks";
import { SecurityModule } from "../../../security/security.module";
import { WaiterServiceMock } from "../services/mock/waiter.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";

jest.mock("../services/waiter.service");
describe("Waiter Resolver", () => {
  let service: WaiterService;
  let resolver: WaiterResolver;
  let prisma: PrismaService;

  const SUCCESS = "success";

  let payload: JwtPayload;
  let waiterPayload: JwtPayload;
  const mocks = getMocks();
  const restaurant = { ...mocks.restaurant, id: 1 };
  let restaurantId: number;

  beforeAll(async () => {
    jest.clearAllMocks();
    const module = await Test.createTestingModule({
      imports: [SecurityModule, PrismaModule, FilterModule],
      providers: [
        { provide: WaiterService, useClass: WaiterServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        WaiterResolver,
      ],
    }).compile();
    resolver = module.get<WaiterResolver>(WaiterResolver);
    service = module.get<WaiterService>(WaiterService);
    prisma = module.get<PrismaService>(PrismaService);

    payload = mocks.restaurantPayload(restaurant);
    restaurantId = restaurant.id;
  });

  it("creates a new waiter", async () => {
    const create = await resolver.create(payload, mocks.waiter);
    expect(create).toBeDefined();
    expect(create.name).toBe(mocks.waiter.name);

    waiterPayload = mocks.waiterPayload(create, restaurantId);
  });

  it("updates the waiter", async () => {
    const update = { name: "updatedWaiter" };
    const updatedWaiter = await resolver.update(
      payload,
      {
        update,
        where: {
          id: waiterPayload.id,
        },
      },
      payload.id
    );
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
    expect(updatedPassword.message).toBe(SUCCESS);
  });

  it("updates with waiter role", async () => {
    const update = {
      password: mocks.waiter.password,
      old: "updatedPassword",
    };
    const updatedPassword = await resolver.updatePassword(waiterPayload, {
      update,
    });
    expect(updatedPassword.message).toBe(SUCCESS);
  });
  it("returns error because waiter didn't provide the old password", async () => {
    await expect(
      async () =>
        await resolver.updatePassword(waiterPayload, {
          update: { password: "error" },
        })
    ).rejects.toThrowError("no old password specified");
  });
  it("lists waiters of restaurant", async () => {
    service.list = jest.fn().mockReturnValue([{ id: 1, name: "test" }]);

    const waiters = await resolver.waiters(restaurantId);
    expect(waiters.length).toEqual(1);
  });

  it("should filter out all waiter", async () => {
    const waiters = await resolver.waiters(restaurantId, { name: "no match" });
  });

  it("returns info of waiter", async () => {
    const info = await resolver.info(waiterPayload);
    expect(info.name).toBe("updatedWaiter");
  });

  afterAll(async () => await prisma.$disconnect());
});
