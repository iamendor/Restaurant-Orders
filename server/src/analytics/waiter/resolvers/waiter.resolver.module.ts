import { Module } from "@nestjs/common";
import { WaiterOfTheDayServiceModule } from "../services/waiter.service.module";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [WaiterOfTheDayServiceModule],
  providers: [FieldResolver],
})
export class WaiterOfTheDayResolverModule {}
