import { Module } from "@nestjs/common";
import { CategoryResolverModule } from "./resolvers/category.resolver.module";

@Module({
  imports: [CategoryResolverModule],
})
export class CategoryModule {}
