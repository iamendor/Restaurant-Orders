import { Module } from "@nestjs/common";
import { WaiterResolveModule } from "./resolvers/waiter.resolve.module";

@Module({
  imports: [WaiterResolveModule],
})
export class WaiterModule {}
