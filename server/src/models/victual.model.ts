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

@ObjectType()
export class Victual {
  @Field()
  id: number;
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
export class CreateVictual {
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  categoryId: number;
}

@InputType()
export class CreateVictualData extends CreateVictual {
  @Field()
  restaurantId: number;
  @Field()
  categoryId: number;
}

@InputType()
export class CreateVictuals {
  @Field()
  name: string;
  @Field()
  price: number;
  @Field()
  restaurantId?: number;
  @Field()
  categoryId: number;
}

@InputType()
export class UpdateVictualData extends PartialType(CreateVictual) {}

@InputType()
export class WhereVictual extends PickType(
  Victual,
  ["id"] as const,
  InputType
) {}

@InputType()
export class UpdateVictual {
  @Field(() => WhereVictual)
  where: WhereVictual;
  @Field(() => UpdateVictualData)
  update: UpdateVictualData;
}
