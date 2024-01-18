import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Restaurant } from "@prisma/client";
import {
  Address,
  Table,
  Waiter,
  Category,
  Victual,
  Order,
  Meal,
  Currency,
} from "../../models/model";
import { AddressService } from "../../address/address.service";
import { CategoryService } from "../../category/category.service";
import { CurrencyService } from "../../currency/currency.service";
import { MealService } from "../../meal/meal.service";
import { OrderService } from "../../order/order.service";
import { TableService } from "../../table/table.service";
import { VictualService } from "../../victual/victual.service";
import { WaiterService } from "../../waiter/waiter.service";

@Resolver()
export class FieldResolver {
  constructor(
    private readonly addressService: AddressService,
    private readonly tableService: TableService,
    private readonly waiterService: WaiterService,
    private readonly categoryService: CategoryService,
    private readonly victualService: VictualService,
    private readonly orderService: OrderService,
    private readonly mealService: MealService,
    private readonly currencyService: CurrencyService
  ) {}
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
