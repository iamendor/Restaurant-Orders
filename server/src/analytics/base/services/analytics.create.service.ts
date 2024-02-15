import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";

@Injectable()
export class CreateAnalyticsService {
  constructor(
    private readonly prismaMainService: PrismaMainService,
    private readonly prismaAnalyticsService: PrismaAnalyticsService
  ) {}

  private currentDate() {
    const start = new Date();
    const end = new Date();
    start.setHours(0, 0, 0, 0);
    return { start: start.toISOString(), end: end.toISOString() };
  }

  async trigger() {
    const restaurants = (
      await this.prismaMainService.restaurant.findMany({
        include: { settings: true },
      })
    ).filter(({ settings }) => settings.enableAnalytics);
    if (restaurants.length == 0) return true;

    const analytics = await Promise.all(
      restaurants.map(async (r) => {
        const analytic = await this.create(r.id);
        return { restaurantId: r.id, ...analytic };
      })
    );

    for (let i = 0; i < analytics.length; i++) {
      const { restaurantId, income, waiterOfTheDay, popularProduct } =
        analytics[i];
      await this.prismaAnalyticsService.analytics.create({
        data: {
          restaurantId,
          income: {
            create: income,
          },
          waiterOfTheDay: {
            create: waiterOfTheDay,
          },
          popularProduct: {
            create: popularProduct,
          },
        },
      });
    }
    return true;
  }

  async create(restaurantId: number) {
    const income = await this.createIncome(restaurantId);
    const popularProduct = await this.createPopularProduct(restaurantId);
    const waiterOfTheDay = await this.createWaiterOfTheDay(restaurantId);

    return { income, popularProduct, waiterOfTheDay };
  }

  async createIncome(restaurantId: number) {
    const { start, end } = this.currentDate();
    const meals = await this.prismaMainService.meal.findMany({
      where: {
        start: {
          gt: start,
        },
        end: {
          lt: end,
        },
        restaurantId,
      },
      select: {
        total: true,
      },
    });
    return { total: meals.reduce((acc, c) => acc + c.total, 0) };
  }
  async createPopularProduct(restaurantId: number) {
    const { start, end } = this.currentDate();
    const victuals = (
      await this.prismaMainService.order.groupBy({
        by: "victualId",
        where: {
          restaurantId,
          createdAt: {
            gt: start,
            lt: end,
          },
        },
        _count: {
          victualId: true,
        },

        orderBy: {
          _count: {
            victualId: "desc",
          },
        },
      })
    ).map((order) => order.victualId);
    return {
      numberOne: victuals[0],
      numberTwo: victuals[1] || null,
      numberThree: victuals[2] || null,
    };
  }
  async createWaiterOfTheDay(restaurantId: number) {
    const { start, end } = this.currentDate();
    const waiters = await this.prismaMainService.order.groupBy({
      by: "waiterId",
      where: {
        restaurantId,
        createdAt: {
          gt: start,
          lt: end,
        },
      },

      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: "desc",
        },
      },
    });
    if (waiters.length == 0) return { waiterId: null };
    return { waiterId: waiters[0].waiterId };
  }
}
