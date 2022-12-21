import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "src/prisma/prisma.service";
import { RestaurantService } from "./restaurant.service";
import * as bcrypt from "bcrypt";
import { PrismaModule } from "src/prisma/prisma.module";
import { mockWaiter } from "src/waiter/waiter.service.spec";

export const mockRestaurant = {
  id: 1,
  name: "Test Kft.",
  email: "test@gmail.com",
  address: {
    id: 1,
    address2: null,
    address1: "address1",
    zip: "5500",
    city: "gyoma",
    country: "HU",
  },
};

describe("RestaurantService", () => {
  let service: RestaurantService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [RestaurantService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    prisma.restaurant.create = jest.fn().mockImplementation(({ data }) => data);
    prisma.restaurant.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where, include = {} }) => ({
        ...mockRestaurant,
        ...where,
        waiters: include.waiters && [mockWaiter],
        password: bcrypt.hashSync("123", 10),
      }));
    prisma.restaurant.update = jest
      .fn()
      .mockImplementation(({ data, where }) => ({
        ...mockRestaurant,
        ...where,
        ...data,
      }));
    prisma.restaurant.delete = jest.fn().mockImplementation(() => true);

    service = module.get<RestaurantService>(RestaurantService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create a new restaurant", async () => {
    const restaurant = await service.create({
      ...mockRestaurant,
      password: "123",
    });
    expect(restaurant).toBeDefined();
    expect(restaurant.address).toBeDefined();
  });

  it("should find the restaurant", async () => {
    expect(await service.find({ id: mockRestaurant.id })).toBeDefined();
  });

  it("should update restaurant's name", async () => {
    expect(
      (
        await service.update({
          where: { id: mockRestaurant.id },
          data: {
            name: "HelloWorld Kft.",
          },
        })
      ).name
    ).toBe("HelloWorld Kft.");
  });

  it("should update password of restaurant", async () => {
    expect(
      await service.updatePassword({
        where: { id: mockRestaurant.id },
        update: {
          old: "123",
          password: "1234",
        },
      })
    ).toBeDefined();
  });

  it("should list all waiter of restaurant", async () => {
    expect(
      (await service.listWaiters({ id: mockRestaurant.id })).length
    ).toEqual(1);
  });

  afterAll(async () => await prisma.$disconnect());
});
