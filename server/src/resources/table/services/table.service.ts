import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma/services/prisma.service";
import {
  UpdateTable,
  WhereTable,
  Table,
  CreateTable,
} from "../../../models/table.model";
import { Success } from "../../../models/success.model";

@Injectable()
export class TableService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: Required<CreateTable>): Promise<Table> {
    const { restaurantId, ...rest } = data;
    const table = await this.prismaService.table.create({
      data: {
        ...rest,
        restaurant: {
          connect: {
            id: restaurantId,
          },
        },
      },
    });
    return table;
  }

  async createMany(data: Required<CreateTable>[]): Promise<Success> {
    await this.prismaService.table.createMany({
      data: [...data],
      skipDuplicates: true,
    });
    return { message: "success" };
  }

  async update(data: UpdateTable) {
    const updatedTable = await this.prismaService.table.update({
      where: { id: data.where.id },
      data: { ...data.update },
    });
    return updatedTable;
  }

  async delete(where: WhereTable): Promise<Success> {
    await this.prismaService.table.delete({
      where: {
        id: where.id,
      },
    });
    return { message: "success" };
  }

  async list(restaurantId: number): Promise<Table[]> {
    const tables = await this.prismaService.table.findMany({
      where: { restaurantId },
    });
    return tables;
  }

  async find(where: WhereTable): Promise<Table> {
    return await this.prismaService.table.findUniqueOrThrow({
      where: {
        id: where.id,
      },
    });
  }
}
