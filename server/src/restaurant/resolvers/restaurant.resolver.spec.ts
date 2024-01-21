import { Test } from "@nestjs/testing";
import { RestaurantResolver } from "./restaurant.resolver";
import { RestaurantService } from "../services/restaurant.service";
import { PrismaService } from "../../prisma/services/prisma.service";
import { getMocks } from "../../../test/helper/mocks";
import { JwtPayload } from "../../models/model";
import { RestaurantGuardModule } from "../guard/restaurant.guard.module";
import { PrismaModule } from "../../prisma/prisma.module";
import { Restaurant } from "@prisma/client";
import { RestaurantServiceMock } from "../services/mock/restaurant.service.mock";

describe("Restaurant Resolver", () => {
  const SUCCESS = "success";
  let resolver: RestaurantResolver;
  let service: RestaurantService;
  let payload: JwtPayload;
  let prisma: PrismaService;
  const mocks = getMocks();
  const rst: Restaurant = { ...mocks.restaurantModel, id: 1 };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [PrismaModule, RestaurantGuardModule],
      providers: [
        { provide: RestaurantService, useClass: RestaurantServiceMock },
        RestaurantResolver,
      ],
    }).compile();
    resolver = module.get<RestaurantResolver>(RestaurantResolver);
    service = module.get<RestaurantService>(RestaurantService);
    prisma = module.get<PrismaService>(PrismaService);

    payload = mocks.restaurantPayload(rst);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("updates the restaurant", async () => {
    const updatePayload = { name: "updatedName" };
    const update = await resolver.update(rst, updatePayload);
    expect(update).toBeDefined();
    expect(update.name).toBe(updatePayload.name);
  });

  it("updates password", async () => {
    const update = {
      old: rst.password,
      password: "update",
    };

    const updatePassword = await resolver.updatePassword(update, payload);
    expect(updatePassword.message).toBe(SUCCESS);
  });

  it("return restaurant info", () => {
    const info = resolver.info(rst);
    expect(info.email).toBe(mocks.restaurant.email);
  });

  it("deletes restaurant", async () => {
    const deleteRestaurant = await resolver.delete(payload);
    expect(deleteRestaurant.message).toBe(SUCCESS);
  });

  afterAll(async () => await prisma.$disconnect());
});
