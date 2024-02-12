import { PrismaMainService } from "../../src/prisma/main/services/prisma.main.service";
import {
  mockAddress,
  mockCategory,
  mockCurrency,
  mockRestaurant,
  mockTable,
  mockVictual,
  mockWaiter,
} from "./mock.unit";
import req from "./graphql-request";
import { getMutations } from "./mutations";

export const clearMocks = async ({ prisma }: { prisma: PrismaMainService }) => {
  await prisma.restaurant.deleteMany();
};

export const excludeId = ({ id, ...rest }) => ({ ...rest });

export const createCategory = ({
  prisma,
  restaurantId,
}: {
  prisma: PrismaMainService;
  restaurantId: number;
}) => {
  return prisma.category.create({
    data: {
      name: mockCategory.name,
      restaurant: { connect: { id: restaurantId } },
    },
  });
};
export const createTable = ({
  prisma,
  restaurantId,
}: {
  prisma: PrismaMainService;
  restaurantId: number;
}) => {
  return prisma.table.create({
    data: {
      name: mockTable.name,
      restaurant: { connect: { id: restaurantId } },
    },
  });
};

export const createVictual = ({
  prisma,
  restaurantId,
  categoryId,
}: {
  prisma: PrismaMainService;
  restaurantId: number;
  categoryId: number;
}) => {
  return prisma.victual.create({
    data: {
      name: mockVictual.name,
      price: mockVictual.price,
      restaurant: { connect: { id: restaurantId } },
      category: { connect: { id: categoryId } },
    },
  });
};

export const requestNewRestaurant = async (server) => {
  const { body } = await req(server, {
    query: getMutations().restaurant.signupAndLogin(),
    variables: {
      data: mock.auth.restaurant.signup,
      credentials: mock.auth.restaurant.login,
    },
  });

  return {
    access_token: `Bearer ${body.data.loginRestaurant.access_token}`,
    restaurant: body.data.signup,
  };
};
export const requestNewWaiter = async (server, restaurantToken) => {
  const { body } = await req(server, {
    query: getMutations().waiter.createAndLogin(),
    variables: {
      data: mock.auth.waiter.signup,
      credentials: mock.auth.waiter.login,
    },
  }).set("Authorization", restaurantToken);
  const {
    data: { createWaiter, loginWaiter },
  } = body;
  return {
    waiter: createWaiter,
    access_token: `Bearer ${loginWaiter.access_token}`,
  };
};

export const mock = {
  auth: {
    restaurant: {
      signup: {
        name: mockRestaurant.name,
        email: mockRestaurant.email,
        address: { ...excludeId(mockAddress), restaurantId: undefined },
        currency: {
          ...excludeId(mockCurrency),
          restaurantId: undefined,
          symbol: undefined,
        },
        password: mockRestaurant.password,
      },
      login: {
        email: mockRestaurant.email,
        password: mockRestaurant.password,
      },
    },
    waiter: {
      signup: {
        ...excludeId(mockWaiter),
        createdAt: undefined,
        restaurantId: undefined,
      },
      login: {
        email: mockWaiter.email,
        password: mockWaiter.password,
      },
    },
  },
  table: {
    create: {
      ...mockTable,
      id: undefined,
      restaurantId: undefined,
      createdAt: undefined,
    },
  },
  victual: {
    create: {
      ...mockVictual,
      id: undefined,
      restaurantId: undefined,
      createdAt: undefined,
      categoryId: undefined,
    },
  },
};
