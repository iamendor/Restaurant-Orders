import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { BaseTask, Task } from "../../../models/resources/task.model";
import { Restaurant } from "../../../models/resources/restaurant.model";
import { FieldService } from "../services/field.service";

@Resolver((of) => Task)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Restaurant, { name: "restaurant" })
  getRestaurant(@Parent() { id }: Task) {
    return this.fieldService.getRestaurant(id);
  }
  @ResolveField(() => BaseTask, { name: "base" })
  getBase(@Parent() { baseId }: Task) {
    return this.fieldService.getBase(baseId);
  }
}
