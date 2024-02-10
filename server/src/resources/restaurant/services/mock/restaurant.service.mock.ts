import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../../test/helper/mocks";
import { SecurityService } from "../../../../security/services/security.service";
import { mockRestaurant } from "../../../../../test/helper/mock.unit";

@Injectable()
export class RestaurantServiceMock {
  restaurant;
  SUCCESS = "success";
  constructor(private readonly securityService: SecurityService) {
    this.restaurant = { ...mockRestaurant };
  }

  create(data) {
    return { ...data, id: 1 };
  }
  update({ where, update }) {
    this.restaurant = { ...this.restaurant, ...update };
    return { ...this.restaurant, ...where, ...update };
  }
  updatePassword() {
    return { message: this.SUCCESS };
  }
  find(where) {
    return {
      ...this.restaurant,
      ...where,
      password: this.securityService.hash(this.restaurant.password),
    };
  }

  findByEmail(where) {
    return {
      ...this.restaurant,
      ...where,
      password: this.securityService.hash(this.restaurant.password),
    };
  }
  delete() {
    return { message: this.SUCCESS };
  }
}
