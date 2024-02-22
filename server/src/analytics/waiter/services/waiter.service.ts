import { Injectable } from "@nestjs/common";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { WaiterOfTheDay } from "../../../models/analytics/waiteroftheday.model";

@Injectable()
export class WaiterOfTheDayService {
  constructor(
    private readonly prismaAnalyticsService: PrismaAnalyticsService,
  ) {}
  findMany(ids: number[]) {
    return this.prismaAnalyticsService.waiterOfTheDay.findMany({
      where: {
        analyticsId: {
          in: ids,
        },
      },
    });
  }
  createSummary(data: WaiterOfTheDay[]) {
    const best = this.createBest(data);

    return { best };
  }
  private createBest(data: WaiterOfTheDay[]) {
    const reduced = data.reduce((a, b) => {
      a[b.waiterId] = (a[b.waiterId] || 0) + 1;
      return a;
    }, {});
    const sorted = Object.keys(reduced)
      .map((id) => ({
        id: Number(id),
        score: reduced[id],
      }))
      .sort((a, b) => b.score - a.score);
    return sorted[0].id;
  }
}
