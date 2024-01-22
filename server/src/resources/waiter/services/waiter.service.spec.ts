import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockRestaurant } from "../../restaurant/services/restaurant.service.spec";
import { WaiterService } from "./waiter.service";
import { SecurityModule } from "../../../security/security.module";
import { getMocks } from "../../../../test/helper/mocks";

describe("WaiterService", () => {
  let service: WaiterService;
  let prisma: PrismaService;
  const mockWaiter = getMocks().waiter;
  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, SecurityModule],
      providers: [WaiterService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);

    prisma.waiter.delete = jest.fn().mockReturnValue(true);

    service = module.get<WaiterService>(WaiterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create new waiter", async () => {
    prisma.waiter.create = jest.fn().mockImplementation(({ data }) => data);

    const waiter = await service.create({
      restaurantId: 1,
      data: mockWaiter,
    });
    expect(waiter).toBeDefined();
    expect(waiter.email).toBe(mockWaiter.email);
  });

  it("should find the waiter", async () => {
    prisma.waiter.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockRestaurant, ...where }));

    const findWaiter = await service.find({ id: 1 });
    expect(findWaiter.id).toBe(1);
  });

  it("should list all waiter of restaurant", async () => {
    prisma.restaurant.findUniqueOrThrow = jest
      .fn()
      .mockReturnValue({ waiters: [mockWaiter] });

    const waiters = await service.list({ id: 1 });
    expect(waiters.length).toEqual(1);
  });

  it("should update the waiter's name", async () => {
    prisma.waiter.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mockWaiter,
      ...where,
      ...data,
    }));

    const UPDATE = "mockWaiterUpdate";
    const updatedWaiter = await service.update({
      where: { id: 1 },
      update: { name: UPDATE },
    });
    expect(updatedWaiter.name).toBe(UPDATE);
  });

  it("should delete the waiter", async () => {
    prisma.waiter.delete = jest.fn().mockReturnValue({ message: SUCCESS });

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe(SUCCESS);
  });

  afterAll(async () => await prisma.$disconnect());
});
