import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Victual } from "./victual.model";

@ObjectType()
export class Category {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field(() => [Victual])
  victuals?: Victual[];
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateCategory {
  @Field()
  name: string;
}
@InputType()
export class CreateCategoryData extends CreateCategory {
  @Field()
  restaurantId: number;
}

@InputType()
export class WhereCategory extends PickType(
  Category,
  ["id"] as const,
  InputType
) {}

@InputType()
export class UpdateCategoryData extends PartialType(CreateCategory) {}

@InputType()
export class UpdateCategory {
  @Field(() => WhereCategory)
  where: WhereCategory;
  @Field(() => UpdateCategoryData)
  update: UpdateCategoryData;
}
