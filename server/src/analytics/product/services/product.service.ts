import { Injectable } from "@nestjs/common";
import { PrismaAnalyticsService } from "../../../prisma/analytics/services/prisma.analytics.service";
import { PopularProduct } from "prisma/client/analytics";

@Injectable()
export class PopularProductService {
  constructor(
    private readonly prismaAnalyticsService: PrismaAnalyticsService,
  ) {}

  findMany(ids: number[]) {
    return this.prismaAnalyticsService.popularProduct.findMany({
      where: {
        analyticsId: {
          in: ids,
        },
      },
    });
  }

  createSummary(data: PopularProduct[]) {
    const toplist = this.createToplist(data);
    return { toplist };
  }

  private createToplist(data: PopularProduct[]) {
    const weighted = {
      numberOne: 3,
      numberTwo: 2,
      numberThree: 1,
    };
    let products = {};

    for (let i = 0; i < data.length; i++) {
      const product = data[i];
      if (product.numberOne)
        products[product.numberOne] =
          (products[product.numberOne] || 0) + weighted.numberOne;
      if (product.numberTwo)
        products[product.numberTwo] =
          (products[product.numberTwo] || 0) + weighted.numberTwo;
      if (product.numberThree)
        products[product.numberThree] =
          (products[product.numberThree] || 0) + weighted.numberThree;
    }
    const toplist = Object.keys(products)
      .map((id) => ({
        id,
        score: products[id],
      }))
      .sort((a, b) => a.score - b.score)
      .slice(0, 3);

    return toplist
      .map((p) => p.id)
      .map(Number)
      .reduce((a, p, i) => {
        const keys = ["numberOne", "numberTwo", "numberThree"];
        return { ...a, [keys[i]]: p };
      }, {});
  }
}
