import { Test, TestingModule } from "@nestjs/testing";
import { CurrencyService } from "./currency.service";
import { mockCategory, mockCurrency } from "../../../../test/helper/mock.unit";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";
import { PrismaStaticModule } from "../../../prisma/static/prisma.static.module";

describe("CurrencyService", () => {
  let service: CurrencyService;
  let prisma: PrismaStaticService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaStaticModule],
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
    prisma = module.get<PrismaStaticService>(PrismaStaticService);
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
