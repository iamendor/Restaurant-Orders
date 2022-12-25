import { Module } from "@nestjs/common";
import { TableService } from "./table.service";
import { TableResolver } from "./table.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { WaiterModule } from "../waiter/waiter.module";

@Module({
  imports: [PrismaModule, WaiterModule],
  providers: [TableResolver, TableService],
  exports: [TableService],
})
export class TableModule {}
