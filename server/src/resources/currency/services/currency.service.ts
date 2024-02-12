import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { WhereCurrency } from "../../../models/currency.model";

@Injectable()
export class CurrencyService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async find(where: WhereCurrency) {
    return this.prismaService.currency.findUniqueOrThrow({
      where,
    });
  }

  list() {
    return this.prismaService.currency.findMany();
  }
}
