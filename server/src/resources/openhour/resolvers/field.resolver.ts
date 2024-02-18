import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { OpenHour } from "../../../models/resources/openhour.model";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { FieldService } from "../services/field.service";

@Resolver((of) => OpenHour)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Restaurant)
  getRestaurant(@Parent() { id }: OpenHour) {
    return this.fieldService.getRestaurant(id);
  }
}
