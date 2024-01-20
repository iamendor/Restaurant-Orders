import { Module } from "@nestjs/common";
import { VictualService } from "./victual.service";
import { FieldService } from "./field.service";

@Module({
  providers: [VictualService, FieldService],
  exports: [VictualService, FieldService],
})
export class VictualServiceModule {}
