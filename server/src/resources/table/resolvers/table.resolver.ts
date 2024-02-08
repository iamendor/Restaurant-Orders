import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { TableService } from "../services/table.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { TableGuard } from "../../guard";
import { IdGuard } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Table,
  CreateTable,
  UpdateTable,
  WhereTable,
} from "../../../models/table.model";
import { Success } from "../../../models/success.model";
import { TableFilter } from "../../../models/filter.model";
import { FilterService } from "../../../filter/services/filter.service";
import { CacheService } from "../../../cache/services/cache.service";
import { GetTable } from "../../decorators";

@Resolver((of) => Table)
export class TableResolver {
  constructor(
    private readonly tableService: TableService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `tables:${restaurantId}`;
  }

  private clearCache(restaurantId: number) {
    return this.cacheService.del(this.cachePrefix(restaurantId));
  }

  @Mutation(() => Table, { name: "createTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateTable) {
    const table = await this.tableService.create({
      ...data,
      restaurantId: id,
    });

    this.clearCache(id);

    return table;
  }

  @Mutation(() => Success, { name: "createTables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @User() { id }: JwtPayload,
    @Args("data", { type: () => [CreateTable] }) data: CreateTable[]
  ) {
    const modified = data.map((table) => ({
      ...table,
      restaurantId: id,
    }));

    const tables = await this.tableService.createMany(modified);

    this.clearCache(id);

    return tables;
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  async update(@Args("data") data: UpdateTable, @User() { id }: JwtPayload) {
    const updated = await this.tableService.update(data);

    this.clearCache(id);

    return updated;
  }

  @Mutation(() => Success, { name: "deleteTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  async delete(@Args("where") where: WhereTable, @User() { id }: JwtPayload) {
    const deleted = await this.tableService.delete(where);

    this.clearCache(id);

    return deleted;
  }

  @Query(() => [Table], { name: "tables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => TableFilter })
    filters?: TableFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });

    if (cached) {
      const remap = cached.map((table) => ({
        ...table,
        createdAt: new Date(table.createdAt),
      }));

      if (filters) return this.filterService.tables({ data: remap, filters });
      return remap;
    }

    const tables = await this.tableService.list(restaurantId);

    this.cacheService.set({
      key: this.cachePrefix(restaurantId),
      value: JSON.stringify(tables),
      ttl: 120_000_000,
    });

    if (filters) return this.filterService.tables({ data: tables, filters });
    return tables;
  }

  @Query(() => Table, { name: "table" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), TableGuard)
  async find(@GetTable() table: Table, @Args("where") _: WhereTable) {
    return table;
  }
}
