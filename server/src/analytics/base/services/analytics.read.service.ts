import { Injectable } from "@nestjs/common";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";

@Injectable()
export class ReadAnalyticsService {
  constructor(
    private readonly prismaAnalyticsService: PrismaAnalyticsService,
  ) {}

  async list(restaurantId: number) {
    const analytics = this.prismaAnalyticsService.analytics.findMany({
      where: {
        restaurantId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return analytics;
  }
}
