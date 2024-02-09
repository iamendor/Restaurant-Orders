import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Victual } from "./victual.model";
import { DateScalar } from "./date.model";

@ObjectType()
export class Category {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field()
  name: string;
  @Field()
  root: boolean;
  @Field(() => [Victual])
  victuals?: Victual[];
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field(() => [Category], { nullable: true })
  subCategories?: Category[];
  @Field(() => Category, { nullable: true })
  parent?: Category;
  @Field({ nullable: true })
  parentId?: number;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateCategory {
  @Field()
  name: string;
  @Field({ nullable: true, defaultValue: null })
  parentId?: number;
  @Field({ nullable: true })
  restaurantId?: number;
}

@InputType()
export class WhereCategory extends PickType(
  Category,
  ["id"] as const,
  InputType
) {
  @Field({ nullable: true })
  root?: boolean;
}

@InputType()
export class UpdateCategoryData extends PartialType(CreateCategory) {}

@InputType()
export class UpdateCategory {
  @Field(() => WhereCategory)
  where: WhereCategory;
  @Field(() => UpdateCategoryData)
  update: UpdateCategoryData;
}
