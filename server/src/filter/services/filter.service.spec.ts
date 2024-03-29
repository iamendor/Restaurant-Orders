import { Test, TestingModule } from "@nestjs/testing";
import { FilterService } from "./filter.service";
import { Product } from "../../models/resources/product.model";
import { Category } from "../../models/resources/category.model";
import { Order } from "../../models/resources/order.model";
import { Table } from "../../models/resources/table.model";
import { Task } from "../../models/resources/task.model";
import {
  mockCategory,
  mockOrder,
  mockTable,
  mockProduct,
  mockWaiter,
} from "../../../test/helper/mock.unit";
import { Waiter } from "../../models/resources/waiter.model";

describe("FilterService", () => {
  let service: FilterService;
  const waiter = mockWaiter;
  const product = mockProduct;
  const category = mockCategory;
  const order = mockOrder;
  const table = mockTable;

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
      waiter,
      {
        ...waiter,
        name: "search",
        email: "ezittegyteszt@gmail.com",
        gender: "female",
      },
    ] as Waiter[];
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
  describe("Product", () => {
    const victuals = [product, { price: 300, name: "vtc" }] as Product[];

    it("should filter by name", () => {
      const filtered = service.victuals({
        data: victuals,
        filters: {
          name: "vt",
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with min price", () => {
      const filtered = service.victuals({
        data: victuals,
        filters: {
          min: 12,
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with max price", () => {
      const filtered = service.victuals({
        data: victuals,
        filters: {
          max: 12,
        },
      });
      expect(filtered.length).toEqual(1);
    });
    it("should combine the two", () => {
      const filtered = service.victuals({
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
    const categories = [category, { name: "searchCat" }] as Category[];

    it("should filter by name", () => {
      const filtered = service.categories({
        data: categories,
        filters: {
          name: "searchCat",
        },
      });
      expect(filtered.length).toEqual(1);
    });
  });
  describe("Orders", () => {
    const current = new Date();
    const orders = [
      {
        ...order,
        createdAt: new Date(current.setDate(current.getDate() + 2)),
        closed: true,
      },
      {
        ...order,
        description: "this is a test",
        createdAt: new Date(current.setDate(current.getDate() - 4)),
        closed: false,
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
    });
    it("should filter with end", () => {
      const filtered = service.orders({
        filters: { max: cr },
        data: orders,
      });
      expect(filtered.length).toEqual(1);
    });
    it("should filter with isClosed", () => {
      const filtered = service.orders({
        filters: { isClosed: "true" },
        data: orders,
      });
      const filtered2 = service.orders({
        filters: { isClosed: "false" },
        data: orders,
      });
      const filtered3 = service.orders({
        filters: { isClosed: "all" },
        data: orders,
      });

      expect(filtered.length).toBe(1);
      expect(filtered2.length).toBe(1);
      expect(filtered3.length).toBe(2);
    });
  });
  describe("Table", () => {
    const tables = [table, { name: "ok", id: 1 }] as Table[];
    it("should filter by name", () => {
      const filtered = service.tables({
        data: tables,
        filters: { name: "ok" },
      });
      expect(filtered.length).toEqual(1);
    });
  });
  describe("Task", () => {
    const tasks = [
      { id: 1, done: false },
      { id: 2, done: true },
    ] as Task[];

    it("should filter by done", () => {
      const filtered = service.tasks({
        data: tasks,
        filters: { done: "true" },
      });
      const filtered2 = service.tasks({
        data: tasks,
        filters: { done: "false" },
      });
      const filtered3 = service.tasks({
        data: tasks,
        filters: { done: "all" },
      });

      expect(filtered.length).toBe(1);
      expect(filtered2.length).toBe(1);
      expect(filtered3.length).toBe(2);
    });
  });
});
