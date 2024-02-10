import { Test, TestingModule } from "@nestjs/testing";
import { OrderResolver } from "./order.resolver";
import { OrderService } from "../services/order.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { OrderServiceMock } from "../services/mock/order.service.mock";
import { WaiterService } from "../../waiter/services/waiter.service";
import { WaiterServiceMock } from "../../waiter/services/mock/waiter.service.mock";
import { SecurityModule } from "../../../security/security.module";
import { SubscriptionService } from "../../../subscription/services/subscription.service";
import { SubscriptionServiceMock } from "../../../subscription/services/mock/subscription.service";
import { CreateOrder } from "../../../models/order.model";
import { FilterModule } from "../../../filter/filter.module";
import { OpenGuardModule } from "../../openhour/guard/open.guard.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { TaskService } from "../../task/services/task.service";
import { ContextIdFactory } from "@nestjs/core";
import { mockOrder } from "../../../../test/helper/mock.unit";

describe("OrderResolver", () => {
  let resolver: OrderResolver;

  let order: CreateOrder = mockOrder;

  const SUCCESS = "success";

  beforeAll(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);

    const module: TestingModule = await Test.createTestingModule({
      imports: [SecurityModule, PrismaModule, FilterModule, OpenGuardModule],
      providers: [
        { provide: SubscriptionService, useClass: SubscriptionServiceMock },
        { provide: OrderService, useClass: OrderServiceMock },
        { provide: WaiterService, useClass: WaiterServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        OrderResolver,
      ],
    }).compile();
    resolver = await module.resolve<OrderResolver>(OrderResolver, contextId);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a new order", async () => {
    const create = await resolver.create(order);
    expect(create.description).toBe("this is a mock order");
  });
  it("creates multiple order", async () => {
    const created = await resolver.createMany([order]);
    expect(created.message).toBe(SUCCESS);
  });
  it("updates the order", async () => {
    const updated = await resolver.update(1, {
      where: {
        id: 1,
      },
      update: {
        isReady: true,
      },
    });
    expect(updated.isReady).toBeTruthy();
  });
  it("deletes the order", async () => {
    const deleted = await resolver.delete(
      { id: 1 },
      {
        ...order,
        id: 1,
        createdAt: new Date(),
        closed: false,
        isReady: false,
        quantity: 1,
        restaurantId: 1,
      }
    );
    expect(deleted.message).toBe(SUCCESS);
  });
  it("list all order", async () => {
    const orders = await resolver.list(1);
    expect(orders.length).toEqual(1);
  });
});
