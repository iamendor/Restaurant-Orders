import { Test, TestingModule } from "@nestjs/testing";
import { VictualService } from "./victual.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { CategoryService } from "../../category/services/category.service";
import { CategoryServiceModule } from "../../category/services/category.service.module";
import { mockCategory, mockVictual } from "../../../../test/helper/mock.unit";

describe("MealService", () => {
  let service: VictualService;
  let prisma: PrismaService;
  let catService: CategoryService;
  const SUCCESS = "success";

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, CategoryServiceModule],
      providers: [VictualService],
    }).compile();

    service = module.get<VictualService>(VictualService);
    prisma = module.get<PrismaService>(PrismaService);
    catService = module.get<CategoryService>(CategoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("creates a victual", async () => {
    catService.find = jest.fn().mockReturnValue(mockCategory);
    prisma.victual.create = jest.fn().mockImplementation(() => mockVictual);

    const victual = await service.create(mockVictual);
    expect(victual).toBeDefined();
  });
  it("creates many victual", async () => {
    prisma.victual.createMany = jest.fn().mockReturnValue({ count: 2 });

    const victs = [1, 2].map((id) => ({
      ...mockVictual,
      id,
    }));
    const victuals = await service.createMany(victs);
    expect(victuals.message).toBe(SUCCESS);
  });
  it("update victual", async () => {
    prisma.victual.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mockVictual,
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
  it("delete victual", async () => {
    prisma.victual.delete = jest.fn().mockReturnValue({ message: SUCCESS });

    const deleted = await service.delete({ id: 1 });
    expect(deleted.message).toBe(SUCCESS);
  });
  it("list victuals", async () => {
    prisma.victual.findMany = jest
      .fn()
      .mockImplementation(() => [1, 2].map((id) => ({ ...mockVictual, id })));

    const victuals = await service.list(2);
    expect(victuals.length).toEqual(2);
  });
  it("find by id", async () => {
    prisma.victual.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({ ...mockVictual, ...where }));

    const victual = await service.find({ id: 1 });
    expect(victual).toBeDefined();
  });
});
