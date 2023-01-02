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

export class UpdateRestaurantData {
  where: WhereRestaurant;
  data: UpdateRestaurant;
}

export class UpdateRestaurant {
  name?: Nullable<string>;
  address?: Nullable<UpdateAddress>;
}

export class UpdateRestaurantDataPassword {
  where: WhereRestaurant;
  update: UpdateRestaurantPassword;
}

export class UpdateRestaurantPassword {
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

export class WhereAddress {
  id?: Nullable<number>;
  restaurantId?: Nullable<number>;
}

export class CreateWaiterData {
  restaurantId: number;
  data: CreateWaiter;
}

export class WhereWaiter {
  id?: Nullable<number>;
  email?: Nullable<string>;
  restaurantId?: Nullable<number>;
}

export class CreateWaiter {
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
  where?: Nullable<WhereWaiter>;
  update: UpdateWaiterData;
  role?: Nullable<string>;
}

export class UpdateWaiterPassword {
  where?: Nullable<WhereWaiter>;
  update: UpdateWaiterDataPassword;
  role?: Nullable<string>;
}

export class UpdateWaiterDataPassword {
  password: string;
  old?: Nullable<string>;
}

export class LoginWaiter {
  email: string;
  password: string;
}

export class CreateTable {
  name: string;
}

export class CreateTableData {
  name: string;
  restaurantId: number;
}

export class UpdateTable {
  where: WhereTable;
  update: UpdateTableData;
}

export class UpdateTableData {
  name?: Nullable<string>;
}

export class WhereTable {
  id: number;
  restaurantId?: Nullable<number>;
}

export class CreateCategory {
  name: string;
}

export class CreateCategoryData {
  name: string;
  restaurantId: number;
}

export class UpdateCategory {
  where: WhereCategory;
  update: UpdateCategoryData;
}

export class UpdateCategoryData {
  name?: Nullable<string>;
}

export class WhereCategory {
  id: number;
  restaurantId?: Nullable<number>;
}

export class CreateVictual {
  name: string;
  price: number;
  categoryId?: Nullable<number>;
  category?: Nullable<CreateCategory>;
}

export class CreateVictualData {
  name: string;
  price: number;
  restaurantId: number;
  categoryId?: Nullable<number>;
  category?: Nullable<CreateCategory>;
}

export class CreateVictuals {
  name: string;
  price: number;
  restaurantId?: Nullable<number>;
  categoryId: number;
}

export class UpdateVictual {
  where: WhereVictual;
  update: UpdateVictualData;
}

export class UpdateVictualData {
  name?: Nullable<string>;
  price?: Nullable<number>;
  categoryId?: Nullable<number>;
}

export class WhereVictual {
  id: number;
  restaurantId?: Nullable<number>;
}

export class CreateOrder {
  description?: Nullable<string>;
  isReady?: Nullable<boolean>;
  waiterId?: Nullable<number>;
  tableId: number;
  victualId: number;
  restaurantId?: Nullable<number>;
}

export class WhereOrder {
  id: number;
  restaurantId?: Nullable<number>;
}

export class UpdateOrder {
  where: WhereOrder;
  update: UpdateOrderData;
}

export class UpdateOrderData {
  description?: Nullable<string>;
  isReady?: Nullable<boolean>;
  tableId?: Nullable<number>;
  victualId?: Nullable<number>;
}

export class CreateMeal {
  tableId: number;
}

export class WhereMeal {
  id: number;
  restaurantId?: Nullable<number>;
}

export class InvalidateQuery {
  restaurantId: number;
  orderId?: Nullable<number>;
}

export abstract class IMutation {
  abstract signup(
    data: CreateRestaurant
  ): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

  abstract loginRestaurant(
    credentials: LoginRestaurant
  ): Nullable<AuthRestaurant> | Promise<Nullable<AuthRestaurant>>;

  abstract updateRestaurant(
    update: UpdateRestaurant
  ): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

  abstract deleteRestaurant(): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract updateRestaurantPassword(
    update: UpdateRestaurantPassword
  ): Nullable<PasswordUpdated> | Promise<Nullable<PasswordUpdated>>;

  abstract createWaiter(
    data: CreateWaiter
  ): Nullable<Waiter> | Promise<Nullable<Waiter>>;

  abstract updateWaiter(
    data: UpdateWaiter
  ): Nullable<Waiter> | Promise<Nullable<Waiter>>;

  abstract deleteWaiter(
    where: WhereWaiter
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract updateWaiterPassword(
    data?: Nullable<UpdateWaiterPassword>
  ): Nullable<PasswordUpdated> | Promise<Nullable<PasswordUpdated>>;

  abstract loginWaiter(
    credentials: LoginWaiter
  ): Nullable<AuthWaiter> | Promise<Nullable<AuthWaiter>>;

  abstract createTable(
    data: CreateTable
  ): Nullable<Table> | Promise<Nullable<Table>>;

  abstract createTables(
    data?: Nullable<Nullable<CreateTable>[]>
  ): Nullable<TablesCreated> | Promise<Nullable<TablesCreated>>;

  abstract updateTable(
    data: UpdateTable
  ): Nullable<Table> | Promise<Nullable<Table>>;

  abstract deleteTable(
    where: WhereTable
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract createCategory(
    data: CreateCategory
  ): Nullable<Category> | Promise<Nullable<Category>>;

  abstract createCategories(
    data?: Nullable<CreateCategory[]>
  ): Nullable<CategoriesCreated> | Promise<Nullable<CategoriesCreated>>;

  abstract updateCategory(
    data: UpdateCategory
  ): Nullable<Category> | Promise<Nullable<Category>>;

  abstract deleteCategory(
    where: WhereCategory
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract createVictual(
    data: CreateVictual
  ): Nullable<Victual> | Promise<Nullable<Victual>>;

  abstract createVictuals(
    data?: Nullable<CreateVictuals[]>
  ): Nullable<VictualsCreated> | Promise<Nullable<VictualsCreated>>;

  abstract updateVictual(
    data: UpdateVictual
  ): Nullable<Victual> | Promise<Nullable<Victual>>;

  abstract deleteVictual(
    where: WhereVictual
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract createOrder(
    data: CreateOrder
  ): Nullable<Order> | Promise<Nullable<Order>>;

  abstract createOrders(
    data?: Nullable<CreateOrder[]>
  ): Nullable<OrdersCreated> | Promise<Nullable<OrdersCreated>>;

  abstract updateOrder(
    data: UpdateOrder
  ): Nullable<Order> | Promise<Nullable<Order>>;

  abstract deleteOrder(
    where: WhereOrder
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;

  abstract createMeal(
    data: CreateMeal
  ): Nullable<Meal> | Promise<Nullable<Meal>>;

  abstract deleteMeal(
    where: WhereMeal
  ): Nullable<Deleted> | Promise<Nullable<Deleted>>;
}

export abstract class IQuery {
  abstract waiters():
    | Nullable<Nullable<Waiter>[]>
    | Promise<Nullable<Nullable<Waiter>[]>>;

  abstract restaurantInfo():
    | Nullable<Restaurant>
    | Promise<Nullable<Restaurant>>;

  abstract restaurant(): Nullable<Restaurant> | Promise<Nullable<Restaurant>>;

  abstract waiterInfo(
    where?: Nullable<WhereWaiter>
  ): Nullable<Waiter> | Promise<Nullable<Waiter>>;

  abstract address(): Nullable<Address> | Promise<Nullable<Address>>;

  abstract tables():
    | Nullable<Nullable<Table>[]>
    | Promise<Nullable<Nullable<Table>[]>>;

  abstract table(where: WhereTable): Nullable<Table> | Promise<Nullable<Table>>;

  abstract categories():
    | Nullable<Nullable<Category>[]>
    | Promise<Nullable<Nullable<Category>[]>>;

  abstract category(
    where: WhereCategory
  ): Nullable<Category> | Promise<Nullable<Category>>;

  abstract victuals():
    | Nullable<Nullable<Victual>[]>
    | Promise<Nullable<Nullable<Victual>[]>>;

  abstract victual(
    where: WhereVictual
  ): Nullable<Victual> | Promise<Nullable<Victual>>;

  abstract orders():
    | Nullable<Nullable<Order>[]>
    | Promise<Nullable<Nullable<Order>[]>>;

  abstract order(where: WhereOrder): Nullable<Order> | Promise<Nullable<Order>>;

  abstract meals():
    | Nullable<Nullable<Meal>[]>
    | Promise<Nullable<Nullable<Meal>[]>>;

  abstract meal(where: WhereMeal): Nullable<Meal> | Promise<Nullable<Meal>>;
}

export abstract class ISubscription {
  abstract listenOrders():
    | Nullable<ListenOrders>
    | Promise<Nullable<ListenOrders>>;

  abstract listenOrder(
    where: WhereOrder
  ): Nullable<ListenOrder> | Promise<Nullable<ListenOrder>>;
}

export class RestaurantModel {
  id: number;
  name: string;
  email: string;
  password: string;
  address?: Nullable<Address>;
  waiters?: Nullable<Nullable<Waiter>[]>;
  orders?: Nullable<Nullable<Order>[]>;
  victuals?: Nullable<Nullable<Victual>[]>;
  categories?: Nullable<Nullable<Category>[]>;
  tables?: Nullable<Nullable<Table>[]>;
  meals?: Nullable<Nullable<Meal>[]>;
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

export class WaiterModel {
  id: number;
  name: string;
  email: string;
  gender: string;
  profileIcon?: Nullable<string>;
  password: string;
  orders?: Nullable<Nullable<Order>[]>;
  meals?: Nullable<Nullable<Meal>[]>;
  restaurant?: Nullable<Restaurant>;
  restaurantId?: Nullable<number>;
}

export class Order {
  id: number;
  description: string;
  createdAt: string;
  isReady: boolean;
  waiter?: Nullable<Waiter>;
  table?: Nullable<Table>;
  restaurant?: Nullable<Restaurant>;
  victual?: Nullable<Victual>;
}

export class Victual {
  id: number;
  name: string;
  price: number;
  restaurant?: Nullable<Restaurant>;
  category?: Nullable<Category>;
  orders?: Nullable<Nullable<Order>[]>;
}

export class Category {
  id: number;
  name: string;
  victuals?: Nullable<Nullable<Victual>[]>;
  restaurant?: Nullable<Restaurant>;
}

export class Table {
  id: number;
  name: string;
  orders?: Nullable<Nullable<Order>[]>;
  restaurant?: Nullable<Restaurant>;
}

export class Meal {
  id: number;
  start: string;
  end: string;
  total: number;
  waiter?: Nullable<Waiter>;
  table?: Nullable<Table>;
  orders?: Nullable<Nullable<Order>[]>;
  restaurant?: Nullable<Restaurant>;
}

export class AuthRestaurant {
  restaurant: Restaurant;
  access_token: string;
}

export class Restaurant {
  id: number;
  name: string;
  email: string;
  address?: Nullable<Address>;
  waiters?: Nullable<Nullable<Waiter>[]>;
  orders?: Nullable<Nullable<Order>[]>;
  victuals?: Nullable<Nullable<Victual>[]>;
  categories?: Nullable<Nullable<Category>[]>;
  tables?: Nullable<Nullable<Table>[]>;
  meals?: Nullable<Nullable<Meal>[]>;
}

export class Waiter {
  id: number;
  name: string;
  email: string;
  gender: string;
  profileIcon?: Nullable<string>;
  orders?: Nullable<Nullable<Order>[]>;
  meals?: Nullable<Nullable<Meal>[]>;
  restaurant?: Nullable<Restaurant>;
}

export class AuthWaiter {
  access_token: string;
  waiter: Waiter;
}

export class TablesCreated {
  message: string;
}

export class CategoriesCreated {
  message: string;
}

export class VictualsCreated {
  message: string;
}

export class OrdersCreated {
  message: string;
}

export class JwtPayload {
  name: string;
  sub: number;
  role: string;
  id: number;
  email: string;
  restaurantId?: Nullable<number>;
}

export class Deleted {
  message: string;
}

export class PasswordUpdated {
  message: string;
}

export class ListenOrders {
  orders?: Nullable<Nullable<Order>[]>;
}

export class ListenOrder {
  order?: Nullable<Order>;
}

type Nullable<T> = T | null;
