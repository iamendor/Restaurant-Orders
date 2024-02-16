import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { RESTAURANT, WAITER } from "../../../role";
import { mockRestaurant, mockWaiter } from "../../../../test/helper/mock.unit";

@Injectable()
export class AuthServiceMock {
  restaurant;
  waiter;
  constructor(private readonly jwtService: JwtService) {
    this.restaurant = mockRestaurant;
    this.waiter = mockWaiter;
  }
  validateRestaurant() {
    return this.restaurant;
  }

  validateWaiter() {
    return this.waiter;
  }

  generateRestaurantJwt() {
    return this.jwtService.sign({
      sub: this.restaurant.id,
      id: this.restaurant.id,
      role: RESTAURANT,
    });
  }

  generateWaitertJwt() {
    return this.jwtService.sign({
      sub: this.waiter.id,
      id: this.waiter.id,
      role: WAITER,
    });
  }

  loginWaiter() {
    return { waiter: this.waiter, access_token: this.generateWaitertJwt() };
  }

  loginRestaurant() {
    return { waiter: this.waiter, access_token: this.generateRestaurantJwt() };
  }
}
