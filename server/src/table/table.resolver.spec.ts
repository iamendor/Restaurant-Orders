import { Test, TestingModule } from "@nestjs/testing";
import { TableResolver } from "./table.resolver";
import { TableService } from "./table.service";
import { PrismaModule } from "../prisma/prisma.module";
import { PrismaService } from "../prisma/prisma.service";
import { createRestaurantWithWaiter, getMocks } from "../../test/helper/mocks";
import { JwtPayload } from "../models/model";
import { JwtService } from "@nestjs/jwt";
import { CoreModule } from "../core/core.module";
import { TableGuardModule } from "./guard/table.guard.module";

describe("TableResolver", () => {
  let resolver: TableResolver;
  let prisma: PrismaService;
  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;
  const mocks = getMocks();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockTable: any = mocks.table();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, PrismaModule, TableGuardModule],
      providers: [TableResolver, TableService],
    }).compile();

    resolver = module.get<TableResolver>(TableResolver);
    prisma = module.get<PrismaService>(PrismaService);
    const jwt = module.get<JwtService>(JwtService);
    const { restaurantPayload, waiterPayload } =
      await createRestaurantWithWaiter({
        prisma,
        jwt,
      });

    Rpayload = restaurantPayload;
    Wpayload = waiterPayload;
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
    const tables = await resolver.createMany(
      Rpayload,
      [1, 2].map(() => mocks.table())
    );
    expect(tables.message).toBe("success");
    expect(
      (
        await prisma.restaurant.findUnique({
          where: { id: Rpayload.id },
          include: { tables: true },
        })
      ).tables.length
    ).toEqual(3);
  });
  it("update table", async () => {
    const update = "updatedTableName";
    const updatedTable = await resolver.update({
      where: { id: mockTable.id },
      update: {
        name: update,
      },
    });
    expect(updatedTable.name).toBe(update);
  });
  it("lists all table of restaurant", async () => {
    const tables = await resolver.list(Rpayload.id);
    expect(tables.length).toEqual(3);
  });
  it("lists all table of restaurant as waiter", async () => {
    const tables = await resolver.list(Wpayload.restaurantId);

    expect(tables.length).toEqual(3);
  });
  it("returns table with specific id", async () => {
    const table = await resolver.find({
      ...mockTable,
      name: "updatedTableName",
    });
    expect(table).toBeDefined();
    expect(table.name).toBe("updatedTableName");
  });

  it("deletes table", async () => {
    await resolver.delete({ id: mockTable.id });
    expect(
      await prisma.table.findUnique({ where: { id: mockTable.id } })
    ).toBeNull();
  });
});
