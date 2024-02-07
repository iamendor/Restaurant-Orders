import { Module } from "@nestjs/common";
import { CurrencyService } from "./services/currency.service";
import { CurrencyResolver } from "./resolvers/currency.resolver";

@Module({
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService],
})
export class CurrencyModule {}
