import { HttpException, Injectable } from "@nestjs/common";
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
  private PERMISSION_DENIED = "permission denied for table";
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
    if (!data.where.restaurantId)
      throw new HttpException(this.PERMISSION_DENIED, 403);
    await this.find(data.where);
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
    if (!where.restaurantId)
      throw new HttpException(this.PERMISSION_DENIED, 403);
    await this.find(where);
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
      const table = await this.prismaService.table.findUnique({
        where: {
          id: where.id,
        },
      });
      if (table.restaurantId !== where.restaurantId) {
        throw new Error(this.PERMISSION_DENIED);
      }
      return table;
    } catch (e) {
      if (e.message === this.PERMISSION_DENIED) {
        throw new HttpException(this.PERMISSION_DENIED, 403);
      }
      throw new NotFoundResourceException("table");
    }
  }

  async getRestaurant(id: number) {
    const table = await this.prismaService.table.findFirst({
      where: {
        id,
      },
      include: {
        restaurant: true,
      },
    });
    return table.restaurant;
  }
}
