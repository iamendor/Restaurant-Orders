import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "prisma/client/static";

@Injectable()
export class PrismaStaticService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
