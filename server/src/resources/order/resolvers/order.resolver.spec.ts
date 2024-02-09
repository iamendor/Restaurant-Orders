import { Test, TestingModule } from "@nestjs/testing";
import { OrderResolver } from "./order.resolver";
import { OrderService } from "../services/order.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { getMocks } from "../../../../test/helper/mocks";
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

describe("OrderResolver", () => {
  let resolver: OrderResolver;
  let restaurantId: number;
  let orderId: number;
  const mocks = getMocks();
  let mockOrder: CreateOrder;

  const SUCCESS = "success";

  beforeAll(async () => {
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
    resolver = module.get<OrderResolver>(OrderResolver);

    restaurantId = 1;

    mockOrder = mocks.order({
      restaurantId: 1,
      victualId: 1,
      tableId: 1,
      waiterId: 1,
    });
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a new order", async () => {
    const order = await resolver.create(mockOrder);
    expect(order.description).toBe("this is a mock order");
    orderId = order.id;
  });
  it("creates multiple order", async () => {
    const created = await resolver.createMany([mockOrder]);
    expect(created.message).toBe(SUCCESS);
  });
  it("updates the order", async () => {
    const updated = await resolver.update(restaurantId, {
      where: {
        id: orderId,
      },
      update: {
        isReady: true,
      },
    });
    expect(updated.isReady).toBeTruthy();
  });
  it("deletes the order", async () => {
    const deleted = await resolver.delete(
      { id: orderId },
      {
        ...mockOrder,
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
    const orders = await resolver.list(restaurantId);
    expect(orders.length).toEqual(1);
    orderId = orders[0].id;
  });
});
