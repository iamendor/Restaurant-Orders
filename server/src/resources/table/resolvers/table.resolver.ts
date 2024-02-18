import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { TableService } from "../services/table.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { TableGuard } from "../../../guard";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Table,
  CreateTable,
  UpdateTable,
  WhereTable,
} from "../../../models/resources/table.model";
import { Success } from "../../../models/resources/success.model";
import { TableFilter } from "../../../models/resources/filter.model";
import { GetTable } from "../../../decorators";
import {
  CREATE_TABLE_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { MinArrayPipe } from "../../../pipes/array.pipe";
import { UniqueFieldFailedException } from "../../../error";

const TabelCacheInterceptor = CacheInterceptor({
  prefix: "tables",
  map: (tab) => ({ ...tab, createdAt: new Date(tab.createdAt) }),
});
const TableClearCacheInterceptor = ClearCacheInterceptor("tables");

@Resolver((of) => Table)
export class TableResolver {
  constructor(private readonly tableService: TableService) {}

  @Mutation(() => Table, { name: "createTable" })
  @UseInterceptors(
    TableClearCacheInterceptor,
    TaskInterceptor(CREATE_TABLE_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async create(
    @Args("data", { type: () => CreateTable }, AddRID)
    data: Required<CreateTable>,
    @User() { id }: JwtPayload
  ) {
    const isUnique = await this.tableService.validateUnique({
      restaurantId: id,
      name: data.name,
    });

    if (!isUnique) throw new UniqueFieldFailedException();

    return this.tableService.create(data);
  }

  @Mutation(() => Success, { name: "createTables" })
  @UseInterceptors(
    TableClearCacheInterceptor,
    TaskInterceptor(CREATE_TABLE_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  async createMany(
    @Args("data", { type: () => [CreateTable] }, MinArrayPipe, AddRID)
    data: Required<CreateTable>[],
    @User() { id }: JwtPayload
  ) {
    const tableNames = (await this.tableService.list(id)).map(
      (tab) => tab.name
    );

    for (let i = 0; i < data.length; i++) {
      if (tableNames.includes(data[i].name))
        throw new UniqueFieldFailedException();
    }

    return this.tableService.createMany(data);
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseInterceptors(TableClearCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  async update(@Args("data") data: UpdateTable, @User() { id }: JwtPayload) {
    if (data.update.name) {
      const isUniqe = await this.tableService.validateUnique({
        name: data.update.name,
        restaurantId: id,
      });

      if (!isUniqe) throw new UniqueFieldFailedException();
    }
    return this.tableService.update(data);
  }

  @Mutation(() => Success, { name: "deleteTable" })
  @UseGuards(TableClearCacheInterceptor)
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  delete(@Args("where") where: WhereTable, @User() { id }: JwtPayload) {
    return this.tableService.delete(where);
  }

  @Query(() => [Table], { name: "tables" })
  @UseInterceptors(TabelCacheInterceptor, FilterInterceptor("tables"))
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdGuard)
  list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => TableFilter })
    _filters?: TableFilter
  ) {
    return this.tableService.list(restaurantId);
  }

  @Query(() => Table, { name: "table" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), TableGuard)
  find(@GetTable() table: Table, @Args("where") _: WhereTable) {
    return table;
  }
}
