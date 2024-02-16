import { Test, TestingModule } from "@nestjs/testing";
import { CurrencyService } from "../services/currency.service";
import { mockCurrency } from "../../../../test/helper/mock.unit";
import { CurrencyResolver } from "./currency.resolver";
import { CacheService } from "../../../cache/services/cache.service";
import { CacheServiceMock } from "../../../cache/services/mock/cache.service.mock";

describe("CurrencyService", () => {
  let resolver: CurrencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: CacheService, useClass: CacheServiceMock },
        { provide: CurrencyService, useValue: { list: () => [mockCurrency] } },
        CurrencyResolver,
      ],
    }).compile();

    resolver = module.get<CurrencyResolver>(CurrencyResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });

  it("should list all currency", async () => {
    const list = await resolver.list();
  });
});
