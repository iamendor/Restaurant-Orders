import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import {
  CreateTableData,
  Deleted,
  Table,
  TablesCreated,
  UpdateTable,
  WhereTable,
} from "../models/model";
import {
  NotFoundResourceException,
  SomethingWentWrongException,
} from "../error/errors";

@Injectable()
export class TableService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateTableData): Promise<Table> {
    try {
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
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async createMany(data: CreateTableData[]): Promise<TablesCreated> {
    try {
      await this.prismaService.table.createMany({
        data: [...data],
        skipDuplicates: true,
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async update(data: UpdateTable) {
    try {
      const updatedTable = await this.prismaService.table.update({
        where: { id: data.where.id },
        data: { ...data.update },
      });
      return updatedTable;
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async delete(where: WhereTable): Promise<Deleted> {
    try {
      await this.prismaService.table.delete({
        where: {
          id: where.id,
        },
      });
      return { message: "success" };
    } catch (e) {
      throw new SomethingWentWrongException(e.message);
    }
  }

  async list(restaurantId: number): Promise<Table[]> {
    return (
      await this.prismaService.restaurant.findUnique({
        where: { id: restaurantId },
        include: { tables: true },
      })
    ).tables;
  }

  async find(where: WhereTable): Promise<Table> {
    try {
      return await this.prismaService.table.findUniqueOrThrow({
        where: {
          id: where.id,
        },
      });
    } catch (e) {
      throw new NotFoundResourceException("table");
    }
  }
}
