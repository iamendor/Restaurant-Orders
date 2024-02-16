import { Module } from "@nestjs/common";
import { RangeService } from "./range.service";
import { CalculatorService } from "./calculator.service";

@Module({
  providers: [RangeService, CalculatorService],
  exports: [RangeService, CalculatorService],
})
export class AnalyticsHelperModule {}
