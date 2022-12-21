import { Injectable, UnauthorizedException } from "@nestjs/common";
import {
  AuthRestaurant,
  AuthWaiter,
  LoginRestaurant,
  LoginWaiter,
  Restaurant,
  Waiter,
} from "../models/model";
import { RestaurantService } from "../restaurant/restaurant.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { WaiterService } from "../waiter/waiter.service";

@Injectable()
export class AuthService {
  constructor(
    private restaurantService: RestaurantService,
    private waiterService: WaiterService,
    private jwtService: JwtService
  ) {}

  async validateRestaurant(credentials: LoginRestaurant) {
    const restaurant = await this.restaurantService.find({
      email: credentials.email,
    });

    return bcrypt.compareSync(credentials.password, restaurant.password)
      ? restaurant
      : null;
  }

  async validateWaiter(credentials: LoginWaiter) {
    const waiter = await this.waiterService.find(
      {
        email: credentials.email,
      },
      true
    );

    return bcrypt.compareSync(credentials.password, waiter.password)
      ? waiter
      : null;
  }

  generateRestaurantJwt(restaurant: Restaurant): string {
    const payload = {
      sub: restaurant.id,
      name: restaurant.name,
      email: restaurant.email,
      role: "restaurant",
    };
    return this.jwtService.sign(payload);
  }

  generateWaiterJwt(waiter: Waiter): string {
    const payload = {
      sub: waiter.id,
      name: waiter.name,
      email: waiter.email,
      role: "waiter",
    };
    return this.jwtService.sign(payload);
  }

  async loginWaiter(credentials: LoginWaiter): Promise<AuthWaiter> {
    const waiterValid = await this.validateWaiter(credentials);
    if (!waiterValid) throw new UnauthorizedException();
    return {
      waiter: waiterValid,
      access_token: this.generateWaiterJwt(waiterValid),
    };
  }

  async loginRestaurant(credentials: LoginRestaurant): Promise<AuthRestaurant> {
    const restaurantValid = await this.validateRestaurant(credentials);
    if (!restaurantValid) {
      throw new UnauthorizedException();
    }
    return {
      restaurant: restaurantValid,
      access_token: this.generateRestaurantJwt(restaurantValid),
    };
  }
}
