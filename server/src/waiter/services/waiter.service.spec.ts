import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../../prisma/prisma.module";
import { PrismaService } from "../../prisma/services/prisma.service";
import { mockRestaurant } from "../../restaurant/services/restaurant.service.spec";
import { WaiterService } from "./waiter.service";
import { SecurityModule } from "../../security/security.module";

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
      imports: [PrismaModule, SecurityModule],
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
    prisma.restaurant.findUniqueOrThrow = jest
      .fn()
      .mockReturnValue({ waiters: [mockWaiter] });
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
    expect(await service.find({ id: 1 })).toBeDefined();
  });

  it("should list all waiter of restaurant", async () => {
    const waiters = await service.list({ id: 1 });
    expect(waiters.length).toEqual(1);
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
});
