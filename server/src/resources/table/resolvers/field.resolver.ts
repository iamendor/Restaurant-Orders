import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Order } from "../../../models/order.model";
import { Restaurant } from "../../../models/restaurant.model";
import { Table } from "../../../models/table.model";
import { CacheService } from "../../../cache/services/cache.service";

@Resolver((of) => Table)
export class FieldResolver {
  constructor(
    private readonly fieldService: FieldService,
    private readonly cacheService: CacheService
  ) {}

  private totalCachePrefix(tableId: number) {
    return `table:total:${tableId}`;
  }

  private getTotalOfOrders(orders: Order[]) {
    return orders.reduce((acc, c) => acc + c.victual.price * c.quantity, 0);
  }

  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() { id }: Table) {
    return this.fieldService.getRestaurant(id);
  }

  @ResolveField(() => [Order], { name: "orders" })
  async getOrders(@Parent() { id }: Table) {
    const orders = await this.fieldService.getOrders(id);

    return orders;
  }

  @ResolveField(() => Number, { name: "total" })
  async getTotal(@Parent() { id }: Table) {
    const cached = await this.cacheService.get({
      key: this.totalCachePrefix(id),
    });

    if (cached) {
      return cached;
    }

    const orders = await this.fieldService.getOrders(id, true);
    const total = this.getTotalOfOrders(orders);

    this.cacheService.set({
      key: this.totalCachePrefix(id),
      value: total.toString(),
      ttl: 5_000,
    });

    return total;
  }
}
