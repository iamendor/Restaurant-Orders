
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.RestaurantScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  email: 'email',
  password: 'password',
  currencyId: 'currencyId'
};

exports.Prisma.CurrencyScalarFieldEnum = {
  id: 'id',
  name: 'name',
  symbol: 'symbol'
};

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  country: 'country',
  zip: 'zip',
  city: 'city',
  address1: 'address1',
  address2: 'address2',
  restaurantId: 'restaurantId'
};

exports.Prisma.BaseTaskScalarFieldEnum = {
  id: 'id',
  name: 'name',
  action: 'action'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  done: 'done',
  baseId: 'baseId',
  restaurantId: 'restaurantId'
};

exports.Prisma.WaiterScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  email: 'email',
  name: 'name',
  gender: 'gender',
  profileIcon: 'profileIcon',
  password: 'password',
  restaurantId: 'restaurantId'
};

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.VictualScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  price: 'price',
  restaurantId: 'restaurantId',
  categoryId: 'categoryId'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  restaurantId: 'restaurantId',
  parentId: 'parentId',
  root: 'root',
  level: 'level'
};

exports.Prisma.TableScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  restaurantId: 'restaurantId'
};

exports.Prisma.MealScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  start: 'start',
  end: 'end',
  total: 'total',
  restaurantId: 'restaurantId',
  waiterId: 'waiterId',
  tableId: 'tableId'
};

exports.Prisma.OpeningHourScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  name: 'name',
  start: 'start',
  end: 'end',
  restaurantId: 'restaurantId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Restaurant: 'Restaurant',
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
