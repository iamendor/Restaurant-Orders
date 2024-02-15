import { Module } from "@nestjs/common";
import { ProductResolverModule } from "./resolvers/product.resolver.module";

@Module({
  imports: [ProductResolverModule],
})
export class ProductModule {}
