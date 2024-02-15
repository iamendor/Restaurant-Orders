import { Test, TestingModule } from "@nestjs/testing";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { CategoryService } from "../../category/services/category.service";
import { CategoryServiceModule } from "../../category/services/category.service.module";
import { mockCategory, mockProduct } from "../../../../test/helper/mock.unit";
import { ProductService } from "./product.service";

describe("MealService", () => {
  let service: ProductService;
  let prisma: PrismaMainService;
  let catService: CategoryService;
  const SUCCESS = "success";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, CategoryServiceModule],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prisma = module.get<PrismaMainService>(PrismaMainService);
    catService = module.get<CategoryService>(CategoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a product", async () => {
    catService.find = jest.fn().mockReturnValue(mockCategory);
    prisma.product.create = jest.fn().mockImplementation(() => mockProduct);

    const product = await service.create(mockProduct);
    expect(product).toBeDefined();
  });
  it("creates many product", async () => {
    prisma.product.createMany = jest.fn().mockReturnValue({ count: 2 });

    const victs = [1, 2].map((id) => ({
      ...mockProduct,
      id,
    }));
    const products = await service.createMany(victs);
    expect(products.message).toBe(SUCCESS);
  });
  it("update product", async () => {
    prisma.product.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mockProduct,
      ...where,
      ...data,
    }));

    const update = await service.update({
      where: { id: 1 },
      update: {
        name: "UpdatedMeal",
      },
    });
    expect(update.name).toBe("UpdatedMeal");
  });
  it("delete product", async () => {
    prisma.product.delete = jest.fn().mockReturnValue({ message: SUCCESS });

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe(SUCCESS);
  });
  it("list products", async () => {
    prisma.product.findMany = jest
      .fn()
      .mockImplementation(() => [1, 2].map((id) => ({ ...mockProduct, id })));

    const products = await service.list(2);
    expect(products.length).toEqual(2);
  });
  it("find by id", async () => {
    prisma.product.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockProduct, ...where }));

    const product = await service.find({ id: 1 });
    expect(product).toBeDefined();
  });
});
