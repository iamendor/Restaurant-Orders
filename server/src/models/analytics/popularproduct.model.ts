import { Field, ObjectType } from "@nestjs/graphql";
import { Product } from "../resources/product.model";
import { DateScalar } from "../resources/date.model";

@ObjectType()
export class PopularProduct {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field(() => Product)
  numberOne: Product;
  @Field(() => Product)
  numberTwo: Product;
  @Field(() => Product)
  numberThree: Product;
}

@ObjectType()
export class PopularProductSummary {
  @Field(() => PopularProduct)
  toplist: PopularProduct;
}
