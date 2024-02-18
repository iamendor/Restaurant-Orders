import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Product } from "../../../models/resources/product.model";
import { PopularProduct as PPopularProduct } from "prisma/client/analytics";
import { PopularProduct } from "../../../models/analytics/popularproduct.model";

@Resolver((of) => PopularProduct)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Product, { name: "numberOne" })
  getNumberOne(@Parent() { numberOne }: PPopularProduct) {
    return this.fieldService.getProduct(numberOne);
  }
  @ResolveField(() => Product, { name: "numberTwo" })
  getNumberTwo(@Parent() { numberTwo }: PPopularProduct) {
    return this.fieldService.getProduct(numberTwo);
  }
  @ResolveField(() => Product, { name: "numberThree" })
  getNumberThree(@Parent() { numberThree }: PPopularProduct) {
    return this.fieldService.getProduct(numberThree);
  }
}
