import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaMainService: PrismaMainService) {}

  async getWaiter(waiterId: number) {
    return this.prismaMainService.waiter.findUnique({
      where: { id: waiterId },
    });
  }
}
