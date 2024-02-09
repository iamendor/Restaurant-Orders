import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { TableService } from "../services/table.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { TableGuard } from "../../guard";
import { IdGuard } from "../../../auth/guard/id.guard";
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
import {
  CREATE_TABLE_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";

const TabelCacheInterceptor = CacheInterceptor({
  prefix: "tables",
  map: (tab) => ({ ...tab, createdAt: new Date(tab.createdAt) }),
});
const TableClearCacheInterceptor = ClearCacheInterceptor("tables");

@Resolver((of) => Table)
export class TableResolver {
  constructor(
    private readonly tableService: TableService,
    private readonly filterService: FilterService
  ) {}

  @Mutation(() => Table, { name: "createTable" })
  @UseInterceptors(
    TableClearCacheInterceptor,
    TaskInterceptor(CREATE_TABLE_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(@User() { id }: JwtPayload, @Args("data") data: CreateTable) {
    const table = await this.tableService.create({
      ...data,
      restaurantId: id,
    });
    return table;
  }

  @Mutation(() => Success, { name: "createTables" })
  @UseInterceptors(
    TableClearCacheInterceptor,
    TaskInterceptor(CREATE_TABLE_ACTION)
  )
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

    return tables;
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseInterceptors(TableClearCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  async update(@Args("data") data: UpdateTable, @User() { id }: JwtPayload) {
    const updated = await this.tableService.update(data);

    return updated;
  }

  @Mutation(() => Success, { name: "deleteTable" })
  @UseGuards(TableClearCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  async delete(@Args("where") where: WhereTable, @User() { id }: JwtPayload) {
    const deleted = await this.tableService.delete(where);

    return deleted;
  }

  @Query(() => [Table], { name: "tables" })
  @UseInterceptors(TabelCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => TableFilter })
    filters?: TableFilter
  ) {
    const tables = await this.tableService.list(restaurantId);

    if (filters) return this.filterService.tables({ data: tables, filters });
    return tables;
  }

  @Query(() => Table, { name: "table" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), TableGuard)
  async find(@GetTable() table: Table, @Args("where") _: WhereTable) {
    return table;
  }
}
