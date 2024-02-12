
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model BaseTask
 * 
 */
export type BaseTask = $Result.DefaultSelection<Prisma.$BaseTaskPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Waiter
 * 
 */
export type Waiter = $Result.DefaultSelection<Prisma.$WaiterPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Victual
 * 
 */
export type Victual = $Result.DefaultSelection<Prisma.$VictualPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model OpeningHour
 * 
 */
export type OpeningHour = $Result.DefaultSelection<Prisma.$OpeningHourPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs>;

  /**
   * `prisma.baseTask`: Exposes CRUD operations for the **BaseTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseTasks
    * const baseTasks = await prisma.baseTask.findMany()
    * ```
    */
  get baseTask(): Prisma.BaseTaskDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.waiter`: Exposes CRUD operations for the **Waiter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waiters
    * const waiters = await prisma.waiter.findMany()
    * ```
    */
  get waiter(): Prisma.WaiterDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.victual`: Exposes CRUD operations for the **Victual** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Victuals
    * const victuals = await prisma.victual.findMany()
    * ```
    */
  get victual(): Prisma.VictualDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs>;

  /**
   * `prisma.openingHour`: Exposes CRUD operations for the **OpeningHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpeningHours
    * const openingHours = await prisma.openingHour.findMany()
    * ```
    */
  get openingHour(): Prisma.OpeningHourDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Restaurant: 'Restaurant',
    Settings: 'Settings',
    Currency: 'Currency',
    Address: 'Address',
    BaseTask: 'BaseTask',
    Task: 'Task',
    Waiter: 'Waiter',
    Order: 'Order',
    Victual: 'Victual',
    Category: 'Category',
    Table: 'Table',
    Meal: 'Meal',
    OpeningHour: 'OpeningHour'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'restaurant' | 'settings' | 'currency' | 'address' | 'baseTask' | 'task' | 'waiter' | 'order' | 'victual' | 'category' | 'table' | 'meal' | 'openingHour'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>,
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>,
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      BaseTask: {
        payload: Prisma.$BaseTaskPayload<ExtArgs>
        fields: Prisma.BaseTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          findFirst: {
            args: Prisma.BaseTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          findMany: {
            args: Prisma.BaseTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>[]
          }
          create: {
            args: Prisma.BaseTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          createMany: {
            args: Prisma.BaseTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BaseTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          update: {
            args: Prisma.BaseTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          deleteMany: {
            args: Prisma.BaseTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BaseTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BaseTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BaseTaskPayload>
          }
          aggregate: {
            args: Prisma.BaseTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBaseTask>
          }
          groupBy: {
            args: Prisma.BaseTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BaseTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<BaseTaskCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Waiter: {
        payload: Prisma.$WaiterPayload<ExtArgs>
        fields: Prisma.WaiterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaiterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaiterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          findFirst: {
            args: Prisma.WaiterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaiterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          findMany: {
            args: Prisma.WaiterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>[]
          }
          create: {
            args: Prisma.WaiterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          createMany: {
            args: Prisma.WaiterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WaiterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          update: {
            args: Prisma.WaiterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          deleteMany: {
            args: Prisma.WaiterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WaiterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WaiterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WaiterPayload>
          }
          aggregate: {
            args: Prisma.WaiterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWaiter>
          }
          groupBy: {
            args: Prisma.WaiterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WaiterGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaiterCountArgs<ExtArgs>,
            result: $Utils.Optional<WaiterCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Victual: {
        payload: Prisma.$VictualPayload<ExtArgs>
        fields: Prisma.VictualFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VictualFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VictualFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          findFirst: {
            args: Prisma.VictualFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VictualFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          findMany: {
            args: Prisma.VictualFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>[]
          }
          create: {
            args: Prisma.VictualCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          createMany: {
            args: Prisma.VictualCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VictualDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          update: {
            args: Prisma.VictualUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          deleteMany: {
            args: Prisma.VictualDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VictualUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VictualUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VictualPayload>
          }
          aggregate: {
            args: Prisma.VictualAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVictual>
          }
          groupBy: {
            args: Prisma.VictualGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VictualGroupByOutputType>[]
          }
          count: {
            args: Prisma.VictualCountArgs<ExtArgs>,
            result: $Utils.Optional<VictualCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>,
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>,
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      OpeningHour: {
        payload: Prisma.$OpeningHourPayload<ExtArgs>
        fields: Prisma.OpeningHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpeningHourFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpeningHourFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          findFirst: {
            args: Prisma.OpeningHourFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpeningHourFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          findMany: {
            args: Prisma.OpeningHourFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>[]
          }
          create: {
            args: Prisma.OpeningHourCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          createMany: {
            args: Prisma.OpeningHourCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OpeningHourDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          update: {
            args: Prisma.OpeningHourUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          deleteMany: {
            args: Prisma.OpeningHourDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OpeningHourUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OpeningHourUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OpeningHourPayload>
          }
          aggregate: {
            args: Prisma.OpeningHourAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOpeningHour>
          }
          groupBy: {
            args: Prisma.OpeningHourGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OpeningHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpeningHourCountArgs<ExtArgs>,
            result: $Utils.Optional<OpeningHourCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    tasks: number
    openingHours: number
    waiters: number
    orders: number
    victuals: number
    categories: number
    tables: number
    meals: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | RestaurantCountOutputTypeCountTasksArgs
    openingHours?: boolean | RestaurantCountOutputTypeCountOpeningHoursArgs
    waiters?: boolean | RestaurantCountOutputTypeCountWaitersArgs
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs
    victuals?: boolean | RestaurantCountOutputTypeCountVictualsArgs
    categories?: boolean | RestaurantCountOutputTypeCountCategoriesArgs
    tables?: boolean | RestaurantCountOutputTypeCountTablesArgs
    meals?: boolean | RestaurantCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOpeningHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpeningHourWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountWaitersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountVictualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VictualWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }



  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    restaurants: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | CurrencyCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }



  /**
   * Count Type BaseTaskCountOutputType
   */

  export type BaseTaskCountOutputType = {
    tasks: number
  }

  export type BaseTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | BaseTaskCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes

  /**
   * BaseTaskCountOutputType without action
   */
  export type BaseTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTaskCountOutputType
     */
    select?: BaseTaskCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BaseTaskCountOutputType without action
   */
  export type BaseTaskCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }



  /**
   * Count Type WaiterCountOutputType
   */

  export type WaiterCountOutputType = {
    orders: number
    meals: number
  }

  export type WaiterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | WaiterCountOutputTypeCountOrdersArgs
    meals?: boolean | WaiterCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes

  /**
   * WaiterCountOutputType without action
   */
  export type WaiterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaiterCountOutputType
     */
    select?: WaiterCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * WaiterCountOutputType without action
   */
  export type WaiterCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * WaiterCountOutputType without action
   */
  export type WaiterCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }



  /**
   * Count Type VictualCountOutputType
   */

  export type VictualCountOutputType = {
    orders: number
  }

  export type VictualCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | VictualCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * VictualCountOutputType without action
   */
  export type VictualCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VictualCountOutputType
     */
    select?: VictualCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VictualCountOutputType without action
   */
  export type VictualCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    victuals: number
    subCategories: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    victuals?: boolean | CategoryCountOutputTypeCountVictualsArgs
    subCategories?: boolean | CategoryCountOutputTypeCountSubCategoriesArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountVictualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VictualWhereInput
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }



  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    orders: number
    meals: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | TableCountOutputTypeCountOrdersArgs
    meals?: boolean | TableCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }



  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    orders: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MealCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    id: number | null
    currencyId: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    id: number | null
    currencyId: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    email: string | null
    password: string | null
    currencyId: number | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    email: string | null
    password: string | null
    currencyId: number | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    email: number
    password: number
    currencyId: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    id?: true
    currencyId?: true
  }

  export type RestaurantSumAggregateInputType = {
    id?: true
    currencyId?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
    currencyId?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
    currencyId?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    email?: true
    password?: true
    currencyId?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    email: string
    password: string
    currencyId: number | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    currencyId?: boolean
    address?: boolean | Restaurant$addressArgs<ExtArgs>
    currency?: boolean | Restaurant$currencyArgs<ExtArgs>
    settings?: boolean | Restaurant$settingsArgs<ExtArgs>
    tasks?: boolean | Restaurant$tasksArgs<ExtArgs>
    openingHours?: boolean | Restaurant$openingHoursArgs<ExtArgs>
    waiters?: boolean | Restaurant$waitersArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    victuals?: boolean | Restaurant$victualsArgs<ExtArgs>
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    tables?: boolean | Restaurant$tablesArgs<ExtArgs>
    meals?: boolean | Restaurant$mealsArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    currencyId?: boolean
  }

  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Restaurant$addressArgs<ExtArgs>
    currency?: boolean | Restaurant$currencyArgs<ExtArgs>
    settings?: boolean | Restaurant$settingsArgs<ExtArgs>
    tasks?: boolean | Restaurant$tasksArgs<ExtArgs>
    openingHours?: boolean | Restaurant$openingHoursArgs<ExtArgs>
    waiters?: boolean | Restaurant$waitersArgs<ExtArgs>
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>
    victuals?: boolean | Restaurant$victualsArgs<ExtArgs>
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    tables?: boolean | Restaurant$tablesArgs<ExtArgs>
    meals?: boolean | Restaurant$mealsArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      currency: Prisma.$CurrencyPayload<ExtArgs> | null
      settings: Prisma.$SettingsPayload<ExtArgs> | null
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      openingHours: Prisma.$OpeningHourPayload<ExtArgs>[]
      waiters: Prisma.$WaiterPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      victuals: Prisma.$VictualPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      tables: Prisma.$TablePayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      email: string
      password: string
      currencyId: number | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }


  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RestaurantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Restaurant that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RestaurantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RestaurantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
    **/
    create<T extends RestaurantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Restaurants.
     *     @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     *     @example
     *     // Create many Restaurants
     *     const restaurant = await prisma.restaurant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RestaurantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
    **/
    delete<T extends RestaurantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RestaurantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RestaurantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RestaurantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
    **/
    upsert<T extends RestaurantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>
    ): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    address<T extends Restaurant$addressArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    currency<T extends Restaurant$currencyArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$currencyArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    settings<T extends Restaurant$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    tasks<T extends Restaurant$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    openingHours<T extends Restaurant$openingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$openingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findMany'> | Null>;

    waiters<T extends Restaurant$waitersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$waitersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    victuals<T extends Restaurant$victualsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$victualsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findMany'> | Null>;

    categories<T extends Restaurant$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    tables<T extends Restaurant$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'> | Null>;

    meals<T extends Restaurant$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Restaurant model
   */ 
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'Int'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly email: FieldRef<"Restaurant", 'String'>
    readonly password: FieldRef<"Restaurant", 'String'>
    readonly currencyId: FieldRef<"Restaurant", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }


  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }


  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }


  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }


  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }


  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }


  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
  }


  /**
   * Restaurant.address
   */
  export type Restaurant$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }


  /**
   * Restaurant.currency
   */
  export type Restaurant$currencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    where?: CurrencyWhereInput
  }


  /**
   * Restaurant.settings
   */
  export type Restaurant$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }


  /**
   * Restaurant.tasks
   */
  export type Restaurant$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Restaurant.openingHours
   */
  export type Restaurant$openingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    where?: OpeningHourWhereInput
    orderBy?: OpeningHourOrderByWithRelationInput | OpeningHourOrderByWithRelationInput[]
    cursor?: OpeningHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpeningHourScalarFieldEnum | OpeningHourScalarFieldEnum[]
  }


  /**
   * Restaurant.waiters
   */
  export type Restaurant$waitersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    where?: WaiterWhereInput
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    cursor?: WaiterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }


  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Restaurant.victuals
   */
  export type Restaurant$victualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    where?: VictualWhereInput
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    cursor?: VictualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VictualScalarFieldEnum | VictualScalarFieldEnum[]
  }


  /**
   * Restaurant.categories
   */
  export type Restaurant$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Restaurant.tables
   */
  export type Restaurant$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Restaurant.meals
   */
  export type Restaurant$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
  }



  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    enableAnalytics: boolean | null
    restaurantId: number | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    enableAnalytics: boolean | null
    restaurantId: number | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    createdAt: number
    enableAnalytics: number
    restaurantId: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    createdAt?: true
    enableAnalytics?: true
    restaurantId?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    enableAnalytics?: true
    restaurantId?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    createdAt?: true
    enableAnalytics?: true
    restaurantId?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    createdAt: Date
    enableAnalytics: boolean
    restaurantId: number
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    enableAnalytics?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    enableAnalytics?: boolean
    restaurantId?: boolean
  }

  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }


  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      enableAnalytics: boolean
      restaurantId: number
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }


  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SettingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SettingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SettingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
    **/
    create<T extends SettingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Settings.
     *     @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     *     @example
     *     // Create many Settings
     *     const settings = await prisma.settings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SettingsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
    **/
    delete<T extends SettingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SettingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SettingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SettingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
    **/
    upsert<T extends SettingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>
    ): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Settings model
   */ 
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly createdAt: FieldRef<"Settings", 'DateTime'>
    readonly enableAnalytics: FieldRef<"Settings", 'Boolean'>
    readonly restaurantId: FieldRef<"Settings", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }


  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }


  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
  }


  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }


  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }


  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
  }


  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SettingsInclude<ExtArgs> | null
  }



  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id: number | null
  }

  export type CurrencySumAggregateOutputType = {
    id: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id?: true
  }

  export type CurrencySumAggregateInputType = {
    id?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: number
    name: string
    symbol: string
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    restaurants?: boolean | Currency$restaurantsArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
  }

  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | Currency$restaurantsArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      restaurants: Prisma.$RestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      symbol: string
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }


  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Currency that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
    **/
    create<T extends CurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Currencies.
     *     @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     *     @example
     *     // Create many Currencies
     *     const currency = await prisma.currency.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
    **/
    delete<T extends CurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
    **/
    upsert<T extends CurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>
    ): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurants<T extends Currency$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, Currency$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Currency model
   */ 
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'Int'>
    readonly name: FieldRef<"Currency", 'String'>
    readonly symbol: FieldRef<"Currency", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }


  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }


  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }


  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }


  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
  }


  /**
   * Currency.restaurants
   */
  export type Currency$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }


  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CurrencyInclude<ExtArgs> | null
  }



  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    country: string | null
    zip: string | null
    city: string | null
    address1: string | null
    address2: string | null
    restaurantId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    country: string | null
    zip: string | null
    city: string | null
    address1: string | null
    address2: string | null
    restaurantId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    country: number
    zip: number
    city: number
    address1: number
    address2: number
    restaurantId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    country?: true
    zip?: true
    city?: true
    address1?: true
    address2?: true
    restaurantId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    country?: true
    zip?: true
    city?: true
    address1?: true
    address2?: true
    restaurantId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    country?: true
    zip?: true
    city?: true
    address1?: true
    address2?: true
    restaurantId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    country: string
    zip: string
    city: string
    address1: string
    address2: string | null
    restaurantId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    zip?: boolean
    city?: boolean
    address1?: boolean
    address2?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    country?: boolean
    zip?: boolean
    city?: boolean
    address1?: boolean
    address2?: boolean
    restaurantId?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }


  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      zip: string
      city: string
      address1: string
      address2: string | null
      restaurantId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }


  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly country: FieldRef<"Address", 'String'>
    readonly zip: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly address1: FieldRef<"Address", 'String'>
    readonly address2: FieldRef<"Address", 'String'>
    readonly restaurantId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
  }



  /**
   * Model BaseTask
   */

  export type AggregateBaseTask = {
    _count: BaseTaskCountAggregateOutputType | null
    _avg: BaseTaskAvgAggregateOutputType | null
    _sum: BaseTaskSumAggregateOutputType | null
    _min: BaseTaskMinAggregateOutputType | null
    _max: BaseTaskMaxAggregateOutputType | null
  }

  export type BaseTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type BaseTaskSumAggregateOutputType = {
    id: number | null
  }

  export type BaseTaskMinAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
  }

  export type BaseTaskMaxAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
  }

  export type BaseTaskCountAggregateOutputType = {
    id: number
    name: number
    action: number
    _all: number
  }


  export type BaseTaskAvgAggregateInputType = {
    id?: true
  }

  export type BaseTaskSumAggregateInputType = {
    id?: true
  }

  export type BaseTaskMinAggregateInputType = {
    id?: true
    name?: true
    action?: true
  }

  export type BaseTaskMaxAggregateInputType = {
    id?: true
    name?: true
    action?: true
  }

  export type BaseTaskCountAggregateInputType = {
    id?: true
    name?: true
    action?: true
    _all?: true
  }

  export type BaseTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseTask to aggregate.
     */
    where?: BaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseTasks to fetch.
     */
    orderBy?: BaseTaskOrderByWithRelationInput | BaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseTasks
    **/
    _count?: true | BaseTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaseTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaseTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseTaskMaxAggregateInputType
  }

  export type GetBaseTaskAggregateType<T extends BaseTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseTask[P]>
      : GetScalarType<T[P], AggregateBaseTask[P]>
  }




  export type BaseTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseTaskWhereInput
    orderBy?: BaseTaskOrderByWithAggregationInput | BaseTaskOrderByWithAggregationInput[]
    by: BaseTaskScalarFieldEnum[] | BaseTaskScalarFieldEnum
    having?: BaseTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseTaskCountAggregateInputType | true
    _avg?: BaseTaskAvgAggregateInputType
    _sum?: BaseTaskSumAggregateInputType
    _min?: BaseTaskMinAggregateInputType
    _max?: BaseTaskMaxAggregateInputType
  }

  export type BaseTaskGroupByOutputType = {
    id: number
    name: string
    action: string
    _count: BaseTaskCountAggregateOutputType | null
    _avg: BaseTaskAvgAggregateOutputType | null
    _sum: BaseTaskSumAggregateOutputType | null
    _min: BaseTaskMinAggregateOutputType | null
    _max: BaseTaskMaxAggregateOutputType | null
  }

  type GetBaseTaskGroupByPayload<T extends BaseTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseTaskGroupByOutputType[P]>
            : GetScalarType<T[P], BaseTaskGroupByOutputType[P]>
        }
      >
    >


  export type BaseTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean
    tasks?: boolean | BaseTask$tasksArgs<ExtArgs>
    _count?: boolean | BaseTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseTask"]>

  export type BaseTaskSelectScalar = {
    id?: boolean
    name?: boolean
    action?: boolean
  }

  export type BaseTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | BaseTask$tasksArgs<ExtArgs>
    _count?: boolean | BaseTaskCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BaseTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseTask"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      action: string
    }, ExtArgs["result"]["baseTask"]>
    composites: {}
  }


  type BaseTaskGetPayload<S extends boolean | null | undefined | BaseTaskDefaultArgs> = $Result.GetResult<Prisma.$BaseTaskPayload, S>

  type BaseTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BaseTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BaseTaskCountAggregateInputType | true
    }

  export interface BaseTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseTask'], meta: { name: 'BaseTask' } }
    /**
     * Find zero or one BaseTask that matches the filter.
     * @param {BaseTaskFindUniqueArgs} args - Arguments to find a BaseTask
     * @example
     * // Get one BaseTask
     * const baseTask = await prisma.baseTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BaseTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BaseTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BaseTaskFindUniqueOrThrowArgs} args - Arguments to find a BaseTask
     * @example
     * // Get one BaseTask
     * const baseTask = await prisma.baseTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BaseTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BaseTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskFindFirstArgs} args - Arguments to find a BaseTask
     * @example
     * // Get one BaseTask
     * const baseTask = await prisma.baseTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BaseTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskFindFirstArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BaseTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskFindFirstOrThrowArgs} args - Arguments to find a BaseTask
     * @example
     * // Get one BaseTask
     * const baseTask = await prisma.baseTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BaseTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BaseTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseTasks
     * const baseTasks = await prisma.baseTask.findMany()
     * 
     * // Get first 10 BaseTasks
     * const baseTasks = await prisma.baseTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseTaskWithIdOnly = await prisma.baseTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BaseTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BaseTask.
     * @param {BaseTaskCreateArgs} args - Arguments to create a BaseTask.
     * @example
     * // Create one BaseTask
     * const BaseTask = await prisma.baseTask.create({
     *   data: {
     *     // ... data to create a BaseTask
     *   }
     * })
     * 
    **/
    create<T extends BaseTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskCreateArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BaseTasks.
     *     @param {BaseTaskCreateManyArgs} args - Arguments to create many BaseTasks.
     *     @example
     *     // Create many BaseTasks
     *     const baseTask = await prisma.baseTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BaseTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BaseTask.
     * @param {BaseTaskDeleteArgs} args - Arguments to delete one BaseTask.
     * @example
     * // Delete one BaseTask
     * const BaseTask = await prisma.baseTask.delete({
     *   where: {
     *     // ... filter to delete one BaseTask
     *   }
     * })
     * 
    **/
    delete<T extends BaseTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskDeleteArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BaseTask.
     * @param {BaseTaskUpdateArgs} args - Arguments to update one BaseTask.
     * @example
     * // Update one BaseTask
     * const baseTask = await prisma.baseTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BaseTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskUpdateArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BaseTasks.
     * @param {BaseTaskDeleteManyArgs} args - Arguments to filter BaseTasks to delete.
     * @example
     * // Delete a few BaseTasks
     * const { count } = await prisma.baseTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BaseTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BaseTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseTasks
     * const baseTask = await prisma.baseTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BaseTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BaseTask.
     * @param {BaseTaskUpsertArgs} args - Arguments to update or create a BaseTask.
     * @example
     * // Update or create a BaseTask
     * const baseTask = await prisma.baseTask.upsert({
     *   create: {
     *     // ... data to create a BaseTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseTask we want to update
     *   }
     * })
    **/
    upsert<T extends BaseTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BaseTaskUpsertArgs<ExtArgs>>
    ): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BaseTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskCountArgs} args - Arguments to filter BaseTasks to count.
     * @example
     * // Count the number of BaseTasks
     * const count = await prisma.baseTask.count({
     *   where: {
     *     // ... the filter for the BaseTasks we want to count
     *   }
     * })
    **/
    count<T extends BaseTaskCountArgs>(
      args?: Subset<T, BaseTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseTaskAggregateArgs>(args: Subset<T, BaseTaskAggregateArgs>): Prisma.PrismaPromise<GetBaseTaskAggregateType<T>>

    /**
     * Group by BaseTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseTaskGroupByArgs['orderBy'] }
        : { orderBy?: BaseTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseTask model
   */
  readonly fields: BaseTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends BaseTask$tasksArgs<ExtArgs> = {}>(args?: Subset<T, BaseTask$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BaseTask model
   */ 
  interface BaseTaskFieldRefs {
    readonly id: FieldRef<"BaseTask", 'Int'>
    readonly name: FieldRef<"BaseTask", 'String'>
    readonly action: FieldRef<"BaseTask", 'String'>
  }
    

  // Custom InputTypes

  /**
   * BaseTask findUnique
   */
  export type BaseTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which BaseTask to fetch.
     */
    where: BaseTaskWhereUniqueInput
  }


  /**
   * BaseTask findUniqueOrThrow
   */
  export type BaseTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which BaseTask to fetch.
     */
    where: BaseTaskWhereUniqueInput
  }


  /**
   * BaseTask findFirst
   */
  export type BaseTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which BaseTask to fetch.
     */
    where?: BaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseTasks to fetch.
     */
    orderBy?: BaseTaskOrderByWithRelationInput | BaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseTasks.
     */
    cursor?: BaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseTasks.
     */
    distinct?: BaseTaskScalarFieldEnum | BaseTaskScalarFieldEnum[]
  }


  /**
   * BaseTask findFirstOrThrow
   */
  export type BaseTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which BaseTask to fetch.
     */
    where?: BaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseTasks to fetch.
     */
    orderBy?: BaseTaskOrderByWithRelationInput | BaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseTasks.
     */
    cursor?: BaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseTasks.
     */
    distinct?: BaseTaskScalarFieldEnum | BaseTaskScalarFieldEnum[]
  }


  /**
   * BaseTask findMany
   */
  export type BaseTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter, which BaseTasks to fetch.
     */
    where?: BaseTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseTasks to fetch.
     */
    orderBy?: BaseTaskOrderByWithRelationInput | BaseTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseTasks.
     */
    cursor?: BaseTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseTasks.
     */
    skip?: number
    distinct?: BaseTaskScalarFieldEnum | BaseTaskScalarFieldEnum[]
  }


  /**
   * BaseTask create
   */
  export type BaseTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseTask.
     */
    data: XOR<BaseTaskCreateInput, BaseTaskUncheckedCreateInput>
  }


  /**
   * BaseTask createMany
   */
  export type BaseTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseTasks.
     */
    data: BaseTaskCreateManyInput | BaseTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BaseTask update
   */
  export type BaseTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseTask.
     */
    data: XOR<BaseTaskUpdateInput, BaseTaskUncheckedUpdateInput>
    /**
     * Choose, which BaseTask to update.
     */
    where: BaseTaskWhereUniqueInput
  }


  /**
   * BaseTask updateMany
   */
  export type BaseTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseTasks.
     */
    data: XOR<BaseTaskUpdateManyMutationInput, BaseTaskUncheckedUpdateManyInput>
    /**
     * Filter which BaseTasks to update
     */
    where?: BaseTaskWhereInput
  }


  /**
   * BaseTask upsert
   */
  export type BaseTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseTask to update in case it exists.
     */
    where: BaseTaskWhereUniqueInput
    /**
     * In case the BaseTask found by the `where` argument doesn't exist, create a new BaseTask with this data.
     */
    create: XOR<BaseTaskCreateInput, BaseTaskUncheckedCreateInput>
    /**
     * In case the BaseTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseTaskUpdateInput, BaseTaskUncheckedUpdateInput>
  }


  /**
   * BaseTask delete
   */
  export type BaseTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
    /**
     * Filter which BaseTask to delete.
     */
    where: BaseTaskWhereUniqueInput
  }


  /**
   * BaseTask deleteMany
   */
  export type BaseTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseTasks to delete
     */
    where?: BaseTaskWhereInput
  }


  /**
   * BaseTask.tasks
   */
  export type BaseTask$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * BaseTask without action
   */
  export type BaseTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseTask
     */
    select?: BaseTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BaseTaskInclude<ExtArgs> | null
  }



  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    baseId: number | null
    restaurantId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    baseId: number | null
    restaurantId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    done: boolean | null
    baseId: number | null
    restaurantId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    done: boolean | null
    baseId: number | null
    restaurantId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    done: number
    baseId: number
    restaurantId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    baseId?: true
    restaurantId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    baseId?: true
    restaurantId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    done?: true
    baseId?: true
    restaurantId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    done?: true
    baseId?: true
    restaurantId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    done?: true
    baseId?: true
    restaurantId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    done: boolean
    baseId: number
    restaurantId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    done?: boolean
    baseId?: boolean
    restaurantId?: boolean
    base?: boolean | BaseTaskDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    done?: boolean
    baseId?: boolean
    restaurantId?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseTaskDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      base: Prisma.$BaseTaskPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      done: boolean
      baseId: number
      restaurantId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    base<T extends BaseTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseTaskDefaultArgs<ExtArgs>>): Prisma__BaseTaskClient<$Result.GetResult<Prisma.$BaseTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly done: FieldRef<"Task", 'Boolean'>
    readonly baseId: FieldRef<"Task", 'Int'>
    readonly restaurantId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TaskInclude<ExtArgs> | null
  }



  /**
   * Model Waiter
   */

  export type AggregateWaiter = {
    _count: WaiterCountAggregateOutputType | null
    _avg: WaiterAvgAggregateOutputType | null
    _sum: WaiterSumAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  export type WaiterAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type WaiterSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type WaiterMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    gender: string | null
    profileIcon: string | null
    password: string | null
    restaurantId: number | null
  }

  export type WaiterMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    name: string | null
    gender: string | null
    profileIcon: string | null
    password: string | null
    restaurantId: number | null
  }

  export type WaiterCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    name: number
    gender: number
    profileIcon: number
    password: number
    restaurantId: number
    _all: number
  }


  export type WaiterAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type WaiterSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type WaiterMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    gender?: true
    profileIcon?: true
    password?: true
    restaurantId?: true
  }

  export type WaiterMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    gender?: true
    profileIcon?: true
    password?: true
    restaurantId?: true
  }

  export type WaiterCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    name?: true
    gender?: true
    profileIcon?: true
    password?: true
    restaurantId?: true
    _all?: true
  }

  export type WaiterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waiter to aggregate.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waiters
    **/
    _count?: true | WaiterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaiterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaiterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaiterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaiterMaxAggregateInputType
  }

  export type GetWaiterAggregateType<T extends WaiterAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiter[P]>
      : GetScalarType<T[P], AggregateWaiter[P]>
  }




  export type WaiterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaiterWhereInput
    orderBy?: WaiterOrderByWithAggregationInput | WaiterOrderByWithAggregationInput[]
    by: WaiterScalarFieldEnum[] | WaiterScalarFieldEnum
    having?: WaiterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaiterCountAggregateInputType | true
    _avg?: WaiterAvgAggregateInputType
    _sum?: WaiterSumAggregateInputType
    _min?: WaiterMinAggregateInputType
    _max?: WaiterMaxAggregateInputType
  }

  export type WaiterGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    name: string
    gender: string
    profileIcon: string | null
    password: string
    restaurantId: number
    _count: WaiterCountAggregateOutputType | null
    _avg: WaiterAvgAggregateOutputType | null
    _sum: WaiterSumAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  type GetWaiterGroupByPayload<T extends WaiterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaiterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaiterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaiterGroupByOutputType[P]>
            : GetScalarType<T[P], WaiterGroupByOutputType[P]>
        }
      >
    >


  export type WaiterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    profileIcon?: boolean
    password?: boolean
    restaurantId?: boolean
    orders?: boolean | Waiter$ordersArgs<ExtArgs>
    meals?: boolean | Waiter$mealsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | WaiterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiter"]>

  export type WaiterSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    profileIcon?: boolean
    password?: boolean
    restaurantId?: boolean
  }

  export type WaiterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Waiter$ordersArgs<ExtArgs>
    meals?: boolean | Waiter$mealsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | WaiterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $WaiterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waiter"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      name: string
      gender: string
      profileIcon: string | null
      password: string
      restaurantId: number
    }, ExtArgs["result"]["waiter"]>
    composites: {}
  }


  type WaiterGetPayload<S extends boolean | null | undefined | WaiterDefaultArgs> = $Result.GetResult<Prisma.$WaiterPayload, S>

  type WaiterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WaiterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaiterCountAggregateInputType | true
    }

  export interface WaiterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waiter'], meta: { name: 'Waiter' } }
    /**
     * Find zero or one Waiter that matches the filter.
     * @param {WaiterFindUniqueArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WaiterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterFindUniqueArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Waiter that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WaiterFindUniqueOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WaiterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Waiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindFirstArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WaiterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterFindFirstArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Waiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindFirstOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WaiterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Waiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waiters
     * const waiters = await prisma.waiter.findMany()
     * 
     * // Get first 10 Waiters
     * const waiters = await prisma.waiter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waiterWithIdOnly = await prisma.waiter.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WaiterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Waiter.
     * @param {WaiterCreateArgs} args - Arguments to create a Waiter.
     * @example
     * // Create one Waiter
     * const Waiter = await prisma.waiter.create({
     *   data: {
     *     // ... data to create a Waiter
     *   }
     * })
     * 
    **/
    create<T extends WaiterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterCreateArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Waiters.
     *     @param {WaiterCreateManyArgs} args - Arguments to create many Waiters.
     *     @example
     *     // Create many Waiters
     *     const waiter = await prisma.waiter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WaiterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Waiter.
     * @param {WaiterDeleteArgs} args - Arguments to delete one Waiter.
     * @example
     * // Delete one Waiter
     * const Waiter = await prisma.waiter.delete({
     *   where: {
     *     // ... filter to delete one Waiter
     *   }
     * })
     * 
    **/
    delete<T extends WaiterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterDeleteArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Waiter.
     * @param {WaiterUpdateArgs} args - Arguments to update one Waiter.
     * @example
     * // Update one Waiter
     * const waiter = await prisma.waiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WaiterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterUpdateArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Waiters.
     * @param {WaiterDeleteManyArgs} args - Arguments to filter Waiters to delete.
     * @example
     * // Delete a few Waiters
     * const { count } = await prisma.waiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WaiterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WaiterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waiters
     * const waiter = await prisma.waiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WaiterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Waiter.
     * @param {WaiterUpsertArgs} args - Arguments to update or create a Waiter.
     * @example
     * // Update or create a Waiter
     * const waiter = await prisma.waiter.upsert({
     *   create: {
     *     // ... data to create a Waiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waiter we want to update
     *   }
     * })
    **/
    upsert<T extends WaiterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WaiterUpsertArgs<ExtArgs>>
    ): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterCountArgs} args - Arguments to filter Waiters to count.
     * @example
     * // Count the number of Waiters
     * const count = await prisma.waiter.count({
     *   where: {
     *     // ... the filter for the Waiters we want to count
     *   }
     * })
    **/
    count<T extends WaiterCountArgs>(
      args?: Subset<T, WaiterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaiterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaiterAggregateArgs>(args: Subset<T, WaiterAggregateArgs>): Prisma.PrismaPromise<GetWaiterAggregateType<T>>

    /**
     * Group by Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaiterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaiterGroupByArgs['orderBy'] }
        : { orderBy?: WaiterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaiterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waiter model
   */
  readonly fields: WaiterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waiter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaiterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Waiter$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Waiter$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    meals<T extends Waiter$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Waiter$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findMany'> | Null>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Waiter model
   */ 
  interface WaiterFieldRefs {
    readonly id: FieldRef<"Waiter", 'Int'>
    readonly createdAt: FieldRef<"Waiter", 'DateTime'>
    readonly email: FieldRef<"Waiter", 'String'>
    readonly name: FieldRef<"Waiter", 'String'>
    readonly gender: FieldRef<"Waiter", 'String'>
    readonly profileIcon: FieldRef<"Waiter", 'String'>
    readonly password: FieldRef<"Waiter", 'String'>
    readonly restaurantId: FieldRef<"Waiter", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Waiter findUnique
   */
  export type WaiterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where: WaiterWhereUniqueInput
  }


  /**
   * Waiter findUniqueOrThrow
   */
  export type WaiterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where: WaiterWhereUniqueInput
  }


  /**
   * Waiter findFirst
   */
  export type WaiterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }


  /**
   * Waiter findFirstOrThrow
   */
  export type WaiterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiter to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }


  /**
   * Waiter findMany
   */
  export type WaiterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter, which Waiters to fetch.
     */
    where?: WaiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waiters to fetch.
     */
    orderBy?: WaiterOrderByWithRelationInput | WaiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waiters.
     */
    cursor?: WaiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waiters.
     */
    skip?: number
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }


  /**
   * Waiter create
   */
  export type WaiterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The data needed to create a Waiter.
     */
    data: XOR<WaiterCreateInput, WaiterUncheckedCreateInput>
  }


  /**
   * Waiter createMany
   */
  export type WaiterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waiters.
     */
    data: WaiterCreateManyInput | WaiterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Waiter update
   */
  export type WaiterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The data needed to update a Waiter.
     */
    data: XOR<WaiterUpdateInput, WaiterUncheckedUpdateInput>
    /**
     * Choose, which Waiter to update.
     */
    where: WaiterWhereUniqueInput
  }


  /**
   * Waiter updateMany
   */
  export type WaiterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waiters.
     */
    data: XOR<WaiterUpdateManyMutationInput, WaiterUncheckedUpdateManyInput>
    /**
     * Filter which Waiters to update
     */
    where?: WaiterWhereInput
  }


  /**
   * Waiter upsert
   */
  export type WaiterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * The filter to search for the Waiter to update in case it exists.
     */
    where: WaiterWhereUniqueInput
    /**
     * In case the Waiter found by the `where` argument doesn't exist, create a new Waiter with this data.
     */
    create: XOR<WaiterCreateInput, WaiterUncheckedCreateInput>
    /**
     * In case the Waiter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaiterUpdateInput, WaiterUncheckedUpdateInput>
  }


  /**
   * Waiter delete
   */
  export type WaiterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    /**
     * Filter which Waiter to delete.
     */
    where: WaiterWhereUniqueInput
  }


  /**
   * Waiter deleteMany
   */
  export type WaiterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waiters to delete
     */
    where?: WaiterWhereInput
  }


  /**
   * Waiter.orders
   */
  export type Waiter$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Waiter.meals
   */
  export type Waiter$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Waiter without action
   */
  export type WaiterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
  }



  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    mealId: number | null
    victualId: number | null
    restaurantId: number | null
    tableId: number | null
    waiterId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    mealId: number | null
    victualId: number | null
    restaurantId: number | null
    tableId: number | null
    waiterId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    isReady: boolean | null
    closed: boolean | null
    quantity: number | null
    mealId: number | null
    victualId: number | null
    restaurantId: number | null
    tableId: number | null
    waiterId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    description: string | null
    createdAt: Date | null
    isReady: boolean | null
    closed: boolean | null
    quantity: number | null
    mealId: number | null
    victualId: number | null
    restaurantId: number | null
    tableId: number | null
    waiterId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    description: number
    createdAt: number
    isReady: number
    closed: number
    quantity: number
    mealId: number
    victualId: number
    restaurantId: number
    tableId: number
    waiterId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    quantity?: true
    mealId?: true
    victualId?: true
    restaurantId?: true
    tableId?: true
    waiterId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    quantity?: true
    mealId?: true
    victualId?: true
    restaurantId?: true
    tableId?: true
    waiterId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    isReady?: true
    closed?: true
    quantity?: true
    mealId?: true
    victualId?: true
    restaurantId?: true
    tableId?: true
    waiterId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    isReady?: true
    closed?: true
    quantity?: true
    mealId?: true
    victualId?: true
    restaurantId?: true
    tableId?: true
    waiterId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    description?: true
    createdAt?: true
    isReady?: true
    closed?: true
    quantity?: true
    mealId?: true
    victualId?: true
    restaurantId?: true
    tableId?: true
    waiterId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    description: string | null
    createdAt: Date
    isReady: boolean
    closed: boolean
    quantity: number
    mealId: number | null
    victualId: number
    restaurantId: number
    tableId: number | null
    waiterId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    isReady?: boolean
    closed?: boolean
    quantity?: boolean
    mealId?: boolean
    victualId?: boolean
    restaurantId?: boolean
    tableId?: boolean
    waiterId?: boolean
    waiter?: boolean | WaiterDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    victual?: boolean | VictualDefaultArgs<ExtArgs>
    meal?: boolean | Order$mealArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    isReady?: boolean
    closed?: boolean
    quantity?: boolean
    mealId?: boolean
    victualId?: boolean
    restaurantId?: boolean
    tableId?: boolean
    waiterId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    waiter?: boolean | WaiterDefaultArgs<ExtArgs>
    table?: boolean | Order$tableArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    victual?: boolean | VictualDefaultArgs<ExtArgs>
    meal?: boolean | Order$mealArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      waiter: Prisma.$WaiterPayload<ExtArgs>
      table: Prisma.$TablePayload<ExtArgs> | null
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      victual: Prisma.$VictualPayload<ExtArgs>
      meal: Prisma.$MealPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string | null
      createdAt: Date
      isReady: boolean
      closed: boolean
      quantity: number
      mealId: number | null
      victualId: number
      restaurantId: number
      tableId: number | null
      waiterId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }


  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends OrderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const order = await prisma.order.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends OrderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends OrderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>
    ): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    waiter<T extends WaiterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WaiterDefaultArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    table<T extends Order$tableArgs<ExtArgs> = {}>(args?: Subset<T, Order$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    victual<T extends VictualDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VictualDefaultArgs<ExtArgs>>): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    meal<T extends Order$mealArgs<ExtArgs> = {}>(args?: Subset<T, Order$mealArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly description: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly isReady: FieldRef<"Order", 'Boolean'>
    readonly closed: FieldRef<"Order", 'Boolean'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly mealId: FieldRef<"Order", 'Int'>
    readonly victualId: FieldRef<"Order", 'Int'>
    readonly restaurantId: FieldRef<"Order", 'Int'>
    readonly tableId: FieldRef<"Order", 'Int'>
    readonly waiterId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }


  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }


  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }


  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }


  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }


  /**
   * Order.table
   */
  export type Order$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }


  /**
   * Order.meal
   */
  export type Order$mealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
  }


  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
  }



  /**
   * Model Victual
   */

  export type AggregateVictual = {
    _count: VictualCountAggregateOutputType | null
    _avg: VictualAvgAggregateOutputType | null
    _sum: VictualSumAggregateOutputType | null
    _min: VictualMinAggregateOutputType | null
    _max: VictualMaxAggregateOutputType | null
  }

  export type VictualAvgAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
    categoryId: number | null
  }

  export type VictualSumAggregateOutputType = {
    id: number | null
    price: number | null
    restaurantId: number | null
    categoryId: number | null
  }

  export type VictualMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    price: number | null
    restaurantId: number | null
    categoryId: number | null
  }

  export type VictualMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    price: number | null
    restaurantId: number | null
    categoryId: number | null
  }

  export type VictualCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    price: number
    restaurantId: number
    categoryId: number
    _all: number
  }


  export type VictualAvgAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
    categoryId?: true
  }

  export type VictualSumAggregateInputType = {
    id?: true
    price?: true
    restaurantId?: true
    categoryId?: true
  }

  export type VictualMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    price?: true
    restaurantId?: true
    categoryId?: true
  }

  export type VictualMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    price?: true
    restaurantId?: true
    categoryId?: true
  }

  export type VictualCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    price?: true
    restaurantId?: true
    categoryId?: true
    _all?: true
  }

  export type VictualAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Victual to aggregate.
     */
    where?: VictualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victuals to fetch.
     */
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VictualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Victuals
    **/
    _count?: true | VictualCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VictualAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VictualSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VictualMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VictualMaxAggregateInputType
  }

  export type GetVictualAggregateType<T extends VictualAggregateArgs> = {
        [P in keyof T & keyof AggregateVictual]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVictual[P]>
      : GetScalarType<T[P], AggregateVictual[P]>
  }




  export type VictualGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VictualWhereInput
    orderBy?: VictualOrderByWithAggregationInput | VictualOrderByWithAggregationInput[]
    by: VictualScalarFieldEnum[] | VictualScalarFieldEnum
    having?: VictualScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VictualCountAggregateInputType | true
    _avg?: VictualAvgAggregateInputType
    _sum?: VictualSumAggregateInputType
    _min?: VictualMinAggregateInputType
    _max?: VictualMaxAggregateInputType
  }

  export type VictualGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    price: number
    restaurantId: number
    categoryId: number | null
    _count: VictualCountAggregateOutputType | null
    _avg: VictualAvgAggregateOutputType | null
    _sum: VictualSumAggregateOutputType | null
    _min: VictualMinAggregateOutputType | null
    _max: VictualMaxAggregateOutputType | null
  }

  type GetVictualGroupByPayload<T extends VictualGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VictualGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VictualGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VictualGroupByOutputType[P]>
            : GetScalarType<T[P], VictualGroupByOutputType[P]>
        }
      >
    >


  export type VictualSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    price?: boolean
    restaurantId?: boolean
    categoryId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | Victual$categoryArgs<ExtArgs>
    orders?: boolean | Victual$ordersArgs<ExtArgs>
    _count?: boolean | VictualCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["victual"]>

  export type VictualSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    price?: boolean
    restaurantId?: boolean
    categoryId?: boolean
  }

  export type VictualInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    category?: boolean | Victual$categoryArgs<ExtArgs>
    orders?: boolean | Victual$ordersArgs<ExtArgs>
    _count?: boolean | VictualCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VictualPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Victual"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      price: number
      restaurantId: number
      categoryId: number | null
    }, ExtArgs["result"]["victual"]>
    composites: {}
  }


  type VictualGetPayload<S extends boolean | null | undefined | VictualDefaultArgs> = $Result.GetResult<Prisma.$VictualPayload, S>

  type VictualCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VictualFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VictualCountAggregateInputType | true
    }

  export interface VictualDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Victual'], meta: { name: 'Victual' } }
    /**
     * Find zero or one Victual that matches the filter.
     * @param {VictualFindUniqueArgs} args - Arguments to find a Victual
     * @example
     * // Get one Victual
     * const victual = await prisma.victual.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VictualFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VictualFindUniqueArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Victual that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VictualFindUniqueOrThrowArgs} args - Arguments to find a Victual
     * @example
     * // Get one Victual
     * const victual = await prisma.victual.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VictualFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Victual that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualFindFirstArgs} args - Arguments to find a Victual
     * @example
     * // Get one Victual
     * const victual = await prisma.victual.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VictualFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualFindFirstArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Victual that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualFindFirstOrThrowArgs} args - Arguments to find a Victual
     * @example
     * // Get one Victual
     * const victual = await prisma.victual.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VictualFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Victuals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Victuals
     * const victuals = await prisma.victual.findMany()
     * 
     * // Get first 10 Victuals
     * const victuals = await prisma.victual.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const victualWithIdOnly = await prisma.victual.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VictualFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Victual.
     * @param {VictualCreateArgs} args - Arguments to create a Victual.
     * @example
     * // Create one Victual
     * const Victual = await prisma.victual.create({
     *   data: {
     *     // ... data to create a Victual
     *   }
     * })
     * 
    **/
    create<T extends VictualCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VictualCreateArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Victuals.
     *     @param {VictualCreateManyArgs} args - Arguments to create many Victuals.
     *     @example
     *     // Create many Victuals
     *     const victual = await prisma.victual.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VictualCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Victual.
     * @param {VictualDeleteArgs} args - Arguments to delete one Victual.
     * @example
     * // Delete one Victual
     * const Victual = await prisma.victual.delete({
     *   where: {
     *     // ... filter to delete one Victual
     *   }
     * })
     * 
    **/
    delete<T extends VictualDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VictualDeleteArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Victual.
     * @param {VictualUpdateArgs} args - Arguments to update one Victual.
     * @example
     * // Update one Victual
     * const victual = await prisma.victual.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VictualUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VictualUpdateArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Victuals.
     * @param {VictualDeleteManyArgs} args - Arguments to filter Victuals to delete.
     * @example
     * // Delete a few Victuals
     * const { count } = await prisma.victual.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VictualDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VictualDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Victuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Victuals
     * const victual = await prisma.victual.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VictualUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VictualUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Victual.
     * @param {VictualUpsertArgs} args - Arguments to update or create a Victual.
     * @example
     * // Update or create a Victual
     * const victual = await prisma.victual.upsert({
     *   create: {
     *     // ... data to create a Victual
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Victual we want to update
     *   }
     * })
    **/
    upsert<T extends VictualUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VictualUpsertArgs<ExtArgs>>
    ): Prisma__VictualClient<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Victuals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualCountArgs} args - Arguments to filter Victuals to count.
     * @example
     * // Count the number of Victuals
     * const count = await prisma.victual.count({
     *   where: {
     *     // ... the filter for the Victuals we want to count
     *   }
     * })
    **/
    count<T extends VictualCountArgs>(
      args?: Subset<T, VictualCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VictualCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Victual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VictualAggregateArgs>(args: Subset<T, VictualAggregateArgs>): Prisma.PrismaPromise<GetVictualAggregateType<T>>

    /**
     * Group by Victual.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VictualGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VictualGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VictualGroupByArgs['orderBy'] }
        : { orderBy?: VictualGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VictualGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVictualGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Victual model
   */
  readonly fields: VictualFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Victual.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VictualClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends Victual$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Victual$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    orders<T extends Victual$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Victual$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Victual model
   */ 
  interface VictualFieldRefs {
    readonly id: FieldRef<"Victual", 'Int'>
    readonly createdAt: FieldRef<"Victual", 'DateTime'>
    readonly name: FieldRef<"Victual", 'String'>
    readonly price: FieldRef<"Victual", 'Float'>
    readonly restaurantId: FieldRef<"Victual", 'Int'>
    readonly categoryId: FieldRef<"Victual", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Victual findUnique
   */
  export type VictualFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter, which Victual to fetch.
     */
    where: VictualWhereUniqueInput
  }


  /**
   * Victual findUniqueOrThrow
   */
  export type VictualFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter, which Victual to fetch.
     */
    where: VictualWhereUniqueInput
  }


  /**
   * Victual findFirst
   */
  export type VictualFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter, which Victual to fetch.
     */
    where?: VictualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victuals to fetch.
     */
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Victuals.
     */
    cursor?: VictualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Victuals.
     */
    distinct?: VictualScalarFieldEnum | VictualScalarFieldEnum[]
  }


  /**
   * Victual findFirstOrThrow
   */
  export type VictualFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter, which Victual to fetch.
     */
    where?: VictualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victuals to fetch.
     */
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Victuals.
     */
    cursor?: VictualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victuals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Victuals.
     */
    distinct?: VictualScalarFieldEnum | VictualScalarFieldEnum[]
  }


  /**
   * Victual findMany
   */
  export type VictualFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter, which Victuals to fetch.
     */
    where?: VictualWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Victuals to fetch.
     */
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Victuals.
     */
    cursor?: VictualWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Victuals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Victuals.
     */
    skip?: number
    distinct?: VictualScalarFieldEnum | VictualScalarFieldEnum[]
  }


  /**
   * Victual create
   */
  export type VictualCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * The data needed to create a Victual.
     */
    data: XOR<VictualCreateInput, VictualUncheckedCreateInput>
  }


  /**
   * Victual createMany
   */
  export type VictualCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Victuals.
     */
    data: VictualCreateManyInput | VictualCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Victual update
   */
  export type VictualUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * The data needed to update a Victual.
     */
    data: XOR<VictualUpdateInput, VictualUncheckedUpdateInput>
    /**
     * Choose, which Victual to update.
     */
    where: VictualWhereUniqueInput
  }


  /**
   * Victual updateMany
   */
  export type VictualUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Victuals.
     */
    data: XOR<VictualUpdateManyMutationInput, VictualUncheckedUpdateManyInput>
    /**
     * Filter which Victuals to update
     */
    where?: VictualWhereInput
  }


  /**
   * Victual upsert
   */
  export type VictualUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * The filter to search for the Victual to update in case it exists.
     */
    where: VictualWhereUniqueInput
    /**
     * In case the Victual found by the `where` argument doesn't exist, create a new Victual with this data.
     */
    create: XOR<VictualCreateInput, VictualUncheckedCreateInput>
    /**
     * In case the Victual was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VictualUpdateInput, VictualUncheckedUpdateInput>
  }


  /**
   * Victual delete
   */
  export type VictualDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    /**
     * Filter which Victual to delete.
     */
    where: VictualWhereUniqueInput
  }


  /**
   * Victual deleteMany
   */
  export type VictualDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Victuals to delete
     */
    where?: VictualWhereInput
  }


  /**
   * Victual.category
   */
  export type Victual$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Victual.orders
   */
  export type Victual$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Victual without action
   */
  export type VictualDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
    parentId: number | null
    level: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
    parentId: number | null
    level: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    restaurantId: number | null
    parentId: number | null
    root: boolean | null
    level: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    restaurantId: number | null
    parentId: number | null
    root: boolean | null
    level: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    restaurantId: number
    parentId: number
    root: number
    level: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    restaurantId?: true
    parentId?: true
    level?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    restaurantId?: true
    parentId?: true
    level?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
    parentId?: true
    root?: true
    level?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
    parentId?: true
    root?: true
    level?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
    parentId?: true
    root?: true
    level?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    restaurantId: number
    parentId: number | null
    root: boolean
    level: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    restaurantId?: boolean
    parentId?: boolean
    root?: boolean
    level?: boolean
    victuals?: boolean | Category$victualsArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    restaurantId?: boolean
    parentId?: boolean
    root?: boolean
    level?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    victuals?: boolean | Category$victualsArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    subCategories?: boolean | Category$subCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      victuals: Prisma.$VictualPayload<ExtArgs>[]
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      subCategories: Prisma.$CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      restaurantId: number
      parentId: number | null
      root: boolean
      level: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    victuals<T extends Category$victualsArgs<ExtArgs> = {}>(args?: Subset<T, Category$victualsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VictualPayload<ExtArgs>, T, 'findMany'> | Null>;

    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subCategories<T extends Category$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly name: FieldRef<"Category", 'String'>
    readonly restaurantId: FieldRef<"Category", 'Int'>
    readonly parentId: FieldRef<"Category", 'Int'>
    readonly root: FieldRef<"Category", 'Boolean'>
    readonly level: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.victuals
   */
  export type Category$victualsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Victual
     */
    select?: VictualSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VictualInclude<ExtArgs> | null
    where?: VictualWhereInput
    orderBy?: VictualOrderByWithRelationInput | VictualOrderByWithRelationInput[]
    cursor?: VictualWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VictualScalarFieldEnum | VictualScalarFieldEnum[]
  }


  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }


  /**
   * Category.subCategories
   */
  export type Category$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type TableSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type TableMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    restaurantId: number | null
  }

  export type TableMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    restaurantId: number | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    restaurantId: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type TableSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    restaurantId?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    restaurantId: number
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    restaurantId?: boolean
    orders?: boolean | Table$ordersArgs<ExtArgs>
    meals?: boolean | Table$mealsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    restaurantId?: boolean
  }

  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Table$ordersArgs<ExtArgs>
    meals?: boolean | Table$mealsArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      meals: Prisma.$MealPayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      restaurantId: number
    }, ExtArgs["result"]["table"]>
    composites: {}
  }


  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TableFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Table that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TableFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TableFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
    **/
    create<T extends TableCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TableCreateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tables.
     *     @param {TableCreateManyArgs} args - Arguments to create many Tables.
     *     @example
     *     // Create many Tables
     *     const table = await prisma.table.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TableCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
    **/
    delete<T extends TableDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TableDeleteArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TableUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TableDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TableUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
    **/
    upsert<T extends TableUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TableUpsertArgs<ExtArgs>>
    ): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Table$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Table$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    meals<T extends Table$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Table$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findMany'> | Null>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Table model
   */ 
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'Int'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly name: FieldRef<"Table", 'String'>
    readonly restaurantId: FieldRef<"Table", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }


  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }


  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
  }


  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }


  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }


  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
  }


  /**
   * Table.orders
   */
  export type Table$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Table.meals
   */
  export type Table$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
  }



  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    total: number | null
    restaurantId: number | null
    waiterId: number | null
    tableId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    total: number | null
    restaurantId: number | null
    waiterId: number | null
    tableId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    start: Date | null
    end: Date | null
    total: number | null
    restaurantId: number | null
    waiterId: number | null
    tableId: number | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    start: Date | null
    end: Date | null
    total: number | null
    restaurantId: number | null
    waiterId: number | null
    tableId: number | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    createdAt: number
    start: number
    end: number
    total: number
    restaurantId: number
    waiterId: number
    tableId: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    total?: true
    restaurantId?: true
    waiterId?: true
    tableId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    total?: true
    restaurantId?: true
    waiterId?: true
    tableId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    createdAt?: true
    start?: true
    end?: true
    total?: true
    restaurantId?: true
    waiterId?: true
    tableId?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    createdAt?: true
    start?: true
    end?: true
    total?: true
    restaurantId?: true
    waiterId?: true
    tableId?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    createdAt?: true
    start?: true
    end?: true
    total?: true
    restaurantId?: true
    waiterId?: true
    tableId?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    createdAt: Date
    start: Date
    end: Date
    total: number
    restaurantId: number
    waiterId: number | null
    tableId: number | null
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    start?: boolean
    end?: boolean
    total?: boolean
    restaurantId?: boolean
    waiterId?: boolean
    tableId?: boolean
    orders?: boolean | Meal$ordersArgs<ExtArgs>
    waiter?: boolean | Meal$waiterArgs<ExtArgs>
    table?: boolean | Meal$tableArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    createdAt?: boolean
    start?: boolean
    end?: boolean
    total?: boolean
    restaurantId?: boolean
    waiterId?: boolean
    tableId?: boolean
  }

  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Meal$ordersArgs<ExtArgs>
    waiter?: boolean | Meal$waiterArgs<ExtArgs>
    table?: boolean | Meal$tableArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      waiter: Prisma.$WaiterPayload<ExtArgs> | null
      table: Prisma.$TablePayload<ExtArgs> | null
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      start: Date
      end: Date
      total: number
      restaurantId: number
      waiterId: number | null
      tableId: number | null
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }


  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MealFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Meal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MealFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MealFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
    **/
    create<T extends MealCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MealCreateArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Meals.
     *     @param {MealCreateManyArgs} args - Arguments to create many Meals.
     *     @example
     *     // Create many Meals
     *     const meal = await prisma.meal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MealCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
    **/
    delete<T extends MealDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MealDeleteArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MealUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpdateArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MealDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MealUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
    **/
    upsert<T extends MealUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MealUpsertArgs<ExtArgs>>
    ): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    orders<T extends Meal$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

    waiter<T extends Meal$waiterArgs<ExtArgs> = {}>(args?: Subset<T, Meal$waiterArgs<ExtArgs>>): Prisma__WaiterClient<$Result.GetResult<Prisma.$WaiterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    table<T extends Meal$tableArgs<ExtArgs> = {}>(args?: Subset<T, Meal$tableArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Meal model
   */ 
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
    readonly start: FieldRef<"Meal", 'DateTime'>
    readonly end: FieldRef<"Meal", 'DateTime'>
    readonly total: FieldRef<"Meal", 'Float'>
    readonly restaurantId: FieldRef<"Meal", 'Int'>
    readonly waiterId: FieldRef<"Meal", 'Int'>
    readonly tableId: FieldRef<"Meal", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }


  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }


  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
  }


  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }


  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }


  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
  }


  /**
   * Meal.orders
   */
  export type Meal$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }


  /**
   * Meal.waiter
   */
  export type Meal$waiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waiter
     */
    select?: WaiterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WaiterInclude<ExtArgs> | null
    where?: WaiterWhereInput
  }


  /**
   * Meal.table
   */
  export type Meal$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
  }


  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MealInclude<ExtArgs> | null
  }



  /**
   * Model OpeningHour
   */

  export type AggregateOpeningHour = {
    _count: OpeningHourCountAggregateOutputType | null
    _avg: OpeningHourAvgAggregateOutputType | null
    _sum: OpeningHourSumAggregateOutputType | null
    _min: OpeningHourMinAggregateOutputType | null
    _max: OpeningHourMaxAggregateOutputType | null
  }

  export type OpeningHourAvgAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type OpeningHourSumAggregateOutputType = {
    id: number | null
    restaurantId: number | null
  }

  export type OpeningHourMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    start: string | null
    end: string | null
    restaurantId: number | null
  }

  export type OpeningHourMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    name: string | null
    start: string | null
    end: string | null
    restaurantId: number | null
  }

  export type OpeningHourCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    start: number
    end: number
    restaurantId: number
    _all: number
  }


  export type OpeningHourAvgAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type OpeningHourSumAggregateInputType = {
    id?: true
    restaurantId?: true
  }

  export type OpeningHourMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    start?: true
    end?: true
    restaurantId?: true
  }

  export type OpeningHourMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    start?: true
    end?: true
    restaurantId?: true
  }

  export type OpeningHourCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    start?: true
    end?: true
    restaurantId?: true
    _all?: true
  }

  export type OpeningHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpeningHour to aggregate.
     */
    where?: OpeningHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHourOrderByWithRelationInput | OpeningHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpeningHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpeningHours
    **/
    _count?: true | OpeningHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpeningHourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpeningHourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpeningHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpeningHourMaxAggregateInputType
  }

  export type GetOpeningHourAggregateType<T extends OpeningHourAggregateArgs> = {
        [P in keyof T & keyof AggregateOpeningHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpeningHour[P]>
      : GetScalarType<T[P], AggregateOpeningHour[P]>
  }




  export type OpeningHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpeningHourWhereInput
    orderBy?: OpeningHourOrderByWithAggregationInput | OpeningHourOrderByWithAggregationInput[]
    by: OpeningHourScalarFieldEnum[] | OpeningHourScalarFieldEnum
    having?: OpeningHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpeningHourCountAggregateInputType | true
    _avg?: OpeningHourAvgAggregateInputType
    _sum?: OpeningHourSumAggregateInputType
    _min?: OpeningHourMinAggregateInputType
    _max?: OpeningHourMaxAggregateInputType
  }

  export type OpeningHourGroupByOutputType = {
    id: number
    createdAt: Date
    name: string
    start: string
    end: string
    restaurantId: number
    _count: OpeningHourCountAggregateOutputType | null
    _avg: OpeningHourAvgAggregateOutputType | null
    _sum: OpeningHourSumAggregateOutputType | null
    _min: OpeningHourMinAggregateOutputType | null
    _max: OpeningHourMaxAggregateOutputType | null
  }

  type GetOpeningHourGroupByPayload<T extends OpeningHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpeningHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpeningHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpeningHourGroupByOutputType[P]>
            : GetScalarType<T[P], OpeningHourGroupByOutputType[P]>
        }
      >
    >


  export type OpeningHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["openingHour"]>

  export type OpeningHourSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    start?: boolean
    end?: boolean
    restaurantId?: boolean
  }

  export type OpeningHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }


  export type $OpeningHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpeningHour"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      name: string
      start: string
      end: string
      restaurantId: number
    }, ExtArgs["result"]["openingHour"]>
    composites: {}
  }


  type OpeningHourGetPayload<S extends boolean | null | undefined | OpeningHourDefaultArgs> = $Result.GetResult<Prisma.$OpeningHourPayload, S>

  type OpeningHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OpeningHourFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OpeningHourCountAggregateInputType | true
    }

  export interface OpeningHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpeningHour'], meta: { name: 'OpeningHour' } }
    /**
     * Find zero or one OpeningHour that matches the filter.
     * @param {OpeningHourFindUniqueArgs} args - Arguments to find a OpeningHour
     * @example
     * // Get one OpeningHour
     * const openingHour = await prisma.openingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OpeningHourFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourFindUniqueArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OpeningHour that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OpeningHourFindUniqueOrThrowArgs} args - Arguments to find a OpeningHour
     * @example
     * // Get one OpeningHour
     * const openingHour = await prisma.openingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OpeningHourFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OpeningHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourFindFirstArgs} args - Arguments to find a OpeningHour
     * @example
     * // Get one OpeningHour
     * const openingHour = await prisma.openingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OpeningHourFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourFindFirstArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OpeningHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourFindFirstOrThrowArgs} args - Arguments to find a OpeningHour
     * @example
     * // Get one OpeningHour
     * const openingHour = await prisma.openingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OpeningHourFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OpeningHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpeningHours
     * const openingHours = await prisma.openingHour.findMany()
     * 
     * // Get first 10 OpeningHours
     * const openingHours = await prisma.openingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const openingHourWithIdOnly = await prisma.openingHour.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OpeningHourFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OpeningHour.
     * @param {OpeningHourCreateArgs} args - Arguments to create a OpeningHour.
     * @example
     * // Create one OpeningHour
     * const OpeningHour = await prisma.openingHour.create({
     *   data: {
     *     // ... data to create a OpeningHour
     *   }
     * })
     * 
    **/
    create<T extends OpeningHourCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourCreateArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OpeningHours.
     *     @param {OpeningHourCreateManyArgs} args - Arguments to create many OpeningHours.
     *     @example
     *     // Create many OpeningHours
     *     const openingHour = await prisma.openingHour.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OpeningHourCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OpeningHour.
     * @param {OpeningHourDeleteArgs} args - Arguments to delete one OpeningHour.
     * @example
     * // Delete one OpeningHour
     * const OpeningHour = await prisma.openingHour.delete({
     *   where: {
     *     // ... filter to delete one OpeningHour
     *   }
     * })
     * 
    **/
    delete<T extends OpeningHourDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourDeleteArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OpeningHour.
     * @param {OpeningHourUpdateArgs} args - Arguments to update one OpeningHour.
     * @example
     * // Update one OpeningHour
     * const openingHour = await prisma.openingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OpeningHourUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourUpdateArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OpeningHours.
     * @param {OpeningHourDeleteManyArgs} args - Arguments to filter OpeningHours to delete.
     * @example
     * // Delete a few OpeningHours
     * const { count } = await prisma.openingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OpeningHourDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OpeningHourDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpeningHours
     * const openingHour = await prisma.openingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OpeningHourUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpeningHour.
     * @param {OpeningHourUpsertArgs} args - Arguments to update or create a OpeningHour.
     * @example
     * // Update or create a OpeningHour
     * const openingHour = await prisma.openingHour.upsert({
     *   create: {
     *     // ... data to create a OpeningHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpeningHour we want to update
     *   }
     * })
    **/
    upsert<T extends OpeningHourUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OpeningHourUpsertArgs<ExtArgs>>
    ): Prisma__OpeningHourClient<$Result.GetResult<Prisma.$OpeningHourPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OpeningHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourCountArgs} args - Arguments to filter OpeningHours to count.
     * @example
     * // Count the number of OpeningHours
     * const count = await prisma.openingHour.count({
     *   where: {
     *     // ... the filter for the OpeningHours we want to count
     *   }
     * })
    **/
    count<T extends OpeningHourCountArgs>(
      args?: Subset<T, OpeningHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpeningHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpeningHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpeningHourAggregateArgs>(args: Subset<T, OpeningHourAggregateArgs>): Prisma.PrismaPromise<GetOpeningHourAggregateType<T>>

    /**
     * Group by OpeningHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpeningHourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpeningHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpeningHourGroupByArgs['orderBy'] }
        : { orderBy?: OpeningHourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpeningHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpeningHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpeningHour model
   */
  readonly fields: OpeningHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpeningHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpeningHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OpeningHour model
   */ 
  interface OpeningHourFieldRefs {
    readonly id: FieldRef<"OpeningHour", 'Int'>
    readonly createdAt: FieldRef<"OpeningHour", 'DateTime'>
    readonly name: FieldRef<"OpeningHour", 'String'>
    readonly start: FieldRef<"OpeningHour", 'String'>
    readonly end: FieldRef<"OpeningHour", 'String'>
    readonly restaurantId: FieldRef<"OpeningHour", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OpeningHour findUnique
   */
  export type OpeningHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHour to fetch.
     */
    where: OpeningHourWhereUniqueInput
  }


  /**
   * OpeningHour findUniqueOrThrow
   */
  export type OpeningHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHour to fetch.
     */
    where: OpeningHourWhereUniqueInput
  }


  /**
   * OpeningHour findFirst
   */
  export type OpeningHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHour to fetch.
     */
    where?: OpeningHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHourOrderByWithRelationInput | OpeningHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpeningHours.
     */
    cursor?: OpeningHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpeningHours.
     */
    distinct?: OpeningHourScalarFieldEnum | OpeningHourScalarFieldEnum[]
  }


  /**
   * OpeningHour findFirstOrThrow
   */
  export type OpeningHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHour to fetch.
     */
    where?: OpeningHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHourOrderByWithRelationInput | OpeningHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpeningHours.
     */
    cursor?: OpeningHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpeningHours.
     */
    distinct?: OpeningHourScalarFieldEnum | OpeningHourScalarFieldEnum[]
  }


  /**
   * OpeningHour findMany
   */
  export type OpeningHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter, which OpeningHours to fetch.
     */
    where?: OpeningHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpeningHours to fetch.
     */
    orderBy?: OpeningHourOrderByWithRelationInput | OpeningHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpeningHours.
     */
    cursor?: OpeningHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpeningHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpeningHours.
     */
    skip?: number
    distinct?: OpeningHourScalarFieldEnum | OpeningHourScalarFieldEnum[]
  }


  /**
   * OpeningHour create
   */
  export type OpeningHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * The data needed to create a OpeningHour.
     */
    data: XOR<OpeningHourCreateInput, OpeningHourUncheckedCreateInput>
  }


  /**
   * OpeningHour createMany
   */
  export type OpeningHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpeningHours.
     */
    data: OpeningHourCreateManyInput | OpeningHourCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OpeningHour update
   */
  export type OpeningHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * The data needed to update a OpeningHour.
     */
    data: XOR<OpeningHourUpdateInput, OpeningHourUncheckedUpdateInput>
    /**
     * Choose, which OpeningHour to update.
     */
    where: OpeningHourWhereUniqueInput
  }


  /**
   * OpeningHour updateMany
   */
  export type OpeningHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpeningHours.
     */
    data: XOR<OpeningHourUpdateManyMutationInput, OpeningHourUncheckedUpdateManyInput>
    /**
     * Filter which OpeningHours to update
     */
    where?: OpeningHourWhereInput
  }


  /**
   * OpeningHour upsert
   */
  export type OpeningHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * The filter to search for the OpeningHour to update in case it exists.
     */
    where: OpeningHourWhereUniqueInput
    /**
     * In case the OpeningHour found by the `where` argument doesn't exist, create a new OpeningHour with this data.
     */
    create: XOR<OpeningHourCreateInput, OpeningHourUncheckedCreateInput>
    /**
     * In case the OpeningHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpeningHourUpdateInput, OpeningHourUncheckedUpdateInput>
  }


  /**
   * OpeningHour delete
   */
  export type OpeningHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
    /**
     * Filter which OpeningHour to delete.
     */
    where: OpeningHourWhereUniqueInput
  }


  /**
   * OpeningHour deleteMany
   */
  export type OpeningHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpeningHours to delete
     */
    where?: OpeningHourWhereInput
  }


  /**
   * OpeningHour without action
   */
  export type OpeningHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpeningHour
     */
    select?: OpeningHourSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OpeningHourInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    email: 'email',
    password: 'password',
    currencyId: 'currencyId'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    enableAnalytics: 'enableAnalytics',
    restaurantId: 'restaurantId'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    country: 'country',
    zip: 'zip',
    city: 'city',
    address1: 'address1',
    address2: 'address2',
    restaurantId: 'restaurantId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const BaseTaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    action: 'action'
  };

  export type BaseTaskScalarFieldEnum = (typeof BaseTaskScalarFieldEnum)[keyof typeof BaseTaskScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    done: 'done',
    baseId: 'baseId',
    restaurantId: 'restaurantId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const WaiterScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    gender: 'gender',
    profileIcon: 'profileIcon',
    password: 'password',
    restaurantId: 'restaurantId'
  };

  export type WaiterScalarFieldEnum = (typeof WaiterScalarFieldEnum)[keyof typeof WaiterScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    description: 'description',
    createdAt: 'createdAt',
    isReady: 'isReady',
    closed: 'closed',
    quantity: 'quantity',
    mealId: 'mealId',
    victualId: 'victualId',
    restaurantId: 'restaurantId',
    tableId: 'tableId',
    waiterId: 'waiterId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const VictualScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    price: 'price',
    restaurantId: 'restaurantId',
    categoryId: 'categoryId'
  };

  export type VictualScalarFieldEnum = (typeof VictualScalarFieldEnum)[keyof typeof VictualScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    restaurantId: 'restaurantId',
    parentId: 'parentId',
    root: 'root',
    level: 'level'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    restaurantId: 'restaurantId'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    start: 'start',
    end: 'end',
    total: 'total',
    restaurantId: 'restaurantId',
    waiterId: 'waiterId',
    tableId: 'tableId'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const OpeningHourScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    start: 'start',
    end: 'end',
    restaurantId: 'restaurantId'
  };

  export type OpeningHourScalarFieldEnum = (typeof OpeningHourScalarFieldEnum)[keyof typeof OpeningHourScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    name?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    currencyId?: IntNullableFilter<"Restaurant"> | number | null
    address?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    currency?: XOR<CurrencyNullableRelationFilter, CurrencyWhereInput> | null
    settings?: XOR<SettingsNullableRelationFilter, SettingsWhereInput> | null
    tasks?: TaskListRelationFilter
    openingHours?: OpeningHourListRelationFilter
    waiters?: WaiterListRelationFilter
    orders?: OrderListRelationFilter
    victuals?: VictualListRelationFilter
    categories?: CategoryListRelationFilter
    tables?: TableListRelationFilter
    meals?: MealListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    currencyId?: SortOrderInput | SortOrder
    address?: AddressOrderByWithRelationInput
    currency?: CurrencyOrderByWithRelationInput
    settings?: SettingsOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    openingHours?: OpeningHourOrderByRelationAggregateInput
    waiters?: WaiterOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    victuals?: VictualOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    tables?: TableOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    name?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    currencyId?: IntNullableFilter<"Restaurant"> | number | null
    address?: XOR<AddressNullableRelationFilter, AddressWhereInput> | null
    currency?: XOR<CurrencyNullableRelationFilter, CurrencyWhereInput> | null
    settings?: XOR<SettingsNullableRelationFilter, SettingsWhereInput> | null
    tasks?: TaskListRelationFilter
    openingHours?: OpeningHourListRelationFilter
    waiters?: WaiterListRelationFilter
    orders?: OrderListRelationFilter
    victuals?: VictualListRelationFilter
    categories?: CategoryListRelationFilter
    tables?: TableListRelationFilter
    meals?: MealListRelationFilter
  }, "id" | "id" | "email">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    currencyId?: SortOrderInput | SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurant"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    email?: StringWithAggregatesFilter<"Restaurant"> | string
    password?: StringWithAggregatesFilter<"Restaurant"> | string
    currencyId?: IntNullableWithAggregatesFilter<"Restaurant"> | number | null
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    enableAnalytics?: BoolFilter<"Settings"> | boolean
    restaurantId?: IntFilter<"Settings"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enableAnalytics?: SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restaurantId?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    createdAt?: DateTimeFilter<"Settings"> | Date | string
    enableAnalytics?: BoolFilter<"Settings"> | boolean
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "restaurantId">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enableAnalytics?: SortOrder
    restaurantId?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    enableAnalytics?: BoolWithAggregatesFilter<"Settings"> | boolean
    restaurantId?: IntWithAggregatesFilter<"Settings"> | number
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: IntFilter<"Currency"> | number
    name?: StringFilter<"Currency"> | string
    symbol?: StringFilter<"Currency"> | string
    restaurants?: RestaurantListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    restaurants?: RestaurantOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    symbol?: StringFilter<"Currency"> | string
    restaurants?: RestaurantListRelationFilter
  }, "id" | "id" | "name">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currency"> | number
    name?: StringWithAggregatesFilter<"Currency"> | string
    symbol?: StringWithAggregatesFilter<"Currency"> | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    country?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    address1?: StringFilter<"Address"> | string
    address2?: StringNullableFilter<"Address"> | string | null
    restaurantId?: IntFilter<"Address"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restaurantId?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    country?: StringFilter<"Address"> | string
    zip?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    address1?: StringFilter<"Address"> | string
    address2?: StringNullableFilter<"Address"> | string | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "id" | "restaurantId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    address1?: SortOrder
    address2?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    country?: StringWithAggregatesFilter<"Address"> | string
    zip?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    address1?: StringWithAggregatesFilter<"Address"> | string
    address2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    restaurantId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type BaseTaskWhereInput = {
    AND?: BaseTaskWhereInput | BaseTaskWhereInput[]
    OR?: BaseTaskWhereInput[]
    NOT?: BaseTaskWhereInput | BaseTaskWhereInput[]
    id?: IntFilter<"BaseTask"> | number
    name?: StringFilter<"BaseTask"> | string
    action?: StringFilter<"BaseTask"> | string
    tasks?: TaskListRelationFilter
  }

  export type BaseTaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type BaseTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    action?: string
    AND?: BaseTaskWhereInput | BaseTaskWhereInput[]
    OR?: BaseTaskWhereInput[]
    NOT?: BaseTaskWhereInput | BaseTaskWhereInput[]
    tasks?: TaskListRelationFilter
  }, "id" | "name" | "action">

  export type BaseTaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    _count?: BaseTaskCountOrderByAggregateInput
    _avg?: BaseTaskAvgOrderByAggregateInput
    _max?: BaseTaskMaxOrderByAggregateInput
    _min?: BaseTaskMinOrderByAggregateInput
    _sum?: BaseTaskSumOrderByAggregateInput
  }

  export type BaseTaskScalarWhereWithAggregatesInput = {
    AND?: BaseTaskScalarWhereWithAggregatesInput | BaseTaskScalarWhereWithAggregatesInput[]
    OR?: BaseTaskScalarWhereWithAggregatesInput[]
    NOT?: BaseTaskScalarWhereWithAggregatesInput | BaseTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BaseTask"> | number
    name?: StringWithAggregatesFilter<"BaseTask"> | string
    action?: StringWithAggregatesFilter<"BaseTask"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    done?: BoolFilter<"Task"> | boolean
    baseId?: IntFilter<"Task"> | number
    restaurantId?: IntFilter<"Task"> | number
    base?: XOR<BaseTaskRelationFilter, BaseTaskWhereInput>
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    done?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
    base?: BaseTaskOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    done?: BoolFilter<"Task"> | boolean
    baseId?: IntFilter<"Task"> | number
    restaurantId?: IntFilter<"Task"> | number
    base?: XOR<BaseTaskRelationFilter, BaseTaskWhereInput>
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    done?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    done?: BoolWithAggregatesFilter<"Task"> | boolean
    baseId?: IntWithAggregatesFilter<"Task"> | number
    restaurantId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type WaiterWhereInput = {
    AND?: WaiterWhereInput | WaiterWhereInput[]
    OR?: WaiterWhereInput[]
    NOT?: WaiterWhereInput | WaiterWhereInput[]
    id?: IntFilter<"Waiter"> | number
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    email?: StringFilter<"Waiter"> | string
    name?: StringFilter<"Waiter"> | string
    gender?: StringFilter<"Waiter"> | string
    profileIcon?: StringNullableFilter<"Waiter"> | string | null
    password?: StringFilter<"Waiter"> | string
    restaurantId?: IntFilter<"Waiter"> | number
    orders?: OrderListRelationFilter
    meals?: MealListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type WaiterOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    profileIcon?: SortOrderInput | SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type WaiterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: WaiterWhereInput | WaiterWhereInput[]
    OR?: WaiterWhereInput[]
    NOT?: WaiterWhereInput | WaiterWhereInput[]
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    name?: StringFilter<"Waiter"> | string
    gender?: StringFilter<"Waiter"> | string
    profileIcon?: StringNullableFilter<"Waiter"> | string | null
    password?: StringFilter<"Waiter"> | string
    restaurantId?: IntFilter<"Waiter"> | number
    orders?: OrderListRelationFilter
    meals?: MealListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "id" | "email">

  export type WaiterOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    profileIcon?: SortOrderInput | SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
    _count?: WaiterCountOrderByAggregateInput
    _avg?: WaiterAvgOrderByAggregateInput
    _max?: WaiterMaxOrderByAggregateInput
    _min?: WaiterMinOrderByAggregateInput
    _sum?: WaiterSumOrderByAggregateInput
  }

  export type WaiterScalarWhereWithAggregatesInput = {
    AND?: WaiterScalarWhereWithAggregatesInput | WaiterScalarWhereWithAggregatesInput[]
    OR?: WaiterScalarWhereWithAggregatesInput[]
    NOT?: WaiterScalarWhereWithAggregatesInput | WaiterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Waiter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Waiter"> | Date | string
    email?: StringWithAggregatesFilter<"Waiter"> | string
    name?: StringWithAggregatesFilter<"Waiter"> | string
    gender?: StringWithAggregatesFilter<"Waiter"> | string
    profileIcon?: StringNullableWithAggregatesFilter<"Waiter"> | string | null
    password?: StringWithAggregatesFilter<"Waiter"> | string
    restaurantId?: IntWithAggregatesFilter<"Waiter"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    description?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    isReady?: BoolFilter<"Order"> | boolean
    closed?: BoolFilter<"Order"> | boolean
    quantity?: IntFilter<"Order"> | number
    mealId?: IntNullableFilter<"Order"> | number | null
    victualId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    tableId?: IntNullableFilter<"Order"> | number | null
    waiterId?: IntFilter<"Order"> | number
    waiter?: XOR<WaiterRelationFilter, WaiterWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    victual?: XOR<VictualRelationFilter, VictualWhereInput>
    meal?: XOR<MealNullableRelationFilter, MealWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isReady?: SortOrder
    closed?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrderInput | SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrderInput | SortOrder
    waiterId?: SortOrder
    waiter?: WaiterOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    victual?: VictualOrderByWithRelationInput
    meal?: MealOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    description?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    isReady?: BoolFilter<"Order"> | boolean
    closed?: BoolFilter<"Order"> | boolean
    quantity?: IntFilter<"Order"> | number
    mealId?: IntNullableFilter<"Order"> | number | null
    victualId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    tableId?: IntNullableFilter<"Order"> | number | null
    waiterId?: IntFilter<"Order"> | number
    waiter?: XOR<WaiterRelationFilter, WaiterWhereInput>
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    victual?: XOR<VictualRelationFilter, VictualWhereInput>
    meal?: XOR<MealNullableRelationFilter, MealWhereInput> | null
  }, "id" | "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isReady?: SortOrder
    closed?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrderInput | SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrderInput | SortOrder
    waiterId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    description?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    isReady?: BoolWithAggregatesFilter<"Order"> | boolean
    closed?: BoolWithAggregatesFilter<"Order"> | boolean
    quantity?: IntWithAggregatesFilter<"Order"> | number
    mealId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    victualId?: IntWithAggregatesFilter<"Order"> | number
    restaurantId?: IntWithAggregatesFilter<"Order"> | number
    tableId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    waiterId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type VictualWhereInput = {
    AND?: VictualWhereInput | VictualWhereInput[]
    OR?: VictualWhereInput[]
    NOT?: VictualWhereInput | VictualWhereInput[]
    id?: IntFilter<"Victual"> | number
    createdAt?: DateTimeFilter<"Victual"> | Date | string
    name?: StringFilter<"Victual"> | string
    price?: FloatFilter<"Victual"> | number
    restaurantId?: IntFilter<"Victual"> | number
    categoryId?: IntNullableFilter<"Victual"> | number | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type VictualOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type VictualWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VictualWhereInput | VictualWhereInput[]
    OR?: VictualWhereInput[]
    NOT?: VictualWhereInput | VictualWhereInput[]
    createdAt?: DateTimeFilter<"Victual"> | Date | string
    name?: StringFilter<"Victual"> | string
    price?: FloatFilter<"Victual"> | number
    restaurantId?: IntFilter<"Victual"> | number
    categoryId?: IntNullableFilter<"Victual"> | number | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "id">

  export type VictualOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: VictualCountOrderByAggregateInput
    _avg?: VictualAvgOrderByAggregateInput
    _max?: VictualMaxOrderByAggregateInput
    _min?: VictualMinOrderByAggregateInput
    _sum?: VictualSumOrderByAggregateInput
  }

  export type VictualScalarWhereWithAggregatesInput = {
    AND?: VictualScalarWhereWithAggregatesInput | VictualScalarWhereWithAggregatesInput[]
    OR?: VictualScalarWhereWithAggregatesInput[]
    NOT?: VictualScalarWhereWithAggregatesInput | VictualScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Victual"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Victual"> | Date | string
    name?: StringWithAggregatesFilter<"Victual"> | string
    price?: FloatWithAggregatesFilter<"Victual"> | number
    restaurantId?: IntWithAggregatesFilter<"Victual"> | number
    categoryId?: IntNullableWithAggregatesFilter<"Victual"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    restaurantId?: IntFilter<"Category"> | number
    parentId?: IntNullableFilter<"Category"> | number | null
    root?: BoolFilter<"Category"> | boolean
    level?: IntFilter<"Category"> | number
    victuals?: VictualListRelationFilter
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    subCategories?: CategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    root?: SortOrder
    level?: SortOrder
    victuals?: VictualOrderByRelationAggregateInput
    parent?: CategoryOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    subCategories?: CategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    restaurantId?: IntFilter<"Category"> | number
    parentId?: IntNullableFilter<"Category"> | number | null
    root?: BoolFilter<"Category"> | boolean
    level?: IntFilter<"Category"> | number
    victuals?: VictualListRelationFilter
    parent?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    subCategories?: CategoryListRelationFilter
  }, "id" | "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    root?: SortOrder
    level?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    name?: StringWithAggregatesFilter<"Category"> | string
    restaurantId?: IntWithAggregatesFilter<"Category"> | number
    parentId?: IntNullableWithAggregatesFilter<"Category"> | number | null
    root?: BoolWithAggregatesFilter<"Category"> | boolean
    level?: IntWithAggregatesFilter<"Category"> | number
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: IntFilter<"Table"> | number
    createdAt?: DateTimeFilter<"Table"> | Date | string
    name?: StringFilter<"Table"> | string
    restaurantId?: IntFilter<"Table"> | number
    orders?: OrderListRelationFilter
    meals?: MealListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    meals?: MealOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    createdAt?: DateTimeFilter<"Table"> | Date | string
    name?: StringFilter<"Table"> | string
    restaurantId?: IntFilter<"Table"> | number
    orders?: OrderListRelationFilter
    meals?: MealListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    name?: StringWithAggregatesFilter<"Table"> | string
    restaurantId?: IntWithAggregatesFilter<"Table"> | number
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    start?: DateTimeFilter<"Meal"> | Date | string
    end?: DateTimeFilter<"Meal"> | Date | string
    total?: FloatFilter<"Meal"> | number
    restaurantId?: IntFilter<"Meal"> | number
    waiterId?: IntNullableFilter<"Meal"> | number | null
    tableId?: IntNullableFilter<"Meal"> | number | null
    orders?: OrderListRelationFilter
    waiter?: XOR<WaiterNullableRelationFilter, WaiterWhereInput> | null
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrderInput | SortOrder
    tableId?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    waiter?: WaiterOrderByWithRelationInput
    table?: TableOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    start?: DateTimeFilter<"Meal"> | Date | string
    end?: DateTimeFilter<"Meal"> | Date | string
    total?: FloatFilter<"Meal"> | number
    restaurantId?: IntFilter<"Meal"> | number
    waiterId?: IntNullableFilter<"Meal"> | number | null
    tableId?: IntNullableFilter<"Meal"> | number | null
    orders?: OrderListRelationFilter
    waiter?: XOR<WaiterNullableRelationFilter, WaiterWhereInput> | null
    table?: XOR<TableNullableRelationFilter, TableWhereInput> | null
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrderInput | SortOrder
    tableId?: SortOrderInput | SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    start?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    total?: FloatWithAggregatesFilter<"Meal"> | number
    restaurantId?: IntWithAggregatesFilter<"Meal"> | number
    waiterId?: IntNullableWithAggregatesFilter<"Meal"> | number | null
    tableId?: IntNullableWithAggregatesFilter<"Meal"> | number | null
  }

  export type OpeningHourWhereInput = {
    AND?: OpeningHourWhereInput | OpeningHourWhereInput[]
    OR?: OpeningHourWhereInput[]
    NOT?: OpeningHourWhereInput | OpeningHourWhereInput[]
    id?: IntFilter<"OpeningHour"> | number
    createdAt?: DateTimeFilter<"OpeningHour"> | Date | string
    name?: StringFilter<"OpeningHour"> | string
    start?: StringFilter<"OpeningHour"> | string
    end?: StringFilter<"OpeningHour"> | string
    restaurantId?: IntFilter<"OpeningHour"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }

  export type OpeningHourOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type OpeningHourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OpeningHourWhereInput | OpeningHourWhereInput[]
    OR?: OpeningHourWhereInput[]
    NOT?: OpeningHourWhereInput | OpeningHourWhereInput[]
    createdAt?: DateTimeFilter<"OpeningHour"> | Date | string
    name?: StringFilter<"OpeningHour"> | string
    start?: StringFilter<"OpeningHour"> | string
    end?: StringFilter<"OpeningHour"> | string
    restaurantId?: IntFilter<"OpeningHour"> | number
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
  }, "id" | "id">

  export type OpeningHourOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    restaurantId?: SortOrder
    _count?: OpeningHourCountOrderByAggregateInput
    _avg?: OpeningHourAvgOrderByAggregateInput
    _max?: OpeningHourMaxOrderByAggregateInput
    _min?: OpeningHourMinOrderByAggregateInput
    _sum?: OpeningHourSumOrderByAggregateInput
  }

  export type OpeningHourScalarWhereWithAggregatesInput = {
    AND?: OpeningHourScalarWhereWithAggregatesInput | OpeningHourScalarWhereWithAggregatesInput[]
    OR?: OpeningHourScalarWhereWithAggregatesInput[]
    NOT?: OpeningHourScalarWhereWithAggregatesInput | OpeningHourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OpeningHour"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OpeningHour"> | Date | string
    name?: StringWithAggregatesFilter<"OpeningHour"> | string
    start?: StringWithAggregatesFilter<"OpeningHour"> | string
    end?: StringWithAggregatesFilter<"OpeningHour"> | string
    restaurantId?: IntWithAggregatesFilter<"OpeningHour"> | number
  }

  export type RestaurantCreateInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
  }

  export type RestaurantUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SettingsCreateInput = {
    id?: number
    createdAt?: Date | string
    enableAnalytics?: boolean
    restaurant: RestaurantCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    enableAnalytics?: boolean
    restaurantId: number
  }

  export type SettingsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
    restaurant?: RestaurantUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type SettingsCreateManyInput = {
    id?: number
    createdAt?: Date | string
    enableAnalytics?: boolean
    restaurantId: number
  }

  export type SettingsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type CurrencyCreateInput = {
    name: string
    symbol: string
    restaurants?: RestaurantCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: number
    name: string
    symbol: string
    restaurants?: RestaurantUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type CurrencyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    restaurants?: RestaurantUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    restaurants?: RestaurantUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: number
    name: string
    symbol: string
  }

  export type CurrencyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateInput = {
    country: string
    zip: string
    city: string
    address1: string
    address2?: string | null
    restaurant: RestaurantCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    country: string
    zip: string
    city: string
    address1: string
    address2?: string | null
    restaurantId: number
  }

  export type AddressUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    restaurant?: RestaurantUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    country: string
    zip: string
    city: string
    address1: string
    address2?: string | null
    restaurantId: number
  }

  export type AddressUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type BaseTaskCreateInput = {
    name: string
    action: string
    tasks?: TaskCreateNestedManyWithoutBaseInput
  }

  export type BaseTaskUncheckedCreateInput = {
    id?: number
    name: string
    action: string
    tasks?: TaskUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseTaskUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutBaseNestedInput
  }

  export type BaseTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type BaseTaskCreateManyInput = {
    id?: number
    name: string
    action: string
  }

  export type BaseTaskUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type BaseTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    done?: boolean
    base: BaseTaskCreateNestedOneWithoutTasksInput
    restaurant: RestaurantCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    done?: boolean
    baseId: number
    restaurantId: number
  }

  export type TaskUpdateInput = {
    done?: BoolFieldUpdateOperationsInput | boolean
    base?: BaseTaskUpdateOneRequiredWithoutTasksNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    baseId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyInput = {
    id?: number
    done?: boolean
    baseId: number
    restaurantId: number
  }

  export type TaskUpdateManyMutationInput = {
    done?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    baseId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type WaiterCreateInput = {
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    orders?: OrderCreateNestedManyWithoutWaiterInput
    meals?: MealCreateNestedManyWithoutWaiterInput
    restaurant: RestaurantCreateNestedOneWithoutWaitersInput
  }

  export type WaiterUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    restaurantId: number
    orders?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    meals?: MealUncheckedCreateNestedManyWithoutWaiterInput
  }

  export type WaiterUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutWaiterNestedInput
    meals?: MealUpdateManyWithoutWaiterNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutWaitersNestedInput
  }

  export type WaiterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    meals?: MealUncheckedUpdateManyWithoutWaiterNestedInput
  }

  export type WaiterCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    restaurantId: number
  }

  export type WaiterUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WaiterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    waiter: WaiterCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    victual: VictualCreateNestedOneWithoutOrdersInput
    meal?: MealCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    victual?: VictualUpdateOneRequiredWithoutOrdersNestedInput
    meal?: MealUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type VictualCreateInput = {
    createdAt?: Date | string
    name: string
    price: number
    restaurant: RestaurantCreateNestedOneWithoutVictualsInput
    category?: CategoryCreateNestedOneWithoutVictualsInput
    orders?: OrderCreateNestedManyWithoutVictualInput
  }

  export type VictualUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    restaurantId: number
    categoryId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutVictualInput
  }

  export type VictualUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutVictualsNestedInput
    category?: CategoryUpdateOneWithoutVictualsNestedInput
    orders?: OrderUpdateManyWithoutVictualNestedInput
  }

  export type VictualUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutVictualNestedInput
  }

  export type VictualCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    restaurantId: number
    categoryId?: number | null
  }

  export type VictualUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type VictualUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    createdAt?: Date | string
    name: string
    root?: boolean
    level?: number
    victuals?: VictualCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    parentId?: number | null
    root?: boolean
    level?: number
    victuals?: VictualUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    parentId?: number | null
    root?: boolean
    level?: number
  }

  export type CategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type TableCreateInput = {
    createdAt?: Date | string
    name: string
    orders?: OrderCreateNestedManyWithoutTableInput
    meals?: MealCreateNestedManyWithoutTableInput
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    meals?: MealUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutTableNestedInput
    meals?: MealUpdateManyWithoutTableNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    meals?: MealUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
  }

  export type TableUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    orders?: OrderCreateNestedManyWithoutMealInput
    waiter?: WaiterCreateNestedOneWithoutMealsInput
    table?: TableCreateNestedOneWithoutMealsInput
    restaurant: RestaurantCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    waiterId?: number | null
    tableId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutMealNestedInput
    waiter?: WaiterUpdateOneWithoutMealsNestedInput
    table?: TableUpdateOneWithoutMealsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    waiterId?: number | null
    tableId?: number | null
  }

  export type MealUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OpeningHourCreateInput = {
    createdAt?: Date | string
    name: string
    start: string
    end: string
    restaurant: RestaurantCreateNestedOneWithoutOpeningHoursInput
  }

  export type OpeningHourUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    name: string
    start: string
    end: string
    restaurantId: number
  }

  export type OpeningHourUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    restaurant?: RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInput
  }

  export type OpeningHourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OpeningHourCreateManyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    start: string
    end: string
    restaurantId: number
  }

  export type OpeningHourUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningHourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AddressNullableRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type CurrencyNullableRelationFilter = {
    is?: CurrencyWhereInput | null
    isNot?: CurrencyWhereInput | null
  }

  export type SettingsNullableRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type OpeningHourListRelationFilter = {
    every?: OpeningHourWhereInput
    some?: OpeningHourWhereInput
    none?: OpeningHourWhereInput
  }

  export type WaiterListRelationFilter = {
    every?: WaiterWhereInput
    some?: WaiterWhereInput
    none?: WaiterWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type VictualListRelationFilter = {
    every?: VictualWhereInput
    some?: VictualWhereInput
    none?: VictualWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpeningHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaiterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VictualOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    currencyId?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    id?: SortOrder
    currencyId?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    currencyId?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    currencyId?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    id?: SortOrder
    currencyId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enableAnalytics?: SortOrder
    restaurantId?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enableAnalytics?: SortOrder
    restaurantId?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enableAnalytics?: SortOrder
    restaurantId?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    restaurantId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    restaurantId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    city?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    restaurantId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BaseTaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
  }

  export type BaseTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BaseTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
  }

  export type BaseTaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
  }

  export type BaseTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BaseTaskRelationFilter = {
    is?: BaseTaskWhereInput
    isNot?: BaseTaskWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    done?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    done?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    done?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    profileIcon?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    profileIcon?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    profileIcon?: SortOrder
    password?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterRelationFilter = {
    is?: WaiterWhereInput
    isNot?: WaiterWhereInput
  }

  export type TableNullableRelationFilter = {
    is?: TableWhereInput | null
    isNot?: TableWhereInput | null
  }

  export type VictualRelationFilter = {
    is?: VictualWhereInput
    isNot?: VictualWhereInput
  }

  export type MealNullableRelationFilter = {
    is?: MealWhereInput | null
    isNot?: MealWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    isReady?: SortOrder
    closed?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrder
    waiterId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrder
    waiterId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    isReady?: SortOrder
    closed?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrder
    waiterId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    isReady?: SortOrder
    closed?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrder
    waiterId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    mealId?: SortOrder
    victualId?: SortOrder
    restaurantId?: SortOrder
    tableId?: SortOrder
    waiterId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type VictualCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
  }

  export type VictualAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
  }

  export type VictualMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
  }

  export type VictualMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
  }

  export type VictualSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    restaurantId?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrder
    root?: SortOrder
    level?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrder
    level?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrder
    root?: SortOrder
    level?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrder
    root?: SortOrder
    level?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
    parentId?: SortOrder
    level?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type WaiterNullableRelationFilter = {
    is?: WaiterWhereInput | null
    isNot?: WaiterWhereInput | null
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrder
    tableId?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrder
    tableId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrder
    tableId?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrder
    tableId?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    restaurantId?: SortOrder
    waiterId?: SortOrder
    tableId?: SortOrder
  }

  export type OpeningHourCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    restaurantId?: SortOrder
  }

  export type OpeningHourAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type OpeningHourMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    restaurantId?: SortOrder
  }

  export type OpeningHourMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    start?: SortOrder
    end?: SortOrder
    restaurantId?: SortOrder
  }

  export type OpeningHourSumOrderByAggregateInput = {
    id?: SortOrder
    restaurantId?: SortOrder
  }

  export type AddressCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRestaurantInput
    connect?: AddressWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<CurrencyCreateWithoutRestaurantsInput, CurrencyUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRestaurantsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type SettingsCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutRestaurantInput
    connect?: SettingsWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput> | TaskCreateWithoutRestaurantInput[] | TaskUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRestaurantInput | TaskCreateOrConnectWithoutRestaurantInput[]
    createMany?: TaskCreateManyRestaurantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type OpeningHourCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput> | OpeningHourCreateWithoutRestaurantInput[] | OpeningHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OpeningHourCreateOrConnectWithoutRestaurantInput | OpeningHourCreateOrConnectWithoutRestaurantInput[]
    createMany?: OpeningHourCreateManyRestaurantInputEnvelope
    connect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
  }

  export type WaiterCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VictualCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput> | VictualCreateWithoutRestaurantInput[] | VictualUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutRestaurantInput | VictualCreateOrConnectWithoutRestaurantInput[]
    createMany?: VictualCreateManyRestaurantInputEnvelope
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TableCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput> | MealCreateWithoutRestaurantInput[] | MealUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MealCreateOrConnectWithoutRestaurantInput | MealCreateOrConnectWithoutRestaurantInput[]
    createMany?: MealCreateManyRestaurantInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRestaurantInput
    connect?: AddressWhereUniqueInput
  }

  export type SettingsUncheckedCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutRestaurantInput
    connect?: SettingsWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput> | TaskCreateWithoutRestaurantInput[] | TaskUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRestaurantInput | TaskCreateOrConnectWithoutRestaurantInput[]
    createMany?: TaskCreateManyRestaurantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput> | OpeningHourCreateWithoutRestaurantInput[] | OpeningHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OpeningHourCreateOrConnectWithoutRestaurantInput | OpeningHourCreateOrConnectWithoutRestaurantInput[]
    createMany?: OpeningHourCreateManyRestaurantInputEnvelope
    connect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
  }

  export type WaiterUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type VictualUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput> | VictualCreateWithoutRestaurantInput[] | VictualUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutRestaurantInput | VictualCreateOrConnectWithoutRestaurantInput[]
    createMany?: VictualCreateManyRestaurantInputEnvelope
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput> | MealCreateWithoutRestaurantInput[] | MealUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MealCreateOrConnectWithoutRestaurantInput | MealCreateOrConnectWithoutRestaurantInput[]
    createMany?: MealCreateManyRestaurantInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AddressUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRestaurantInput
    upsert?: AddressUpsertWithoutRestaurantInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutRestaurantInput, AddressUpdateWithoutRestaurantInput>, AddressUncheckedUpdateWithoutRestaurantInput>
  }

  export type CurrencyUpdateOneWithoutRestaurantsNestedInput = {
    create?: XOR<CurrencyCreateWithoutRestaurantsInput, CurrencyUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutRestaurantsInput
    upsert?: CurrencyUpsertWithoutRestaurantsInput
    disconnect?: CurrencyWhereInput | boolean
    delete?: CurrencyWhereInput | boolean
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutRestaurantsInput, CurrencyUpdateWithoutRestaurantsInput>, CurrencyUncheckedUpdateWithoutRestaurantsInput>
  }

  export type SettingsUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutRestaurantInput
    upsert?: SettingsUpsertWithoutRestaurantInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutRestaurantInput, SettingsUpdateWithoutRestaurantInput>, SettingsUncheckedUpdateWithoutRestaurantInput>
  }

  export type TaskUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput> | TaskCreateWithoutRestaurantInput[] | TaskUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRestaurantInput | TaskCreateOrConnectWithoutRestaurantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRestaurantInput | TaskUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TaskCreateManyRestaurantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRestaurantInput | TaskUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRestaurantInput | TaskUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type OpeningHourUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput> | OpeningHourCreateWithoutRestaurantInput[] | OpeningHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OpeningHourCreateOrConnectWithoutRestaurantInput | OpeningHourCreateOrConnectWithoutRestaurantInput[]
    upsert?: OpeningHourUpsertWithWhereUniqueWithoutRestaurantInput | OpeningHourUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OpeningHourCreateManyRestaurantInputEnvelope
    set?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    disconnect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    delete?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    connect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    update?: OpeningHourUpdateWithWhereUniqueWithoutRestaurantInput | OpeningHourUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OpeningHourUpdateManyWithWhereWithoutRestaurantInput | OpeningHourUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OpeningHourScalarWhereInput | OpeningHourScalarWhereInput[]
  }

  export type WaiterUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterUpsertWithWhereUniqueWithoutRestaurantInput | WaiterUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    set?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    disconnect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    delete?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    update?: WaiterUpdateWithWhereUniqueWithoutRestaurantInput | WaiterUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterUpdateManyWithWhereWithoutRestaurantInput | WaiterUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VictualUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput> | VictualCreateWithoutRestaurantInput[] | VictualUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutRestaurantInput | VictualCreateOrConnectWithoutRestaurantInput[]
    upsert?: VictualUpsertWithWhereUniqueWithoutRestaurantInput | VictualUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: VictualCreateManyRestaurantInputEnvelope
    set?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    disconnect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    delete?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    update?: VictualUpdateWithWhereUniqueWithoutRestaurantInput | VictualUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: VictualUpdateManyWithWhereWithoutRestaurantInput | VictualUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: VictualScalarWhereInput | VictualScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TableUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type MealUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput> | MealCreateWithoutRestaurantInput[] | MealUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MealCreateOrConnectWithoutRestaurantInput | MealCreateOrConnectWithoutRestaurantInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutRestaurantInput | MealUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MealCreateManyRestaurantInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutRestaurantInput | MealUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MealUpdateManyWithWhereWithoutRestaurantInput | MealUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressUncheckedUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRestaurantInput
    upsert?: AddressUpsertWithoutRestaurantInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutRestaurantInput, AddressUpdateWithoutRestaurantInput>, AddressUncheckedUpdateWithoutRestaurantInput>
  }

  export type SettingsUncheckedUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutRestaurantInput
    upsert?: SettingsUpsertWithoutRestaurantInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutRestaurantInput, SettingsUpdateWithoutRestaurantInput>, SettingsUncheckedUpdateWithoutRestaurantInput>
  }

  export type TaskUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput> | TaskCreateWithoutRestaurantInput[] | TaskUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRestaurantInput | TaskCreateOrConnectWithoutRestaurantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRestaurantInput | TaskUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TaskCreateManyRestaurantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRestaurantInput | TaskUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRestaurantInput | TaskUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput> | OpeningHourCreateWithoutRestaurantInput[] | OpeningHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OpeningHourCreateOrConnectWithoutRestaurantInput | OpeningHourCreateOrConnectWithoutRestaurantInput[]
    upsert?: OpeningHourUpsertWithWhereUniqueWithoutRestaurantInput | OpeningHourUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OpeningHourCreateManyRestaurantInputEnvelope
    set?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    disconnect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    delete?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    connect?: OpeningHourWhereUniqueInput | OpeningHourWhereUniqueInput[]
    update?: OpeningHourUpdateWithWhereUniqueWithoutRestaurantInput | OpeningHourUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OpeningHourUpdateManyWithWhereWithoutRestaurantInput | OpeningHourUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OpeningHourScalarWhereInput | OpeningHourScalarWhereInput[]
  }

  export type WaiterUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput> | WaiterCreateWithoutRestaurantInput[] | WaiterUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: WaiterCreateOrConnectWithoutRestaurantInput | WaiterCreateOrConnectWithoutRestaurantInput[]
    upsert?: WaiterUpsertWithWhereUniqueWithoutRestaurantInput | WaiterUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: WaiterCreateManyRestaurantInputEnvelope
    set?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    disconnect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    delete?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    connect?: WaiterWhereUniqueInput | WaiterWhereUniqueInput[]
    update?: WaiterUpdateWithWhereUniqueWithoutRestaurantInput | WaiterUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: WaiterUpdateManyWithWhereWithoutRestaurantInput | WaiterUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput> | OrderCreateWithoutRestaurantInput[] | OrderUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRestaurantInput | OrderCreateOrConnectWithoutRestaurantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRestaurantInput | OrderUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OrderCreateManyRestaurantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRestaurantInput | OrderUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRestaurantInput | OrderUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VictualUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput> | VictualCreateWithoutRestaurantInput[] | VictualUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutRestaurantInput | VictualCreateOrConnectWithoutRestaurantInput[]
    upsert?: VictualUpsertWithWhereUniqueWithoutRestaurantInput | VictualUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: VictualCreateManyRestaurantInputEnvelope
    set?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    disconnect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    delete?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    update?: VictualUpdateWithWhereUniqueWithoutRestaurantInput | VictualUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: VictualUpdateManyWithWhereWithoutRestaurantInput | VictualUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: VictualScalarWhereInput | VictualScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput> | TableCreateWithoutRestaurantInput[] | TableUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: TableCreateOrConnectWithoutRestaurantInput | TableCreateOrConnectWithoutRestaurantInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutRestaurantInput | TableUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: TableCreateManyRestaurantInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutRestaurantInput | TableUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: TableUpdateManyWithWhereWithoutRestaurantInput | TableUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput> | MealCreateWithoutRestaurantInput[] | MealUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MealCreateOrConnectWithoutRestaurantInput | MealCreateOrConnectWithoutRestaurantInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutRestaurantInput | MealUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MealCreateManyRestaurantInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutRestaurantInput | MealUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MealUpdateManyWithWhereWithoutRestaurantInput | MealUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutSettingsInput = {
    create?: XOR<RestaurantCreateWithoutSettingsInput, RestaurantUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSettingsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<RestaurantCreateWithoutSettingsInput, RestaurantUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSettingsInput
    upsert?: RestaurantUpsertWithoutSettingsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutSettingsInput, RestaurantUpdateWithoutSettingsInput>, RestaurantUncheckedUpdateWithoutSettingsInput>
  }

  export type RestaurantCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput> | RestaurantCreateWithoutCurrencyInput[] | RestaurantUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCurrencyInput | RestaurantCreateOrConnectWithoutCurrencyInput[]
    createMany?: RestaurantCreateManyCurrencyInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput> | RestaurantCreateWithoutCurrencyInput[] | RestaurantUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCurrencyInput | RestaurantCreateOrConnectWithoutCurrencyInput[]
    createMany?: RestaurantCreateManyCurrencyInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput> | RestaurantCreateWithoutCurrencyInput[] | RestaurantUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCurrencyInput | RestaurantCreateOrConnectWithoutCurrencyInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutCurrencyInput | RestaurantUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: RestaurantCreateManyCurrencyInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutCurrencyInput | RestaurantUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutCurrencyInput | RestaurantUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput> | RestaurantCreateWithoutCurrencyInput[] | RestaurantUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutCurrencyInput | RestaurantCreateOrConnectWithoutCurrencyInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutCurrencyInput | RestaurantUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: RestaurantCreateManyCurrencyInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutCurrencyInput | RestaurantUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutCurrencyInput | RestaurantUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutAddressInput = {
    create?: XOR<RestaurantCreateWithoutAddressInput, RestaurantUncheckedCreateWithoutAddressInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutAddressInput
    connect?: RestaurantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RestaurantUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<RestaurantCreateWithoutAddressInput, RestaurantUncheckedCreateWithoutAddressInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutAddressInput
    upsert?: RestaurantUpsertWithoutAddressInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutAddressInput, RestaurantUpdateWithoutAddressInput>, RestaurantUncheckedUpdateWithoutAddressInput>
  }

  export type TaskCreateNestedManyWithoutBaseInput = {
    create?: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput> | TaskCreateWithoutBaseInput[] | TaskUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutBaseInput | TaskCreateOrConnectWithoutBaseInput[]
    createMany?: TaskCreateManyBaseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput> | TaskCreateWithoutBaseInput[] | TaskUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutBaseInput | TaskCreateOrConnectWithoutBaseInput[]
    createMany?: TaskCreateManyBaseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput> | TaskCreateWithoutBaseInput[] | TaskUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutBaseInput | TaskCreateOrConnectWithoutBaseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutBaseInput | TaskUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TaskCreateManyBaseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutBaseInput | TaskUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutBaseInput | TaskUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput> | TaskCreateWithoutBaseInput[] | TaskUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutBaseInput | TaskCreateOrConnectWithoutBaseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutBaseInput | TaskUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TaskCreateManyBaseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutBaseInput | TaskUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutBaseInput | TaskUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type BaseTaskCreateNestedOneWithoutTasksInput = {
    create?: XOR<BaseTaskCreateWithoutTasksInput, BaseTaskUncheckedCreateWithoutTasksInput>
    connectOrCreate?: BaseTaskCreateOrConnectWithoutTasksInput
    connect?: BaseTaskWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutTasksInput = {
    create?: XOR<RestaurantCreateWithoutTasksInput, RestaurantUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTasksInput
    connect?: RestaurantWhereUniqueInput
  }

  export type BaseTaskUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<BaseTaskCreateWithoutTasksInput, BaseTaskUncheckedCreateWithoutTasksInput>
    connectOrCreate?: BaseTaskCreateOrConnectWithoutTasksInput
    upsert?: BaseTaskUpsertWithoutTasksInput
    connect?: BaseTaskWhereUniqueInput
    update?: XOR<XOR<BaseTaskUpdateToOneWithWhereWithoutTasksInput, BaseTaskUpdateWithoutTasksInput>, BaseTaskUncheckedUpdateWithoutTasksInput>
  }

  export type RestaurantUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<RestaurantCreateWithoutTasksInput, RestaurantUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTasksInput
    upsert?: RestaurantUpsertWithoutTasksInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutTasksInput, RestaurantUpdateWithoutTasksInput>, RestaurantUncheckedUpdateWithoutTasksInput>
  }

  export type OrderCreateNestedManyWithoutWaiterInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutWaiterInput = {
    create?: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput> | MealCreateWithoutWaiterInput[] | MealUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: MealCreateOrConnectWithoutWaiterInput | MealCreateOrConnectWithoutWaiterInput[]
    createMany?: MealCreateManyWaiterInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutWaitersInput = {
    create?: XOR<RestaurantCreateWithoutWaitersInput, RestaurantUncheckedCreateWithoutWaitersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutWaitersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutWaiterInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutWaiterInput = {
    create?: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput> | MealCreateWithoutWaiterInput[] | MealUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: MealCreateOrConnectWithoutWaiterInput | MealCreateOrConnectWithoutWaiterInput[]
    createMany?: MealCreateManyWaiterInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWaiterInput | OrderUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWaiterInput | OrderUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWaiterInput | OrderUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MealUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput> | MealCreateWithoutWaiterInput[] | MealUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: MealCreateOrConnectWithoutWaiterInput | MealCreateOrConnectWithoutWaiterInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutWaiterInput | MealUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: MealCreateManyWaiterInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutWaiterInput | MealUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: MealUpdateManyWithWhereWithoutWaiterInput | MealUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutWaitersNestedInput = {
    create?: XOR<RestaurantCreateWithoutWaitersInput, RestaurantUncheckedCreateWithoutWaitersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutWaitersInput
    upsert?: RestaurantUpsertWithoutWaitersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutWaitersInput, RestaurantUpdateWithoutWaitersInput>, RestaurantUncheckedUpdateWithoutWaitersInput>
  }

  export type OrderUncheckedUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput> | OrderCreateWithoutWaiterInput[] | OrderUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutWaiterInput | OrderCreateOrConnectWithoutWaiterInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutWaiterInput | OrderUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: OrderCreateManyWaiterInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutWaiterInput | OrderUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutWaiterInput | OrderUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutWaiterNestedInput = {
    create?: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput> | MealCreateWithoutWaiterInput[] | MealUncheckedCreateWithoutWaiterInput[]
    connectOrCreate?: MealCreateOrConnectWithoutWaiterInput | MealCreateOrConnectWithoutWaiterInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutWaiterInput | MealUpsertWithWhereUniqueWithoutWaiterInput[]
    createMany?: MealCreateManyWaiterInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutWaiterInput | MealUpdateWithWhereUniqueWithoutWaiterInput[]
    updateMany?: MealUpdateManyWithWhereWithoutWaiterInput | MealUpdateManyWithWhereWithoutWaiterInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WaiterCreateNestedOneWithoutOrdersInput = {
    create?: XOR<WaiterCreateWithoutOrdersInput, WaiterUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WaiterCreateOrConnectWithoutOrdersInput
    connect?: WaiterWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    connect?: TableWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
  }

  export type VictualCreateNestedOneWithoutOrdersInput = {
    create?: XOR<VictualCreateWithoutOrdersInput, VictualUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VictualCreateOrConnectWithoutOrdersInput
    connect?: VictualWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MealCreateWithoutOrdersInput, MealUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MealCreateOrConnectWithoutOrdersInput
    connect?: MealWhereUniqueInput
  }

  export type WaiterUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<WaiterCreateWithoutOrdersInput, WaiterUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: WaiterCreateOrConnectWithoutOrdersInput
    upsert?: WaiterUpsertWithoutOrdersInput
    connect?: WaiterWhereUniqueInput
    update?: XOR<XOR<WaiterUpdateToOneWithWhereWithoutOrdersInput, WaiterUpdateWithoutOrdersInput>, WaiterUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TableCreateOrConnectWithoutOrdersInput
    upsert?: TableUpsertWithoutOrdersInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutOrdersInput, TableUpdateWithoutOrdersInput>, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput
    upsert?: RestaurantUpsertWithoutOrdersInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOrdersInput, RestaurantUpdateWithoutOrdersInput>, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type VictualUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<VictualCreateWithoutOrdersInput, VictualUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: VictualCreateOrConnectWithoutOrdersInput
    upsert?: VictualUpsertWithoutOrdersInput
    connect?: VictualWhereUniqueInput
    update?: XOR<XOR<VictualUpdateToOneWithWhereWithoutOrdersInput, VictualUpdateWithoutOrdersInput>, VictualUncheckedUpdateWithoutOrdersInput>
  }

  export type MealUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<MealCreateWithoutOrdersInput, MealUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MealCreateOrConnectWithoutOrdersInput
    upsert?: MealUpsertWithoutOrdersInput
    disconnect?: MealWhereInput | boolean
    delete?: MealWhereInput | boolean
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutOrdersInput, MealUpdateWithoutOrdersInput>, MealUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantCreateNestedOneWithoutVictualsInput = {
    create?: XOR<RestaurantCreateWithoutVictualsInput, RestaurantUncheckedCreateWithoutVictualsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutVictualsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutVictualsInput = {
    create?: XOR<CategoryCreateWithoutVictualsInput, CategoryUncheckedCreateWithoutVictualsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutVictualsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutVictualInput = {
    create?: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput> | OrderCreateWithoutVictualInput[] | OrderUncheckedCreateWithoutVictualInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVictualInput | OrderCreateOrConnectWithoutVictualInput[]
    createMany?: OrderCreateManyVictualInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutVictualInput = {
    create?: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput> | OrderCreateWithoutVictualInput[] | OrderUncheckedCreateWithoutVictualInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVictualInput | OrderCreateOrConnectWithoutVictualInput[]
    createMany?: OrderCreateManyVictualInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantUpdateOneRequiredWithoutVictualsNestedInput = {
    create?: XOR<RestaurantCreateWithoutVictualsInput, RestaurantUncheckedCreateWithoutVictualsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutVictualsInput
    upsert?: RestaurantUpsertWithoutVictualsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutVictualsInput, RestaurantUpdateWithoutVictualsInput>, RestaurantUncheckedUpdateWithoutVictualsInput>
  }

  export type CategoryUpdateOneWithoutVictualsNestedInput = {
    create?: XOR<CategoryCreateWithoutVictualsInput, CategoryUncheckedCreateWithoutVictualsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutVictualsInput
    upsert?: CategoryUpsertWithoutVictualsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutVictualsInput, CategoryUpdateWithoutVictualsInput>, CategoryUncheckedUpdateWithoutVictualsInput>
  }

  export type OrderUpdateManyWithoutVictualNestedInput = {
    create?: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput> | OrderCreateWithoutVictualInput[] | OrderUncheckedCreateWithoutVictualInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVictualInput | OrderCreateOrConnectWithoutVictualInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVictualInput | OrderUpsertWithWhereUniqueWithoutVictualInput[]
    createMany?: OrderCreateManyVictualInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVictualInput | OrderUpdateWithWhereUniqueWithoutVictualInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVictualInput | OrderUpdateManyWithWhereWithoutVictualInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutVictualNestedInput = {
    create?: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput> | OrderCreateWithoutVictualInput[] | OrderUncheckedCreateWithoutVictualInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutVictualInput | OrderCreateOrConnectWithoutVictualInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutVictualInput | OrderUpsertWithWhereUniqueWithoutVictualInput[]
    createMany?: OrderCreateManyVictualInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutVictualInput | OrderUpdateWithWhereUniqueWithoutVictualInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutVictualInput | OrderUpdateManyWithWhereWithoutVictualInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VictualCreateNestedManyWithoutCategoryInput = {
    create?: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput> | VictualCreateWithoutCategoryInput[] | VictualUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutCategoryInput | VictualCreateOrConnectWithoutCategoryInput[]
    createMany?: VictualCreateManyCategoryInputEnvelope
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type VictualUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput> | VictualCreateWithoutCategoryInput[] | VictualUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutCategoryInput | VictualCreateOrConnectWithoutCategoryInput[]
    createMany?: VictualCreateManyCategoryInputEnvelope
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type VictualUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput> | VictualCreateWithoutCategoryInput[] | VictualUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutCategoryInput | VictualCreateOrConnectWithoutCategoryInput[]
    upsert?: VictualUpsertWithWhereUniqueWithoutCategoryInput | VictualUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: VictualCreateManyCategoryInputEnvelope
    set?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    disconnect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    delete?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    update?: VictualUpdateWithWhereUniqueWithoutCategoryInput | VictualUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: VictualUpdateManyWithWhereWithoutCategoryInput | VictualUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: VictualScalarWhereInput | VictualScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutSubCategoriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: CategoryUpsertWithoutSubCategoriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSubCategoriesInput, CategoryUpdateWithoutSubCategoriesInput>, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type RestaurantUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    upsert?: RestaurantUpsertWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutCategoriesInput, RestaurantUpdateWithoutCategoriesInput>, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type VictualUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput> | VictualCreateWithoutCategoryInput[] | VictualUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: VictualCreateOrConnectWithoutCategoryInput | VictualCreateOrConnectWithoutCategoryInput[]
    upsert?: VictualUpsertWithWhereUniqueWithoutCategoryInput | VictualUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: VictualCreateManyCategoryInputEnvelope
    set?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    disconnect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    delete?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    connect?: VictualWhereUniqueInput | VictualWhereUniqueInput[]
    update?: VictualUpdateWithWhereUniqueWithoutCategoryInput | VictualUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: VictualUpdateManyWithWhereWithoutCategoryInput | VictualUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: VictualScalarWhereInput | VictualScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MealCreateNestedManyWithoutTableInput = {
    create?: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput> | MealCreateWithoutTableInput[] | MealUncheckedCreateWithoutTableInput[]
    connectOrCreate?: MealCreateOrConnectWithoutTableInput | MealCreateOrConnectWithoutTableInput[]
    createMany?: MealCreateManyTableInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutTablesInput = {
    create?: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput> | MealCreateWithoutTableInput[] | MealUncheckedCreateWithoutTableInput[]
    connectOrCreate?: MealCreateOrConnectWithoutTableInput | MealCreateOrConnectWithoutTableInput[]
    createMany?: MealCreateManyTableInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MealUpdateManyWithoutTableNestedInput = {
    create?: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput> | MealCreateWithoutTableInput[] | MealUncheckedCreateWithoutTableInput[]
    connectOrCreate?: MealCreateOrConnectWithoutTableInput | MealCreateOrConnectWithoutTableInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutTableInput | MealUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: MealCreateManyTableInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutTableInput | MealUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: MealUpdateManyWithWhereWithoutTableInput | MealUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutTablesInput
    upsert?: RestaurantUpsertWithoutTablesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutTablesInput, RestaurantUpdateWithoutTablesInput>, RestaurantUncheckedUpdateWithoutTablesInput>
  }

  export type OrderUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput> | OrderCreateWithoutTableInput[] | OrderUncheckedCreateWithoutTableInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTableInput | OrderCreateOrConnectWithoutTableInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTableInput | OrderUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: OrderCreateManyTableInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTableInput | OrderUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTableInput | OrderUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput> | MealCreateWithoutTableInput[] | MealUncheckedCreateWithoutTableInput[]
    connectOrCreate?: MealCreateOrConnectWithoutTableInput | MealCreateOrConnectWithoutTableInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutTableInput | MealUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: MealCreateManyTableInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutTableInput | MealUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: MealUpdateManyWithWhereWithoutTableInput | MealUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutMealInput = {
    create?: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput> | OrderCreateWithoutMealInput[] | OrderUncheckedCreateWithoutMealInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput | OrderCreateOrConnectWithoutMealInput[]
    createMany?: OrderCreateManyMealInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WaiterCreateNestedOneWithoutMealsInput = {
    create?: XOR<WaiterCreateWithoutMealsInput, WaiterUncheckedCreateWithoutMealsInput>
    connectOrCreate?: WaiterCreateOrConnectWithoutMealsInput
    connect?: WaiterWhereUniqueInput
  }

  export type TableCreateNestedOneWithoutMealsInput = {
    create?: XOR<TableCreateWithoutMealsInput, TableUncheckedCreateWithoutMealsInput>
    connectOrCreate?: TableCreateOrConnectWithoutMealsInput
    connect?: TableWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutMealsInput = {
    create?: XOR<RestaurantCreateWithoutMealsInput, RestaurantUncheckedCreateWithoutMealsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMealsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput> | OrderCreateWithoutMealInput[] | OrderUncheckedCreateWithoutMealInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput | OrderCreateOrConnectWithoutMealInput[]
    createMany?: OrderCreateManyMealInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutMealNestedInput = {
    create?: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput> | OrderCreateWithoutMealInput[] | OrderUncheckedCreateWithoutMealInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput | OrderCreateOrConnectWithoutMealInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMealInput | OrderUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: OrderCreateManyMealInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMealInput | OrderUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMealInput | OrderUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WaiterUpdateOneWithoutMealsNestedInput = {
    create?: XOR<WaiterCreateWithoutMealsInput, WaiterUncheckedCreateWithoutMealsInput>
    connectOrCreate?: WaiterCreateOrConnectWithoutMealsInput
    upsert?: WaiterUpsertWithoutMealsInput
    disconnect?: WaiterWhereInput | boolean
    delete?: WaiterWhereInput | boolean
    connect?: WaiterWhereUniqueInput
    update?: XOR<XOR<WaiterUpdateToOneWithWhereWithoutMealsInput, WaiterUpdateWithoutMealsInput>, WaiterUncheckedUpdateWithoutMealsInput>
  }

  export type TableUpdateOneWithoutMealsNestedInput = {
    create?: XOR<TableCreateWithoutMealsInput, TableUncheckedCreateWithoutMealsInput>
    connectOrCreate?: TableCreateOrConnectWithoutMealsInput
    upsert?: TableUpsertWithoutMealsInput
    disconnect?: TableWhereInput | boolean
    delete?: TableWhereInput | boolean
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutMealsInput, TableUpdateWithoutMealsInput>, TableUncheckedUpdateWithoutMealsInput>
  }

  export type RestaurantUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<RestaurantCreateWithoutMealsInput, RestaurantUncheckedCreateWithoutMealsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMealsInput
    upsert?: RestaurantUpsertWithoutMealsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutMealsInput, RestaurantUpdateWithoutMealsInput>, RestaurantUncheckedUpdateWithoutMealsInput>
  }

  export type OrderUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput> | OrderCreateWithoutMealInput[] | OrderUncheckedCreateWithoutMealInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMealInput | OrderCreateOrConnectWithoutMealInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMealInput | OrderUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: OrderCreateManyMealInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMealInput | OrderUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMealInput | OrderUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutOpeningHoursInput = {
    create?: XOR<RestaurantCreateWithoutOpeningHoursInput, RestaurantUncheckedCreateWithoutOpeningHoursInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOpeningHoursInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutOpeningHoursNestedInput = {
    create?: XOR<RestaurantCreateWithoutOpeningHoursInput, RestaurantUncheckedCreateWithoutOpeningHoursInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOpeningHoursInput
    upsert?: RestaurantUpsertWithoutOpeningHoursInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOpeningHoursInput, RestaurantUpdateWithoutOpeningHoursInput>, RestaurantUncheckedUpdateWithoutOpeningHoursInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AddressCreateWithoutRestaurantInput = {
    country: string
    zip: string
    city: string
    address1: string
    address2?: string | null
  }

  export type AddressUncheckedCreateWithoutRestaurantInput = {
    id?: number
    country: string
    zip: string
    city: string
    address1: string
    address2?: string | null
  }

  export type AddressCreateOrConnectWithoutRestaurantInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
  }

  export type CurrencyCreateWithoutRestaurantsInput = {
    name: string
    symbol: string
  }

  export type CurrencyUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    name: string
    symbol: string
  }

  export type CurrencyCreateOrConnectWithoutRestaurantsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutRestaurantsInput, CurrencyUncheckedCreateWithoutRestaurantsInput>
  }

  export type SettingsCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    enableAnalytics?: boolean
  }

  export type SettingsUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    enableAnalytics?: boolean
  }

  export type SettingsCreateOrConnectWithoutRestaurantInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
  }

  export type TaskCreateWithoutRestaurantInput = {
    done?: boolean
    base: BaseTaskCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutRestaurantInput = {
    id?: number
    done?: boolean
    baseId: number
  }

  export type TaskCreateOrConnectWithoutRestaurantInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput>
  }

  export type TaskCreateManyRestaurantInputEnvelope = {
    data: TaskCreateManyRestaurantInput | TaskCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OpeningHourCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    name: string
    start: string
    end: string
  }

  export type OpeningHourUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    start: string
    end: string
  }

  export type OpeningHourCreateOrConnectWithoutRestaurantInput = {
    where: OpeningHourWhereUniqueInput
    create: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput>
  }

  export type OpeningHourCreateManyRestaurantInputEnvelope = {
    data: OpeningHourCreateManyRestaurantInput | OpeningHourCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type WaiterCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    orders?: OrderCreateNestedManyWithoutWaiterInput
    meals?: MealCreateNestedManyWithoutWaiterInput
  }

  export type WaiterUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    orders?: OrderUncheckedCreateNestedManyWithoutWaiterInput
    meals?: MealUncheckedCreateNestedManyWithoutWaiterInput
  }

  export type WaiterCreateOrConnectWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    create: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterCreateManyRestaurantInputEnvelope = {
    data: WaiterCreateManyRestaurantInput | WaiterCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutRestaurantInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    waiter: WaiterCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
    victual: VictualCreateNestedOneWithoutOrdersInput
    meal?: MealCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type VictualCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    name: string
    price: number
    category?: CategoryCreateNestedOneWithoutVictualsInput
    orders?: OrderCreateNestedManyWithoutVictualInput
  }

  export type VictualUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    categoryId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutVictualInput
  }

  export type VictualCreateOrConnectWithoutRestaurantInput = {
    where: VictualWhereUniqueInput
    create: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput>
  }

  export type VictualCreateManyRestaurantInputEnvelope = {
    data: VictualCreateManyRestaurantInput | VictualCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    name: string
    root?: boolean
    level?: number
    victuals?: VictualCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    parentId?: number | null
    root?: boolean
    level?: number
    victuals?: VictualUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryCreateManyRestaurantInputEnvelope = {
    data: CategoryCreateManyRestaurantInput | CategoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type TableCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    name: string
    orders?: OrderCreateNestedManyWithoutTableInput
    meals?: MealCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
    meals?: MealUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableCreateManyRestaurantInputEnvelope = {
    data: TableCreateManyRestaurantInput | TableCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutRestaurantInput = {
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    orders?: OrderCreateNestedManyWithoutMealInput
    waiter?: WaiterCreateNestedOneWithoutMealsInput
    table?: TableCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutRestaurantInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    waiterId?: number | null
    tableId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutRestaurantInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput>
  }

  export type MealCreateManyRestaurantInputEnvelope = {
    data: MealCreateManyRestaurantInput | MealCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutRestaurantInput = {
    update: XOR<AddressUpdateWithoutRestaurantInput, AddressUncheckedUpdateWithoutRestaurantInput>
    create: XOR<AddressCreateWithoutRestaurantInput, AddressUncheckedCreateWithoutRestaurantInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutRestaurantInput, AddressUncheckedUpdateWithoutRestaurantInput>
  }

  export type AddressUpdateWithoutRestaurantInput = {
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address1?: StringFieldUpdateOperationsInput | string
    address2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrencyUpsertWithoutRestaurantsInput = {
    update: XOR<CurrencyUpdateWithoutRestaurantsInput, CurrencyUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<CurrencyCreateWithoutRestaurantsInput, CurrencyUncheckedCreateWithoutRestaurantsInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutRestaurantsInput, CurrencyUncheckedUpdateWithoutRestaurantsInput>
  }

  export type CurrencyUpdateWithoutRestaurantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CurrencyUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsUpsertWithoutRestaurantInput = {
    update: XOR<SettingsUpdateWithoutRestaurantInput, SettingsUncheckedUpdateWithoutRestaurantInput>
    create: XOR<SettingsCreateWithoutRestaurantInput, SettingsUncheckedCreateWithoutRestaurantInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutRestaurantInput, SettingsUncheckedUpdateWithoutRestaurantInput>
  }

  export type SettingsUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingsUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enableAnalytics?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutRestaurantInput, TaskUncheckedUpdateWithoutRestaurantInput>
    create: XOR<TaskCreateWithoutRestaurantInput, TaskUncheckedCreateWithoutRestaurantInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutRestaurantInput, TaskUncheckedUpdateWithoutRestaurantInput>
  }

  export type TaskUpdateManyWithWhereWithoutRestaurantInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    done?: BoolFilter<"Task"> | boolean
    baseId?: IntFilter<"Task"> | number
    restaurantId?: IntFilter<"Task"> | number
  }

  export type OpeningHourUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OpeningHourWhereUniqueInput
    update: XOR<OpeningHourUpdateWithoutRestaurantInput, OpeningHourUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OpeningHourCreateWithoutRestaurantInput, OpeningHourUncheckedCreateWithoutRestaurantInput>
  }

  export type OpeningHourUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OpeningHourWhereUniqueInput
    data: XOR<OpeningHourUpdateWithoutRestaurantInput, OpeningHourUncheckedUpdateWithoutRestaurantInput>
  }

  export type OpeningHourUpdateManyWithWhereWithoutRestaurantInput = {
    where: OpeningHourScalarWhereInput
    data: XOR<OpeningHourUpdateManyMutationInput, OpeningHourUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OpeningHourScalarWhereInput = {
    AND?: OpeningHourScalarWhereInput | OpeningHourScalarWhereInput[]
    OR?: OpeningHourScalarWhereInput[]
    NOT?: OpeningHourScalarWhereInput | OpeningHourScalarWhereInput[]
    id?: IntFilter<"OpeningHour"> | number
    createdAt?: DateTimeFilter<"OpeningHour"> | Date | string
    name?: StringFilter<"OpeningHour"> | string
    start?: StringFilter<"OpeningHour"> | string
    end?: StringFilter<"OpeningHour"> | string
    restaurantId?: IntFilter<"OpeningHour"> | number
  }

  export type WaiterUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    update: XOR<WaiterUpdateWithoutRestaurantInput, WaiterUncheckedUpdateWithoutRestaurantInput>
    create: XOR<WaiterCreateWithoutRestaurantInput, WaiterUncheckedCreateWithoutRestaurantInput>
  }

  export type WaiterUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: WaiterWhereUniqueInput
    data: XOR<WaiterUpdateWithoutRestaurantInput, WaiterUncheckedUpdateWithoutRestaurantInput>
  }

  export type WaiterUpdateManyWithWhereWithoutRestaurantInput = {
    where: WaiterScalarWhereInput
    data: XOR<WaiterUpdateManyMutationInput, WaiterUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type WaiterScalarWhereInput = {
    AND?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
    OR?: WaiterScalarWhereInput[]
    NOT?: WaiterScalarWhereInput | WaiterScalarWhereInput[]
    id?: IntFilter<"Waiter"> | number
    createdAt?: DateTimeFilter<"Waiter"> | Date | string
    email?: StringFilter<"Waiter"> | string
    name?: StringFilter<"Waiter"> | string
    gender?: StringFilter<"Waiter"> | string
    profileIcon?: StringNullableFilter<"Waiter"> | string | null
    password?: StringFilter<"Waiter"> | string
    restaurantId?: IntFilter<"Waiter"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OrderCreateWithoutRestaurantInput, OrderUncheckedCreateWithoutRestaurantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRestaurantInput, OrderUncheckedUpdateWithoutRestaurantInput>
  }

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    description?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    isReady?: BoolFilter<"Order"> | boolean
    closed?: BoolFilter<"Order"> | boolean
    quantity?: IntFilter<"Order"> | number
    mealId?: IntNullableFilter<"Order"> | number | null
    victualId?: IntFilter<"Order"> | number
    restaurantId?: IntFilter<"Order"> | number
    tableId?: IntNullableFilter<"Order"> | number | null
    waiterId?: IntFilter<"Order"> | number
  }

  export type VictualUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: VictualWhereUniqueInput
    update: XOR<VictualUpdateWithoutRestaurantInput, VictualUncheckedUpdateWithoutRestaurantInput>
    create: XOR<VictualCreateWithoutRestaurantInput, VictualUncheckedCreateWithoutRestaurantInput>
  }

  export type VictualUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: VictualWhereUniqueInput
    data: XOR<VictualUpdateWithoutRestaurantInput, VictualUncheckedUpdateWithoutRestaurantInput>
  }

  export type VictualUpdateManyWithWhereWithoutRestaurantInput = {
    where: VictualScalarWhereInput
    data: XOR<VictualUpdateManyMutationInput, VictualUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type VictualScalarWhereInput = {
    AND?: VictualScalarWhereInput | VictualScalarWhereInput[]
    OR?: VictualScalarWhereInput[]
    NOT?: VictualScalarWhereInput | VictualScalarWhereInput[]
    id?: IntFilter<"Victual"> | number
    createdAt?: DateTimeFilter<"Victual"> | Date | string
    name?: StringFilter<"Victual"> | string
    price?: FloatFilter<"Victual"> | number
    restaurantId?: IntFilter<"Victual"> | number
    categoryId?: IntNullableFilter<"Victual"> | number | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type CategoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    name?: StringFilter<"Category"> | string
    restaurantId?: IntFilter<"Category"> | number
    parentId?: IntNullableFilter<"Category"> | number | null
    root?: BoolFilter<"Category"> | boolean
    level?: IntFilter<"Category"> | number
  }

  export type TableUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
    create: XOR<TableCreateWithoutRestaurantInput, TableUncheckedCreateWithoutRestaurantInput>
  }

  export type TableUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutRestaurantInput, TableUncheckedUpdateWithoutRestaurantInput>
  }

  export type TableUpdateManyWithWhereWithoutRestaurantInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: IntFilter<"Table"> | number
    createdAt?: DateTimeFilter<"Table"> | Date | string
    name?: StringFilter<"Table"> | string
    restaurantId?: IntFilter<"Table"> | number
  }

  export type MealUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutRestaurantInput, MealUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MealCreateWithoutRestaurantInput, MealUncheckedCreateWithoutRestaurantInput>
  }

  export type MealUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutRestaurantInput, MealUncheckedUpdateWithoutRestaurantInput>
  }

  export type MealUpdateManyWithWhereWithoutRestaurantInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: IntFilter<"Meal"> | number
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    start?: DateTimeFilter<"Meal"> | Date | string
    end?: DateTimeFilter<"Meal"> | Date | string
    total?: FloatFilter<"Meal"> | number
    restaurantId?: IntFilter<"Meal"> | number
    waiterId?: IntNullableFilter<"Meal"> | number | null
    tableId?: IntNullableFilter<"Meal"> | number | null
  }

  export type RestaurantCreateWithoutSettingsInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutSettingsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutSettingsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutSettingsInput, RestaurantUncheckedCreateWithoutSettingsInput>
  }

  export type RestaurantUpsertWithoutSettingsInput = {
    update: XOR<RestaurantUpdateWithoutSettingsInput, RestaurantUncheckedUpdateWithoutSettingsInput>
    create: XOR<RestaurantCreateWithoutSettingsInput, RestaurantUncheckedCreateWithoutSettingsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutSettingsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutSettingsInput, RestaurantUncheckedUpdateWithoutSettingsInput>
  }

  export type RestaurantUpdateWithoutSettingsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutCurrencyInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutCurrencyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCurrencyInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput>
  }

  export type RestaurantCreateManyCurrencyInputEnvelope = {
    data: RestaurantCreateManyCurrencyInput | RestaurantCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutCurrencyInput, RestaurantUncheckedUpdateWithoutCurrencyInput>
    create: XOR<RestaurantCreateWithoutCurrencyInput, RestaurantUncheckedCreateWithoutCurrencyInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutCurrencyInput, RestaurantUncheckedUpdateWithoutCurrencyInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutCurrencyInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: IntFilter<"Restaurant"> | number
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    name?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    currencyId?: IntNullableFilter<"Restaurant"> | number | null
  }

  export type RestaurantCreateWithoutAddressInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutAddressInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutAddressInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutAddressInput, RestaurantUncheckedCreateWithoutAddressInput>
  }

  export type RestaurantUpsertWithoutAddressInput = {
    update: XOR<RestaurantUpdateWithoutAddressInput, RestaurantUncheckedUpdateWithoutAddressInput>
    create: XOR<RestaurantCreateWithoutAddressInput, RestaurantUncheckedCreateWithoutAddressInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutAddressInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutAddressInput, RestaurantUncheckedUpdateWithoutAddressInput>
  }

  export type RestaurantUpdateWithoutAddressInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type TaskCreateWithoutBaseInput = {
    done?: boolean
    restaurant: RestaurantCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutBaseInput = {
    id?: number
    done?: boolean
    restaurantId: number
  }

  export type TaskCreateOrConnectWithoutBaseInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput>
  }

  export type TaskCreateManyBaseInputEnvelope = {
    data: TaskCreateManyBaseInput | TaskCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutBaseInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutBaseInput, TaskUncheckedUpdateWithoutBaseInput>
    create: XOR<TaskCreateWithoutBaseInput, TaskUncheckedCreateWithoutBaseInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutBaseInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutBaseInput, TaskUncheckedUpdateWithoutBaseInput>
  }

  export type TaskUpdateManyWithWhereWithoutBaseInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutBaseInput>
  }

  export type BaseTaskCreateWithoutTasksInput = {
    name: string
    action: string
  }

  export type BaseTaskUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    action: string
  }

  export type BaseTaskCreateOrConnectWithoutTasksInput = {
    where: BaseTaskWhereUniqueInput
    create: XOR<BaseTaskCreateWithoutTasksInput, BaseTaskUncheckedCreateWithoutTasksInput>
  }

  export type RestaurantCreateWithoutTasksInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutTasksInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutTasksInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutTasksInput, RestaurantUncheckedCreateWithoutTasksInput>
  }

  export type BaseTaskUpsertWithoutTasksInput = {
    update: XOR<BaseTaskUpdateWithoutTasksInput, BaseTaskUncheckedUpdateWithoutTasksInput>
    create: XOR<BaseTaskCreateWithoutTasksInput, BaseTaskUncheckedCreateWithoutTasksInput>
    where?: BaseTaskWhereInput
  }

  export type BaseTaskUpdateToOneWithWhereWithoutTasksInput = {
    where?: BaseTaskWhereInput
    data: XOR<BaseTaskUpdateWithoutTasksInput, BaseTaskUncheckedUpdateWithoutTasksInput>
  }

  export type BaseTaskUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type BaseTaskUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUpsertWithoutTasksInput = {
    update: XOR<RestaurantUpdateWithoutTasksInput, RestaurantUncheckedUpdateWithoutTasksInput>
    create: XOR<RestaurantCreateWithoutTasksInput, RestaurantUncheckedCreateWithoutTasksInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutTasksInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutTasksInput, RestaurantUncheckedUpdateWithoutTasksInput>
  }

  export type RestaurantUpdateWithoutTasksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderCreateWithoutWaiterInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    table?: TableCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    victual: VictualCreateNestedOneWithoutOrdersInput
    meal?: MealCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutWaiterInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    tableId?: number | null
  }

  export type OrderCreateOrConnectWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput>
  }

  export type OrderCreateManyWaiterInputEnvelope = {
    data: OrderCreateManyWaiterInput | OrderCreateManyWaiterInput[]
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutWaiterInput = {
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    orders?: OrderCreateNestedManyWithoutMealInput
    table?: TableCreateNestedOneWithoutMealsInput
    restaurant: RestaurantCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutWaiterInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    tableId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutWaiterInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput>
  }

  export type MealCreateManyWaiterInputEnvelope = {
    data: MealCreateManyWaiterInput | MealCreateManyWaiterInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutWaitersInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutWaitersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutWaitersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutWaitersInput, RestaurantUncheckedCreateWithoutWaitersInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutWaiterInput, OrderUncheckedUpdateWithoutWaiterInput>
    create: XOR<OrderCreateWithoutWaiterInput, OrderUncheckedCreateWithoutWaiterInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutWaiterInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutWaiterInput, OrderUncheckedUpdateWithoutWaiterInput>
  }

  export type OrderUpdateManyWithWhereWithoutWaiterInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutWaiterInput>
  }

  export type MealUpsertWithWhereUniqueWithoutWaiterInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutWaiterInput, MealUncheckedUpdateWithoutWaiterInput>
    create: XOR<MealCreateWithoutWaiterInput, MealUncheckedCreateWithoutWaiterInput>
  }

  export type MealUpdateWithWhereUniqueWithoutWaiterInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutWaiterInput, MealUncheckedUpdateWithoutWaiterInput>
  }

  export type MealUpdateManyWithWhereWithoutWaiterInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutWaiterInput>
  }

  export type RestaurantUpsertWithoutWaitersInput = {
    update: XOR<RestaurantUpdateWithoutWaitersInput, RestaurantUncheckedUpdateWithoutWaitersInput>
    create: XOR<RestaurantCreateWithoutWaitersInput, RestaurantUncheckedCreateWithoutWaitersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutWaitersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutWaitersInput, RestaurantUncheckedUpdateWithoutWaitersInput>
  }

  export type RestaurantUpdateWithoutWaitersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutWaitersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type WaiterCreateWithoutOrdersInput = {
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    meals?: MealCreateNestedManyWithoutWaiterInput
    restaurant: RestaurantCreateNestedOneWithoutWaitersInput
  }

  export type WaiterUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    restaurantId: number
    meals?: MealUncheckedCreateNestedManyWithoutWaiterInput
  }

  export type WaiterCreateOrConnectWithoutOrdersInput = {
    where: WaiterWhereUniqueInput
    create: XOR<WaiterCreateWithoutOrdersInput, WaiterUncheckedCreateWithoutOrdersInput>
  }

  export type TableCreateWithoutOrdersInput = {
    createdAt?: Date | string
    name: string
    meals?: MealCreateNestedManyWithoutTableInput
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    meals?: MealUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutOrdersInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
  }

  export type RestaurantCreateWithoutOrdersInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
  }

  export type VictualCreateWithoutOrdersInput = {
    createdAt?: Date | string
    name: string
    price: number
    restaurant: RestaurantCreateNestedOneWithoutVictualsInput
    category?: CategoryCreateNestedOneWithoutVictualsInput
  }

  export type VictualUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    restaurantId: number
    categoryId?: number | null
  }

  export type VictualCreateOrConnectWithoutOrdersInput = {
    where: VictualWhereUniqueInput
    create: XOR<VictualCreateWithoutOrdersInput, VictualUncheckedCreateWithoutOrdersInput>
  }

  export type MealCreateWithoutOrdersInput = {
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    waiter?: WaiterCreateNestedOneWithoutMealsInput
    table?: TableCreateNestedOneWithoutMealsInput
    restaurant: RestaurantCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    waiterId?: number | null
    tableId?: number | null
  }

  export type MealCreateOrConnectWithoutOrdersInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutOrdersInput, MealUncheckedCreateWithoutOrdersInput>
  }

  export type WaiterUpsertWithoutOrdersInput = {
    update: XOR<WaiterUpdateWithoutOrdersInput, WaiterUncheckedUpdateWithoutOrdersInput>
    create: XOR<WaiterCreateWithoutOrdersInput, WaiterUncheckedCreateWithoutOrdersInput>
    where?: WaiterWhereInput
  }

  export type WaiterUpdateToOneWithWhereWithoutOrdersInput = {
    where?: WaiterWhereInput
    data: XOR<WaiterUpdateWithoutOrdersInput, WaiterUncheckedUpdateWithoutOrdersInput>
  }

  export type WaiterUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    meals?: MealUpdateManyWithoutWaiterNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutWaitersNestedInput
  }

  export type WaiterUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutWaiterNestedInput
  }

  export type TableUpsertWithoutOrdersInput = {
    update: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
    create: XOR<TableCreateWithoutOrdersInput, TableUncheckedCreateWithoutOrdersInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutOrdersInput, TableUncheckedUpdateWithoutOrdersInput>
  }

  export type TableUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meals?: MealUpdateManyWithoutTableNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    meals?: MealUncheckedUpdateManyWithoutTableNestedInput
  }

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
    create: XOR<RestaurantCreateWithoutOrdersInput, RestaurantUncheckedCreateWithoutOrdersInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOrdersInput, RestaurantUncheckedUpdateWithoutOrdersInput>
  }

  export type RestaurantUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type VictualUpsertWithoutOrdersInput = {
    update: XOR<VictualUpdateWithoutOrdersInput, VictualUncheckedUpdateWithoutOrdersInput>
    create: XOR<VictualCreateWithoutOrdersInput, VictualUncheckedCreateWithoutOrdersInput>
    where?: VictualWhereInput
  }

  export type VictualUpdateToOneWithWhereWithoutOrdersInput = {
    where?: VictualWhereInput
    data: XOR<VictualUpdateWithoutOrdersInput, VictualUncheckedUpdateWithoutOrdersInput>
  }

  export type VictualUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutVictualsNestedInput
    category?: CategoryUpdateOneWithoutVictualsNestedInput
  }

  export type VictualUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealUpsertWithoutOrdersInput = {
    update: XOR<MealUpdateWithoutOrdersInput, MealUncheckedUpdateWithoutOrdersInput>
    create: XOR<MealCreateWithoutOrdersInput, MealUncheckedCreateWithoutOrdersInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutOrdersInput, MealUncheckedUpdateWithoutOrdersInput>
  }

  export type MealUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneWithoutMealsNestedInput
    table?: TableUpdateOneWithoutMealsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RestaurantCreateWithoutVictualsInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutVictualsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutVictualsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutVictualsInput, RestaurantUncheckedCreateWithoutVictualsInput>
  }

  export type CategoryCreateWithoutVictualsInput = {
    createdAt?: Date | string
    name: string
    root?: boolean
    level?: number
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutVictualsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    parentId?: number | null
    root?: boolean
    level?: number
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutVictualsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutVictualsInput, CategoryUncheckedCreateWithoutVictualsInput>
  }

  export type OrderCreateWithoutVictualInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    waiter: WaiterCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    meal?: MealCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutVictualInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderCreateOrConnectWithoutVictualInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput>
  }

  export type OrderCreateManyVictualInputEnvelope = {
    data: OrderCreateManyVictualInput | OrderCreateManyVictualInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutVictualsInput = {
    update: XOR<RestaurantUpdateWithoutVictualsInput, RestaurantUncheckedUpdateWithoutVictualsInput>
    create: XOR<RestaurantCreateWithoutVictualsInput, RestaurantUncheckedCreateWithoutVictualsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutVictualsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutVictualsInput, RestaurantUncheckedUpdateWithoutVictualsInput>
  }

  export type RestaurantUpdateWithoutVictualsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutVictualsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CategoryUpsertWithoutVictualsInput = {
    update: XOR<CategoryUpdateWithoutVictualsInput, CategoryUncheckedUpdateWithoutVictualsInput>
    create: XOR<CategoryCreateWithoutVictualsInput, CategoryUncheckedCreateWithoutVictualsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutVictualsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutVictualsInput, CategoryUncheckedUpdateWithoutVictualsInput>
  }

  export type CategoryUpdateWithoutVictualsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutVictualsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutVictualInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutVictualInput, OrderUncheckedUpdateWithoutVictualInput>
    create: XOR<OrderCreateWithoutVictualInput, OrderUncheckedCreateWithoutVictualInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutVictualInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutVictualInput, OrderUncheckedUpdateWithoutVictualInput>
  }

  export type OrderUpdateManyWithWhereWithoutVictualInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutVictualInput>
  }

  export type VictualCreateWithoutCategoryInput = {
    createdAt?: Date | string
    name: string
    price: number
    restaurant: RestaurantCreateNestedOneWithoutVictualsInput
    orders?: OrderCreateNestedManyWithoutVictualInput
  }

  export type VictualUncheckedCreateWithoutCategoryInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    restaurantId: number
    orders?: OrderUncheckedCreateNestedManyWithoutVictualInput
  }

  export type VictualCreateOrConnectWithoutCategoryInput = {
    where: VictualWhereUniqueInput
    create: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput>
  }

  export type VictualCreateManyCategoryInputEnvelope = {
    data: VictualCreateManyCategoryInput | VictualCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutSubCategoriesInput = {
    createdAt?: Date | string
    name: string
    root?: boolean
    level?: number
    victuals?: VictualCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutSubCategoriesInput
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    parentId?: number | null
    root?: boolean
    level?: number
    victuals?: VictualUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type RestaurantCreateWithoutCategoriesInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutCategoriesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCategoriesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutParentInput = {
    createdAt?: Date | string
    name: string
    root?: boolean
    level?: number
    victuals?: VictualCreateNestedManyWithoutCategoryInput
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
    subCategories?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    root?: boolean
    level?: number
    victuals?: VictualUncheckedCreateNestedManyWithoutCategoryInput
    subCategories?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type VictualUpsertWithWhereUniqueWithoutCategoryInput = {
    where: VictualWhereUniqueInput
    update: XOR<VictualUpdateWithoutCategoryInput, VictualUncheckedUpdateWithoutCategoryInput>
    create: XOR<VictualCreateWithoutCategoryInput, VictualUncheckedCreateWithoutCategoryInput>
  }

  export type VictualUpdateWithWhereUniqueWithoutCategoryInput = {
    where: VictualWhereUniqueInput
    data: XOR<VictualUpdateWithoutCategoryInput, VictualUncheckedUpdateWithoutCategoryInput>
  }

  export type VictualUpdateManyWithWhereWithoutCategoryInput = {
    where: VictualScalarWhereInput
    data: XOR<VictualUpdateManyMutationInput, VictualUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<CategoryCreateWithoutSubCategoriesInput, CategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSubCategoriesInput, CategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type CategoryUpdateWithoutSubCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type RestaurantUpsertWithoutCategoriesInput = {
    update: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type RestaurantUpdateWithoutCategoriesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type OrderCreateWithoutTableInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    waiter: WaiterCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    victual: VictualCreateNestedOneWithoutOrdersInput
    meal?: MealCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutTableInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    waiterId: number
  }

  export type OrderCreateOrConnectWithoutTableInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderCreateManyTableInputEnvelope = {
    data: OrderCreateManyTableInput | OrderCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type MealCreateWithoutTableInput = {
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    orders?: OrderCreateNestedManyWithoutMealInput
    waiter?: WaiterCreateNestedOneWithoutMealsInput
    restaurant: RestaurantCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutTableInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    waiterId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutTableInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput>
  }

  export type MealCreateManyTableInputEnvelope = {
    data: MealCreateManyTableInput | MealCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutTablesInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutTablesInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutTablesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
    create: XOR<OrderCreateWithoutTableInput, OrderUncheckedCreateWithoutTableInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTableInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTableInput, OrderUncheckedUpdateWithoutTableInput>
  }

  export type OrderUpdateManyWithWhereWithoutTableInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTableInput>
  }

  export type MealUpsertWithWhereUniqueWithoutTableInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutTableInput, MealUncheckedUpdateWithoutTableInput>
    create: XOR<MealCreateWithoutTableInput, MealUncheckedCreateWithoutTableInput>
  }

  export type MealUpdateWithWhereUniqueWithoutTableInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutTableInput, MealUncheckedUpdateWithoutTableInput>
  }

  export type MealUpdateManyWithWhereWithoutTableInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutTableInput>
  }

  export type RestaurantUpsertWithoutTablesInput = {
    update: XOR<RestaurantUpdateWithoutTablesInput, RestaurantUncheckedUpdateWithoutTablesInput>
    create: XOR<RestaurantCreateWithoutTablesInput, RestaurantUncheckedCreateWithoutTablesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutTablesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutTablesInput, RestaurantUncheckedUpdateWithoutTablesInput>
  }

  export type RestaurantUpdateWithoutTablesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type OrderCreateWithoutMealInput = {
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    waiter: WaiterCreateNestedOneWithoutOrdersInput
    table?: TableCreateNestedOneWithoutOrdersInput
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput
    victual: VictualCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutMealInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    victualId: number
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderCreateOrConnectWithoutMealInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput>
  }

  export type OrderCreateManyMealInputEnvelope = {
    data: OrderCreateManyMealInput | OrderCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type WaiterCreateWithoutMealsInput = {
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    orders?: OrderCreateNestedManyWithoutWaiterInput
    restaurant: RestaurantCreateNestedOneWithoutWaitersInput
  }

  export type WaiterUncheckedCreateWithoutMealsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
    restaurantId: number
    orders?: OrderUncheckedCreateNestedManyWithoutWaiterInput
  }

  export type WaiterCreateOrConnectWithoutMealsInput = {
    where: WaiterWhereUniqueInput
    create: XOR<WaiterCreateWithoutMealsInput, WaiterUncheckedCreateWithoutMealsInput>
  }

  export type TableCreateWithoutMealsInput = {
    createdAt?: Date | string
    name: string
    orders?: OrderCreateNestedManyWithoutTableInput
    restaurant: RestaurantCreateNestedOneWithoutTablesInput
  }

  export type TableUncheckedCreateWithoutMealsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    orders?: OrderUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutMealsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutMealsInput, TableUncheckedCreateWithoutMealsInput>
  }

  export type RestaurantCreateWithoutMealsInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMealsInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    openingHours?: OpeningHourUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMealsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMealsInput, RestaurantUncheckedCreateWithoutMealsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutMealInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMealInput, OrderUncheckedUpdateWithoutMealInput>
    create: XOR<OrderCreateWithoutMealInput, OrderUncheckedCreateWithoutMealInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMealInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMealInput, OrderUncheckedUpdateWithoutMealInput>
  }

  export type OrderUpdateManyWithWhereWithoutMealInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMealInput>
  }

  export type WaiterUpsertWithoutMealsInput = {
    update: XOR<WaiterUpdateWithoutMealsInput, WaiterUncheckedUpdateWithoutMealsInput>
    create: XOR<WaiterCreateWithoutMealsInput, WaiterUncheckedCreateWithoutMealsInput>
    where?: WaiterWhereInput
  }

  export type WaiterUpdateToOneWithWhereWithoutMealsInput = {
    where?: WaiterWhereInput
    data: XOR<WaiterUpdateWithoutMealsInput, WaiterUncheckedUpdateWithoutMealsInput>
  }

  export type WaiterUpdateWithoutMealsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutWaiterNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutWaitersNestedInput
  }

  export type WaiterUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
  }

  export type TableUpsertWithoutMealsInput = {
    update: XOR<TableUpdateWithoutMealsInput, TableUncheckedUpdateWithoutMealsInput>
    create: XOR<TableCreateWithoutMealsInput, TableUncheckedCreateWithoutMealsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutMealsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutMealsInput, TableUncheckedUpdateWithoutMealsInput>
  }

  export type TableUpdateWithoutMealsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutTableNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutTablesNestedInput
  }

  export type TableUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
  }

  export type RestaurantUpsertWithoutMealsInput = {
    update: XOR<RestaurantUpdateWithoutMealsInput, RestaurantUncheckedUpdateWithoutMealsInput>
    create: XOR<RestaurantCreateWithoutMealsInput, RestaurantUncheckedCreateWithoutMealsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutMealsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutMealsInput, RestaurantUncheckedUpdateWithoutMealsInput>
  }

  export type RestaurantUpdateWithoutMealsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutOpeningHoursInput = {
    createdAt?: Date | string
    name: string
    email: string
    password: string
    address?: AddressCreateNestedOneWithoutRestaurantInput
    currency?: CurrencyCreateNestedOneWithoutRestaurantsInput
    settings?: SettingsCreateNestedOneWithoutRestaurantInput
    tasks?: TaskCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterCreateNestedManyWithoutRestaurantInput
    orders?: OrderCreateNestedManyWithoutRestaurantInput
    victuals?: VictualCreateNestedManyWithoutRestaurantInput
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    tables?: TableCreateNestedManyWithoutRestaurantInput
    meals?: MealCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOpeningHoursInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
    currencyId?: number | null
    address?: AddressUncheckedCreateNestedOneWithoutRestaurantInput
    settings?: SettingsUncheckedCreateNestedOneWithoutRestaurantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutRestaurantInput
    waiters?: WaiterUncheckedCreateNestedManyWithoutRestaurantInput
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput
    victuals?: VictualUncheckedCreateNestedManyWithoutRestaurantInput
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    tables?: TableUncheckedCreateNestedManyWithoutRestaurantInput
    meals?: MealUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOpeningHoursInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOpeningHoursInput, RestaurantUncheckedCreateWithoutOpeningHoursInput>
  }

  export type RestaurantUpsertWithoutOpeningHoursInput = {
    update: XOR<RestaurantUpdateWithoutOpeningHoursInput, RestaurantUncheckedUpdateWithoutOpeningHoursInput>
    create: XOR<RestaurantCreateWithoutOpeningHoursInput, RestaurantUncheckedCreateWithoutOpeningHoursInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOpeningHoursInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOpeningHoursInput, RestaurantUncheckedUpdateWithoutOpeningHoursInput>
  }

  export type RestaurantUpdateWithoutOpeningHoursInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    currency?: CurrencyUpdateOneWithoutRestaurantsNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOpeningHoursInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    currencyId?: NullableIntFieldUpdateOperationsInput | number | null
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type TaskCreateManyRestaurantInput = {
    id?: number
    done?: boolean
    baseId: number
  }

  export type OpeningHourCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    start: string
    end: string
  }

  export type WaiterCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    email: string
    name: string
    gender: string
    profileIcon?: string | null
    password: string
  }

  export type OrderCreateManyRestaurantInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    tableId?: number | null
    waiterId: number
  }

  export type VictualCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    categoryId?: number | null
  }

  export type CategoryCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
    parentId?: number | null
    root?: boolean
    level?: number
  }

  export type TableCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    name: string
  }

  export type MealCreateManyRestaurantInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    waiterId?: number | null
    tableId?: number | null
  }

  export type TaskUpdateWithoutRestaurantInput = {
    done?: BoolFieldUpdateOperationsInput | boolean
    base?: BaseTaskUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    baseId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    baseId?: IntFieldUpdateOperationsInput | number
  }

  export type OpeningHourUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningHourUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
  }

  export type OpeningHourUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
  }

  export type WaiterUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutWaiterNestedInput
    meals?: MealUpdateManyWithoutWaiterNestedInput
  }

  export type WaiterUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutWaiterNestedInput
    meals?: MealUncheckedUpdateManyWithoutWaiterNestedInput
  }

  export type WaiterUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    profileIcon?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutRestaurantInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
    victual?: VictualUpdateOneRequiredWithoutOrdersNestedInput
    meal?: MealUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type VictualUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutVictualsNestedInput
    orders?: OrderUpdateManyWithoutVictualNestedInput
  }

  export type VictualUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutVictualNestedInput
  }

  export type VictualUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutSubCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type TableUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutTableNestedInput
    meals?: MealUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutTableNestedInput
    meals?: MealUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MealUpdateWithoutRestaurantInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutMealNestedInput
    waiter?: WaiterUpdateOneWithoutMealsNestedInput
    table?: TableUpdateOneWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RestaurantCreateManyCurrencyInput = {
    id?: number
    createdAt?: Date | string
    name: string
    email: string
    password: string
  }

  export type RestaurantUpdateWithoutCurrencyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    tables?: TableUpdateManyWithoutRestaurantNestedInput
    meals?: MealUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: AddressUncheckedUpdateOneWithoutRestaurantNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutRestaurantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutRestaurantNestedInput
    openingHours?: OpeningHourUncheckedUpdateManyWithoutRestaurantNestedInput
    waiters?: WaiterUncheckedUpdateManyWithoutRestaurantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput
    victuals?: VictualUncheckedUpdateManyWithoutRestaurantNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    tables?: TableUncheckedUpdateManyWithoutRestaurantNestedInput
    meals?: MealUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyBaseInput = {
    id?: number
    done?: boolean
    restaurantId: number
  }

  export type TaskUpdateWithoutBaseInput = {
    done?: BoolFieldUpdateOperationsInput | boolean
    restaurant?: RestaurantUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    done?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyWaiterInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    tableId?: number | null
  }

  export type MealCreateManyWaiterInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    tableId?: number | null
  }

  export type OrderUpdateWithoutWaiterInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    table?: TableUpdateOneWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    victual?: VictualUpdateOneRequiredWithoutOrdersNestedInput
    meal?: MealUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutWaiterInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderUncheckedUpdateManyWithoutWaiterInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealUpdateWithoutWaiterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutMealNestedInput
    table?: TableUpdateOneWithoutMealsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutWaiterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutWaiterInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyVictualInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderUpdateWithoutVictualInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    meal?: MealUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutVictualInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutVictualInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type VictualCreateManyCategoryInput = {
    id?: number
    createdAt?: Date | string
    name: string
    price: number
    restaurantId: number
  }

  export type CategoryCreateManyParentInput = {
    id?: number
    createdAt?: Date | string
    name: string
    restaurantId: number
    root?: boolean
    level?: number
  }

  export type VictualUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurant?: RestaurantUpdateOneRequiredWithoutVictualsNestedInput
    orders?: OrderUpdateManyWithoutVictualNestedInput
  }

  export type VictualUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    orders?: OrderUncheckedUpdateManyWithoutVictualNestedInput
  }

  export type VictualUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUpdateWithoutParentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUpdateManyWithoutCategoryNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
    subCategories?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
    victuals?: VictualUncheckedUpdateManyWithoutCategoryNestedInput
    subCategories?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: IntFieldUpdateOperationsInput | number
    root?: BoolFieldUpdateOperationsInput | boolean
    level?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateManyTableInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    mealId?: number | null
    victualId: number
    restaurantId: number
    waiterId: number
  }

  export type MealCreateManyTableInput = {
    id?: number
    createdAt?: Date | string
    start: Date | string
    end: Date | string
    total: number
    restaurantId: number
    waiterId?: number | null
  }

  export type OrderUpdateWithoutTableInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneRequiredWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    victual?: VictualUpdateOneRequiredWithoutOrdersNestedInput
    meal?: MealUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type MealUpdateWithoutTableInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    orders?: OrderUpdateManyWithoutMealNestedInput
    waiter?: WaiterUpdateOneWithoutMealsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: FloatFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    waiterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyMealInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    isReady?: boolean
    closed?: boolean
    quantity?: number
    victualId: number
    restaurantId: number
    tableId?: number | null
    waiterId: number
  }

  export type OrderUpdateWithoutMealInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    waiter?: WaiterUpdateOneRequiredWithoutOrdersNestedInput
    table?: TableUpdateOneWithoutOrdersNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput
    victual?: VictualUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isReady?: BoolFieldUpdateOperationsInput | boolean
    closed?: BoolFieldUpdateOperationsInput | boolean
    quantity?: IntFieldUpdateOperationsInput | number
    victualId?: IntFieldUpdateOperationsInput | number
    restaurantId?: IntFieldUpdateOperationsInput | number
    tableId?: NullableIntFieldUpdateOperationsInput | number | null
    waiterId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
     */
    export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyCountOutputTypeDefaultArgs instead
     */
    export type CurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BaseTaskCountOutputTypeDefaultArgs instead
     */
    export type BaseTaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BaseTaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaiterCountOutputTypeDefaultArgs instead
     */
    export type WaiterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaiterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VictualCountOutputTypeDefaultArgs instead
     */
    export type VictualCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VictualCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableCountOutputTypeDefaultArgs instead
     */
    export type TableCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealCountOutputTypeDefaultArgs instead
     */
    export type MealCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantDefaultArgs instead
     */
    export type RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingsDefaultArgs instead
     */
    export type SettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CurrencyDefaultArgs instead
     */
    export type CurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddressDefaultArgs instead
     */
    export type AddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AddressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BaseTaskDefaultArgs instead
     */
    export type BaseTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BaseTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WaiterDefaultArgs instead
     */
    export type WaiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WaiterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VictualDefaultArgs instead
     */
    export type VictualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VictualDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TableDefaultArgs instead
     */
    export type TableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealDefaultArgs instead
     */
    export type MealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OpeningHourDefaultArgs instead
     */
    export type OpeningHourArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OpeningHourDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}