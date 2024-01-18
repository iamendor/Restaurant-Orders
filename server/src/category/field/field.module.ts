import { Module } from "@nestjs/common";
import { FieldResolver } from "./field.resolver";
import { PrismaModule } from "../../prisma/prisma.module";
import { FieldService } from "./field.service";

@Module({
  imports: [PrismaModule],
  providers: [FieldService, FieldResolver],
})
export class FieldModule {}
