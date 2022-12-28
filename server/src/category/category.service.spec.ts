import { Test, TestingModule } from "@nestjs/testing";
import { CategoryService } from "./category.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { getMocks } from "../../test/helper/mocks";

describe("CategoryService", () => {
  let service: CategoryService;
  const mocks = getMocks();
  let catId;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoryService],
    }).compile();
    const prisma = module.get<PrismaService>(PrismaService);
    prisma.category.create = jest
      .fn()
      .mockImplementation(({ data }) => ({ ...mocks.category, id: 0, data }));
    prisma.category.createMany = jest
      .fn()
      .mockImplementation(({ data }) => [...data]);
    prisma.category.findFirstOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({
        ...mocks.category,
        ...where,
      }));
    prisma.category.update = jest
      .fn()
      .mockImplementation(({ where, data }) => ({
        ...mocks.category,
        ...where,
        ...data,
      }));
    prisma.category.delete = jest.fn().mockReturnValue({ deleted: true });
    service = module.get<CategoryService>(CategoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a new category", async () => {
    const category = await service.create({
      ...mocks.category,
      restaurantId: 1,
    });
    expect(category.name).toBe(mocks.category.name);
    catId = category.id;
  });
  it("creates multiple category", async () => {
    const categories = await service.createMany(
      [1, 2].map((i) => ({ name: `Category${i}`, restaurantId: 1 }))
    );
    expect(categories.message).toBe("success");
  });
  it("find by id", async () => {
    const category = await service.find({ id: catId, restaurantId: 1 });
    expect(category).toBeDefined();
  });
  it("updates the category", async () => {
    const updatedCategory = await service.update({
      where: { id: catId, restaurantId: 1 },
      update: {
        name: "updated",
      },
    });
    expect(updatedCategory.name).toBe("updated");
  });
  it("deletes the category", async () => {
    const deleted = await service.delete({
      id: catId,
      restaurantId: 1,
    });
    expect(deleted.message).toBe("success");
  });
});
