import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { OrderService } from "./order.service";
import {
  CreateOrder,
  JwtPayload,
  Meal,
  Order,
  Restaurant,
  RestaurantModel,
  Table,
  UpdateOrder,
  Waiter,
  WhereOrder,
} from "../models/model";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-guard";
import { RoleGuard } from "../auth/guards/role-guard";
import { User } from "../auth/decorators/user.decorator";
import { WaiterService } from "../waiter/waiter.service";

@Resolver("Order")
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService,
    private waiterService: WaiterService
  ) {}

  @Mutation(() => Order, { name: "createOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async create(@User() waiter: JwtPayload, @Args("data") data: CreateOrder) {
    const restaurantId = (await this.waiterService.getRestaurant(waiter.email))
      .id;
    return this.orderService.create({
      ...data,
      restaurantId,
      waiterId: waiter.id,
    });
  }

  @Mutation(() => Order, { name: "createOrders" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter"))
  async createMany(
    @User() waiter: JwtPayload,
    @Args("data") data: CreateOrder[]
  ) {
    const restaurantId = (await this.waiterService.getRestaurant(waiter.email))
      .id;
    return this.orderService.createMany(
      data.map((order) => ({
        ...order,
        restaurantId,
        waiterId: waiter.id,
        description: order.description || "",
        isReady: false,
      }))
    );
  }

  @Mutation(() => Order, { name: "updateOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("waiter", "restaurant"))
  async update(@User() user: JwtPayload, @Args("data") data: UpdateOrder) {
    if (user.role === "restaurant") {
      return this.orderService.update({
        ...data,
        where: { ...data.where, restaurantId: user.id },
      });
    }
    const restaurantId = (await this.waiterService.getRestaurant(user.email))
      .id;
    return this.orderService.update({
      ...data,
      where: { ...data.where, restaurantId: restaurantId },
    });
  }

  @Mutation(() => Order, { name: "deleteOrder" })
  @UseGuards(JwtAuthGuard, RoleGuard("restaurant"))
  async delete(
    @User() restaurant: JwtPayload,
    @Args("where") where: WhereOrder
  ) {
    return this.orderService.delete({ ...where, restaurantId: restaurant.id });
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

  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() order: Order) {
    return this.orderService.getRestaurant(order.id);
  }
  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() order: Order) {
    return this.orderService.getWaiter(order.id);
  }
  @ResolveField(() => Meal, { name: "meal" })
  getMeal(@Parent() order: Order) {
    return this.orderService.getMeal(order.id);
  }
  @ResolveField(() => Table, { name: "table" })
  getTable(@Parent() order: Order) {
    return this.orderService.getTable(order.id);
  }
}
