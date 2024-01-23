import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { getMutations } from "./helper/mutations";
import { getQueries } from "./helper/queries";
import {
  clearMocks,
  createRestaurantWithWaiter,
  getMocks,
} from "./helper/mocks";
import { PrismaModule } from "../src/prisma/prisma.module";
import { PrismaService } from "../src/prisma/services/prisma.service";
import req from "./helper/graphql-request";
import { JwtService } from "@nestjs/jwt";
import { CoreModule } from "../src/core/core.module";
import { ConfigService } from "@nestjs/config";

//TODO: fix e2e
describe("Orders API", () => {
  let app: INestApplication;
  const mutations = getMutations();
  const queries = getQueries();
  const mocks = getMocks();
  let prisma: PrismaService;
  let jwt: JwtService;
  let privateKey: string;
  let server;
  let restaurantToken: string;
  let waiterToken: string;
  let waiterId: number;
  let restaurantId: number;
  let catId: number;
  let catIds: number[];
  let victualId: number;
  let tableId: number;
  let orderId: number;
  let mealId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, AppModule, PrismaModule],
    }).compile();
    prisma = moduleFixture.get<PrismaService>(PrismaService);
    const config = moduleFixture.get<ConfigService>(ConfigService);
    jwt = moduleFixture.get<JwtService>(JwtService);
    privateKey = config.get("JWT_SECRET");

    await clearMocks({ prisma });
    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer();
  });

  describe("Authentication", () => {
    describe("Restaurant", () => {
      let signup;
      let loginRestaurant;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: mutations.restaurant.signupAndLogin(),
          variables: {
            data: mocks.restaurant,
            credentials: {
              email: mocks.restaurant.email,
              password: mocks.restaurant.password,
            },
          },
        });
        signup = body.data.signup;
        loginRestaurant = body.data.loginRestaurant;
        restaurantId = body.data.signup.id;
      });

      it("should signup restaurant", () => {
        expect(signup.name).toBe(mocks.restaurant.name);
        expect(signup.address.address1).toBe(mocks.restaurant.address.address1);
      });

      it("should login and return jwt token", async () => {
        expect(loginRestaurant.restaurant).toBeDefined();
        expect(loginRestaurant.access_token).toBeDefined();
        restaurantToken = `Bearer ${loginRestaurant.access_token}`;
      });

      it("returns unauthorized on login because of invalid password", async () => {
        const invalidCredentials = {
          email: mocks.restaurant.email,
          password: "invalidPassword",
        };
        const { body } = await req(server, {
          query: mutations.restaurant.login(),
          variables: {
            credentials: invalidCredentials,
          },
        });
        const {
          errors: [error],
        } = body;
        const {
          extensions: {
            response: { statusCode },
          },
        } = error;

        expect(statusCode).toEqual(401);
        expect(body.data).toBeNull();
      });
    });

    describe("Waiter", () => {
      let createWaiter;
      let loginWaiter;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: mutations.waiter.create(),
          variables: {
            data: mocks.waiterWithNoId,
            credentials: {
              email: mocks.waiter.email,
              password: mocks.waiter.password,
            },
          },
        }).set("Authorization", restaurantToken);
        createWaiter = body.data.createWaiter;
        loginWaiter = body.data.loginWaiter;
      });
      it("should create a new waiter", async () => {
        expect(createWaiter).not.toBeNull();
        expect(createWaiter.name).toBe(mocks.waiter.name);
        expect(createWaiter.gender).toBe(mocks.waiter.gender);
        waiterId = createWaiter.id;
      });
      it("logins the waiter", async () => {
        expect(loginWaiter).not.toBeNull();
        expect(loginWaiter.waiter.name).toBe(mocks.waiter.name);
        expect(loginWaiter.access_token).toBeDefined();
        waiterToken = `Bearer ${loginWaiter.access_token}`;
      });
      it("return unauthorized on login because password is invalid", async () => {
        const invalidCredentials = {
          email: mocks.waiter.email,
          password: "invalidPassword",
        };
        const { body } = await req(server, {
          query: mutations.waiter.login(),
          variables: {
            credentials: invalidCredentials,
          },
        });
        const { data } = body;
        expect(data).toBeNull();
      });
    });
  });

  describe("Restaurant", () => {
    it("updates the restaurant's name", async () => {
      const update = "updatedName";
      const { body } = await req(server, {
        query: mutations.restaurant.update(),
        variables: {
          update: {
            name: update,
          },
          credentials: {
            email: mocks.restaurant.email,
            password: mocks.restaurant.password,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: {
          updateRestaurant: { name },
          loginRestaurant: { access_token },
        },
      } = body;
      expect(name).toBe(update);
      expect(access_token).toBeDefined();
      restaurantToken = `Bearer ${access_token}`;
    });
    it("updates the restaurant's password and relogin", async () => {
      const update = "updatedPassword";
      const { body } = await request(server)
        .post("/graphql")
        .send({
          query: mutations.restaurant.updatePassword(),
          variables: {
            update: {
              old: mocks.restaurant.password,
              password: update,
            },
            credentials: {
              email: mocks.restaurant.email,
              password: update,
            },
          },
        })
        .set("Authorization", restaurantToken);
      const {
        data: {
          updateRestaurantPassword: { message },
          loginRestaurant: { access_token },
        },
      } = body;
      expect(message).toBe("success");
      expect(access_token).toBeDefined();
      restaurantToken = `Bearer ${access_token}`;
    });

    describe("List waiters and info about restaurant", () => {
      let waiters;
      let restaurantInfo;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.restaurant.waitersAndInfo(),
        }).set("Authorization", restaurantToken);
        waiters = body.data.waiters;
        restaurantInfo = body.data.restaurantInfo;
      });

      it("list all waiter of restaurant", async () => {
        expect(waiters).toBeDefined();
        expect(waiters.length).toEqual(1);
      });

      it("return restaurant info", async () => {
        expect(restaurantInfo).toBeDefined();
        expect(restaurantInfo.name).toBe("updatedName");
        expect(restaurantInfo.address).toBeDefined();
      });
    });

    it("deletes the restaurant", async () => {
      const { body } = await request(server)
        .post("/graphql")
        .send({
          query: mutations.restaurant.delete(),
        })
        .set("Authorization", restaurantToken);
      const {
        data: {
          deleteRestaurant: { message },
        },
      } = body;
      expect(message).toBe("success");
    });
  });

  describe("Waiter", () => {
    beforeAll(async () => {
      const {
        waiterId: wId,
        waiterToken: wToken,
        restaurantToken: rToken,
      } = await createRestaurantWithWaiter({ prisma, jwt, secret: privateKey });
      waiterId = wId;
      waiterToken = wToken;
      restaurantToken = rToken;
    });
    it("updates the waiter", async () => {
      const update = "updatedWaiter";
      const { body } = await req(server, {
        query: mutations.waiter.update(),
        variables: {
          data: {
            update: {
              name: update,
            },
          },
        },
      }).set("Authorization", waiterToken);
      const {
        data: { updateWaiter },
      } = body;
      expect(updateWaiter).toBeDefined();
      expect(updateWaiter.name).toBe(update);
    });
    it("updates the waiter as the restaurant", async () => {
      const update = "updatedByRestaurant";
      const { body } = await req(server, {
        query: mutations.waiter.update(),
        variables: {
          data: {
            where: {
              id: waiterId,
            },
            update: {
              name: update,
            },
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { updateWaiter },
      } = body;
      expect(updateWaiter).toBeDefined();
      expect(updateWaiter.name).toBe(update);
    });

    it("updates the waiter's password and relogin", async () => {
      const update = "updatedPassword";
      const { body } = await req(server, {
        query: mutations.waiter.updatePassword(),
        variables: {
          data: {
            update: {
              password: update,
              old: mocks.waiter.password,
            },
          },
          credentials: {
            email: mocks.waiter.email,
            password: update,
          },
        },
      }).set("Authorization", waiterToken);

      const {
        data: {
          updateWaiterPassword: { message },
          loginWaiter: { access_token },
        },
      } = body;
      expect(message).toBe("success");
      expect(access_token).toBeDefined();
      waiterToken = `Bearer ${access_token}`;
    });

    it("returns error because old password was not provided", async () => {
      const invalidUpdate = "invalid";
      const { body } = await req(server, {
        query: mutations.waiter.updatePassword(),
        variables: {
          data: {
            update: {
              password: invalidUpdate,
            },
          },
          credentials: {
            email: mocks.waiter.email,
            password: invalidUpdate,
          },
        },
      }).set("Authorization", waiterToken);
      const { errors } = body;
      expect(errors.length).toEqual(1);
      expect(errors[0].message).toBe("old password is not provided");
    });

    it("updates waiter password as restaurant", async () => {
      const restaurantUpdate = "updatedRestaurantPassword";
      const { body } = await req(server, {
        query: mutations.waiter.updatePassword(),
        variables: {
          data: {
            update: {
              password: restaurantUpdate,
            },
            where: {
              id: waiterId,
            },
          },
          credentials: {
            email: mocks.waiter.email,
            password: restaurantUpdate,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: {
          updateWaiterPassword: { message },
          loginWaiter: { access_token },
        },
      } = body;
      expect(message).toBe("success");
      expect(access_token).toBeDefined();
      waiterToken = `Bearer ${access_token}`;
    });

    it("returns error because no waiter specified", async () => {
      const restaurantUpdate = "updatedRestaurantPassword";
      const { body } = await req(server, {
        query: mutations.waiter.updatePassword(),
        variables: {
          data: {
            update: {
              password: restaurantUpdate,
            },
          },
          credentials: {
            email: mocks.waiter.email,
            password: restaurantUpdate,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        errors: [error],
      } = body;
      expect(error.message).toBe("something went wrong");
    });

    it("returns waiter info", async () => {
      const { body } = await req(server, {
        query: queries.waiter.info(),
      }).set("Authorization", waiterToken);

      const {
        data: { waiterInfo },
      } = body;
      expect(waiterInfo).toBeDefined();
      expect(waiterInfo.id).toBe(waiterId);
      expect(waiterInfo.name).toBe("updatedByRestaurant");
    });

    it("returns waiter info with restaurant authorization", async () => {
      const { body } = await req(server, {
        query: queries.waiter.info(),
        variables: {
          where: {
            id: waiterId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { waiterInfo },
      } = body;
      expect(waiterInfo).toBeDefined();
      expect(waiterInfo.id).toBe(waiterId);
      expect(waiterInfo.name).toBe("updatedByRestaurant");
    });

    it("deletes the waiter", async () => {
      const { body } = await req(server, {
        query: mutations.waiter.delete(),
        variables: {
          where: {
            id: waiterId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: {
          deleteWaiter: { message },
        },
      } = body;
      expect(message).toBe("success");
    });
  });

  describe("Table", () => {
    const mockOne = mocks.table();

    beforeAll(async () => {
      const {
        restaurantToken: Rtoken,
        waiterToken: Wtoken,
        waiterId: wId,
        restaurantId: rId,
      } = await createRestaurantWithWaiter({ prisma, jwt, secret: privateKey });
      restaurantToken = Rtoken;
      waiterToken = Wtoken;
      waiterId = wId;
      restaurantId = rId;
    });

    describe("Create", () => {
      let createTable;
      let createTables;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: mutations.table.create(),
          variables: {
            data: mockOne,
            dataMultiple: [1, 2].map(() => mocks.table()),
          },
        }).set("Authorization", restaurantToken);
        createTable = body.data.createTable;
        createTables = body.data.createTables;
      });
      it("creates a table", () => {
        expect(createTable.name).toBe(mockOne.name);
        tableId = createTable.id;
      });
      it("creates multiple table", () => {
        expect(createTables.message).toBe("success");
      });
    });
    describe("List and find as restaurant", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.table.listAndFind(),
          variables: {
            where: {
              id: tableId,
            },
          },
        }).set("Authorization", restaurantToken);
        list = body.data.tables;
        find = body.data.table;
      });
      it("lists all table", () => {
        expect(list.length).toEqual(3);
      });
      it("find a table", () => {
        expect(find).toBeDefined();
        expect(find.name).toBe(mockOne.name);
      });
    });
    describe("List and find as waiter", () => {
      let tables;
      let table;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.table.listAndFind(),
          variables: {
            where: {
              id: tableId,
            },
          },
        }).set("Authorization", waiterToken);
        table = body.data.table;
        tables = body.data.tables;
      });

      it("lists all table", async () => {
        expect(tables.length).toEqual(3);
      });
      it("find a table", async () => {
        expect(table).toBeDefined();
        expect(table.name).toBe(mockOne.name);
      });
    });

    it("updates the table", async () => {
      const update = "updatedName";
      const { body } = await req(server, {
        query: mutations.table.update(),
        variables: {
          data: {
            update: {
              name: update,
            },
            where: {
              id: tableId,
            },
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { updateTable },
      } = body;

      expect(updateTable.name).toBe(update);
    });
    it("deletes the table", async () => {
      const { body } = await req(server, {
        query: mutations.table.delete(),
        variables: {
          where: {
            id: tableId,
          },
        },
      }).set("Authorization", restaurantToken);
      const message = body.data.deleteTable.message;
      expect(message).toBe("success");
      expect(
        await prisma.table.findUnique({ where: { id: tableId } })
      ).toBeNull();
    });

    afterAll(async () => {
      tableId = (
        await prisma.restaurant.findUnique({
          where: { id: restaurantId },
          select: { tables: true },
        })
      ).tables[0].id;
    });
  });

  describe("Category", () => {
    describe("Create", () => {
      let create;
      let createMultiple;
      beforeAll(async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { restaurantId: _, ...rest } = mocks.category;
        const { body } = await req(server, {
          query: mutations.category.create(),
          variables: {
            data: {
              ...rest,
            },
            dataMultiple: [2, 3].map((i) => ({ name: rest.name + i })),
          },
        }).set("Authorization", restaurantToken);
        create = body.data.createCategory;
        createMultiple = body.data.createCategories;
      });
      it("creates a category", () => {
        expect(create.name).toBe(mocks.category.name);
        catId = create.id;
      });
      it("creates multiple categories", async () => {
        expect(createMultiple.message).toBe("success");
        expect(
          (
            await prisma.restaurant.findFirst({
              where: {
                id: restaurantId,
              },
              select: {
                categories: true,
              },
            })
          ).categories.length
        ).toEqual(3);
      });
    });

    it("updates the category", async () => {
      const update = "updatedCategory";
      const { body } = await req(server, {
        query: mutations.category.update(),
        variables: {
          data: {
            where: {
              id: catId,
            },
            update: {
              name: update,
            },
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { updateCategory },
      } = body;
      expect(updateCategory).toBeDefined();
      expect(updateCategory.name).toBe(update);
    });

    describe("List and find as restaurant", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.category.listAndFind(),
          variables: {
            where: {
              id: catId,
            },
          },
        }).set("Authorization", restaurantToken);
        list = body.data.categories;
        find = body.data.category;
      });
      it("list", () => {
        expect(list).toBeDefined();
        expect(list.length).toEqual(3);
      });
      it("find", () => {
        expect(find.name).toBe("updatedCategory");
      });
    });
    describe("List and find as waiter", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.category.listAndFind(),
          variables: {
            where: {
              id: catId,
            },
          },
        }).set("Authorization", waiterToken);
        list = body.data.categories;
        find = body.data.category;
      });
      it("list", () => {
        expect(list).toBeDefined();
        expect(list.length).toEqual(3);
      });
      it("find", () => {
        expect(find.name).toBe("updatedCategory");
      });
    });
    it("deletes category", async () => {
      const { body } = await req(server, {
        query: mutations.category.delete(),
        variables: {
          where: {
            id: catId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { deleteCategory },
      } = body;
      expect(deleteCategory.message).toBe("success");
    });
  });

  describe("Victual", () => {
    let mockVictual;

    beforeAll(async () => {
      catIds = (
        await prisma.restaurant.findUnique({
          where: {
            id: restaurantId,
          },
          select: {
            categories: true,
          },
        })
      ).categories.map((cat) => {
        return cat.id;
      });
      mockVictual = mocks.victual.withCategoryId(catIds[0]);
    });
    describe("Create", () => {
      let create;
      let createMultiple;

      beforeAll(async () => {
        const { body } = await req(server, {
          query: mutations.victual.create(),
          variables: {
            data: {
              ...mockVictual,
            },
            dataVictuals: [
              ...[1, 2].map(() => ({
                ...mocks.victual.withCategoryId(catIds[0]),
              })),
            ],
          },
        }).set("Authorization", restaurantToken);
        create = body.data.createVictual;
        createMultiple = body.data.createVictuals;
      });

      it("creates a victual", () => {
        expect(create.name).toBe(mockVictual.name);
        victualId = create.id;
      });
      it("creates multiple victual", () => {
        expect(createMultiple.message).toBe("success");
      });
    });

    it("updates victual", async () => {
      const update = "updated";
      const { body } = await req(server, {
        query: mutations.victual.update(),
        variables: {
          data: {
            where: {
              id: victualId,
            },
            update: {
              name: update,
              categoryId: catIds[1],
            },
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: {
          updateVictual: { name, category },
        },
      } = body;
      expect(name).toBe(update);
      expect(category.id).toBe(catIds[1]);
    });
    describe("List and find as restaurant", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.victual.listAndFind(),
          variables: {
            where: {
              id: victualId,
            },
          },
        }).set("Authorization", restaurantToken);
        list = body.data.victuals;
        find = body.data.victual;
      });
      it("list", async () => {
        expect(list.length).toEqual(3);
      });
      it("find", async () => {
        expect(find.name).toBe("updated");
      });
    });
    describe("List and find as waiter", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.victual.listAndFind(),
          variables: {
            where: {
              id: victualId,
            },
          },
        }).set("Authorization", waiterToken);
        list = body.data.victuals;
        find = body.data.victual;
      });
      it("list", async () => {
        expect(list.length).toEqual(3);
      });
      it("find", async () => {
        expect(find.name).toBe("updated");
      });
    });
    it("deletes victual", async () => {
      const { body } = await req(server, {
        query: mutations.victual.delete(),
        variables: {
          where: {
            id: victualId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { deleteVictual },
      } = body;
      expect(deleteVictual).toBeDefined();
      expect(deleteVictual.message).toBe("success");
    });

    afterAll(async () => {
      victualId = (
        await prisma.restaurant.findUnique({
          where: { id: restaurantId },
          select: { victuals: true },
        })
      ).victuals[0].id;
    });
  });

  describe("Order", () => {
    let mockOrder;
    let createMultiple;
    beforeAll(() => {
      catId = catId[0];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { createdAt: _, ...rest } = mocks.order({
        restaurantId,
        victualId,
        tableId,
        waiterId,
      });
      mockOrder = rest;

      createMultiple = [
        { ...mockOrder, description: "mock order 2" },
        { ...mockOrder, description: "mock order 3" },
      ];
    });
    describe("Create", () => {
      let create;
      let multiple;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: mutations.order.create(),
          variables: {
            data: mockOrder,
            dataMultiple: createMultiple,
          },
        }).set("Authorization", waiterToken);
        [create, multiple] = [body.data.createOrder, body.data.createOrders];
      });
      it("create an order", () => {
        expect(create.description).toBe("this is a mock order");
        orderId = create.id;
      });
      it("create 2 order", () => {
        expect(multiple.message).toBe("success");
      });
    });
    it("updates the order", async () => {
      const { body } = await req(server, {
        query: mutations.order.update(),
        variables: {
          data: {
            where: {
              id: orderId,
            },
            update: {
              isReady: true,
            },
          },
        },
      }).set("Authorization", waiterToken);
      const {
        data: { updateOrder },
      } = body;
      expect(updateOrder.isReady).toBeTruthy();
    });
    describe("List and find as restaurant", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.order.listAndFind(),
          variables: {
            where: {
              id: orderId,
            },
          },
        }).set("Authorization", restaurantToken);
        [list, find] = [body.data.orders, body.data.order];
      });
      it("list", () => {
        expect(list.length).toEqual(3);
      });
      it("find", () => {
        expect(find.description).toBe("this is a mock order");
      });
    });
    describe("List and find as waiter", () => {
      let list;
      let find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.order.listAndFind(),
          variables: {
            where: {
              id: orderId,
            },
          },
        }).set("Authorization", waiterToken);
        [list, find] = [body.data.orders, body.data.order];
      });
      it("list", () => {
        expect(list.length).toEqual(3);
      });
      it("find", () => {
        expect(find.description).toBe("this is a mock order");
      });
    });
    it("deletes the order", async () => {
      const { body } = await req(server, {
        query: mutations.order.delete(),
        variables: {
          where: {
            id: orderId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { deleteOrder },
      } = body;
      expect(deleteOrder.message).toBe("success");
    });
  });

  describe("Meal", () => {
    it("creates a meal", async () => {
      const { body } = await req(server, {
        query: mutations.meal.create(),
        variables: {
          data: {
            tableId,
          },
        },
      }).set("Authorization", waiterToken);
      const {
        data: { createMeal },
      } = body;
      expect(createMeal).toBeDefined();
      expect(createMeal.total).toEqual(2.2);
      mealId = createMeal.id;
    });

    describe("List and find meal as restaurant", () => {
      let list, find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.meals.listAndFind(),
          variables: {
            where: {
              id: mealId,
            },
          },
        }).set("Authorization", restaurantToken);
        [list, find] = [body.data.meals, body.data.meal];
      });

      it("list", () => {
        expect(list.length).toEqual(1);
      });
      it("find", () => {
        expect(find.id).toBe(mealId);
      });
    });

    describe("List and find meal as waiter", () => {
      let list, find;
      beforeAll(async () => {
        const { body } = await req(server, {
          query: queries.meals.listAndFind(),
          variables: {
            where: {
              id: mealId,
            },
          },
        }).set("Authorization", waiterToken);
        [list, find] = [body.data.meals, body.data.meal];
      });

      it("list", () => {
        expect(list.length).toEqual(1);
      });
      it("find", () => {
        expect(find.id).toBe(mealId);
      });
    });

    it("deletes meal", async () => {
      const { body } = await req(server, {
        query: mutations.meal.delete(),
        variables: {
          where: {
            id: mealId,
          },
        },
      }).set("Authorization", restaurantToken);
      const {
        data: { deleteMeal },
      } = body;
      expect(deleteMeal.message).toBe("success");
    });
  });

  afterAll(async () => {
    await clearMocks({ prisma });
    await prisma.$disconnect();
  });
});
