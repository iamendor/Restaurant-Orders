import { Global, Module } from "@nestjs/common";
import { PrismaMainService } from "./services/prisma.main.service";

@Global()
@Module({
  providers: [PrismaMainService],
  exports: [PrismaMainService],
})
export class PrismaMainModule {}
