import { Injectable, UnauthorizedException } from "@nestjs/common";

import { RestaurantService } from "../../resources/restaurant/services/restaurant.service";
import { JwtService } from "@nestjs/jwt";
import { WaiterService } from "../../resources/waiter/services/waiter.service";
import { SecurityService } from "../../security/services/security.service";
import { Waiter as PWaiter } from "@prisma/client";
import { RESTAURANT, WAITER } from "../../role";
import {
  LoginRestaurant,
  AuthRestaurant,
  Restaurant,
} from "../../models/resources/restaurant.model";
import {
  LoginWaiter,
  AuthWaiter,
  Waiter,
} from "../../models/resources/waiter.model";
import { AuthException } from "../../error";

@Injectable()
export class AuthService {
  constructor(
    private restaurantService: RestaurantService,
    private waiterService: WaiterService,
    private jwtService: JwtService,
    private readonly securityService: SecurityService
  ) {}

  async validateRestaurant(credentials: LoginRestaurant) {
    const restaurant = await this.restaurantService.find({
      email: credentials.email,
    });
    return this.securityService.compare({
      str: credentials.password,
      hash: restaurant.password,
    })
      ? restaurant
      : null;
  }

  async validateWaiter(credentials: LoginWaiter) {
    const waiter = (await this.waiterService.find({
      email: credentials.email,
    })) as PWaiter;

    return this.securityService.compare({
      str: credentials.password,
      hash: waiter.password,
    })
      ? waiter
      : null;
  }

  generateRestaurantJwt(restaurant: Restaurant): string {
    const payload = {
      sub: restaurant.id,
      name: restaurant.name,
      role: RESTAURANT,
    };
    return this.jwtService.sign(payload);
  }

  generateWaiterJwt(waiter: Waiter): string {
    const payload = {
      sub: waiter.id,
      name: waiter.name,
      role: WAITER,
      restaurantId: waiter.restaurantId,
    };
    return this.jwtService.sign(payload);
  }

  async loginWaiter(credentials: LoginWaiter): Promise<AuthWaiter> {
    const waiterValid = await this.validateWaiter(credentials);
    if (!waiterValid) throw new AuthException();
    return {
      waiter: waiterValid,
      access_token: this.generateWaiterJwt(waiterValid),
    };
  }

  async loginRestaurant(credentials: LoginRestaurant): Promise<AuthRestaurant> {
    const restaurantValid = await this.validateRestaurant(credentials);
    if (!restaurantValid) throw new AuthException();

    return {
      restaurant: restaurantValid,
      access_token: this.generateRestaurantJwt(restaurantValid),
    };
  }
}
