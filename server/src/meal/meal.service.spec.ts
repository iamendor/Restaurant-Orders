import { Test, TestingModule } from "@nestjs/testing";
import { MealService } from "./meal.service";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryModule } from "../category/category.module";
import { PrismaService } from "../prisma/prisma.service";
import { CategoryService } from "../category/category.service";
import { getMocks } from "../../test/helper/mocks";

describe("MealService", () => {
  let service: MealService;
  const mocks = getMocks();
  const mockMeal = mocks.meal.withCategory();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CategoryModule],
      providers: [MealService],
    }).compile();

    service = module.get<MealService>(MealService);
    const prisma = module.get<PrismaService>(PrismaService);
    const categoryService = module.get<CategoryService>(CategoryService);
    categoryService.find = jest.fn().mockReturnValue(mocks.category);
    prisma.meal.create = jest.fn().mockImplementation(({ data }) => ({
      ...mocks.meal.withCategoryId(2),
    }));
    prisma.meal.createMany = jest.fn().mockReturnValue({ count: 2 });
    prisma.meal.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mocks.meal.withCategoryId(2),
      ...where,
      ...data,
    }));
    prisma.meal.findFirstOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockMeal, ...where }));
    prisma.meal.delete = jest.fn().mockReturnValue({ message: "success" });
    prisma.restaurant.findFirstOrThrow = jest.fn().mockImplementation(() => ({
      meals: [1, 2].map(() => ({ ...mocks.meal.withCategoryId(2) })),
    }));
    prisma.meal.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({
        ...mocks.meal.withCategoryId(2),
        ...where,
      }));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a meal", async () => {
    const meal = await service.create({
      ...mockMeal,
      restaurantId: 1,
    });
    expect(meal).toBeDefined();
  });
  it("creates many meal", async () => {
    const meals = await service.createMany(
      [1, 2].map(() => ({ ...mocks.meal.withCategoryId(1), restaurantId: 1 }))
    );
    expect(meals.message).toBe("success");
  });
  it("update meal", async () => {
    const update = await service.update({
      where: { id: 1 },
      update: {
        name: "UpdatedMeal",
      },
    });
    expect(update.name).toBe("UpdatedMeal");
  });
  it("delete meal", async () => {
    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
  it("list meals", async () => {
    const meals = await service.list(2);
    expect(meals.length).toEqual(2);
  });
  it("find by id", async () => {
    const meal = await service.find({ id: 1 });
    expect(meal).toBeDefined();
  });
});
