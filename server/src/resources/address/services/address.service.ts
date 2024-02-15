import { Address, WhereAddress } from "../../../models/resources/address.model";
import { PrismaMainService } from "../../../prisma/main/services/prisma.main.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaMainService) {}

  async find(where: WhereAddress): Promise<Address> {
    if (where.id) {
      return await this.prismaService.address.findUniqueOrThrow({
        where: { id: where.id },
      });
    } else if (where.restaurantId) {
      return (
        await this.prismaService.restaurant.findUniqueOrThrow({
          where: { id: where.restaurantId },
          include: { address: true },
        })
      ).address;
    }
  }
}
