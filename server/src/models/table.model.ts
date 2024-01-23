import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Order } from "./order.model";

@ObjectType()
export class Table {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field(() => [Order])
  orders?: Order[];
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
}

@InputType()
export class CreateTable extends PickType(
  Table,
  ["name"] as const,
  InputType
) {}

@InputType()
export class CreateTableData extends CreateTable {
  @Field()
  restaurantId: number;
}

@InputType()
export class WhereTable extends PartialType(
  PickType(Table, ["id"] as const),
  InputType
) {}

@InputType()
export class UpdateTableData extends PartialType(CreateTable) {}

@InputType()
export class UpdateTable {
  @Field(() => WhereTable)
  where: WhereTable;
  @Field(() => UpdateTableData)
  update: UpdateTableData;
}
