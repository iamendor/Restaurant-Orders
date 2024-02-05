import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { OrderService } from "../services/order.service";
import { Logger, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { pubSub } from "../../../config";
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
} from "../../../models/order.model";
import { Success } from "../../../models/success.model";
import { OrderFilter } from "../../../models/filter.model";
import { FilterService } from "../../../filter/services/filter.service";
import { OpenGuard } from "../../openhour/guard/open.guard";
import { CacheService } from "../../../cache/services/cache.service";

@Resolver((of) => Order)
export class OrderResolver {
  logger: Logger = new Logger()
  constructor(
    private readonly orderService: OrderService,
    private readonly subscriptionService: SubscriptionService,
    private readonly filterService: FilterService,
    private readonly cacheService: CacheService
  ) {}

  private cachePrefix(restaurantId: number){
    return `orders:${restaurantId}`
  }

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

    this.cacheService.del(this.cachePrefix(restaurantId))

    this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);

    return order;
  }

  @Mutation(() => Success, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept, OpenGuard)
  async createMany(
    @User() { id }: JwtPayload,
    @RID() restaurantId: number,
    @Args("data", { type: () => [CreateOrder] }) data: CreateOrder[]
  ) {
    const ordersData: Required<CreateOrder>[] = data.map((order) => ({
      ...order,
      restaurantId,
      waiterId: id,
      description: order.description,
      isReady: order.isReady || false,
    }));

    await this.orderService.createMany(ordersData);

    this.cacheService.del(this.cachePrefix(restaurantId))

    this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);

    return { message: "success" };
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard, OpenGuard)
  async update(@RID() restaurantId: number, @Args("data") data: UpdateOrder) {
    const updatedOrder = await this.orderService.update(data);

    this.cacheService.del(this.cachePrefix(restaurantId))

    this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: updatedOrder.id },
      pubSub
    );

    return updatedOrder;
  }

  @Mutation(() => Success, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), OrderGuard, OpenGuard)
  async delete(@RID() restaurantId: number, @Args("where") where: WhereOrder) {
    const deleted = await this.orderService.delete({
      ...where,
    });
    
    this.cacheService.del(this.cachePrefix(restaurantId))

    this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: where.id },
      pubSub
    );

    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async list(
    @RID() restaurantId: number,
    @Args("filter", { nullable: true, type: () => OrderFilter })
    filters?: OrderFilter
  ) {
    const cached = await this.cacheService.get({key: this.cachePrefix(restaurantId), json: true})
    if(cached) return cached;
    
    const orders = await this.orderService.list(restaurantId);

    this.cacheService.set({key: this.cachePrefix(restaurantId), value: JSON.stringify(orders)})

    if (filters) return this.filterService.orders({ data: orders, filters });
    return orders;
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard)
  async find(@GetOrder() order: Order, @Args("where") _: WhereOrder) {
    return order;
  }

  @Subscription(() => [Order], { resolve: (payload) => payload.orders })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async listenOrders(@RID() restaurantId: number) {
    return pubSub.asyncIterator(`${restaurantId}`);
  }

  @Subscription(() => Order, {
    resolve: (p) => {
      return p.order;
    },
  })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard)
  async listenOrder(@Args("where") where: WhereOrder) {
    return pubSub.asyncIterator(`${where.id}`);
  }
}
