import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhereCurrency } from "../models/model";
import { NotFoundResourceException } from "../error/errors";

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(where: WhereCurrency) {
    try {
      if (where.id) {
        const currency = await this.prismaService.currency.findUniqueOrThrow({
          where: { id: where.id },
        });
        return currency;
      } else if (where.restaurantId) {
        const restaurant =
          await this.prismaService.restaurant.findUniqueOrThrow({
            where: { id: where.restaurantId },
            include: { currency: true },
          });
        return restaurant.currency;
      }
    } catch (e) {
      throw new NotFoundResourceException("currency");
    }
  }
}
