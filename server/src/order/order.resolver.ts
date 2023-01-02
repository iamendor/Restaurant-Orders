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
import { WaiterService } from "../waiter/waiter.service";
import { PubSub } from "graphql-subscriptions";
import { pubSub } from "../config";
import { SubscriptionService } from "../subscription/subscription.service";

@Resolver("Order")
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private waiterService: WaiterService,
    private subscriptionService: SubscriptionService
  ) {}

  @Mutation(() => Order, { name: "createOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async create(@User() waiter: JwtPayload, @Args("data") data: CreateOrder) {
    const restaurantId = (await this.waiterService.getRestaurant(waiter.email))
      .id;
    const order = await this.orderService.create({
      ...data,
      restaurantId,
      waiterId: waiter.id,
    });
    await this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);
    return order;
  }

  @Mutation(() => Order, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async createMany(
    @User() waiter: JwtPayload,
    @Args("data") data: CreateOrder[]
  ) {
    const restaurantId = (await this.waiterService.getRestaurant(waiter.email))
      .id;
    const orders = this.orderService.createMany(
      data.map((order) => ({
        ...order,
        restaurantId,
        waiterId: waiter.id,
        description: order.description || "",
        isReady: false,
      }))
    );
    await this.subscriptionService.invalidateOrders({ restaurantId }, pubSub);
    return orders;
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async update(@User() user: JwtPayload, @Args("data") data: UpdateOrder) {
    if (user.role === "restaurant") {
      const updatedOrder = await this.orderService.update({
        ...data,
        where: { ...data.where, restaurantId: user.id },
      });
      await this.subscriptionService.invalidateOrders(
        { restaurantId: user.id, orderId: updatedOrder.id },
        pubSub
      );
      return updatedOrder;
    }
    const restaurantId = (await this.waiterService.getRestaurant(user.email))
      .id;
    const updatedOrder = await this.orderService.update({
      ...data,
      where: { ...data.where, restaurantId: restaurantId },
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId, orderId: updatedOrder.id },
      pubSub
    );
    return updatedOrder;
  }

  @Mutation(() => Order, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant", "waiter"))
  async delete(
    @User() restaurant: JwtPayload,
    @Args("where") where: WhereOrder
  ) {
    const deleted = await this.orderService.delete({
      ...where,
      restaurantId: restaurant.id,
    });
    await this.subscriptionService.invalidateOrders(
      { restaurantId: restaurant.id, orderId: where.id },
      pubSub
    );
    return deleted;
  }

  @Query(() => [Order], { name: "orders" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async list(@User() user: JwtPayload) {
    if (user.role === "restaurant") return this.orderService.list(user.id);
    return this.orderService.list(
      (await this.waiterService.getRestaurant(user.email)).id
    );
  }

  @Query(() => Order, { name: "order" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async find(@User() user: JwtPayload, @Args("where") where: WhereOrder) {
    if (user.role === "restaurant")
      return this.orderService.find({ ...where, restaurantId: user.id });
    return this.orderService.find({
      ...where,
      restaurantId: (await this.waiterService.getRestaurant(user.email)).id,
    });
  }

  @Subscription(() => ListenOrders, { resolve: (payload) => payload })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async listenOrders(@User() user: JwtPayload) {
    if (user.role === "restaurant")
      return pubSub.asyncIterator(user.id.toString());
    const restaurant = await this.waiterService.getRestaurant(user.email);
    return pubSub.asyncIterator(`${restaurant.id.toString()}`);
  }

  @Subscription(() => ListenOrder, { resolve: (p) => p })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async listenOrder(
    @User() user: JwtPayload,
    @Args("where") where: WhereOrder
  ) {
    if (user.role === "restaurant") {
      await this.orderService.find({ ...where, restaurantId: user.id });
      return pubSub.asyncIterator(`${where.id}`);
    }
    const restaurant = await this.waiterService.getRestaurant(user.email);
    await this.orderService.find({ ...where, restaurantId: restaurant.id });
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
