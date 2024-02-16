import { Injectable } from "@nestjs/common";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(
    private readonly prismaAnalyticsService: PrismaAnalyticsService,
    private readonly prismaMainService: PrismaMainService
  ) {}

  async getIncome(id: number) {
    const analytics = await this.prismaAnalyticsService.analytics.findUnique({
      where: {
        id,
      },
      include: {
        income: true,
      },
    });
    return analytics.income;
  }

  async getWaiter(id: number) {
    const analytics = await this.prismaAnalyticsService.analytics.findUnique({
      where: {
        id,
      },
      include: { waiterOfTheDay: true },
    });

    return analytics.waiterOfTheDay;
  }

  async getPopularProduct(id: number) {
    const analytics = await this.prismaAnalyticsService.analytics.findUnique({
      where: {
        id,
      },
      include: { popularProduct: true },
    });
    return analytics.popularProduct;
  }
}
