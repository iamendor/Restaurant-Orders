import { Test, TestingModule } from "@nestjs/testing";
import { MealService } from "./meal.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import {
  mockMeal,
  mockOrder,
  mockProduct,
} from "../../../../test/helper/mock.unit";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

describe("MealService", () => {
  let service: MealService;
  let prismaService: PrismaMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [MealService],
    }).compile();
    service = module.get<MealService>(MealService);
    prismaService = module.get<PrismaMainService>(PrismaMainService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("formats the table", () => {
    const orders = [1, 2].map(() => ({ ...mockOrder, product: mockProduct }));

    const formatTable = service.formatTable(orders);
    expect(formatTable.total).toBe(2.2);
  });

  it("creates the meal", async () => {
    prismaService.meal.create = jest.fn().mockImplementation(() => mockMeal);
    const meal = await service.create(mockMeal);

    expect(meal.total).toBe(100);
  });
  it("lists the meals", async () => {
    prismaService.meal.findMany = jest.fn().mockReturnValue([mockMeal]);

    const meals = await service.list(1);

    expect(meals.length).toEqual(1);
  });
  it("finds by id", async () => {
    prismaService.meal.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockMeal, ...where }));

    const find = await service.find({ id: 1 });
    expect(find.total).toBe(100);
  });
});
