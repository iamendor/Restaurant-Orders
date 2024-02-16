import { Test, TestingModule } from "@nestjs/testing";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { WaiterService } from "./waiter.service";
import { SecurityModule } from "../../../security/security.module";
import { mockRestaurant, mockWaiter } from "../../../../test/helper/mock.unit";

describe("WaiterService", () => {
  let service: WaiterService;
  let prisma: PrismaMainService;
  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, SecurityModule],
      providers: [WaiterService],
    }).compile();
    prisma = module.get<PrismaMainService>(PrismaMainService);

    prisma.waiter.delete = jest.fn().mockReturnValue(true);

    service = module.get<WaiterService>(WaiterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create new waiter", async () => {
    prisma.waiter.create = jest.fn().mockImplementation(({ data }) => data);

    const waiter = await service.create(mockWaiter);
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
    prisma.waiter.findMany = jest.fn().mockReturnValue([mockWaiter]);

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
