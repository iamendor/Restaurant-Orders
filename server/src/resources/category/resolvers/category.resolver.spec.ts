import { Test, TestingModule } from "@nestjs/testing";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "../services/category.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { CategoryServiceMock } from "../services/mock/category.service.mock";
import { Category } from "../../../models/category.model";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { IdGuard } from "../../../auth/guard/id.guard";
import { TaskService } from "../../task/services/task.service";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { ContextIdFactory } from "@nestjs/core";
import {
  mockCategory,
  mockRestaurantPayload,
} from "../../../../test/helper/mock.unit";

describe("CategoryResolver", () => {
  let resolver: CategoryResolver;
  let categoryId: number;
  let cat: Category;
  const SUCCESS = "success";

  beforeAll(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);

    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, FilterModule],
      providers: [
        { provide: CategoryService, useClass: CategoryServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        IdGuard,
        CategoryResolver,
      ],
    }).compile();

    resolver = await module.resolve<CategoryResolver>(
      CategoryResolver,
      contextId
    );
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a category", async () => {
    const category = await resolver.create(
      { ...mockCategory, name: "unitTestMockCategory" },
      mockRestaurantPayload
    );
    expect(category.name).toBe("unitTestMockCategory");
    cat = category;
  });
  it("create multiple", async () => {
    const categories = [1, 2].map((i) => ({
      ...mockCategory,
      name: `mockCategory${i}`,
      id: i,
    }));

    const created = await resolver.createMany(
      categories,
      mockRestaurantPayload
    );
    expect(created.message).toBe(SUCCESS);
  });
  it("update the category", async () => {
    const update = "updatedCategory";
    const updated = await resolver.update(
      {
        where: {
          id: categoryId,
        },
        update: {
          name: update,
        },
      },
      mockRestaurantPayload
    );
    expect(updated.name).toBe(update);
  });
  it("delete category", async () => {
    const deleted = await resolver.delete({
      id: categoryId,
    });
    expect(deleted.message).toBe(SUCCESS);
  });
  describe("List", () => {
    it("list as restaurant", async () => {
      const categories = await resolver.list(1);
      expect(categories.length).toEqual(2);
      categoryId = categories[0].id;
    });
    it("list as waiter", async () => {
      const categories = await resolver.list(1);
      expect(categories.length).toEqual(2);
    });
  });
  describe("Find", () => {
    it("find as restaurant", async () => {
      const category = await resolver.find(cat, { id: categoryId });
      expect(category).toBeDefined();
    });
    it("find as waiter", async () => {
      const category = await resolver.find(cat, { id: categoryId });
      expect(category).toBeDefined();
    });
  });
});
