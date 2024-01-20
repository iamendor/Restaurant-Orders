import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../../src/prisma/services/prisma.service";
import * as bcrypt from "bcrypt";
export const getMocks = () => ({
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
      currency: "HUF",
    },
    password: "mockRestaurant123",
  },
  waiter: {
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
    createdAt: new Date().toLocaleString(),
  }),
});

export const createRestaurantWithWaiter = async ({
  prisma,
  jwt,
  secret,
}: {
  prisma: PrismaService;
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
          ...mocks.waiter,
          password: bcrypt.hashSync(mocks.waiter.password, 10),
        },
      },
      currency: {
        create: {
          ...mocks.restaurant.currency,
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
  prisma: PrismaService;
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
          create: { ...mocks.restaurant.currency },
        },
      },
    });
};
