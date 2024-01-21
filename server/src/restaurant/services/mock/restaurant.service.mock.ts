import { Injectable } from "@nestjs/common";
import { getMocks } from "../../../../test/helper/mocks";
import { mockRestaurant } from "../restaurant.service.spec";
import { SecurityService } from "../../../security/services/security.service";

@Injectable()
export class RestaurantServiceMock {
  restaurant;
  SUCCESS = "success";
  constructor(private readonly securityService: SecurityService) {
    this.restaurant = { ...getMocks().restaurantModel, id: 1 };
  }

  create(data) {
    return { ...data, id: 1 };
  }
  update({ where, data }) {
    this.restaurant = { ...this.restaurant, ...data };
    return { ...this.restaurant, ...where, ...data };
  }
  updatePassword() {
    return { message: this.SUCCESS };
  }
  find(where) {
    return {
      ...mockRestaurant,
      ...where,
      password: this.securityService.hash(this.restaurant.password),
    };
  }
  delete() {
    return { message: this.SUCCESS };
  }
}
