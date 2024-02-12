import { Test, TestingModule } from "@nestjs/testing";
import { CurrencyService } from "./currency.service";
import { PrismaMainModule } from "../../../prisma/main/prisma.main.module";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { mockCategory, mockCurrency } from "../../../../test/helper/mock.unit";

describe("CurrencyService", () => {
  let service: CurrencyService;
  let prisma: PrismaMainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaMainModule],
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
    prisma = module.get<PrismaMainService>(PrismaMainService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should find currency by id", async () => {
    prisma.currency.findUniqueOrThrow = jest.fn().mockReturnValue(mockCurrency);

    const currency = await service.find({ name: "HUF" });
    expect(currency.symbol).toBe("Ft");
  });

  it("should list all currency", async () => {
    prisma.currency.findMany = jest.fn().mockReturnValue([mockCategory]);
  });
});
