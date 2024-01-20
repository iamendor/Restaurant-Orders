import { Module } from "@nestjs/common";
import { CategoryServiceModule } from "../services/category.service.module";
import { CategoryGuardModule } from "../guard/category.guard.module";
import { CategoryResolver } from "./category.resolver";
import { FieldResolver } from "./field.resolver";

@Module({
  imports: [CategoryServiceModule, CategoryGuardModule],
  providers: [CategoryResolver, FieldResolver],
})
export class CategoryResolverModule {}
