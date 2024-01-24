import { Test, TestingModule } from "@nestjs/testing";
import { MealResolver } from "./meal.resolver";
import { MealService } from "../services/meal.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { getMocks } from "../../../../test/helper/mocks";
import { MealGuardModule } from "../guard/meal.guard.module";
import { MealServiceMock } from "../services/mock/meal.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { Meal } from "../../../models/meal.model";

describe("MealResolver", () => {
  let resolver: MealResolver;
  let prisma: PrismaService;

  const mocks = getMocks();
  let restaurantPayload: JwtPayload;
  let waiterPayload: JwtPayload;

  const tableId: number = 1;
  let mealId: number;
  let mockMeal: Meal = mocks.meal();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, MealGuardModule],
      providers: [
        MealResolver,
        { provide: MealService, useClass: MealServiceMock },
      ],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    resolver = module.get<MealResolver>(MealResolver);

    [restaurantPayload, waiterPayload] = [
      mocks.restaurantPayload(mocks.restaurantModel),
      mocks.waiterPayload(mocks.waiter, 1),
    ];
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a meal", async () => {
    const meal = await resolver.create(waiterPayload.restaurantId, { tableId });
    expect(meal).toBeDefined();
    expect(meal.total).toEqual(100);
    mealId = meal.id;
  });
  it("list meal", async () => {
    const meals = await resolver.list(restaurantPayload.id);
    expect(meals.length).toEqual(1);
  });
  it("return by id", async () => {
    const meal = await resolver.find(mockMeal, { id: mealId });
    expect(meal).toBeDefined();
  });
});
