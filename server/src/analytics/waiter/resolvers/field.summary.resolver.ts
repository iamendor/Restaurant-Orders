import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { WaiterOfTheDaySummary } from "../../../models/analytics/waiteroftheday.model";
import { Waiter } from "../../../models/resources/waiter.model";
import { FieldService } from "../services/field.service";

@Resolver((of) => WaiterOfTheDaySummary)
export class SummaryFieldResolver {
  constructor(private readonly fieldService: FieldService) {}
  @ResolveField(() => Waiter, { name: "best", nullable: true })
  getWaiter(@Parent() { best }: WaiterOfTheDaySummary) {
    if (!best) return null;
    return this.fieldService.getWaiter(best);
  }
}
