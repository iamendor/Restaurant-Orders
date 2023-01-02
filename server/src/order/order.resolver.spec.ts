import { Test, TestingModule } from "@nestjs/testing";
import { OrderResolver } from "./order.resolver";
import { OrderService } from "./order.service";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Config } from "../config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { createRestaurantWithWaiter, getMocks } from "../../test/helper/mocks";
import { CreateOrder, JwtPayload, Order } from "../models/model";
import { SubscriptionModule } from "../subscription/subscription.module";
import { CoreModule } from "../core/core.module";

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
      imports: [CoreModule, WaiterModule, SubscriptionModule],
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
    const order = await resolver.create(waiterToken, mockOrder);
    expect(order.description).toBe("this is a mock order");
    orderId = order.id;
  });
  it("creates multiple order", async () => {
    const created = await resolver.createMany(waiterToken, [mockOrder]);
    expect(created.message).toBe("success");
  });
  it("updates the order", async () => {
    const updated = await resolver.update(waiterToken, {
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
    const deleted = await resolver.delete(restaurantToken, { id: orderId });
    expect(deleted.message).toBe("success");
    expect(
      await prisma.order.findUnique({ where: { id: orderId } })
    ).toBeNull();
  });
  it("list all order", async () => {
    const orders = await resolver.list(waiterToken);
    expect(orders.length).toEqual(1);
    orderId = orders[0].id;
  });
  it("find order by id", async () => {
    const order = await resolver.find(waiterToken, { id: orderId });
    expect(order.isReady).toBeFalsy();
  });
  it("returns restaurant of order", async () => {
    const restaurant = await resolver.getRestaurant({ id: orderId } as Order);
    expect(restaurant.id).toBe(restaurantId);
  });
  it("returns waiter of order", async () => {
    const waiter = await resolver.getWaiter({ id: orderId } as Order);
    expect(waiter.id).toBe(waiterId);
  });
  it("returns victual of order", async () => {
    const victual = await resolver.getVictual({ id: orderId } as Order);
    expect(victual.price).toEqual(1.0);
  });
  it("returns table of order", async () => {
    const table = await resolver.getTable({ id: orderId } as Order);
    expect(table).toBeDefined();
  });
});
