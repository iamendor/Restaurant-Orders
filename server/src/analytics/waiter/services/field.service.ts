import { Injectable } from "@nestjs/common";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";

@Injectable()
export class FieldService {
  constructor(private readonly prismaMainService: PrismaMainService) {}

  async getWaiter(waiterId: number) {
    if (waiterId < 23 || waiterId > 27) console.log(waiterId);
    return this.prismaMainService.waiter.findUnique({
      where: { id: waiterId },
    });
  }
}
