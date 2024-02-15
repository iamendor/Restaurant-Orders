import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaMainService: PrismaMainService) {}

  getProduct(productId: number) {
    return this.prismaMainService.victual.findUnique({
      where: {
        id: productId,
      },
    });
  }
}
