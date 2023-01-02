import { UseGuards } from "@nestjs/common";
import {
  Args,
  Mutation,
  Resolver,
  Query,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AddressService } from "../address/address.service";
import { User } from "../auth/decorators/user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import {
  Address,
  Category,
  Currency,
  Deleted,
  JwtPayload,
  Meal,
  Order,
  PasswordUpdated,
  Restaurant,
  Table,
  UpdateRestaurant,
  UpdateRestaurantPassword,
  Victual,
  Waiter,
} from "../models/model";
import { RestaurantService } from "./restaurant.service";
import { TableService } from "../table/table.service";
import { WaiterService } from "../waiter/waiter.service";
import { CategoryService } from "../category/category.service";
import { OrderService } from "../order/order.service";
import { VictualService } from "../victual/victual.service";
import { MealService } from "../meal/meal.service";
import { CurrencyService } from "../currency/currency.service";

@Resolver("Restaurant")
export class RestaurantResolver {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly addressService: AddressService,
    private readonly tableService: TableService,
    private readonly waiterService: WaiterService,
    private readonly categoryService: CategoryService,
    private readonly victualService: VictualService,
    private readonly orderService: OrderService,
    private readonly mealService: MealService,
    private readonly currencyService: CurrencyService
  ) {}

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Restaurant, { name: "updateRestaurant" })
  update(
    @User() restaurant: JwtPayload,
    @Args("update")
    update: UpdateRestaurant
  ) {
    return this.restaurantService.update({
      where: { id: restaurant.id },
      data: update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => PasswordUpdated, { name: "updateRestaurantPassword" })
  updatePassword(
    @User() restaurant: JwtPayload,
    @Args("update") update: UpdateRestaurantPassword
  ) {
    return this.restaurantService.updatePassword({
      where: { id: restaurant.id },
      update,
    });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Mutation(() => Deleted, { name: "deleteRestaurant" })
  delete(@User() restaurant: JwtPayload) {
    return this.restaurantService.delete({ id: restaurant.id });
  }

  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  @Query(() => Restaurant, { name: "restaurantInfo" })
  info(@User() restaurant: JwtPayload) {
    return this.restaurantService.find({ id: restaurant.id });
  }

  @ResolveField(() => Address, { name: "address" })
  getAddress(@Parent() restaurant: Restaurant) {
    return this.addressService.find({ restaurantId: restaurant.id });
  }

  @ResolveField(() => [Table], { name: "tables" })
  getTables(@Parent() restaurant: Restaurant) {
    return this.tableService.list(restaurant.id);
  }

  @ResolveField(() => [Waiter], { name: "waiters" })
  getWaiters(@Parent() restaurant: Restaurant) {
    return this.waiterService.list({ id: restaurant.id });
  }

  @ResolveField(() => [Category], { name: "categories" })
  getCategories(@Parent() restaurant: Restaurant) {
    return this.categoryService.list(restaurant.id);
  }

  @ResolveField(() => [Victual], { name: "victuals" })
  getVictuals(@Parent() restaurant: Restaurant) {
    return this.victualService.list(restaurant.id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  getOrders(@Parent() restaurant: Restaurant) {
    return this.orderService.list(restaurant.id);
  }

  @ResolveField(() => [Meal], { name: "meals" })
  getMeals(@Parent() restaurant: Restaurant) {
    return this.mealService.list(restaurant.id);
  }

  @ResolveField(() => Currency, { name: "currency" })
  getCurrency(@Parent() restaurant: Restaurant) {
    return this.currencyService.find({ restaurantId: restaurant.id });
  }
}
