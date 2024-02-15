import { Module } from "@nestjs/common";
import { CurrencyResolverModule } from "./resolvers/currency.resolver.module";

@Module({
  imports: [CurrencyResolverModule],
})
export class CurrencyModule {}
