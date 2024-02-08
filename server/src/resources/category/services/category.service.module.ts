import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { FieldService } from "./field.service";

@Module({
  providers: [CategoryService, FieldService],
  exports: [CategoryService, FieldService],
})
export class CategoryServiceModule {}
