import { Module } from "@nestjs/common";
import { CurrencyService } from "./services/currency.service";
import { CurrencyResolver } from "./resolvers/currency.resolver";
import { CacheModule } from "../../cache/cache.module";

@Module({
  imports: [CacheModule],
  providers: [CurrencyService, CurrencyResolver],
  exports: [CurrencyService],
})
export class CurrencyModule {}
