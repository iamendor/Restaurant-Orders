import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Analytics } from "../../../models/analytics/analytics.model";
import { FieldService } from "../services/field.service";
import { Income } from "../../../models/analytics/income.model";
import { WaiterOfTheDay } from "../../../models/analytics/waiteroftheday.model";
import { PopularProduct } from "../../../models/analytics/popularproduct.model";

@Resolver((of) => Analytics)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Income, { name: "income" })
  getIncome(@Parent() { id }: Analytics) {
    return this.fieldService.getIncome(id);
  }

  @ResolveField(() => WaiterOfTheDay, { name: "waiterOfTheDay" })
  getWaiter(@Parent() { id }: Analytics) {
    return this.fieldService.getWaiter(id);
  }

  @ResolveField(() => PopularProduct, { name: "popularProduct" })
  getPopularProduct(@Parent() { id }: Analytics) {
    return this.fieldService.getPopularProduct(id);
  }
}
