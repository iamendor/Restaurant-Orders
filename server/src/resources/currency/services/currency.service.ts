import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import { WhereCurrency } from "../../../models/currency.model";

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(where: WhereCurrency) {
    return this.prismaService.currency.findUniqueOrThrow({
      where,
    });
  }

  list() {
    return this.prismaService.currency.findMany();
  }
}
