import { Module } from "@nestjs/common";
import { FieldResolver } from "./field.resolver";
import { FieldService } from "./field.service";
import { PrismaModule } from "../../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [FieldService, FieldResolver],
})
export class FieldModule {}
