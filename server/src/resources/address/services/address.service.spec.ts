import { Test, TestingModule } from "@nestjs/testing";
import { AddressService } from "./address.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockAddress } from "../../../../test/helper/mock.unit";

describe("AddressService", () => {
  let service: AddressService;
  let prisma: PrismaMainService;
  const address = mockAddress;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [AddressService],
    }).compile();

    service = module.get<AddressService>(AddressService);
    prisma = module.get<PrismaMainService>(PrismaMainService);
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
