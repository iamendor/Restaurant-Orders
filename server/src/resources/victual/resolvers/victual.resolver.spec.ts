import { Test, TestingModule } from "@nestjs/testing";
import { getMocks } from "../../../../test/helper/mocks";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { VictualResolver } from "./victual.resolver";
import { VictualService } from "../services/victual.service";
import { VictualGuardModule } from "../guard/victual.guard.module";
import { VictualServiceMock } from "../services/mock/victual.service.mock";
import { PrismaModule } from "../../../prisma/prisma.module";
import { CategoryService } from "../../category/services/category.service";
import { CategoryServiceMock } from "../../category/services/mock/category.service.mock";
import { JwtPayload } from "../../../models/jwt.model";

describe("MealResolver", () => {
  let resolver: VictualResolver;
  let prisma: PrismaService;

  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;

  let categoryId: number;
  let mealId: number;
  let mockMeal;
  const mocks = getMocks();

  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, VictualGuardModule],
      providers: [
        VictualResolver,
        { provide: VictualService, useClass: VictualServiceMock },
        { provide: CategoryService, useClass: CategoryServiceMock },
      ],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<VictualResolver>(VictualResolver);

    mockMeal = mocks.victual.withCategoryId(1);
    Rpayload = mocks.restaurantPayload(mocks.restaurantModel);
    Wpayload = mocks.waiterPayload(mocks.waiter, 1);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a meal with the category", async () => {
    const meal = await resolver.create(Rpayload, mockMeal);
    expect(meal.name).toBe(mockMeal.name);
    mealId = meal.id;
  });
  it("creates two meals", async () => {
    const mls = [1, 2].map(() => ({
      ...mocks.victual.withCategoryId(categoryId),
    }));
    const meals = await resolver.createMany(Rpayload, mls);
    expect(meals.message).toBe(SUCCESS);
  });
  it("updates the meal's price", async () => {
    const updatedMeal = await resolver.update({
      where: {
        id: mealId,
      },
      update: {
        price: 2.0,
      },
    });
    expect(updatedMeal.price).toEqual(2.0);
  });
  it("deletes the meal", async () => {
    const deleted = await resolver.delete({ id: mealId });
    expect(deleted.message).toBe(SUCCESS);
  });
  describe("List and find as restaurant", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(Rpayload.id);
      expect(meals.length).toEqual(2);
      mealId = meals[0].id;
    });
    it("returns specific", async () => {
      const meal = await resolver.find(mockMeal);
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });
  describe("List and find as waiter", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(Wpayload.restaurantId);
      expect(meals.length).toEqual(2);
    });
    it("returns specific", async () => {
      const meal = await resolver.find(mockMeal);
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });
});
