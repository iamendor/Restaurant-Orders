import { Injectable } from "@nestjs/common";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { Income, IncomeSummary } from "../../../models/analytics/income.model";
import { CalculatorService } from "../../services/calculator.service";

@Injectable()
export class IncomeService {
  constructor(
    private readonly prismaAnalyticsService: PrismaAnalyticsService,
    private readonly calculatorService: CalculatorService,
  ) {}

  private sort(data: Income[]) {
    return data.sort((a, b) => a.total - b.total);
  }

  findMany(ids: number[]) {
    return this.prismaAnalyticsService.income.findMany({
      where: {
        analyticsId: {
          in: ids,
        },
      },
    });
  }
  createSummary(data: Income[]): IncomeSummary {
    data = this.sort(data);
    const total = this.calculatorService.sum({ data, key: "total" });
    const average = total / data.length;
    const median = this.calculatorService.median({ data, key: "total" });
    const range =
      data.length > 0
        ? { top: data[data.length - 1], bottom: data[0] }
        : { top: null, bottom: null };
    return { total, average, median, range };
  }
}
