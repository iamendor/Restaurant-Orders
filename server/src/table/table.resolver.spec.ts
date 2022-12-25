import { Test, TestingModule } from "@nestjs/testing";
import { TableResolver } from "./table.resolver";
import { TableService } from "./table.service";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";
import { PrismaService } from "../prisma/prisma.service";
import { createRestaurantWithWaiter, getMocks } from "../../test/helper/mocks";
import { JwtPayload } from "../models/model";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Config } from "../config";

describe("TableResolver", () => {
  let resolver: TableResolver;
  let prisma: PrismaService;
  let Rpayload: JwtPayload;
  let Wpayload: JwtPayload;
  const mocks = getMocks();
  let mockTable: any = mocks.table();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        PrismaModule,
        WaiterModule,
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: Config.getJwtConfig,
        }),
      ],
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
    const updatedTable = await resolver.update(Rpayload, {
      where: { id: mockTable.id },
      update: {
        name: update,
      },
    });
    expect(updatedTable.name).toBe(update);
  });
  it("lists all table of restaurant", async () => {
    const tables = await resolver.list(Rpayload);
    expect(tables.length).toEqual(3);
  });
  it("lists all table of restaurant as waiter", async () => {
    const tables = await resolver.list(Wpayload);

    expect(tables.length).toEqual(3);
  });
  it("returns table with specific id", async () => {
    const table = await resolver.find(Rpayload, { id: mockTable.id });
    expect(table).toBeDefined();
    expect(table.name).toBe("updatedTableName");
  });
  it("returns table for waiter", async () => {
    const table = await resolver.find(Rpayload, { id: mockTable.id });
    expect(table).toBeDefined();
    expect(table.name).toBe("updatedTableName");
  });

  it("returns permission denied because table is not belongs to the restaurant", async () => {
    expect(
      async () =>
        await resolver.find({ ...Rpayload, id: 0 }, { id: mockTable.id })
    ).rejects.toThrowError("permission denied for table");
  });

  it("returns the restaurant of table", async () => {
    const restaurant = await resolver.getRestaurant(mockTable);
    expect(restaurant.id).toBe(Rpayload.id);
  });

  it("deletes table", async () => {
    await resolver.delete(Rpayload, { id: mockTable.id });
    expect(
      await prisma.table.findUnique({ where: { id: mockTable.id } })
    ).toBeNull();
  });
});
