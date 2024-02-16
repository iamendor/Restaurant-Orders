import { Module } from "@nestjs/common";
import { WaiterOfTheDayResolverModule } from "./resolvers/waiter.resolver.module";

@Module({
  imports: [WaiterOfTheDayResolverModule],
})
export class WaiterOfTheDayModule {}
