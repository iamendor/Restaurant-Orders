import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Order } from "./order.model";
import { DateScalar } from "./date.model";

@ObjectType()
export class Table {
  @Field()
  id: number;
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ description: "Name" })
  name: string;
  @Field(() => [Order], { description: "Orders of the table" })
  orders?: Order[];
  @Field(() => Restaurant, { description: "Restaurant of the table" })
  restaurant?: Restaurant;
  @Field()
  restaurantId: number;
  @Field({
    nullable: true,
    description: "Returns the current total of the order",
  })
  total?: number;
}

@InputType()
export class CreateTable extends PickType(Table, ["name"] as const, InputType) {
  @Field({ nullable: true })
  restaurantId?: number;
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
