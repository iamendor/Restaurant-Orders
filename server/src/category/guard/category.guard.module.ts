import { Module } from "@nestjs/common";
import { CategoryBaseGuard, CategoryGuard } from "./category.guard";
import { IdIntercept } from "../../auth/guards/id";
import { CategoryService } from "../category.service";

@Module({
  providers: [CategoryService, CategoryBaseGuard, IdIntercept, CategoryGuard],
  exports: [CategoryBaseGuard, IdIntercept, CategoryGuard],
})
export class CategoryGuardModule {}
