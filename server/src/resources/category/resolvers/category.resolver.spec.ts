import { Test, TestingModule } from "@nestjs/testing";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "../services/category.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { getMocks } from "../../../../test/helper/mocks";
import { CategoryGuardModule } from "../guard/category.guard.module";
import { CategoryServiceMock } from "../services/mock/category.service.mock";
import { JwtPayload } from "../../../models/jwt.model";
import { Category } from "../../../models/category.model";

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
      imports: [PrismaModule, CategoryGuardModule],
      providers: [
        CategoryResolver,
        { provide: CategoryService, useClass: CategoryServiceMock },
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
    const updated = await resolver.update({
      where: {
        id: categoryId,
      },
      update: {
        name: update,
      },
    });
    expect(updated.name).toBe(update);
  });
  it("delete category", async () => {
    const deleted = await resolver.delete(Rpayload, {
      id: categoryId,
    });
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
  });
  describe("Find", () => {
    it("find as restaurant", async () => {
      const category = await resolver.find(cat);
      expect(category).toBeDefined();
    });
    it("find as waiter", async () => {
      const category = await resolver.find(cat);
      expect(category).toBeDefined();
    });
  });
});