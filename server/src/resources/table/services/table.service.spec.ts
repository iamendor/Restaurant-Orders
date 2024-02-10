import { Test, TestingModule } from "@nestjs/testing";
import { TableService } from "./table.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockRestaurant, mockTable } from "../../../../test/helper/mock.unit";

describe("TableService", () => {
  let service: TableService;
  let tableId: number;
  let prisma: PrismaService;

  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [TableService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);
    service = module.get<TableService>(TableService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create one table", async () => {
    prisma.table.create = jest.fn().mockImplementation(({ data }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { restaurant: _, ...rest } = data;
      return { ...rest, id: 1 };
    });

    const table = await service.create(mockTable);
    expect(table).toBeDefined();
    expect(table.name).toBe(mockTable.name);

    tableId = table.id;
  });

  it("should creates two table", async () => {
    prisma.table.createMany = jest
      .fn()
      .mockImplementation(({ data }) => ({ count: data.length }));

    const tables = [
      {
        name: "TestTable2",
      },
      {
        name: "TestTable3",
      },
    ].map((d) => ({ ...d, restaurantId: 1 }));

    const createTables = await service.createMany(tables);
    expect(createTables.message).toBe(SUCCESS);
  });

  it("should update the table", async () => {
    prisma.table.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mockTable,
      ...where,
      ...data,
    }));

    const update = "updatedTable";
    const updated = await service.update({
      where: {
        id: tableId,
      },
      update: {
        name: update,
      },
    });
    expect(updated.name).toBe(update);
  });

  it("should list all table", async () => {
    prisma.table.findMany = jest
      .fn()
      .mockReturnValue([1, 2, 3].map(() => mockTable));

    const tables = await service.list(mockRestaurant.id);
    expect(tables.length).toEqual(3);
  });

  it("should find the table", async () => {
    prisma.table.findUniqueOrThrow = jest
      .fn()
      .mockImplementation(({ where }) => ({
        ...mockTable,
        where,
        restaurantId: mockRestaurant.id,
      }));

    const table = await service.find({
      id: tableId,
    });

    expect(table).toBeDefined();
  });

  it("should delete the table", async () => {
    prisma.table.delete = jest.fn().mockReturnValue("ok");

    const { message } = await service.delete({
      id: tableId,
    });
    expect(message).toBe(SUCCESS);
  });
});
