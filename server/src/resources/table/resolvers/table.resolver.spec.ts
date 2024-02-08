import { Test, TestingModule } from "@nestjs/testing";
import { TableResolver } from "./table.resolver";
import { TableService } from "../services/table.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { getMocks } from "../../../../test/helper/mocks";
import { TableGuardModule } from "../guard/table.guard.module";
import { TableServiceMock } from "../services/mock/table.service.mock";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { FilterModule } from "../../../filter/filter.module";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";

describe("TableResolver", () => {
  let resolver: TableResolver;
  let prisma: PrismaService;
  let service: TableService;

  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;
  const mocks = getMocks();
  let mockTable: any = mocks.table();

  const SUCCESS = "success";

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, TableGuardModule, FilterModule],
      providers: [
        TableResolver,
        { provide: TableService, useClass: TableServiceMock },
        { provide: CacheService, useClass: CacheServiceMock },
      ],
    }).compile();

    resolver = module.get<TableResolver>(TableResolver);
    service = await module.resolve<TableService>(TableService);
    prisma = module.get<PrismaService>(PrismaService);

    Rpayload = mocks.restaurantPayload({ ...mocks.restaurant, id: 1 });
    Wpayload = mocks.waiterPayload(mocks.waiter, 1);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a table", async () => {
    const table = await resolver.create(Rpayload, mockTable);
    expect(table.name).toBe(mockTable.name);
    mockTable = { ...mockTable, id: table.id };
  });
  it("create multiple table", async () => {
    const tables = [1, 2].map(() => mocks.table());
    const createTables = await resolver.createMany(Rpayload, tables);
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
      Rpayload
    );
    expect(updatedTable.name).toBe(update);

    mockTable = updatedTable;
  });
  it("lists all table of restaurant", async () => {
    const tables = await resolver.list(Rpayload.id);
    expect(tables.length).toEqual(3);
  });
  it("lists all table of restaurant as waiter", async () => {
    const tables = await resolver.list(Wpayload.restaurantId);

    expect(tables.length).toEqual(3);
  });
  it("filters out all table", async () => {
    const tables = await resolver.list(Rpayload.id, { name: "no match" });

    expect(tables.length).toEqual(0);
  });
  it("returns table with specific id", async () => {
    const table = await resolver.find(
      {
        ...mockTable,
      },
      { id: mockTable.id }
    );
    expect(table).toBeDefined();
    expect(table.name).toBe("updatedTableName");
  });

  it("deletes table", async () => {
    const deletedTable = await resolver.delete({ id: mockTable.id }, Rpayload);
    expect(deletedTable.message).toBe(SUCCESS);
  });
});
