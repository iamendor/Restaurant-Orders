import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { WhereCurrency } from "../../../models/currency.model";

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(where: WhereCurrency) {
    const currency = await this.prismaService.currency.findUniqueOrThrow({
      where,
    });
    return currency;
  }

  async list() {
    const currencies = await this.prismaService.currency.findMany();
    return currencies;
  }
}
