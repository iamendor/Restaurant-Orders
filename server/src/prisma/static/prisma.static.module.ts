import { Global, Module } from "@nestjs/common";
import { PrismaStaticService } from "./services/prisma.static.service";

@Global()
@Module({
  providers: [PrismaStaticService],
  exports: [PrismaStaticService],
})
export class PrismaStaticModule {}
