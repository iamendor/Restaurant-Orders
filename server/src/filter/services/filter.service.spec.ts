import { Test, TestingModule } from "@nestjs/testing";
import { FilterService } from "./filter.service";
import { getMocks } from "../../../test/helper/mocks";
import { Victual } from "../../models/victual.model";
import { Category } from "../../models/category.model";
import { Order } from "../../models/order.model";
import { Table } from "../../models/table.model";

describe("FilterService", () => {
  let service: FilterService;
  const mocks = getMocks();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilterService],
    }).compile();

    service = module.get<FilterService>(FilterService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("Waiter", () => {
    const waiters = [
      mocks.waiter,
      {
        ...mocks.waiter,
        name: "search",
        email: "ezittegyteszt@gmail.com",
        gender: "female",
      },
    ];
    it("should filter by name", () => {
      const filtered = service.waiters({
        data: waiters,
        filters: { name: "sear" },
      });

      expect(filtered.length).toEqual(1);
    });

    it("should filter by email", () => {
      const filtered = service.waiters({
        data: waiters,
        filters: {
          email: "ezittegyteszt",
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter by gender", () => {
      const filtered = service.waiters({
        data: waiters,
        filters: {
          gender: "female",
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should return 0 'cause of multiple filter", () => {
      const filtered = service.waiters({
        data: waiters,
        filters: {
          email: "ezittegyteszt",
          gender: "male",
        },
      });
      expect(filtered.length).toEqual(0);
    });
  });
  describe("Victual", () => {
    const victuals = [
      mocks.victual.default,
      { ...mocks.victual.default, price: 300, name: "vtc" },
    ] as Victual[];

    it("should filter by name", () => {
      const filtered = service.victual({
        data: victuals,
        filters: {
          name: "vt",
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with min price", () => {
      const filtered = service.victual({
        data: victuals,
        filters: {
          min: 12,
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with max price", () => {
      const filtered = service.victual({
        data: victuals,
        filters: {
          max: 12,
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should combine the two", () => {
      const filtered = service.victual({
        data: victuals,
        filters: {
          max: 12,
          min: 2,
        },
      });
      expect(filtered.length).toEqual(0);
    });
  });

  describe("Categories", () => {
    const categories = [
      mocks.category,
      { ...mocks.category, name: "searchCat" },
    ] as Category[];
    it("should filter by name", () => {
      const filtered = service.categories({
        data: categories,
        filters: {
          name: "hCat",
        },
      });
      expect(filtered.length).toEqual(1);
    });
  });
  describe("Orders", () => {
    const base = mocks.order({
      restaurantId: 1,
      victualId: 1,
      tableId: 1,
      waiterId: 1,
    });
    const current = new Date();
    const orders = [
      {
        ...base,
        id: 1,
        createdAt: new Date(current.setDate(current.getDate() + 2)),
      },
      {
        ...base,
        id: 2,
        description: "this is a test",
        createdAt: new Date(current.setDate(current.getDate() - 4)),
      },
    ] as Order[];
    const cr = new Date();

    it("should filter by description", () => {
      const filtered = service.orders({
        filters: { description: "test" },
        data: orders,
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with start", () => {
      const filtered = service.orders({
        filters: { min: cr },
        data: orders,
      });
      expect(filtered.length).toEqual(1);
      expect(filtered[0].id).toBe(1);
    });
    it("should filter with end", () => {
      const filtered = service.orders({
        filters: { max: cr },
        data: orders,
      });
      expect(filtered.length).toEqual(1);
      expect(filtered[0].id).toBe(2);
    });
  });
  describe("Table", () => {
    const tables = [mocks.table(), { name: "ok", id: 1 }] as Table[];
    it("should filter by name", () => {
      const filtered = service.tables({
        data: tables,
        filters: { name: "ok" },
      });
      expect(filtered.length).toEqual(1);
    });
  });
});