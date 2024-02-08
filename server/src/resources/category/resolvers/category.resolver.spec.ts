import { Test, TestingModule } from "@nestjs/testing";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "../services/category.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { getMocks } from "../../../../test/helper/mocks";
import { CategoryServiceMock } from "../services/mock/category.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { Category } from "../../../models/category.model";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { IdGuard } from "../../../auth/guards/id.guard";

describe("CategoryResolver", () => {
  let resolver: CategoryResolver;
  let prisma: PrismaService;
  const mocks = getMocks();
  let Wpayload: JwtPayload;
  let Rpayload: JwtPayload;
  let categoryId: number;
  let cat: Category;
  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, FilterModule],
      providers: [
        CategoryResolver,
        IdGuard,
        { provide: CategoryService, useClass: CategoryServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
      ],
    }).compile();

    resolver = module.get<CategoryResolver>(CategoryResolver);
    prisma = module.get<PrismaService>(PrismaService);
    Wpayload = mocks.waiterPayload(mocks.waiter, 1);
    Rpayload = mocks.restaurantPayload(mocks.restaurant);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a category", async () => {
    const category = await resolver.create(Rpayload, {
      name: mocks.category.name,
    });
    expect(category.name).toBe(mocks.category.name);
    categoryId = category.id;
    cat = category;
  });
  it("create multiple", async () => {
    const categories = [1, 2].map((i) => ({ name: `category${i}` }));

    const created = await resolver.createMany(Rpayload, categories);
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
      Rpayload
    );
    expect(updated.name).toBe(update);
  });
  it("delete category", async () => {
    const deleted = await resolver.delete(
      {
        id: categoryId,
      },
      Rpayload
    );
    expect(deleted.message).toBe(SUCCESS);
  });
  describe("List", () => {
    it("list as restaurant", async () => {
      const categories = await resolver.list(Rpayload.id);
      expect(categories.length).toEqual(2);
      categoryId = categories[0].id;
    });
    it("list as waiter", async () => {
      const categories = await resolver.list(Rpayload.id);
      expect(categories.length).toEqual(2);
    });
    it("should filter out all category", async () => {
      const categories = await resolver.list(Rpayload.id, { name: "nomatch" });
      expect(categories.length).toEqual(0);
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
