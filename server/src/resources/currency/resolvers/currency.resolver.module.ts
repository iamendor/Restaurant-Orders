import { Module } from "@nestjs/common";
import { CurrencyServiceModule } from "../services/currency.service.module";
import { CacheModule } from "../../../cache/cache.module";
import { CurrencyResolver } from "./currency.resolver";

@Module({
  imports: [CacheModule, CurrencyServiceModule],
  providers: [CurrencyResolver],
})
export class CurrencyResolverModule {}
