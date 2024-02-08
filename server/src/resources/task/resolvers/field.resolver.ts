import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Task } from "../../../models/task.model";
import { Restaurant } from "../../../models/restaurant.model";
import { FieldService } from "../services/field.service";

@Resolver((of) => Task)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() { id }: Task) {
    return this.fieldService.getRestaurant(id);
  }
}
