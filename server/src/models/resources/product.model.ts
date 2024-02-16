import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Category } from "./category.model";
import { Order } from "./order.model";
import { DateScalar } from "./date.model";
//TODO: rename
@ObjectType()
export class Product {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field()
  name: string;
  @Field()
  price: number;
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
  @Field(() => Category)
  category?: Category;
  @Field(() => [Order])
  orders?: Order[];
}

@InputType()
export class CreateProduct {
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  categoryId: number;
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class CreateProductData extends CreateProduct {
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class UpdateProductData extends PartialType(CreateProduct) {}

@InputType()
export class WhereProduct extends PickType(
  Product,
  ["id"] as const,
  InputType
) {}

@InputType()
export class UpdateProduct {
  @Field(() => WhereProduct)
  where: WhereProduct;
  @Field(() => UpdateProductData)
  update: UpdateProductData;
}
