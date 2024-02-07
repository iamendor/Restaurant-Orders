import { Query, Resolver } from "@nestjs/graphql";
import { Currency } from "../../../models/currency.model";
import { CurrencyService } from "../services/currency.service";

@Resolver((of) => Currency)
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}
  @Query(() => [Currency], { name: "listCurrencies" })
  async list() {
    const currencies = await this.currencyService.list();
    return currencies;
  }
}
