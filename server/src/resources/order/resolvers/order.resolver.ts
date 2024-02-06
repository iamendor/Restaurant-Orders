import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { OrderService } from "../services/order.service";
import { Logger, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { SubscriptionService } from "../../../subscription/services/subscription.service";
import { RESTAURANT, WAITER } from "../../../role";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { OrderGuard } from "../guard/order.guard";
import { GetOrder } from "../decorators/order.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import {
  Order,
  CreateOrder,
  UpdateOrder,
  WhereOrder,
  ListenOrder,
} from "../../../models/order.model";
import { Success } from "../../../models/success.model";
import { OrderFilter } from "../../../models/filter.model";
import { FilterService } from "../../../filter/services/filter.service";
import { OpenGuard } from "../../openhour/guard/open.guard";
import { CacheService } from "../../../cache/services/cache.service";

@Resolver((of) => Order)
export class OrderResolver {
  logger: Logger = new Logger();
  constructor(
    private readonly orderService: OrderService,
    private readonly subscriptionService: SubscriptionService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number) {
    return `orders:${restaurantId}`;
  }
  private UPDATE = "UPDATE";
  private CREATE = "CREATE";
  private DELETE = "DELETE";

  @Mutation(() => Order, { name: "createOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept, OpenGuard)
  async create(
    @User() { id }: JwtPayload,
    @RID() restaurantId: number,
    @Args("data") data: CreateOrder
  ) {
    const order = await this.orderService.create({
      ...data,
      restaurantId,
      waiterId: id,
    });

    this.cacheService.del(this.cachePrefix(restaurantId));

    this.logger.log(order);
    this.subscriptionService.invalidateOrders(restaurantId, {
      ...order,
      action: this.CREATE,
    });

    return order;
  }

  @Mutation(() => Success, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept, OpenGuard)
  async createMany(
    @User() { id }: JwtPayload,
    @RID() restaurantId: number,
    @Args("data", { type: () => [CreateOrder] }) data: CreateOrder[]
  ) {
    const ordersData = data.map((order) => ({
      ...order,
      restaurantId,
      waiterId: id,
    }));

    await this.orderService.createMany(ordersData);

    this.cacheService.del(this.cachePrefix(restaurantId));

    const orders = await this.orderService.listLatest({
      restaurantId,
      count: ordersData.length,
    });
    this.subscriptionService.invalidateOrders(
      restaurantId,
      ...orders.map((order) => ({ ...order, action: this.CREATE }))
    );

    return { message: "success" };
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard, OpenGuard)
  async update(@RID() restaurantId: number, @Args("data") data: UpdateOrder) {
    const updatedOrder = await this.orderService.update(data);

    this.cacheService.del(this.cachePrefix(restaurantId));

    this.subscriptionService.invalidateOrders(restaurantId, {
      ...updatedOrder,
      action: this.UPDATE,
    });

    return updatedOrder;
  }

  @Mutation(() => Success, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), OrderGuard, OpenGuard)
  async delete(
    @RID() restaurantId: number,
    @Args("where") where: WhereOrder,
    @GetOrder() order: Order
  ) {
    const deleted = await this.orderService.delete({
      ...where,
    });

    this.cacheService.del(this.cachePrefix(restaurantId));

    this.subscriptionService.invalidateOrders(restaurantId, {
      ...order,
      action: this.DELETE,
    });

    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => OrderFilter })
    filters?: OrderFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });
    if (cached) return cached;

    const orders = await this.orderService.list(restaurantId);

    this.cacheService.set({
      key: this.cachePrefix(restaurantId),
      value: JSON.stringify(orders),
    });

    if (filters) return this.filterService.orders({ data: orders, filters });
    return orders;
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard)
  async find(@GetOrder() order: Order, @Args("where") _: WhereOrder) {
    return order;
  }

  @Subscription(() => [ListenOrder], { resolve: (payload) => payload.orders })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async listenOrders(@RID() restaurantId: number) {
    return this.subscriptionService.listenOrders(restaurantId);
  }
}
