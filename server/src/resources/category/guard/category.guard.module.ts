import { Module } from "@nestjs/common";
import { CategoryBaseGuard, CategoryGuard } from "./category.guard";
import { IdGuard } from "../../../auth/guards/id.guard";
import { CategoryService } from "../services/category.service";

@Module({
  providers: [CategoryService, CategoryBaseGuard, IdGuard, CategoryGuard],
  exports: [CategoryBaseGuard, IdGuard, CategoryGuard],
})
export class CategoryGuardModule {}
