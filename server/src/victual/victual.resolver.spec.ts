import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";
import { CategoryModule } from "../category/category.module";
import { createRestaurantWithWaiter, getMocks } from "../../test/helper/mocks";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Config } from "../config";
import { PrismaService } from "../prisma/services/prisma.service";
import { JwtPayload, Victual } from "../models/model";
import { VictualResolver } from "./resolvers/victual.resolver";
import { VictualService } from "./services/victual.service";
import { CoreModule } from "../core/core.module";
import { VictualGuardModule } from "./guard/victual.guard.module";

describe("MealResolver", () => {
  let resolver: VictualResolver;
  let prisma: PrismaService;
  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;
  let categoryId: number;
  let mealId: number;
  let mockMeal;
  const mocks = getMocks();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, CategoryModule, VictualGuardModule],
      providers: [VictualResolver, VictualService],
    }).compile();
    const jwt = module.get<JwtService>(JwtService);
    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<VictualResolver>(VictualResolver);
    const { restaurantPayload, waiterPayload } =
      await createRestaurantWithWaiter({ prisma, jwt });
    const cat = await prisma.category.create({
      data: {
        ...mocks.category,
        restaurantId: restaurantPayload.id,
      },
    });
    mockMeal = mocks.victual.withCategoryId(cat.id);
    Rpayload = restaurantPayload;
    Wpayload = waiterPayload;
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a meal with the category", async () => {
    const meal = await resolver.create(Rpayload, mockMeal);
    expect(meal.name).toBe(mockMeal.name);
    categoryId = (
      await prisma.victual.findFirst({
        where: { id: meal.id },
        select: { categoryId: true },
      })
    ).categoryId;
    mealId = meal.id;
  });
  it("creates two meals", async () => {
    const meals = await resolver.createMany(
      Rpayload,
      [1, 2].map(() => ({
        ...mocks.victual.withCategoryId(categoryId),
      }))
    );
    expect(meals.message).toBe("success");
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
    expect(deleted.message).toBe("success");
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
