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
} from "../../../models/resources/order.model";
import { Success } from "../../../models/resources/success.model";
import { OrderFilter } from "../../../models/resources/filter.model";
import { OpenGuard } from "../../openhour/guard/open.guard";
import { GetOrder } from "../../../decorators";
import {
  CREATE_ORDER_ACTION,
  TaskInterceptor,
} from "../../../interceptors/task.inteceptor";
import {
  CacheInterceptor,
  ClearCacheInterceptor,
} from "../../../interceptors/cache.interceptor";
import { FilterInterceptor } from "../../../interceptors/filter.interceptor";
import { AddRID } from "../../../pipes/rid.pipe";
import { AddWID } from "../../../pipes/wid.pipe";
import { MinArrayPipe } from "../../../pipes/array.pipe";
import { TableService } from "../../table/services/table.service";
import { User } from "../../../auth/decorators/user.decorator";
import { JwtPayload } from "../../../interfaces/jwt.interface";
import { PermissionDeniedException } from "../../../error";
import { VictualService } from "../../victual/services/victual.service";
import { SUCCESS } from "../../../response";

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
    private readonly subscriptionService: SubscriptionService,
    private readonly tableService: TableService,
    private readonly victualService: VictualService
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
    const isVictualValid = await this.victualService.validate({
      id: data.victualId,
      restaurantId: data.restaurantId,
    });
    const isTableValid = await this.tableService.validate({
      id: data.tableId,
      restaurantId: data.restaurantId,
    });

    if (!isVictualValid || !isTableValid) throw new PermissionDeniedException();

    const order = await this.orderService.create(data);

    this.subscriptionService.invalidateOrders(data.restaurantId, {
      ...order,
      action: this.CREATE,
    });

    return order;
  }

  @Mutation(() => Success, { name: "createOrders" })
  @UseInterceptors(
    OrderClearCacheInterceptor,
    TaskInterceptor(CREATE_ORDER_ACTION)
  )
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), OpenGuard)
  async createMany(
    @User() { restaurantId }: JwtPayload,
    @Args("data", { type: () => [CreateOrder] }, MinArrayPipe, AddRID, AddWID)
    data: CreateOrder[]
  ) {
    const victIds = [...new Set(data.map((o) => o.victualId))];
    const tableIds = [...new Set(data.map((o) => o.tableId))];
    for (let i = 0; i < tableIds.length; i++) {
      const isTableValid = await this.tableService.validate({
        id: tableIds[i],
        restaurantId,
      });
      if (!isTableValid) throw new PermissionDeniedException();
    }

    for (let i = 0; i < victIds.length; i++) {
      const isVictualValid = await this.victualService.validate({
        id: victIds[i],
        restaurantId,
      });
      if (!isVictualValid) throw new PermissionDeniedException();
    }

    await this.orderService.createMany(data);

    const orders = await this.orderService.listLatest({
      restaurantId: data[0].restaurantId,
      count: data.length,
    });
    this.subscriptionService.invalidateOrders(
      data[0].restaurantId,
      ...orders.map((order) => ({ ...order, action: this.CREATE }))
    );

    return SUCCESS;
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
