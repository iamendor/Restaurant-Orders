import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { CategoryModule } from "../category/category.module";
import { WaiterModule } from "../waiter/waiter.module";
import { VictualService } from "./victual.service";
import { VictualResolver } from "./victual.resolver";

@Module({
  imports: [PrismaModule, CategoryModule, WaiterModule],
  providers: [VictualService, VictualResolver],
  exports: [VictualService],
})
export class VictualModule {}
