import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { TableService } from "./table.service";
import {
  CreateTable,
  Deleted,
  JwtPayload,
  Order,
  Restaurant,
  Table,
  TablesCreated,
  UpdateTable,
  WhereTable,
} from "../models/model";
import { User } from "../auth/decorators/user.decorator";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";

@Resolver("Table")
export class TableResolver {
  constructor(private readonly tableService: TableService) {}

  private getRestaurantId(user: JwtPayload) {
    return user.role === "restaurant" ? user.id : user.restaurantId;
  }

  @Mutation(() => Table, { name: "createTable" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  create(@User() restaurant: JwtPayload, @Args("data") data: CreateTable) {
    return this.tableService.create({ ...data, restaurantId: restaurant.id });
  }

  @Mutation(() => TablesCreated, { name: "createTables" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  createMany(
    @User() restaurant: JwtPayload,
    @Args("data") data: CreateTable[]
  ) {
    const modified = data.map((table) => ({
      ...table,
      restaurantId: restaurant.id,
    }));
    return this.tableService.createMany(modified);
  }

  @Mutation(() => Table, { name: "updateTable" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  update(@User() restaurant: JwtPayload, @Args("data") data: UpdateTable) {
    return this.tableService.update({
      ...data,
      where: {
        ...data.where,
        restaurantId: restaurant.id,
      },
    });
  }

  @Mutation(() => Deleted, { name: "deleteTable" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  delete(@User() restaurant: JwtPayload, @Args("where") where: WhereTable) {
    return this.tableService.delete({ ...where, restaurantId: restaurant.id });
  }

  @Query(() => [Table], { name: "tables" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async list(@User() user: JwtPayload) {
    return this.tableService.list(this.getRestaurantId(user));
  }

  @Query(() => Table, { name: "table" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereTable) {
    return this.tableService.find({
      ...where,
      restaurantId: this.getRestaurantId(user),
    });
  }

  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() table: Table) {
    return this.tableService.getRestaurant(table.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() table: Table) {
    return this.tableService.getOrders(table.id);
  }
}
