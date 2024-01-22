import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { OrderService } from "../services/order.service";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../../../auth/guards/jwt.guard";
import { RoleGuard } from "../../../auth/guards/role.guard";
import { User } from "../../../auth/decorators/user.decorator";
import { pubSub } from "../../../config";
import { SubscriptionService } from "../../../subscription/services/subscription.service";
import { RESTAURANT, WAITER } from "../../../role/role";
import { IdIntercept } from "../../../auth/guards/id.guard";
import { RID } from "../../../auth/decorators/role.decorator";
import { OrderGuard } from "../guard/order.guard";
import { GetOrder } from "../decorators/order.decorator";
import { JwtPayload } from "../../../models/jwt.model";
import {
  Order,
  CreateOrder,
  UpdateOrder,
  WhereOrder,
} from "../../../models/order.model";

@Resolver((of) => Order)
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private subscriptionService: SubscriptionService
  ) {}

  @Mutation(() => Order, { name: "createOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept)
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
    this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);
    return order;
  }

  @Mutation(() => Order, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER), IdIntercept)
  async createMany(
    @User() { id }: JwtPayload,
    @RID() restaurantId: number,
    @Args("data", { type: () => [CreateOrder] }) data: CreateOrder[]
  ) {
    const ordersData = data.map((order) => ({
      ...order,
      restaurantId,
      waiterId: id,
      description: order.description,
    }));
    const orders = this.orderService.createMany(ordersData);
    await this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);
    return orders;
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard)
  async update(@RID() restaurantId: number, @Args("data") data: UpdateOrder) {
    const updatedOrder = await this.orderService.update(data);
    await this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: updatedOrder.id },
      pubSub
    );
    return updatedOrder;
  }

  @Mutation(() => Order, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard(RESTAURANT, WAITER), OrderGuard)
  async delete(@RID() restaurantId: number, @Args("where") where: WhereOrder) {
    const deleted = await this.orderService.delete({
      ...where,
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: where.id },
      pubSub
    );
    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), IdIntercept)
  async list(@RID() restaurantId: number) {
    return this.orderService.list(restaurantId);
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard(WAITER, RESTAURANT), OrderGuard)
  async find(@GetOrder() order: Order) {
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
