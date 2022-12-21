import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { mockRestaurant } from "../restaurant/restaurant.service.spec";
import { WaiterService } from "./waiter.service";

export const mockWaiter = {
  name: "waiter1",
  gender: "male",
  profileIcon: null,
  id: 1,
  email: "waiter@gmail.com",
};
describe("WaiterService", () => {
  let service: WaiterService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [WaiterService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    prisma.waiter.create = jest
      .fn()
      .mockImplementation(({ data }) => ({ ...data }));
    prisma.waiter.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mockWaiter,
      ...where,
      ...data,
    }));
    prisma.waiter.delete = jest.fn().mockReturnValue(true);
    prisma.waiter.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockRestaurant, ...where }));
    service = module.get<WaiterService>(WaiterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create new waiter", async () => {
    const waiter = await service.create({
      restaurantId: 1,
      data: { ...mockWaiter, password: "123" },
    });
    expect(waiter).toBeDefined();
    expect(waiter.email).toBe(mockWaiter.email);
  });

  it("should find the waiter", async () => {
    expect(await service.find({ id: 1 }, true)).toBeDefined();
  });

  it("should update the waiter's name", async () => {
    const UPDATE = "mockWaiterUpdate";
    expect(
      (
        await service.update({
          where: { id: 1 },
          update: { name: UPDATE },
        })
      ).name
    ).toBe(UPDATE);
  });

  afterAll(async () => await prisma.$disconnect());
});
