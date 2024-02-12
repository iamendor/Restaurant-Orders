import { Query, Resolver } from "@nestjs/graphql";
import { Currency } from "../../../models/currency.model";
import { CurrencyService } from "../services/currency.service";
import { CacheInterceptor } from "../../../interceptors/cache.interceptor";
import { UseInterceptors } from "@nestjs/common";

@Resolver((of) => Currency)
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}
  @Query(() => [Currency], { name: "listCurrencies" })
  @UseInterceptors(CacheInterceptor({ restaurant: false, prefix: "currency" }))
  list(): Promise<Currency[]> {
    return this.currencyService.list();
  }
}
