import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { Order } from "./order.model";
import { Meal } from "./meal.order";

@ObjectType()
export class Waiter {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  gender: string;
  @Field()
  profileIcon?: string;
  @Field(() => [Order])
  orders?: Order[];
  @Field(() => [Meal])
  meals?: Meal[];
  @Field(() => Restaurant)
  restaurant?: Restaurant;
  @Field()
  restaurantId?: number;
}

@ObjectType()
export class AuthWaiter {
  @Field(() => Waiter)
  waiter: Waiter;
  @Field()
  access_token: string;
}

@InputType()
export class CreateWaiter extends PickType(Waiter, [
  "name",
  "email",
  "gender",
] as const) {
  @Field()
  password: string;
  @Field()
  profileIcon?: string;
}

@InputType()
export class CreateWaiterData {
  @Field()
  restaurantId: number;
  @Field(() => CreateWaiter)
  data: CreateWaiter;
}

@InputType()
export class LoginWaiter extends PickType(Waiter, ["email"] as const) {
  @Field()
  password: string;
}

@InputType()
export class WhereWaiter extends PartialType(
  PickType(Waiter, ["id", "restaurantId", "email"] as const),
  InputType
) {}

@InputType()
export class UpdateWaiterData extends PartialType(
  OmitType(CreateWaiter, ["password"] as const)
) {}

@InputType()
export class UpdateWaiter {
  @Field(() => WhereWaiter)
  where: WhereWaiter;
  @Field(() => UpdateWaiterData)
  update: UpdateWaiterData;
}

@InputType()
export class UpdateWaiterPasswordData {
  @Field()
  password: string;
  @Field()
  old?: string;
}

@InputType()
export class UpdateWaiterPassword {
  @Field(() => WhereWaiter)
  where?: WhereWaiter;
  @Field(() => UpdateWaiterPasswordData)
  update: UpdateWaiterPasswordData;
}
