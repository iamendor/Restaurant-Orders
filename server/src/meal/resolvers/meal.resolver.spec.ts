import { Test, TestingModule } from "@nestjs/testing";
import { MealResolver } from "./meal.resolver";
import { MealService } from "../services/meal.service";
import { PrismaModule } from "../../prisma/prisma.module";
import { PrismaService } from "../../prisma/services/prisma.service";
import { CoreModule } from "../../core/core.module";
import { JwtService } from "@nestjs/jwt";
import {
  createRestaurantWithWaiter,
  getMocks,
} from "../../../test/helper/mocks";
import { JwtPayload, Meal } from "../../models/model";
import { ConfigService } from "@nestjs/config";
import { MealGuardModule } from "../guard/meal.guard.module";

describe("MealResolver", () => {
  let resolver: MealResolver;
  let prisma: PrismaService;
  const mocks = getMocks();
  let restaurantPayload: JwtPayload;
  let waiterPayload: JwtPayload;
  let tableId: number;
  let mealId: number;
  let mockMeal: Meal;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, PrismaModule, MealGuardModule],
      providers: [MealResolver, MealService],
    }).compile();
    const config = module.get<ConfigService>(ConfigService);
    prisma = module.get<PrismaService>(PrismaService);
    const jwt = module.get<JwtService>(JwtService);
    resolver = module.get<MealResolver>(MealResolver);
    const { restaurantPayload: rPayload, waiterPayload: wPayload } =
      await createRestaurantWithWaiter({
        prisma,
        jwt,
        secret: config.get("JWT_SECRET"),
      });
    [restaurantPayload, waiterPayload] = [rPayload, wPayload];
    const data = await prisma.restaurant.update({
      where: { id: restaurantPayload.id },
      data: {
        tables: {
          create: {
            ...mocks.table(),
          },
        },
        categories: {
          create: {
            name: mocks.category.name,
          },
        },
        victuals: {
          create: {
            ...mocks.victual.default,
          },
        },
      },
      include: {
        tables: true,
        victuals: true,
      },
    });
    tableId = data.tables[0].id;

    await prisma.order.create({
      data: {
        ...mocks.order({
          restaurantId: restaurantPayload.id,
          victualId: data.victuals[0].id,
          waiterId: waiterPayload.id,
          tableId,
        }),
      },
    });
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("create a meal", async () => {
    const meal = await resolver.create(waiterPayload.restaurantId, { tableId });
    expect(meal).toBeDefined();
    expect(meal.total).toEqual(1);
    mealId = meal.id;
    mockMeal = meal;
  });
  it("list meal", async () => {
    const meals = await resolver.list(restaurantPayload.id);
    expect(meals.length).toEqual(1);
  });
  it("return by id", async () => {
    const meal = await resolver.find(mockMeal);
    expect(meal).toBeDefined();
  });
});
