import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "../resources/product.model";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class PopularProduct {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Product, { description: "No. 1 product", nullable: true })
  numberOne?: Product;
  @Field(() => Product, { description: "No. 2 product", nullable: true })
  numberTwo?: Product;
  @Field(() => Product, { description: "No. 3 product", nullable: true })
  numberThree?: Product;
}

@ObjectType()
export class PopularProductSummary {
  @Field(() => PopularProduct, {
    description: "Toplist of the popular products",
  })
  toplist: PopularProduct;
}
