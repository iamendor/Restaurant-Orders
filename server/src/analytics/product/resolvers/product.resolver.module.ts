import { Module } from "@nestjs/common";
import { PopularProductServiceModule } from "../services/product.service.module";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [PopularProductServiceModule],
  providers: [FieldResolver],
})
export class PopularProductResolverModule {}
