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
import { Meal } from "./meal.model";
import { DateScalar } from "./date.model";

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
  @Field(() => DateScalar)
  createdAt: Date;
  @Field({ nullable: true })
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
export class CreateWaiter extends PickType(
  Waiter,
  ["name", "email", "gender", "profileIcon"] as const,
  InputType
) {
  @Field()
  password: string;
  @Field()
  restaurantId?: number;
}

@InputType()
export class LoginWaiter extends PickType(
  Waiter,
  ["email"] as const,
  InputType
) {
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
  @Field(() => WhereWaiter, { nullable: true })
  where?: WhereWaiter;
  @Field(() => UpdateWaiterData)
  update: UpdateWaiterData;
}

@InputType()
export class UpdateWaiterPasswordData {
  @Field()
  password: string;
  @Field({ nullable: true })
  old?: string;
}

@InputType()
export class UpdateWaiterPassword {
  @Field(() => WhereWaiter, { nullable: true })
  where?: WhereWaiter;
  @Field(() => UpdateWaiterPasswordData)
  update: UpdateWaiterPasswordData;
}
