import { Module } from "@nestjs/common";
import { IncomeService } from "./income.service";
import { AnalyticsHelperModule } from "../../services/analytics.helper.module";

@Module({
  imports: [AnalyticsHelperModule],
  providers: [IncomeService],
  exports: [IncomeService],
})
export class IncomeServiceModule {}
