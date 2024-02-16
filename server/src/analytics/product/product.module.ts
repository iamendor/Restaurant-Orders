import { Module } from "@nestjs/common";
import { PopularProductResolverModule } from "./resolvers/product.resolver.module";

@Module({
  imports: [PopularProductResolverModule],
})
export class PopularProductModule {}
