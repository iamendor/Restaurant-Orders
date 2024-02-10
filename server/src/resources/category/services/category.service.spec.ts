import { Test, TestingModule } from "@nestjs/testing";
import { CategoryService } from "./category.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockCategory } from "../../../../test/helper/mock.unit";

describe("CategoryService", () => {
  let service: CategoryService;
  let prisma: PrismaService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoryService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<CategoryService>(CategoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a new category", async () => {
    prisma.category.create = jest.fn().mockReturnValue(mockCategory);

    const category = await service.create(mockCategory);
    expect(category.name).toBe(mockCategory.name);
  });
  it("creates multiple category", async () => {
    prisma.category.createMany = jest
      .fn()
      .mockImplementation(({ data }) => [...data]);

    const categories = await service.createMany([mockCategory]);
    expect(categories.message).toBe("success");
  });
  it("find by id", async () => {
    prisma.category.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({
        ...mockCategory,
        ...where,
      }));

    const category = await service.find({ id: 1 });
    expect(category).toBeDefined();
  });
  it("updates the category", async () => {
    prisma.category.update = jest
      .fn()
      .mockImplementation(({ where, data }) => ({
        ...mockCategory,
        ...where,
        ...data,
      }));

    const updatedCategory = await service.update({
      where: { id: 1 },
      update: {
        name: "updated",
      },
    });
    expect(updatedCategory.name).toBe("updated");
  });
  it("deletes the category", async () => {
    prisma.category.delete = jest.fn().mockReturnValue({ deleted: true });

    const deleted = await service.delete({
      id: 1,
    });
    expect(deleted.message).toBe("success");
  });
});
