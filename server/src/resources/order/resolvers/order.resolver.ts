import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { OrderService } from "../services/order.service";
import { Logger, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { SubscriptionService } from "../../../subscription/services/subscription.service";
import { RESTAURANT, WAITER } from "../../../role";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { OrderGuard } from "../guard/order.guard";
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
import { GetOrder } from "../../decorators";
import {
  CREATE_ORDER_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";

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
  private clearCache(restaurantId: number) {
    this.cacheService.del(this.cachePrefix(restaurantId));
  }
  private UPDATE = "UPDATE";
  private CREATE = "CREATE";
  private DELETE = "DELETE";

  @Mutation(() => Order, { name: "createOrder" })
  @UseInterceptors(TaskInterceptor(CREATE_ORDER_ACTION))
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdGuard, OpenGuard)
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

    this.clearCache(restaurantId);

    this.subscriptionService.invalidateOrders(restaurantId, {
      ...order,
      action: this.CREATE,
    });

    return order;
  }

  @Mutation(() => Success, { name: "createOrders" })
  @UseInterceptors(TaskInterceptor(CREATE_ORDER_ACTION))
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdGuard, OpenGuard)
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

    this.clearCache(restaurantId);

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
  @UseGuards(
    JwtAuthGuard,
    RoleGuard(WAITER, RESTAURANT),
    OpenGuard,
    ...OrderGuard
  )
  async update(
    @RID() restaurantId: number,
    @Args("data") { where, update }: UpdateOrder
  ) {
    const updatedOrder = await this.orderService.update({
      where,
      update: { ...update, isReady: update.isReady || false },
    });

    this.clearCache(restaurantId);

    this.subscriptionService.invalidateOrders(restaurantId, {
      ...updatedOrder,
      action: this.UPDATE,
    });

    return updatedOrder;
  }

  @Mutation(() => Success, { name: "deleteOrder" })
  @UseGuards(
    JwtAuthGuard,
    RoleGuard(RESTAURANT, WAITER),
    OpenGuard,
    ...OrderGuard
  )
  async delete(
    @RID() restaurantId: number,
    @Args("where") where: WhereOrder,
    @GetOrder() order: Order
  ) {
    const deleted = await this.orderService.delete({
      ...where,
    });

    this.clearCache(restaurantId);

    this.subscriptionService.invalidateOrders(restaurantId, {
      ...order,
      action: this.DELETE,
    });

    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  async list(
    @RID() restaurantId: number,
    @Args("filter", {
      nullable: true,
      type: () => OrderFilter,
      defaultValue: { isClosed: false },
    })
    filters?: OrderFilter
  ) {
    const cached = await this.cacheService.get({
      key: this.cachePrefix(restaurantId),
      json: true,
    });

    if (cached) {
      const remap = cached.map((ord) => ({
        ...ord,
        createdAt: new Date(ord.createdAt),
      }));

      if (filters)
        return this.filterService.orders({
          data: remap,
          filters: { ...filters, isClosed: filters.isClosed || "false" },
        });
      return remap;
    }

    const orders = await this.orderService.list(restaurantId);

    this.cacheService.set({
      key: this.cachePrefix(restaurantId),
      value: JSON.stringify(orders),
    });

    if (filters)
      return this.filterService.orders({
        data: orders,
        filters: { ...filters, isClosed: filters.isClosed || "false" },
      });
    return orders;
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), ...OrderGuard)
  async find(@GetOrder() order: Order, @Args("where") _: WhereOrder) {
    return order;
  }

  @Subscription(() => [ListenOrder], { resolve: (payload) => payload.orders })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  async listenOrders(@RID() restaurantId: number) {
    return this.subscriptionService.listenOrders(restaurantId);
  }
}
