import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Victual } from "../../../models/resources/victual.model";
import { PopularProduct as PPopularProduct } from "prisma/client/analytics";
import { PopularProduct } from "../../../models/analytics/popularproduct.model";

@Resolver((of) => PopularProduct)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Victual, { name: "numberOne" })
  getNumberOne(@Parent() { numberOne }: PPopularProduct) {
    return this.fieldService.getProduct(numberOne);
  }
  @ResolveField(() => Victual, { name: "numberTwo" })
  getNumberTwo(@Parent() { numberTwo }: PPopularProduct) {
    return this.fieldService.getProduct(numberTwo);
  }
  @ResolveField(() => Victual, { name: "numberThree" })
  getNumberThree(@Parent() { numberThree }: PPopularProduct) {
    return this.fieldService.getProduct(numberThree);
  }
}
