import { Test, TestingModule } from "@nestjs/testing";
import { VictualService } from "./services/victual.service";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryModule } from "../category/category.module";
import { PrismaService } from "../prisma/services/prisma.service";
import { CategoryService } from "../category/services/category.service";
import { getMocks } from "../../test/helper/mocks";

describe("MealService", () => {
  let service: VictualService;
  const mocks = getMocks();
  const mockMeal = mocks.victual.withCategoryId(2);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CategoryModule],
      providers: [VictualService],
    }).compile();

    service = module.get<VictualService>(VictualService);
    const prisma = module.get<PrismaService>(PrismaService);
    const categoryService = module.get<CategoryService>(CategoryService);
    categoryService.find = jest.fn().mockReturnValue(mocks.category);
    prisma.victual.create = jest.fn().mockImplementation(() => ({
      ...mocks.victual.withCategoryId(2),
    }));
    prisma.victual.createMany = jest.fn().mockReturnValue({ count: 2 });
    prisma.victual.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mocks.victual.withCategoryId(2),
      ...where,
      ...data,
    }));
    prisma.victual.findFirstOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockMeal, ...where }));
    prisma.victual.delete = jest.fn().mockReturnValue({ message: "success" });
    prisma.restaurant.findFirstOrThrow = jest.fn().mockImplementation(() => ({
      victuals: [1, 2].map(() => ({ ...mocks.victual.withCategoryId(2) })),
    }));
    prisma.victual.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({
        ...mocks.victual.withCategoryId(2),
        ...where,
      }));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a victual", async () => {
    const victual = await service.create({
      ...mockMeal,
      restaurantId: 1,
    });
    expect(victual).toBeDefined();
  });
  it("creates many victual", async () => {
    const victuals = await service.createMany(
      [1, 2].map(() => ({
        ...mocks.victual.withCategoryId(1),
        restaurantId: 1,
      }))
    );
    expect(victuals.message).toBe("success");
  });
  it("update victual", async () => {
    const update = await service.update({
      where: { id: 1 },
      update: {
        name: "UpdatedMeal",
      },
    });
    expect(update.name).toBe("UpdatedMeal");
  });
  it("delete victual", async () => {
    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe("success");
  });
  it("list victuals", async () => {
    const victuals = await service.list(2);
    expect(victuals.length).toEqual(2);
  });
  it("find by id", async () => {
    const victual = await service.find({ id: 1 });
    expect(victual).toBeDefined();
  });
});
