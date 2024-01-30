import { Injectable } from "@nestjs/common";
import { PubSub } from "graphql-subscriptions";
import { PrismaService } from "../../prisma/services/prisma.service";
import { InvalidateQuery } from "../../models/subscription.model";

@Injectable()
export class SubscriptionService {
  constructor(private readonly prismaService: PrismaService) {}
  async invalidateOrders(data: InvalidateQuery, pubSub: PubSub) {
    const restaurant = await this.prismaService.restaurant.findUniqueOrThrow({
      where: { id: data.restaurantId },
      include: {
        orders: true,
      },
    });
    const publishOrders = {
      orders: restaurant.orders,
    };
    if (data.orderId) {
      const order = restaurant.orders.find((ord) => ord.id === data.orderId);
      const publishOrder = {
        order: order || null,
      };
      pubSub.publish(`${data.orderId.toString()}`, { ...publishOrder });
    }
    pubSub.publish(`${restaurant.id.toString()}`, { ...publishOrders });
  }
}
