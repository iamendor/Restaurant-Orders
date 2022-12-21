import { Test, TestingModule } from "@nestjs/testing";
import { AddressService } from "./address.service";
import { PrismaModule } from "src/prisma/prisma.module";

describe("AddressService", () => {
  let service: AddressService;
  //TODO: implement
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [AddressService],
    }).compile();

    service = module.get<AddressService>(AddressService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
