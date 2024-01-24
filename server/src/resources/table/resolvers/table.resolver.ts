import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { TableService } from "../services/table.service";
import { User } from "../../../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { TableGuard } from "../guard/table.guard";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { GetTable } from "../decorators/table.decorator";
import { RID } from "../../../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../../../role/role";
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

@Resolver((of) => Table)
export class TableResolver {
  constructor(
    private readonly tableService: TableService,
    private readonly filterService: FilterService
  ) {}

  @Mutation(() => Table, { name: "createTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateTable) {
    return this.tableService.create({ ...data, restaurantId: restaurant.id });
  }

  @Mutation(() => Success, { name: "createTables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  createMany(
    @User() { id }: JwtPayload,
    @Args("data", { type: () => [CreateTable] }) data: CreateTable[]
  ) {
    const modified = data.map((table) => ({
      ...table,
      restaurantId: id,
    }));
    return this.tableService.createMany(modified);
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  update(@Args("data") data: UpdateTable) {
    return this.tableService.update(data);
  }

  @Mutation(() => Success, { name: "deleteTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), TableGuard)
  delete(@Args("where") where: WhereTable) {
    return this.tableService.delete(where);
  }

  @Query(() => [Table], { name: "tables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
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
