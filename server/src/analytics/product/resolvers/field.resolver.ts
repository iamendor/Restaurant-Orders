import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { FieldService } from "../services/field.service";
import { Product } from "../../../models/resources/product.model";
import { PopularProduct as PPopularProduct } from "prisma/client/analytics";
import { PopularProduct } from "../../../models/analytics/popularproduct.model";

@Resolver((of) => PopularProduct)
export class FieldResolver {
  constructor(private readonly fieldService: FieldService) {}

  @ResolveField(() => Product, { name: "numberOne", nullable: true })
  getNumberOne(@Parent() { numberOne }: PPopularProduct) {
    if (!numberOne) return null;
    return this.fieldService.getProduct(numberOne);
  }
  @ResolveField(() => Product, { name: "numberTwo", nullable: true })
  getNumberTwo(@Parent() { numberTwo }: PPopularProduct) {
    if (!numberTwo) return null;
    return this.fieldService.getProduct(numberTwo);
  }
  @ResolveField(() => Product, { name: "numberThree", nullable: true })
  getNumberThree(@Parent() { numberThree }: PPopularProduct) {
    if (!numberThree) return null;
    return this.fieldService.getProduct(numberThree);
  }
}
