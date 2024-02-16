import {
  Field,
  InputType,
  ObjectType,
  PartialType,
  PickType,
} from "@nestjs/graphql";
import { Address, CreateAddress, UpdateAddress } from "./address.model";
import { Currency, WhereCurrency } from "./currency.model";
import { Waiter } from "./waiter.model";
import { Table } from "./table.model";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Order } from "./order.model";
import { Meal } from "./meal.model";
import { DateScalar } from "./date.model";
import { Task } from "./task.model";
import { Settings, UpdateSettings } from "./settings.model";

@ObjectType()
export class Restaurant {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  currencyId: number;

  @Field(() => DateScalar)
  createdAt: Date;

  @Field(() => Settings)
  settings?: Settings;

  @Field(() => [Task])
  tasks?: Task;

  @Field(() => Address)
  address?: Address;

  @Field(() => [Waiter])
  waiters?: Waiter[];

  @Field(() => [Order])
  orders?: Order[];

  @Field(() => [Product])
  products?: Product[];

  @Field(() => [Category])
  categories?: Category[];

  @Field(() => [Table])
  tables?: Table[];

  @Field(() => [Meal])
  meals?: Meal[];

  @Field(() => Boolean, { nullable: true })
  open?: boolean;
}

@ObjectType()
export class AuthRestaurant {
  @Field(() => Restaurant)
  restaurant: Restaurant;
  @Field()
  access_token: string;
}

@InputType()
export class CreateRestaurant {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field(() => CreateAddress)
  address: CreateAddress;
  @Field(() => WhereCurrency)
  currency: WhereCurrency;
  @Field({ nullable: true })
  currencyId?: number;
}

@InputType()
export class LoginRestaurant extends PickType(CreateRestaurant, [
  "email",
  "password",
] as const) {}

@InputType()
export class WhereRestaurant extends PartialType(
  PickType(Restaurant, ["id", "email"] as const, InputType)
) {}

@InputType()
export class UpdateRestaurant extends PartialType(
  PickType(Restaurant, ["name", "email"] as const, InputType)
) {
  @Field(() => UpdateAddress, { nullable: true })
  address?: UpdateAddress;
  @Field(() => WhereCurrency, { nullable: true })
  currency?: WhereCurrency;
  @Field(() => UpdateSettings, { nullable: true })
  settings?: UpdateSettings;
}

@InputType()
export class UpdateRestaurantData {
  @Field(() => WhereRestaurant)
  where: WhereRestaurant;
  @Field(() => UpdateRestaurant)
  update: UpdateRestaurant;
}

@InputType()
export class UpdateRestaurantPassword {
  @Field()
  old: string;
  @Field()
  password: string;
}

@InputType()
export class UpdateRestaurantPasswordData {
  @Field(() => WhereRestaurant)
  where: WhereRestaurant;
  @Field(() => UpdateRestaurantPassword)
  update: UpdateRestaurantPassword;
}
