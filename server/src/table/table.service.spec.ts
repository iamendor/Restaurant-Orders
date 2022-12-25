import { Test, TestingModule } from "@nestjs/testing";
import { TableService } from "./table.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { clearMocks, getMocks } from "../../test/helper/mocks";
import { Restaurant } from "../models/model";

describe("TableService", () => {
  let service: TableService;
  let restaurant: Restaurant;
  let tableId: number;
  let prisma: PrismaService;
  const mocks = getMocks();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [TableService],
    }).compile();
    prisma = module.get<PrismaService>(PrismaService);

    restaurant = await clearMocks({ prisma, createRestaurant: true });

    prisma.table.createMany = jest
      .fn()
      .mockImplementation(({ data }) => ({ count: data.length }));
    prisma.table.create = jest.fn().mockImplementation(({ data }) => {
      const { restaurant: _, ...rest } = data;
      return rest;
    });

    prisma.table.update = jest.fn().mockImplementation(({ where, data }) => ({
      ...mocks.table(),
      ...where,
      ...data,
    }));

    prisma.table.delete = jest.fn().mockReturnValue("ok");

    prisma.restaurant.findUnique = jest.fn().mockReturnValue({
      tables: [1, 2, 3].map(() => mocks.table()),
    });

    prisma.table.findUnique = jest
      .fn()
      .mockImplementationOnce(({ where }) => ({
        ...mocks.table(),
        where,
        restaurantId: restaurant.id,
      }))
      .mockImplementationOnce(({ where }) => ({
        ...mocks.table(),
        where,
        restaurantId: restaurant.id,
      }))
      .mockImplementationOnce(({ where }) => ({
        ...mocks.table(),
        where,
        restaurantId: 0,
      }))
      .mockImplementationOnce(({ where }) => ({
        ...mocks.table(),
        where,
        restaurantId: restaurant.id,
      }));

    service = module.get<TableService>(TableService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create one table", async () => {
    const mockTable = mocks.table();
    const table = await service.create({
      name: mockTable.name,
      restaurantId: restaurant.id,
    });
    expect(table).toBeDefined();
    expect(table.name).toBe(mockTable.name);
    tableId = table.id;
  });

  it("should creates two table", async () => {
    const tables = await service.createMany(
      [
        {
          name: "TestTable2",
        },
        {
          name: "TestTable3",
        },
      ].map((d) => ({ ...d, restaurantId: restaurant.id }))
    );
    expect(tables.message).toBe("success");
  });

  it("should update the table", async () => {
    const update = "updatedTable";
    const updated = await service.update({
      where: {
        id: tableId,
        restaurantId: restaurant.id,
      },
      update: {
        name: update,
      },
    });
    expect(updated.name).toBe(update);
  });

  it("should list all table", async () => {
    const tables = await service.listAll(restaurant.id);
    expect(tables.length).toEqual(3);
  });

  it("should find the table", async () => {
    const table = await service.find({
      id: tableId,
      restaurantId: restaurant.id,
    });

    expect(table).toBeDefined();
  });
  it("should return error of permission denied", async () => {
    expect(
      async () => await service.find({ id: tableId, restaurantId: 9012 })
    ).rejects.toThrowError("permission denied for table");
  });

  it("should delete the table", async () => {
    const { message } = await service.delete({
      id: tableId,
      restaurantId: restaurant.id,
    });
    expect(message).toBe("success");
  });
});
