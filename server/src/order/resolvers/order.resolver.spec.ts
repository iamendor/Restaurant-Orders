import { Test, TestingModule } from "@nestjs/testing";
import { OrderResolver } from "./order.resolver";
import { OrderService } from "../services/order.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { WaiterModule } from "../../waiter/waiter.module";
import { PrismaService } from "../../prisma/services/prisma.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Config } from "../../config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import {
  createRestaurantWithWaiter,
  getMocks,
} from "../../../test/helper/mocks";
import { CreateOrder, JwtPayload, Order } from "../../models/model";
import { SubscriptionModule } from "../../subscription/subscription.module";
import { CoreModule } from "../../core/core.module";
import { OrderGuardModule } from "../guard/order.guard.module";

describe("OrderResolver", () => {
  let resolver: OrderResolver;
  let prisma: PrismaService;
  let restaurantId: number;
  let restaurantToken: JwtPayload;
  let waiterId: number;
  let waiterToken: JwtPayload;
  let orderId: number;
  const mocks = getMocks();
  let mockOrder: CreateOrder;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        CoreModule,
        OrderGuardModule,
        PrismaModule,
        WaiterModule,
        SubscriptionModule,
      ],
      providers: [OrderResolver, OrderService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    const jwt = module.get<JwtService>(JwtService);
    resolver = module.get<OrderResolver>(OrderResolver);
    const {
      restaurantId: rId,
      restaurantPayload: rToken,
      waiterId: wId,
      waiterPayload: wToken,
    } = await createRestaurantWithWaiter({ prisma, jwt });
    restaurantId = rId;
    restaurantToken = rToken;
    waiterId = wId;
    waiterToken = wToken;
    const table = await prisma.table.create({
      data: {
        ...mocks.table(),
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
      },
    });
    const category = await prisma.category.create({
      data: {
        ...mocks.category,
        restaurantId: restaurantId,
      },
    });
    const victual = await prisma.victual.create({
      data: {
        ...mocks.victual.default,
        category: {
          connect: {
            id: category.id,
          },
        },
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
      },
    });
    mockOrder = mocks.order({
      restaurantId,
      victualId: victual.id,
      tableId: table.id,
      waiterId: waiterId,
    });
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a new order", async () => {
    const order = await resolver.create(waiterToken, restaurantId, mockOrder);
    expect(order.description).toBe("this is a mock order");
    orderId = order.id;
  });
  it("creates multiple order", async () => {
    const created = await resolver.createMany(waiterToken, restaurantId, [
      mockOrder,
    ]);
    expect(created.message).toBe("success");
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
    const deleted = await resolver.delete(restaurantId, { id: orderId });
    expect(deleted.message).toBe("success");
    expect(
      await prisma.order.findUnique({ where: { id: orderId } })
    ).toBeNull();
  });
  it("list all order", async () => {
    const orders = await resolver.list(restaurantId);
    expect(orders.length).toEqual(1);
    orderId = orders[0].id;
  });
});
