import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryResolver } from "./category.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [PrismaModule, WaiterModule],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
