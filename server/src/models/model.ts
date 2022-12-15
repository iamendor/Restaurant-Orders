
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateRestaurant {
    name: string;
    email: string;
    password: string;
    address: CreateAddress;
}

export class LoginRestaurant {
    email: string;
    password: string;
}

export class WhereRestaurant {
    id?: Nullable<number>;
    email?: Nullable<string>;
}

export class UpdateRestaurant {
    where: WhereRestaurant;
    data: UpdateRestaurantData;
}

export class UpdateRestaurantData {
    name?: Nullable<string>;
    password?: Nullable<string>;
    address?: Nullable<UpdateAddress>;
}

export class UpdateRestaurantPassword {
    where: WhereRestaurant;
    update: UpdateRestaurantDataPassword;
}

export class UpdateRestaurantDataPassword {
    old: string;
    password: string;
}

export class CreateAddress {
    country: string;
    zip: string;
    city: string;
    address1: string;
    address2?: Nullable<string>;
}

export class UpdateAddress {
    country?: Nullable<string>;
    zip?: Nullable<string>;
    city?: Nullable<string>;
    address1?: Nullable<string>;
    address2?: Nullable<string>;
}

export class CreateWaiter {
    restaurantId: number;
    data: CreateWaiterData;
}

export class WhereWaiter {
    id?: Nullable<number>;
    email?: Nullable<string>;
    restaurant?: Nullable<number>;
}

export class CreateWaiterData {
    name: string;
    email: string;
    gender: string;
    profileIcon?: Nullable<string>;
    password: string;
}

export class UpdateWaiterData {
    name?: Nullable<string>;
    gender?: Nullable<string>;
    email?: Nullable<string>;
    profileIcon?: Nullable<string>;
}

export class UpdateWaiter {
    where: WhereWaiter;
    update: UpdateWaiterData;
}

export class UpdateWaiterPassword {
    where: WhereWaiter;
    update: UpdateWaiterDataPassword;
}

export class UpdateWaiterDataPassword {
    password: string;
}

export class LoginWaiter {
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract signup(data: CreateRestaurant): Nullable<AuthRestaurant> | Promise<Nullable<AuthRestaurant>>;

    abstract loginRestaurant(credentials: LoginRestaurant): Nullable<AuthRestaurant> | Promise<Nullable<AuthRestaurant>>;

    abstract updateRestaurant(update: UpdateRestaurantData): Nullable<AuthRestaurant> | Promise<Nullable<AuthRestaurant>>;

    abstract deleteRestaurant(): Nullable<Deleted> | Promise<Nullable<Deleted>>;

    abstract updateRestaurantPassword(update: UpdateRestaurantDataPassword): Nullable<PasswordUpdated> | Promise<Nullable<PasswordUpdated>>;

    abstract createWaiter(data: CreateWaiterData): Nullable<WaiterResponse> | Promise<Nullable<WaiterResponse>>;

    abstract updateWaiter(data: UpdateWaiter): WaiterResponse | Promise<WaiterResponse>;

    abstract deleteWaiter(where: WhereWaiter): Nullable<Deleted> | Promise<Nullable<Deleted>>;

    abstract updateWaiterPassword(data?: Nullable<UpdateWaiterPassword>): Nullable<PasswordUpdated> | Promise<Nullable<PasswordUpdated>>;

    abstract loginWaiter(credentials: LoginWaiter): Nullable<AuthWaiter> | Promise<Nullable<AuthWaiter>>;
}

export abstract class IQuery {
    abstract waiters(): Nullable<Nullable<WaiterResponse>[]> | Promise<Nullable<Nullable<WaiterResponse>[]>>;

    abstract restaurantInfo(): Nullable<RestaurantResponse> | Promise<Nullable<RestaurantResponse>>;

    abstract waiterInfo(): Nullable<WaiterResponse> | Promise<Nullable<WaiterResponse>>;
}

export class Restaurant {
    id: number;
    name: string;
    email: string;
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
    email: string;
    gender: string;
    profileIcon?: Nullable<string>;
    password: string;
    orders?: Nullable<Nullable<Order>[]>;
    restaurant?: Nullable<Restaurant>;
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

export class AuthRestaurant {
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

export class WaiterResponse {
    id: number;
    name: string;
    email: string;
    gender: string;
    profileIcon?: Nullable<string>;
    orders?: Nullable<Nullable<Order>[]>;
    restaurant?: Nullable<Restaurant>;
}

export class AuthWaiter {
    access_token: string;
    waiter: WaiterResponse;
}

export class JwtPayload {
    name: string;
    sub: number;
    role: string;
    id: number;
}

export class Deleted {
    message: string;
}

export class PasswordUpdated {
    message: string;
}

type Nullable<T> = T | null;
