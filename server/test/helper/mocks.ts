import { JwtService } from "@nestjs/jwt";
import { PrismaMainService } from "../../src/prisma/main/services/prisma.main.service";
import * as bcrypt from "bcrypt";
import { RESTAURANT, WAITER } from "../../src/role";
import { JwtPayload } from "../../src/interfaces/jwt.interface";
export const getMocks = () => ({
  restaurantPayload: (restaurant): JwtPayload => ({
    name: restaurant.name,
    id: restaurant.id,
    sub: restaurant.id,
    role: RESTAURANT,
  }),
  waiterPayload: (waiter, restaurantId) => ({
    name: waiter.name,
    id: waiter.id,
    sub: waiter.id,
    role: WAITER,
    restaurantId,
  }),
  restaurant: {
    name: "Test Kft.",
    email: "test@gmail.com",
    address: {
      address2: null,
      address1: "address1",
      zip: "5500",
      city: "gyoma",
      country: "HU",
    },
    currency: {
      name: "HUF",
    },
    password: "mockRestaurant123",
  },
  currency: {
    name: "HUF_MOCK",
    symbol: "SemmitSemÉrAFt",
  },
  restaurantModel: {
    name: "Test Kft.",
    email: "test@gmail.com",
    password: "mockRestaurant123",
    id: 1,
    createdAt: new Date(),
  },
  waiter: {
    id: 1,
    name: "waiter1",
    gender: "male",
    profileIcon: null,
    email: "waiter@gmail.com",
    password: "mockWaiter123",
    createdAt: new Date(),
  },
  waiterWithNoId: {
    name: "waiter1",
    gender: "male",
    profileIcon: null,
    email: "waiter@gmail.com",
    password: "mockWaiter123",
  },
  table: () => ({
    name: `TableMock${Math.random()}`,
  }),
  category: {
    name: "Category",
    restaurantId: 1,
  },
  victual: {
    default: {
      price: 1.0,
      name: "TestMeal",
    },
    withCategory: () => ({
      name: "TestMeal",
      price: 1.0,
      category: {
        name: "TestCategory",
      },
    }),
    withCategoryId: (id: number) => ({
      name: "TestMeal",
      price: 1.1,
      categoryId: id,
    }),
  },
  order: (data: { restaurantId; victualId; tableId; waiterId }) => ({
    ...data,
    description: "this is a mock order",
    isReady: false,
    quantity: 1,
    createdAt: new Date(),
  }),
  meal: () => ({
    id: 1,
    start: new Date(),
    end: new Date(),
    total: 100,
    orders: [],
    waiterId: 1,
    tableId: 1,
    restaurantId: 1,
  }),
  openingHour: () => ({
    id: 1,
    restaurantId: 1,
    start: "08:00:00",
    end: "21:00:00",
    name: "Monday",
  }),
  openings: () => {
    const base = { start: "00:00:00", end: "23:59:59" };
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days.map((day) => ({ ...base, name: day, createdAt: new Date() }));
  },
});

export const createRestaurantWithWaiter = async ({
  prisma,
  jwt,
  secret,
}: {
  prisma: PrismaMainService;
  jwt: JwtService;
  secret?: string;
}) => {
  await clearMocks({ prisma });
  const mocks = getMocks();
  const restaurant = await prisma.restaurant.create({
    data: {
      ...mocks.restaurant,
      password: bcrypt.hashSync(mocks.restaurant.password, 10),
      address: {
        create: {
          ...mocks.restaurant.address,
        },
      },
      waiters: {
        create: {
          ...mocks.waiterWithNoId,
          password: bcrypt.hashSync(mocks.waiterWithNoId.password, 10),
        },
      },
      currency: {
        connectOrCreate: {
          create: { ...mocks.currency },
          where: { name: mocks.currency.name },
        },
      },
      openingHours: {
        createMany: {
          data: mocks.openings(),
        },
      },
    },
    include: {
      waiters: true,
    },
  });
  const {
    waiters: [waiter],
  } = restaurant;
  const Rpayload = {
    sub: restaurant.id,
    id: restaurant.id,
    name: restaurant.name,
    email: restaurant.email,
    role: "restaurant",
  };
  const Wpayload = {
    sub: waiter.id,
    id: waiter.id,
    name: waiter.name,
    email: waiter.email,
    role: "waiter",
    restaurantId: restaurant.id,
  };
  const restaurantToken = jwt.sign(Rpayload, secret && { secret });
  const waiterToken = jwt.sign(Wpayload, secret && { secret });

  return {
    restaurantToken: `Bearer ${restaurantToken}`,
    waiterToken: `Bearer ${waiterToken}`,
    waiterId: waiter.id,
    restaurantId: restaurant.id,
    restaurantPayload: Rpayload,
    waiterPayload: Wpayload,
  };
};

export const clearMocks = async ({
  prisma,
  createRestaurant,
}: {
  prisma: PrismaMainService;
  createRestaurant?: boolean;
}) => {
  const mocks = getMocks();
  const restaurant = await prisma.restaurant.findUnique({
    where: { email: mocks.restaurant.email },
  });
  if (restaurant) {
    await prisma.restaurant.delete({
      where: {
        email: mocks.restaurant.email,
      },
    });
    await prisma.currency.delete({
      where: {
        name: mocks.currency.name,
      },
    });
  }
  if (createRestaurant)
    return await prisma.restaurant.create({
      data: {
        ...mocks.restaurant,
        password: bcrypt.hashSync(mocks.restaurant.password, 10),
        address: {
          create: {
            ...mocks.restaurant.address,
          },
        },
        currency: {
          connectOrCreate: {
            create: { ...mocks.currency },
            where: { name: mocks.currency.name },
          },
        },
      },
    });
};
