import { PrismaService } from "../prisma/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Address, WhereAddress } from "../models/model";

@Injectable()
export class AddressService {
  constructor(private readonly prismaService: PrismaService) {}

  async find(where: WhereAddress): Promise<Address> {
    try {
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
    } catch (e) {
      throw new NotFoundException("address not found");
    }
  }
}
