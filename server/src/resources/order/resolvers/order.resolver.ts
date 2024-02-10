import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { OrderService } from "../services/order.service";
import { Logger, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guard/jwt.guard";
import { RoleGuard } from "../../../auth/guard/role.guard";
import { SubscriptionService } from "../../../subscription/services/subscription.service";
import { RESTAURANT, WAITER } from "../../../role";
import { IdGuard } from "../../../auth/guard/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { OrderGuard } from "../guard/order.guard";
import {
  Order,
  CreateOrder,
  UpdateOrder,
  WhereOrder,
} from "../../../models/order.model";
import { Success } from "../../../models/success.model";
import { OrderFilter } from "../../../models/filter.model";
import { OpenGuard } from "../../openhour/guard/open.guard";
import { GetOrder } from "../../decorators";
import {
  CREATE_ORDER_ACTION,
  TaskInterceptor,
} from "../../task/interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../cache/interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../filter/interceptors/task.interceptor";
import { AddRID } from "../../pipes/rid.pipe";
import { AddWID } from "../../pipes/wid.pipe";

const OrderCacheInterceptor = CacheInterceptor({
  prefix: "orders",
  map: (ord) => ({ ...ord, createdAt: new Date(ord.createdAt) }),
});
const OrderClearCacheInterceptor = ClearCacheInterceptor("orders");

@Resolver((of) => Order)
export class OrderResolver {
  logger: Logger = new Logger();
  constructor(
    private readonly orderService: OrderService,
    private readonly subscriptionService: SubscriptionService
  ) {}

  private UPDATE = "UPDATE";
  private CREATE = "CREATE";
  private DELETE = "DELETE";

  @Mutation(() => Order, { name: "createOrder" })
  @UseInterceptors(
    OrderClearCacheInterceptor,
    TaskInterceptor(CREATE_ORDER_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdGuard, OpenGuard)
  async create(@Args("data", AddRID, AddWID) data: CreateOrder) {
    const order = await this.orderService.create(data);

    this.subscriptionService.invalidateOrders(data.restaurantId, {
      ...order,
      action: this.CREATE,
    });

    return order;
  }

  //TODO: validate table and victual
  //TODO: add minlength pipe
  @Mutation(() => Success, { name: "createOrders" })
  @UseInterceptors(
    OrderClearCacheInterceptor,
    TaskInterceptor(CREATE_ORDER_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdGuard, OpenGuard)
  async createMany(
    @Args("data", { type: () => [CreateOrder] }, AddRID, AddWID)
    data: CreateOrder[]
  ) {
    await this.orderService.createMany(data);

    const orders = await this.orderService.listLatest({
      restaurantId: data[0].restaurantId,
      count: data.length,
    });
    this.subscriptionService.invalidateOrders(
      data[0].restaurantId,
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
  @UseInterceptors(OrderClearCacheInterceptor)
  async update(
    @RID() restaurantId: number,
    @Args("data") { where, update }: UpdateOrder
  ) {
    const updatedOrder = await this.orderService.update({
      where,
      update: { ...update, isReady: update.isReady || false },
    });

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
  @UseInterceptors(OrderClearCacheInterceptor)
  async delete(@Args("where") where: WhereOrder, @GetOrder() order: Order) {
    const deleted = await this.orderService.delete(where);

    this.subscriptionService.invalidateOrders(order.restaurantId, {
      ...order,
      action: this.DELETE,
    });

    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdGuard)
  @UseInterceptors(OrderCacheInterceptor, FilterInterceptor("orders"))
  list(
    @RID() restaurantId: number,
    @Args("filter", {
      nullable: true,
      type: () => OrderFilter,
      defaultValue: { isClosed: "false" },
    })
    _filters?: OrderFilter
  ) {
    return this.orderService.list(restaurantId);
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), ...OrderGuard)
  async find(@GetOrder() order: Order, @Args("where") _: WhereOrder) {
    return order;
  }
}
