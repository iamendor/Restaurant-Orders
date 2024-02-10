import { Test, TestingModule } from "@nestjs/testing";
import { MealResolver } from "./meal.resolver";
import { MealService } from "../services/meal.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { MealGuardModule } from "../guard/meal.guard.module";
import { MealServiceMock } from "../services/mock/meal.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { TaskService } from "../../task/services/task.service";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { FieldService } from "../services/field.service";
import { ContextIdFactory } from "@nestjs/core";
import {
  mockMeal,
  mockOrder,
  mockRestaurantPayload,
} from "../../../../test/helper/mock.unit";

describe("MealResolver", () => {
  let resolver: MealResolver;

  const tableId: number = 1;
  let mealId: number;

  beforeAll(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);

    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, MealGuardModule, FilterModule],
      providers: [
        MealResolver,
        { provide: MealService, useClass: MealServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        { provide: FieldService, useValue: { getOrders: () => [mockOrder] } },
      ],
    }).compile();
    resolver = await module.resolve<MealResolver>(MealResolver, contextId);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a meal", async () => {
    const meal = await resolver.create({ tableId, restaurantId: 1 });
    expect(meal).toBeDefined();
    expect(meal.total).toEqual(100);
    mealId = meal.id;
  });
  it("list meal", async () => {
    const meals = await resolver.list(mockRestaurantPayload.id);
    expect(meals.length).toEqual(1);
  });

  it("return by id", async () => {
    const meal = await resolver.find(mockMeal, { id: mealId });
    expect(meal).toBeDefined();
  });
});
