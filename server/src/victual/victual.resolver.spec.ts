import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";
import { CategoryModule } from "../category/category.module";
import { createRestaurantWithWaiter, getMocks } from "../../test/helper/mocks";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Config } from "../config";
import { PrismaService } from "../prisma/prisma.service";
import { JwtPayload, Victual } from "../models/model";
import { VictualResolver } from "./victual.resolver";
import { VictualService } from "./victual.service";

describe("MealResolver", () => {
  let resolver: VictualResolver;
  let prisma: PrismaService;
  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;
  let categoryId: number;
  let mealId: number;
  const mocks = getMocks();
  const mockMeal = mocks.victual.withCategory();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: Config.getJwtConfig,
        }),
        PrismaModule,
        WaiterModule,
        CategoryModule,
      ],
      providers: [VictualResolver, VictualService],
    }).compile();
    const jwt = module.get<JwtService>(JwtService);
    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<VictualResolver>(VictualResolver);
    const { restaurantPayload, waiterPayload } =
      await createRestaurantWithWaiter({ prisma, jwt });
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
    const updatedMeal = await resolver.update(Rpayload, {
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
    const deleted = await resolver.delete(Rpayload, { id: mealId });
    expect(deleted.message).toBe("success");
  });
  describe("List and find as restaurant", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(Rpayload);
      expect(meals.length).toEqual(2);
      mealId = meals[0].id;
    });
    it("returns specific", async () => {
      const meal = await resolver.find(Rpayload, { id: mealId });
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });
  describe("List and find as waiter", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(Wpayload);
      expect(meals.length).toEqual(2);
    });
    it("returns specific", async () => {
      const meal = await resolver.find(Wpayload, { id: mealId });
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });

  it("returns category of meal", async () => {
    const category = await resolver.getCategory({ id: mealId } as Victual);
    expect(category.id).toBe(categoryId);
  });
  it("returns restaurant of meal", async () => {
    const restaurant = await resolver.getRestaurant({ id: mealId } as Victual);
    expect(restaurant.id).toBe(Rpayload.id);
  });

  it("list orders included meal", async () => {
    const orders = await resolver.getOrders({ id: mealId } as Victual);
    expect(orders.length).toEqual(0);
  });
});
