import { Test, TestingModule } from "@nestjs/testing";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "../services/category.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { PrismaService } from "../../prisma/services/prisma.service";
import {
  createRestaurantWithWaiter,
  getMocks,
} from "../../../test/helper/mocks";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Config } from "../../config";
import { Category, JwtPayload } from "../../models/model";
import { CategoryGuardModule } from "../guard/category.guard.module";

describe("CategoryResolver", () => {
  let resolver: CategoryResolver;
  let prisma: PrismaService;
  const mocks = getMocks();
  let Wpayload: JwtPayload;
  let Rpayload: JwtPayload;
  let categoryId: number;
  let cat: Category;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: Config.getJwtConfig,
        }),
        CategoryGuardModule,
      ],
      providers: [CategoryResolver, CategoryService],
    }).compile();

    resolver = module.get<CategoryResolver>(CategoryResolver);
    prisma = module.get<PrismaService>(PrismaService);
    const jwt = module.get<JwtService>(JwtService);

    const { waiterPayload, restaurantPayload, restaurantId } =
      await createRestaurantWithWaiter({ prisma, jwt });
    Wpayload = waiterPayload;
    Rpayload = restaurantPayload;
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
    const created = await resolver.createMany(
      Rpayload,
      [1, 2].map((i) => ({ name: `category${i}` }))
    );
    expect(created.message).toBe("success");
    const categories = (
      await prisma.restaurant.findUnique({
        where: { id: Rpayload.id },
        include: { categories: true },
      })
    ).categories;
    expect(categories.length).toEqual(3);
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
    expect(deleted.message).toBe("success");
    expect(
      await prisma.category.findUnique({ where: { id: categoryId } })
    ).toBeNull();
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
