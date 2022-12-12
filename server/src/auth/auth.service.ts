import { Injectable, UnauthorizedException } from "@nestjs/common";
import {
  AuthRestaurantResponse,
  LoginRestaurantInput,
  Restaurant,
} from "src/models/model";
import { RestaurantService } from "src/restaurant/restaurant.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private restaurantService: RestaurantService,
    private jwtService: JwtService
  ) {}

  async validateRestaurant(credentials: LoginRestaurantInput) {
    const restaurant = await this.restaurantService.find({
      name: credentials.name,
    });

    return bcrypt.compareSync(credentials.password, restaurant.password)
      ? restaurant
      : null;
  }

  generateRestaurantJwt(restaurant: Restaurant) {
    const payload = {
      sub: restaurant.id,
      name: restaurant.name,
      role: "restaurant",
    };
    return this.jwtService.sign(payload);
  }

  async loginRestaurant(
    credentials: LoginRestaurantInput
  ): Promise<AuthRestaurantResponse> {
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
