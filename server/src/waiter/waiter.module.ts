import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { WaiterService } from "./waiter.service";

@Module({
  imports: [PrismaModule],
  providers: [WaiterService],
  exports: [WaiterService],
})
export class WaiterModule {}
