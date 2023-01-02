import { Injectable } from "@nestjs/common";
import { PubSub } from "graphql-subscriptions";
import { NotFoundResourceException } from "../error/errors";
import { InvalidateQuery } from "../models/model";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SubscriptionService {
  constructor(private readonly prismaService: PrismaService) {}
  async invalidateOrders(data: InvalidateQuery, pubSub: PubSub) {
    const restaurant = await this.prismaService.restaurant.findFirst({
      where: { id: data.restaurantId },
      include: {
        orders: true,
      },
    });
    if (!restaurant) throw new NotFoundResourceException("restaurant");
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
