import { RESTAURANT, WAITER } from "../../src/role";

export const mockAddress = {
  id: 1,
  address2: null,
  address1: "address1",
  zip: "5500",
  city: "gyoma",
  country: "HU",
  restaurantId: 1,
};

export const mockCurrency = { id: 1, name: "HUF", symbol: "Ft" };
export const mockRestaurant = {
  id: 1,
  name: "Test Kft.",
  email: "test@gmail.com",
  address: mockAddress,
  currencyId: 1,
  password: "mockRestaurant123",
  createdAt: new Date(),
};

export const mockWaiter = {
  id: 1,
  name: "Mock Waiter",
  gender: "male",
  profileIcon: null,
  email: "waiter@gmail.com",
  password: "mockWaiter123",
  createdAt: new Date(),
  restaurantId: 1,
};

export const mockVictual = {
  id: 1,
  price: 1.1,
  name: "TestMeal",
  categoryId: 1,
  restaurantId: 1,
  createdAt: new Date(),
};

export const mockCategory = {
  id: 1,
  name: "TestCategory",
  parentId: 1,
  restaurantId: 1,
  level: 2,
};

export const mockTable = {
  id: 1,
  name: "MockTable",
  restaurantId: 1,
  createdAt: new Date(),
};

export const mockOrder = {
  id: 1,
  restaurantId: 1,
  victualId: 1,
  tableId: 1,
  closed: false,
  waiterId: 1,
  description: "this is a mock order",
  isReady: false,
  quantity: 1,
  createdAt: new Date(),
};

export const mockMeal = {
  id: 1,
  start: new Date(),
  end: new Date(),
  total: 100,
  orders: [],
  orderIds: [{ id: 1 }],
  waiterId: 1,
  tableId: 1,
  restaurantId: 1,
};

export const mockRestaurantPayload = {
  name: mockRestaurant.name,
  id: 1,
  sub: 1,
  role: RESTAURANT,
};

export const mockWaiterPayload = {
  name: mockWaiter.name,
  id: 1,
  sub: 1,
  role: WAITER,
  restaurantId: 1,
};

export const mockOpenHour = {
  id: 1,
  name: "Monday",
  start: "08:00:00",
  end: "22:00:00",
  restaurantId: 1,
  createdAt: new Date(),
};

export const mockTask = {
  done: false,
  base: {
    id: 1,
    name: "Test app",
  },
};

export const MockRedis = {
  get: () => null,
  set: () => {},
  del: () => {},
};
