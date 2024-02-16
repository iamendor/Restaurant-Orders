import { Test, TestingModule } from "@nestjs/testing";
import { OrderService } from "./order.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockOrder } from "../../../../test/helper/mock.unit";

describe("OrderService", () => {
  let service: OrderService;
  let prisma: PrismaMainService;

  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [OrderService],
    }).compile();

    service = module.get<OrderService>(OrderService);
    prisma = module.get<PrismaMainService>(PrismaMainService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("create an order", async () => {
    prisma.order.create = jest.fn().mockReturnValue(mockOrder);

    const order = await service.create(mockOrder);
    expect(order.isReady).toBeFalsy();
  });
  it("create multiple order", async () => {
    prisma.order.createMany = jest.fn().mockReturnValue({ count: 2 });

    const orders = await service.createMany([mockOrder, mockOrder]);
    expect(orders.message).toBe(SUCCESS);
  });
  it("updates the order", async () => {
    prisma.order.update = jest.fn().mockImplementation(({ data, where }) => ({
      ...mockOrder,
      ...where,
      ...data,
    }));

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
    prisma.order.delete = jest.fn().mockReturnValue("ok");

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe(SUCCESS);
  });
  it("list all order", async () => {
    prisma.order.findMany = jest.fn().mockReturnValue([mockOrder, mockOrder]);

    const orders = await service.list(1);
    expect(orders.length).toEqual(2);
  });
  it("find by id", async () => {
    prisma.order.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockOrder, where }));

    const order = await service.find({ id: 2 });
    expect(order.restaurantId).toBe(1);
  });
});
