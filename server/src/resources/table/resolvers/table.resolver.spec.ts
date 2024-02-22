import { Test, TestingModule } from "@nestjs/testing";
import { TableResolver } from "./table.resolver";
import { TableService } from "../services/table.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { TableServiceMock } from "../services/mock/table.service.mock";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";
import { IdGuard } from "../../../auth/guard/id.guard";
import { TaskServiceMock } from "../../task/services/mock/task.service.mock";
import { TaskService } from "../../task/services/task.service";
import {
  mockRestaurantPayload,
  mockTable,
  mockWaiterPayload,
} from "../../../../test/helper/mock.unit";
import { ContextIdFactory } from "@nestjs/core";

describe("TableResolver", () => {
  let resolver: TableResolver;
  const SUCCESS = "success";

  beforeEach(async () => {
    const contextId = ContextIdFactory.create();
    jest
      .spyOn(ContextIdFactory, "getByRequest")
      .mockImplementation(() => contextId);
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, FilterModule],
      providers: [
        TableResolver,
        { provide: TableService, useClass: TableServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: TaskService, useClass: TaskServiceMock },
        IdGuard,
      ],
    }).compile();

    resolver = await module.resolve<TableResolver>(TableResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a table", async () => {
    const table = await resolver.create(
      { ...mockTable, name: `${mockTable.name}Create` },
      mockRestaurantPayload,
    );
    expect(table.name).toBe(`${mockTable.name}Create`);
  });
  it("create multiple table", async () => {
    const tables = [1, 2].map((id) => ({ name: `${mockTable.name}${id}`, id }));
    const createTables = await resolver.createMany(
      tables.map((t) => ({ ...t, restaurantId: 1 })),
      mockRestaurantPayload,
    );
    expect(createTables.message).toBe(SUCCESS);
  });
  it("update table", async () => {
    const update = "updatedTableName";
    const updatedTable = await resolver.update(
      {
        where: { id: mockTable.id },
        update: {
          name: update,
        },
      },
      mockRestaurantPayload,
    );
    expect(updatedTable.name).toBe(update);
  });
  it("lists all table of restaurant", async () => {
    const tables = await resolver.list(mockRestaurantPayload.id);
    expect(tables.length).toEqual(3);
  });
  it("lists all table of restaurant as waiter", async () => {
    const tables = await resolver.list(mockWaiterPayload.restaurantId);

    expect(tables.length).toEqual(3);
  });

  it("returns table with specific id", async () => {
    const table = resolver.find(mockTable, { id: mockTable.id });
    expect(table).toBeDefined();
    expect(table.name).toBe(mockTable.name);
  });

  it("deletes table", async () => {
    const deletedTable = await resolver.delete(
      { id: mockTable.id },
      mockRestaurantPayload,
    );
    expect(deletedTable.message).toBe(SUCCESS);
  });
});
