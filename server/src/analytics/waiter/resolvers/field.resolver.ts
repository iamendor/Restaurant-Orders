import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { WaiterOfTheDay } from "../../../models/analytics/waiteroftheday.model";
import { FieldService } from "../services/field.service";
import { Waiter } from "../../../models/resources/waiter.model";

@Resolver((of) => WaiterOfTheDay)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Waiter, { name: "waiter" })
  getWaiter(@Parent() { waiterId }: WaiterOfTheDay) {
    return this.fieldService.getWaiter(waiterId);
  }
}
