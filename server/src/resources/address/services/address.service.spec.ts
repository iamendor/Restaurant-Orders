import { Test, TestingModule } from "@nestjs/testing";
import { AddressService } from "./address.service";
import { PrismaModule } from "../../../prisma/prisma.module";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { mockAddress } from "../../../../test/helper/mock.unit";

describe("AddressService", () => {
  let service: AddressService;
  let prisma: PrismaService;
  const address = mockAddress;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AddressService],
    }).compile();

    service = module.get<AddressService>(AddressService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should find by id", async () => {
    prisma.address.findUniqueOrThrow = jest.fn().mockReturnValue(address);

    const found = await service.find({ id: address.id, restaurantId: 1 });

    expect(found.address1).toBe(address.address1);
  });
});
