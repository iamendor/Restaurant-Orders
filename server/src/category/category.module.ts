import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryResolver } from "./category.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryGuardModule } from "./guard/category.guard.module";
import { FieldModule } from './field/field.module';

@Module({
  imports: [PrismaModule, CategoryGuardModule, FieldModule],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
