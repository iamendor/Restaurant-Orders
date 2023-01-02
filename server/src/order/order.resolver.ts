import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { OrderService } from "./order.service";
import {
  CreateOrder,
  JwtPayload,
  ListenOrder,
  ListenOrders,
  Order,
  Restaurant,
  Table,
  UpdateOrder,
  Victual,
  Waiter,
  WhereOrder,
} from "../models/model";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { User } from "../auth/decorators/user.decorator";
import { pubSub } from "../config";
import { SubscriptionService } from "../subscription/subscription.service";

@Resolver("Order")
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private subscriptionService: SubscriptionService
  ) {}

  private getRestaurantId(user: JwtPayload) {
    return user.role === "restaurant" ? user.id : user.restaurantId;
  }

  @Mutation(() => Order, { name: "createOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async create(@User() waiter: JwtPayload, @Args("data") data: CreateOrder) {
    const order = await this.orderService.create({
      ...data,
      restaurantId: waiter.restaurantId,
      waiterId: waiter.id,
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId: waiter.restaurantId },
      pubSub
    );
    return order;
  }

  @Mutation(() => Order, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async createMany(
    @User() waiter: JwtPayload,
    @Args("data") data: CreateOrder[]
  ) {
    const orders = this.orderService.createMany(
      data.map((order) => ({
        ...order,
        restaurantId: waiter.restaurantId,
        waiterId: waiter.id,
        description: order.description || "",
        isReady: false,
      }))
    );
    await this.subscriptionService.invalidateOrders(
      { restaurantId: waiter.restaurantId },
      pubSub
    );
    return orders;
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async update(@User() user: JwtPayload, @Args("data") data: UpdateOrder) {
    const restaurantId = this.getRestaurantId(user);
    const updatedOrder = await this.orderService.update({
      ...data,
      where: { ...data.where, restaurantId },
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: updatedOrder.id },
      pubSub
    );
    return updatedOrder;
  }

  @Mutation(() => Order, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async delete(@User() user: JwtPayload, @Args("where") where: WhereOrder) {
    const restaurantId = this.getRestaurantId(user);
    const deleted = await this.orderService.delete({
      ...where,
      restaurantId: restaurantId,
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: where.id },
      pubSub
    );
    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async list(@User() user: JwtPayload) {
    return this.orderService.list(this.getRestaurantId(user));
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereOrder) {
    return this.orderService.find({
      ...where,
      restaurantId: this.getRestaurantId(user),
    });
  }

  @Subscription(() => ListenOrders, { resolve: (payload) => payload })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async listenOrders(@User() user: JwtPayload) {
    return pubSub.asyncIterator(`${this.getRestaurantId(user).toString()}`);
  }

  @Subscription(() => ListenOrder, { resolve: (p) => p })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async listenOrder(
    @User() user: JwtPayload,
    @Args("where") where: WhereOrder
  ) {
    await this.orderService.find({
      ...where,
      restaurantId: this.getRestaurantId(user),
    });
    return pubSub.asyncIterator(`${where.id}`);
  }

  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() order: Order) {
    return this.orderService.getRestaurant(order.id);
  }
  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() order: Order) {
    return this.orderService.getWaiter(order.id);
  }
  @ResolveField(() => Victual, { name: "victual" })
  getVictual(@Parent() order: Order) {
    return this.orderService.getVictual(order.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() order: Order) {
    return this.orderService.getTable(order.id);
  }
}
