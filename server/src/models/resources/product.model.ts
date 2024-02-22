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
@ObjectType()
export class Product {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ description: "Name" })
  name: string;
  @Field({ description: "Price" })
  price: number;
  @Field(() => Restaurant, { description: "The restaurant of the product" })
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
  @Field(() => Category, { description: "The category of the product" })
  category?: Category;
  @Field(() => [Order], { description: "The orders with the product" })
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
  InputType,
) {}

@InputType()
export class UpdateProduct {
  @Field(() => WhereProduct)
  where: WhereProduct;
  @Field(() => UpdateProductData)
  update: UpdateProductData;
}
