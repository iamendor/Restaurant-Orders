import { Injectable } from "@nestjs/common";
import { WhereCurrency } from "../../../models/resources/currency.model";
import { PrismaStaticService } from "../../../prisma/static/services/prisma.static.service";

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaStaticService) {}

  async find(where: WhereCurrency) {
    return this.prismaService.currency.findUniqueOrThrow({
      where,
    });
  }

  list() {
    return this.prismaService.currency.findMany();
  }
}
