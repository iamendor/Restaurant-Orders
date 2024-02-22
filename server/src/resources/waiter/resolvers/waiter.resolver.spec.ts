import { Test } from "@nestjs/testing";
import { WaiterResolver } from "./waiter.resolver";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { WaiterService } from "../services/waiter.service";
import { SecurityModule } from "../../../security/security.module";
import { WaiterServiceMock } from "../services/mock/waiter.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { TaskService } from "../../task/services/task.service";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { ContextIdFactory } from "@nestjs/core";
import {
  mockRestaurantPayload,
  mockWaiter,
  mockWaiterPayload,
} from "../../../../test/helper/mock.unit";
import { IdGuard } from "../../../auth/guard/id.guard";

describe("Waiter Resolver", () => {
  let resolver: WaiterResolver;

  const SUCCESS = "success";

  beforeAll(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);

    const module = await Test.createTestingModule({
      imports: [SecurityModule, PrismaMainModule, FilterModule],
      providers: [
        { provide: WaiterService, useClass: WaiterServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        IdGuard,
        WaiterResolver,
      ],
    }).compile();
    resolver = await module.resolve<WaiterResolver>(WaiterResolver);
  });

  it("creates a new waiter", async () => {
    const create = await resolver.create(mockWaiter);
    expect(create).toBeDefined();
    expect(create.name).toBe(mockWaiter.name);
  });

  it("updates the waiter", async () => {
    const update = { name: "updatedWaiter" };
    const updatedWaiter = await resolver.update(mockRestaurantPayload, {
      update,
      where: {
        id: mockWaiter.id,
      },
    });
    expect(updatedWaiter.name).toBe(update.name);
  });
  it("updates waiter password", async () => {
    const update = {
      password: "updatedPassword",
    };
    const updatedPassword = await resolver.updatePassword(
      mockRestaurantPayload,
      {
        update,
        where: {
          id: 1,
        },
      },
    );
    expect(updatedPassword.message).toBe(SUCCESS);
  });

  it("updates with waiter role", async () => {
    const update = {
      password: mockWaiter.password,
      old: "updatedPassword",
    };
    const updatedPassword = await resolver.updatePassword(mockWaiterPayload, {
      update,
    });
    expect(updatedPassword.message).toBe(SUCCESS);
  });
  it("returns error because waiter didn't provide the old password", async () => {
    await expect(
      async () =>
        await resolver.updatePassword(mockWaiterPayload, {
          update: { password: "error" },
        }),
    ).rejects.toThrow("no old password specified");
  });
  it("lists waiters of restaurant", async () => {
    const waiters = await resolver.waiters(1);
    expect(waiters.length).toEqual(1);
  });

  it("returns info of waiter", async () => {
    const info = await resolver.info(mockWaiterPayload, 1);
    expect(info.name).toBe("updatedWaiter");
  });
});
