import { Test, TestingModule } from "@nestjs/testing";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "../services/product.service";
import { ProductServiceMock } from "../services/mock/product.service.mock";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { CategoryService } from "../../category/services/category.service";
import { CategoryServiceMock } from "../../category/services/mock/category.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { IdGuard } from "../../../auth/guard/id.guard";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { TaskService } from "../../task/services/task.service";
import { ContextIdFactory } from "@nestjs/core";
import {
  mockRestaurantPayload,
  mockProduct,
  mockWaiterPayload,
} from "../../../../test/helper/mock.unit";

describe("MealResolver", () => {
  let resolver: ProductResolver;

  const SUCCESS = "success";

  beforeAll(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, FilterModule],
      providers: [
        ProductResolver,
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: ProductService, useClass: ProductServiceMock },
        { provide: CategoryService, useClass: CategoryServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        IdGuard,
      ],
    }).compile();
    resolver = await module.resolve<ProductResolver>(
      ProductResolver,
      contextId
    );
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("creates a meal with the category", async () => {
    const meal = await resolver.create(mockRestaurantPayload, mockProduct);
    expect(meal.name).toBe(mockProduct.name);
  });
  it("creates two meals", async () => {
    const mls = [1, 2].map(() => ({
      ...mockProduct,
    }));
    const meals = await resolver.createMany(mls);
    expect(meals.message).toBe(SUCCESS);
  });
  it("updates the meal's price", async () => {
    const updatedMeal = await resolver.update({
      where: {
        id: 1,
      },
      update: {
        price: 2.0,
      },
    });
    expect(updatedMeal.price).toEqual(2.0);
  });
  it("deletes the meal", async () => {
    const deleted = await resolver.delete({ id: 1 });
    expect(deleted.message).toBe(SUCCESS);
  });
  describe("List and find as restaurant", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(mockRestaurantPayload.id);
      expect(meals.length).toEqual(2);
    });
    it("returns specific", async () => {
      const meal = await resolver.find(mockProduct, { id: 1 });
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });
  describe("List and find as waiter", () => {
    it("lists meal", async () => {
      const meals = await resolver.list(mockWaiterPayload.restaurantId);
      expect(meals.length).toEqual(2);
    });
    it("returns specific", async () => {
      const meal = await resolver.find(mockProduct, { id: 1 });
      expect(meal).toBeDefined();
      expect(meal.price).toEqual(1.1);
    });
  });
});
