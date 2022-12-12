
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateRestaurantInput {
    name: string;
    password: string;
    address: CreateAddressInput;
}

export class LoginRestaurantInput {
    name: string;
    password: string;
}

export class WhereRestaurant {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class UpdateRestaurantInput {
    where: WhereRestaurant;
    data: UpdateRestaurantDataInput;
}

export class UpdateRestaurantDataInput {
    name?: Nullable<string>;
    password?: Nullable<string>;
    address?: Nullable<UpdateAddressInput>;
}

export class UpdateRestaurantPassword {
    where: WhereRestaurant;
    update: UpdateRestaurantDataPassword;
}

export class UpdateRestaurantDataPassword {
    old: string;
    password: string;
}

export class CreateAddressInput {
    country: string;
    zip: string;
    city: string;
    address1: string;
    address2?: Nullable<string>;
}

export class UpdateAddressInput {
    country?: Nullable<string>;
    zip?: Nullable<string>;
    city?: Nullable<string>;
    address1?: Nullable<string>;
    address2?: Nullable<string>;
}

export abstract class IMutation {
    abstract signup(data: CreateRestaurantInput): Nullable<AuthRestaurantResponse> | Promise<Nullable<AuthRestaurantResponse>>;

    abstract loginRestaurant(credentials: LoginRestaurantInput): Nullable<AuthRestaurantResponse> | Promise<Nullable<AuthRestaurantResponse>>;

    abstract updateRestaurant(update: UpdateRestaurantDataInput): Nullable<AuthRestaurantResponse> | Promise<Nullable<AuthRestaurantResponse>>;

    abstract deleteRestaurant(): Nullable<RestaurantDeleteResponse> | Promise<Nullable<RestaurantDeleteResponse>>;

    abstract updateRestaurantPassword(update: UpdateRestaurantDataPassword): Nullable<RestaurantPasswordUpdatedResponse> | Promise<Nullable<RestaurantPasswordUpdatedResponse>>;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;
}

export class Restaurant {
    id: number;
    name: string;
    password: string;
    address?: Nullable<Address>;
    waiters?: Nullable<Nullable<Waiter>[]>;
    orders?: Nullable<Nullable<Order>[]>;
    meals?: Nullable<Nullable<Meal>[]>;
    categories?: Nullable<Nullable<Category>[]>;
    tables?: Nullable<Nullable<Table>[]>;
}

export class Address {
    id: number;
    country: string;
    zip: string;
    city: string;
    address1: string;
    address2: string;
    restaurant?: Nullable<Restaurant>;
}

export class Waiter {
    id: number;
    name: string;
    gender: string;
    profileIcon: string;
    password: string;
    orders?: Nullable<Nullable<Order>[]>;
    restaurant: Restaurant;
}

export class Order {
    id: number;
    description: string;
    createdAt: string;
    isReady: boolean;
    waiter: Waiter;
    table: Table;
    restaurant: Restaurant;
    meal: Meal;
}

export class Meal {
    id: number;
    name: string;
    price: number;
    restaurant: Restaurant;
    category?: Nullable<Category>;
    orders?: Nullable<Nullable<Order>[]>;
}

export class Category {
    id: number;
    name: string;
    meal?: Nullable<Nullable<Meal>[]>;
    restaurant: Restaurant;
}

export class Table {
    id: number;
    name: string;
    orders?: Nullable<Nullable<Order>[]>;
    restaurant: Restaurant;
}

export class AuthRestaurantResponse {
    restaurant: RestaurantResponse;
    access_token: string;
}

export class RestaurantResponse {
    id: number;
    name: string;
    address?: Nullable<Address>;
    waiters?: Nullable<Nullable<Waiter>[]>;
    orders?: Nullable<Nullable<Order>[]>;
    meals?: Nullable<Nullable<Meal>[]>;
    categories?: Nullable<Nullable<Category>[]>;
    tables?: Nullable<Nullable<Table>[]>;
}

export class RestaurantDeleteResponse {
    message: string;
}

export class RestaurantPasswordUpdatedResponse {
    message: string;
}

export class JwtPayload {
    name: string;
    sub: number;
    role: string;
    id: number;
}

type Nullable<T> = T | null;
