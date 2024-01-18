import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { TableService } from "./table.service";
import {
  CreateTable,
  Deleted,
  JwtPayload,
  Table,
  TablesCreated,
  UpdateTable,
  WhereTable,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { TableGuard } from "./table.guard";
import { IdIntercept } from "../auth/guards/id";
import { GetTable } from "./table.decorator";
import { RID } from "../auth/decorators/role.decorator";
import { RESTAURANT, WAITER } from "../role/role";

@Resolver("Table")
export class TableResolver {
  constructor(private readonly tableService: TableService) {}

  @Mutation(() => Table, { name: "createTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateTable) {
    return this.tableService.create({ ...data, restaurantId: restaurant.id });
  }

  @Mutation(() => TablesCreated, { name: "createTables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT))
  createMany(@User() { id }: JwtPayload, @Args("data") data: CreateTable[]) {
    const modified = data.map((table) => ({
      ...table,
      restaurantId: id,
    }));
    return this.tableService.createMany(modified);
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), IdIntercept, TableGuard)
  update(@Args("data") data: UpdateTable) {
    return this.tableService.update(data);
  }

  @Mutation(() => Deleted, { name: "deleteTable" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT), IdIntercept, TableGuard)
  delete(@Args("where") where: WhereTable) {
    return this.tableService.delete(where);
  }

  @Query(() => [Table], { name: "tables" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), IdIntercept)
  async list(@RID() restaurantId: number) {
    return this.tableService.list(restaurantId);
  }

  @Query(() => Table, { name: "table" })
  @UseGuards(
    JwtAuthGuard,
    RoleGuard(RESTAURANT, WAITER),
    IdIntercept,
    TableGuard
  )
  async find(@GetTable() table: Table) {
    return table;
  }
}
