import { Test, TestingModule } from "@nestjs/testing";
import { CurrencyService } from "./currency.service";
import { PrismaModule } from "../prisma/prisma.module";

describe("CurrencyService", () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
