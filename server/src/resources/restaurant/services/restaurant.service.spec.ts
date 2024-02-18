import { Test, TestingModule } from "@nestjs/testing";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { RestaurantService } from "./restaurant.service";
import * as bcrypt from "bcrypt";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { SecurityModule } from "../../../security/security.module";
import { mockRestaurant } from "../../../../test/helper/mock.unit";
import { CurrencyService } from "../../currency/services/currency.service";
import { CurrencyServiceMock } from "../../currency/services/mock/currency.service.mock";

describe("RestaurantService", () => {
  let service: RestaurantService;
  let prisma: PrismaMainService;
  const SUCCESS = "success";

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule, SecurityModule],
      providers: [
        RestaurantService,
        { provide: CurrencyService, useClass: CurrencyServiceMock },
      ],
    }).compile();
    prisma = module.get<PrismaMainService>(PrismaMainService);
    service = module.get<RestaurantService>(RestaurantService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create a new restaurant", async () => {
    prisma.restaurant.create = jest.fn().mockImplementation(({ data }) => data);

    const restaurant = await service.create({
      ...mockRestaurant,
      currency: { name: "HUF" },
    });
    expect(restaurant).toBeDefined();
    expect(restaurant.address).toBeDefined();
  });

  it("should find the restaurant", async () => {
    prisma.restaurant.findUniqueOrThrow = jest.fn().mockReturnValue({
      ...mockRestaurant,
      password: bcrypt.hashSync(mockRestaurant.password, 10),
    });

    const find = await service.find({ id: mockRestaurant.id });
    expect(find.name).toBe(mockRestaurant.name);
  });

  it("should update restaurant's name", async () => {
    const UPDATE = "HellWorld Kft.";
    prisma.restaurant.update = jest.fn().mockImplementation(({ data }) => ({
      ...mockRestaurant,
      ...data,
    }));

    const updateRestaurant = await service.update({
      where: { id: mockRestaurant.id },
      update: {
        name: UPDATE,
      },
    });
    expect(updateRestaurant.name).toBe(UPDATE);
  });

  it("should update password of restaurant", async () => {
    const updatePw = await service.updatePassword({
      where: { id: mockRestaurant.id },
      update: {
        old: "123",
        password: "1234",
      },
    });
    expect(updatePw.message).toBe(SUCCESS);
  });

  it("should delete the restaurant", async () => {
    prisma.restaurant.delete = jest.fn().mockImplementation(() => true);

    const deletedRestaurant = await service.delete({ id: mockRestaurant.id });
    expect(deletedRestaurant.message).toBe(SUCCESS);
  });

  afterAll(async () => await prisma.$disconnect());
});
