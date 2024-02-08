import { Module } from "@nestjs/common";
import { OrderResolverModule } from "./resolvers/order.resolver.module";

@Module({
  imports: [OrderResolverModule],
})
export class OrderModule {}
