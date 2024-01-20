import { Test, TestingModule } from "@nestjs/testing";
import { OrderService } from "./order.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { PrismaService } from "../../prisma/services/prisma.service";
import { clearMocks, getMocks } from "../../../test/helper/mocks";

describe("OrderService", () => {
  let service: OrderService;
  const mocks = getMocks();
  const mockOrder = mocks.order({
    restaurantId: 1,
    victualId: 1,
    tableId: 1,
    waiterId: 1,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
    const prisma = module.get<PrismaService>(PrismaService);
    await clearMocks({ prisma });
    prisma.order.create = jest.fn().mockReturnValue(mockOrder);
    prisma.order.createMany = jest.fn().mockReturnValue({ count: 2 });
    prisma.order.update = jest.fn().mockImplementation(({ data, where }) => ({
      ...mockOrder,
      ...where,
      ...data,
    }));
    prisma.order.delete = jest.fn().mockReturnValue("ok");
    prisma.order.findUnique = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockOrder, where }));
    prisma.restaurant.findFirst = jest
      .fn()
      .mockReturnValue({ orders: [mockOrder, mockOrder] });
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("create an order", async () => {
    const order = await service.create(mockOrder);
    expect(order.isReady).toBeFalsy();
  });
  it("create multiple order", async () => {
    const orders = await service.createMany([mockOrder, mockOrder]);
    expect(orders.message).toBe("success");
  });
  it("updates the order", async () => {
    const order = await service.update({
      where: {
        id: 1,
      },
      update: {
        isReady: true,
      },
    });
    expect(order.isReady).toBeTruthy();
  });

  it("deletes the order", async () => {
    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
  it("list all order", async () => {
    const orders = await service.list(1);
    expect(orders.length).toEqual(2);
  });
  it("find by id", async () => {
    const order = await service.find({ id: 2 });
    expect(order.restaurantId).toBe(1);
  });
});
