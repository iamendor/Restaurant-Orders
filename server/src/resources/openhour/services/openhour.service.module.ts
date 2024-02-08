import { Module } from "@nestjs/common";
import { OpenHourService } from "./openhour.service";
import { FieldService } from "../../restaurant/services/field.service";

@Module({
  providers: [OpenHourService, FieldService],
  exports: [OpenHourService, FieldService],
})
export class OpenHourServiceModule {}
