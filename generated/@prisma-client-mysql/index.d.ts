
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Billboard
 * 
 */
export type Billboard = $Result.DefaultSelection<Prisma.$BillboardPayload>
/**
 * Model Chef
 * 
 */
export type Chef = $Result.DefaultSelection<Prisma.$ChefPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model ChefSchedule
 * 
 */
export type ChefSchedule = $Result.DefaultSelection<Prisma.$ChefSchedulePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PLACED: 'PLACED',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stores
 * const stores = await prisma.store.findMany()
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
   * // Fetch zero or more Stores
   * const stores = await prisma.store.findMany()
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
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs>;

  /**
   * `prisma.billboard`: Exposes CRUD operations for the **Billboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billboards
    * const billboards = await prisma.billboard.findMany()
    * ```
    */
  get billboard(): Prisma.BillboardDelegate<ExtArgs>;

  /**
   * `prisma.chef`: Exposes CRUD operations for the **Chef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chefs
    * const chefs = await prisma.chef.findMany()
    * ```
    */
  get chef(): Prisma.ChefDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.chefSchedule`: Exposes CRUD operations for the **ChefSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChefSchedules
    * const chefSchedules = await prisma.chefSchedule.findMany()
    * ```
    */
  get chefSchedule(): Prisma.ChefScheduleDelegate<ExtArgs>;

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
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
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
    Store: 'Store',
    Billboard: 'Billboard',
    Chef: 'Chef',
    Menu: 'Menu',
    ChefSchedule: 'ChefSchedule',
    Order: 'Order',
    OrderItem: 'OrderItem'
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
      modelProps: 'store' | 'billboard' | 'chef' | 'menu' | 'chefSchedule' | 'order' | 'orderItem'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>,
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Billboard: {
        payload: Prisma.$BillboardPayload<ExtArgs>
        fields: Prisma.BillboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillboardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillboardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findFirst: {
            args: Prisma.BillboardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillboardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          findMany: {
            args: Prisma.BillboardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>[]
          }
          create: {
            args: Prisma.BillboardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          createMany: {
            args: Prisma.BillboardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BillboardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          update: {
            args: Prisma.BillboardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          deleteMany: {
            args: Prisma.BillboardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BillboardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BillboardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BillboardPayload>
          }
          aggregate: {
            args: Prisma.BillboardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBillboard>
          }
          groupBy: {
            args: Prisma.BillboardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BillboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillboardCountArgs<ExtArgs>,
            result: $Utils.Optional<BillboardCountAggregateOutputType> | number
          }
        }
      }
      Chef: {
        payload: Prisma.$ChefPayload<ExtArgs>
        fields: Prisma.ChefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChefFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChefFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          findFirst: {
            args: Prisma.ChefFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChefFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          findMany: {
            args: Prisma.ChefFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>[]
          }
          create: {
            args: Prisma.ChefCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          createMany: {
            args: Prisma.ChefCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChefDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          update: {
            args: Prisma.ChefUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          deleteMany: {
            args: Prisma.ChefDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChefUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChefUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefPayload>
          }
          aggregate: {
            args: Prisma.ChefAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChef>
          }
          groupBy: {
            args: Prisma.ChefGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChefGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChefCountArgs<ExtArgs>,
            result: $Utils.Optional<ChefCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>,
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      ChefSchedule: {
        payload: Prisma.$ChefSchedulePayload<ExtArgs>
        fields: Prisma.ChefScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChefScheduleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChefScheduleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          findFirst: {
            args: Prisma.ChefScheduleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChefScheduleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          findMany: {
            args: Prisma.ChefScheduleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>[]
          }
          create: {
            args: Prisma.ChefScheduleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          createMany: {
            args: Prisma.ChefScheduleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChefScheduleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          update: {
            args: Prisma.ChefScheduleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ChefScheduleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChefScheduleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChefScheduleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChefSchedulePayload>
          }
          aggregate: {
            args: Prisma.ChefScheduleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChefSchedule>
          }
          groupBy: {
            args: Prisma.ChefScheduleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChefScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChefScheduleCountArgs<ExtArgs>,
            result: $Utils.Optional<ChefScheduleCountAggregateOutputType> | number
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
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
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
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    menus: number
    billboards: number
    order: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | StoreCountOutputTypeCountMenusArgs
    billboards?: boolean | StoreCountOutputTypeCountBillboardsArgs
    order?: boolean | StoreCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountBillboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
  }


  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }



  /**
   * Count Type ChefCountOutputType
   */

  export type ChefCountOutputType = {
    menus: number
    schedules: number
  }

  export type ChefCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | ChefCountOutputTypeCountMenusArgs
    schedules?: boolean | ChefCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes

  /**
   * ChefCountOutputType without action
   */
  export type ChefCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefCountOutputType
     */
    select?: ChefCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChefCountOutputType without action
   */
  export type ChefCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }


  /**
   * ChefCountOutputType without action
   */
  export type ChefCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChefScheduleWhereInput
  }



  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    orderItems: number
    availableDates: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuCountOutputTypeCountOrderItemsArgs
    availableDates?: boolean | MenuCountOutputTypeCountAvailableDatesArgs
  }

  // Custom InputTypes

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountAvailableDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChefScheduleWhereInput
  }



  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    name: string
    userId: string
    createAt: Date
    updateAt: Date
    _count: StoreCountAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    menus?: boolean | Store$menusArgs<ExtArgs>
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    order?: boolean | Store$orderArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | Store$menusArgs<ExtArgs>
    billboards?: boolean | Store$billboardsArgs<ExtArgs>
    order?: boolean | Store$orderArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      menus: Prisma.$MenuPayload<ExtArgs>[]
      billboards: Prisma.$BillboardPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }


  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StoreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Store that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StoreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StoreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
    **/
    create<T extends StoreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreCreateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stores.
     *     @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     *     @example
     *     // Create many Stores
     *     const store = await prisma.store.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StoreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
    **/
    delete<T extends StoreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StoreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StoreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StoreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
    **/
    upsert<T extends StoreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>
    ): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    menus<T extends Store$menusArgs<ExtArgs> = {}>(args?: Subset<T, Store$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    billboards<T extends Store$billboardsArgs<ExtArgs> = {}>(args?: Subset<T, Store$billboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findMany'> | Null>;

    order<T extends Store$orderArgs<ExtArgs> = {}>(args?: Subset<T, Store$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Store model
   */ 
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly userId: FieldRef<"Store", 'String'>
    readonly createAt: FieldRef<"Store", 'DateTime'>
    readonly updateAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }


  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }


  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
  }


  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }


  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }


  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
  }


  /**
   * Store.menus
   */
  export type Store$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }


  /**
   * Store.billboards
   */
  export type Store$billboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    cursor?: BillboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Store.order
   */
  export type Store$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
  }



  /**
   * Model Billboard
   */

  export type AggregateBillboard = {
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  export type BillboardMinAggregateOutputType = {
    id: string | null
    storedId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardMaxAggregateOutputType = {
    id: string | null
    storedId: string | null
    label: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BillboardCountAggregateOutputType = {
    id: number
    storedId: number
    label: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BillboardMinAggregateInputType = {
    id?: true
    storedId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardMaxAggregateInputType = {
    id?: true
    storedId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BillboardCountAggregateInputType = {
    id?: true
    storedId?: true
    label?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BillboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboard to aggregate.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billboards
    **/
    _count?: true | BillboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillboardMaxAggregateInputType
  }

  export type GetBillboardAggregateType<T extends BillboardAggregateArgs> = {
        [P in keyof T & keyof AggregateBillboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillboard[P]>
      : GetScalarType<T[P], AggregateBillboard[P]>
  }




  export type BillboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillboardWhereInput
    orderBy?: BillboardOrderByWithAggregationInput | BillboardOrderByWithAggregationInput[]
    by: BillboardScalarFieldEnum[] | BillboardScalarFieldEnum
    having?: BillboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillboardCountAggregateInputType | true
    _min?: BillboardMinAggregateInputType
    _max?: BillboardMaxAggregateInputType
  }

  export type BillboardGroupByOutputType = {
    id: string
    storedId: string
    label: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: BillboardCountAggregateOutputType | null
    _min: BillboardMinAggregateOutputType | null
    _max: BillboardMaxAggregateOutputType | null
  }

  type GetBillboardGroupByPayload<T extends BillboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillboardGroupByOutputType[P]>
            : GetScalarType<T[P], BillboardGroupByOutputType[P]>
        }
      >
    >


  export type BillboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storedId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["billboard"]>

  export type BillboardSelectScalar = {
    id?: boolean
    storedId?: boolean
    label?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BillboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }


  export type $BillboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Billboard"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storedId: string
      label: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["billboard"]>
    composites: {}
  }


  type BillboardGetPayload<S extends boolean | null | undefined | BillboardDefaultArgs> = $Result.GetResult<Prisma.$BillboardPayload, S>

  type BillboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillboardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillboardCountAggregateInputType | true
    }

  export interface BillboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billboard'], meta: { name: 'Billboard' } }
    /**
     * Find zero or one Billboard that matches the filter.
     * @param {BillboardFindUniqueArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BillboardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardFindUniqueArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Billboard that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BillboardFindUniqueOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BillboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Billboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BillboardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindFirstArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Billboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindFirstOrThrowArgs} args - Arguments to find a Billboard
     * @example
     * // Get one Billboard
     * const billboard = await prisma.billboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BillboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Billboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billboards
     * const billboards = await prisma.billboard.findMany()
     * 
     * // Get first 10 Billboards
     * const billboards = await prisma.billboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billboardWithIdOnly = await prisma.billboard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BillboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Billboard.
     * @param {BillboardCreateArgs} args - Arguments to create a Billboard.
     * @example
     * // Create one Billboard
     * const Billboard = await prisma.billboard.create({
     *   data: {
     *     // ... data to create a Billboard
     *   }
     * })
     * 
    **/
    create<T extends BillboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardCreateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Billboards.
     *     @param {BillboardCreateManyArgs} args - Arguments to create many Billboards.
     *     @example
     *     // Create many Billboards
     *     const billboard = await prisma.billboard.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BillboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Billboard.
     * @param {BillboardDeleteArgs} args - Arguments to delete one Billboard.
     * @example
     * // Delete one Billboard
     * const Billboard = await prisma.billboard.delete({
     *   where: {
     *     // ... filter to delete one Billboard
     *   }
     * })
     * 
    **/
    delete<T extends BillboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardDeleteArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Billboard.
     * @param {BillboardUpdateArgs} args - Arguments to update one Billboard.
     * @example
     * // Update one Billboard
     * const billboard = await prisma.billboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BillboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Billboards.
     * @param {BillboardDeleteManyArgs} args - Arguments to filter Billboards to delete.
     * @example
     * // Delete a few Billboards
     * const { count } = await prisma.billboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BillboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BillboardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billboards
     * const billboard = await prisma.billboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BillboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Billboard.
     * @param {BillboardUpsertArgs} args - Arguments to update or create a Billboard.
     * @example
     * // Update or create a Billboard
     * const billboard = await prisma.billboard.upsert({
     *   create: {
     *     // ... data to create a Billboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billboard we want to update
     *   }
     * })
    **/
    upsert<T extends BillboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BillboardUpsertArgs<ExtArgs>>
    ): Prisma__BillboardClient<$Result.GetResult<Prisma.$BillboardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Billboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardCountArgs} args - Arguments to filter Billboards to count.
     * @example
     * // Count the number of Billboards
     * const count = await prisma.billboard.count({
     *   where: {
     *     // ... the filter for the Billboards we want to count
     *   }
     * })
    **/
    count<T extends BillboardCountArgs>(
      args?: Subset<T, BillboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillboardAggregateArgs>(args: Subset<T, BillboardAggregateArgs>): Prisma.PrismaPromise<GetBillboardAggregateType<T>>

    /**
     * Group by Billboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillboardGroupByArgs} args - Group by arguments.
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
      T extends BillboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillboardGroupByArgs['orderBy'] }
        : { orderBy?: BillboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Billboard model
   */
  readonly fields: BillboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Billboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Billboard model
   */ 
  interface BillboardFieldRefs {
    readonly id: FieldRef<"Billboard", 'String'>
    readonly storedId: FieldRef<"Billboard", 'String'>
    readonly label: FieldRef<"Billboard", 'String'>
    readonly imageUrl: FieldRef<"Billboard", 'String'>
    readonly createdAt: FieldRef<"Billboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Billboard", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Billboard findUnique
   */
  export type BillboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard findUniqueOrThrow
   */
  export type BillboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard findFirst
   */
  export type BillboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard findFirstOrThrow
   */
  export type BillboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboard to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billboards.
     */
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard findMany
   */
  export type BillboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter, which Billboards to fetch.
     */
    where?: BillboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billboards to fetch.
     */
    orderBy?: BillboardOrderByWithRelationInput | BillboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billboards.
     */
    cursor?: BillboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billboards.
     */
    skip?: number
    distinct?: BillboardScalarFieldEnum | BillboardScalarFieldEnum[]
  }


  /**
   * Billboard create
   */
  export type BillboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Billboard.
     */
    data: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
  }


  /**
   * Billboard createMany
   */
  export type BillboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billboards.
     */
    data: BillboardCreateManyInput | BillboardCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Billboard update
   */
  export type BillboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Billboard.
     */
    data: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
    /**
     * Choose, which Billboard to update.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard updateMany
   */
  export type BillboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billboards.
     */
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyInput>
    /**
     * Filter which Billboards to update
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard upsert
   */
  export type BillboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Billboard to update in case it exists.
     */
    where: BillboardWhereUniqueInput
    /**
     * In case the Billboard found by the `where` argument doesn't exist, create a new Billboard with this data.
     */
    create: XOR<BillboardCreateInput, BillboardUncheckedCreateInput>
    /**
     * In case the Billboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillboardUpdateInput, BillboardUncheckedUpdateInput>
  }


  /**
   * Billboard delete
   */
  export type BillboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
    /**
     * Filter which Billboard to delete.
     */
    where: BillboardWhereUniqueInput
  }


  /**
   * Billboard deleteMany
   */
  export type BillboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billboards to delete
     */
    where?: BillboardWhereInput
  }


  /**
   * Billboard without action
   */
  export type BillboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billboard
     */
    select?: BillboardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BillboardInclude<ExtArgs> | null
  }



  /**
   * Model Chef
   */

  export type AggregateChef = {
    _count: ChefCountAggregateOutputType | null
    _avg: ChefAvgAggregateOutputType | null
    _sum: ChefSumAggregateOutputType | null
    _min: ChefMinAggregateOutputType | null
    _max: ChefMaxAggregateOutputType | null
  }

  export type ChefAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChefSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChefMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChefMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChefCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type ChefAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChefSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChefMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChefMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChefCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type ChefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chef to aggregate.
     */
    where?: ChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chefs to fetch.
     */
    orderBy?: ChefOrderByWithRelationInput | ChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chefs
    **/
    _count?: true | ChefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChefMaxAggregateInputType
  }

  export type GetChefAggregateType<T extends ChefAggregateArgs> = {
        [P in keyof T & keyof AggregateChef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChef[P]>
      : GetScalarType<T[P], AggregateChef[P]>
  }




  export type ChefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChefWhereInput
    orderBy?: ChefOrderByWithAggregationInput | ChefOrderByWithAggregationInput[]
    by: ChefScalarFieldEnum[] | ChefScalarFieldEnum
    having?: ChefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChefCountAggregateInputType | true
    _avg?: ChefAvgAggregateInputType
    _sum?: ChefSumAggregateInputType
    _min?: ChefMinAggregateInputType
    _max?: ChefMaxAggregateInputType
  }

  export type ChefGroupByOutputType = {
    id: number
    userId: number
    _count: ChefCountAggregateOutputType | null
    _avg: ChefAvgAggregateOutputType | null
    _sum: ChefSumAggregateOutputType | null
    _min: ChefMinAggregateOutputType | null
    _max: ChefMaxAggregateOutputType | null
  }

  type GetChefGroupByPayload<T extends ChefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChefGroupByOutputType[P]>
            : GetScalarType<T[P], ChefGroupByOutputType[P]>
        }
      >
    >


  export type ChefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    menus?: boolean | Chef$menusArgs<ExtArgs>
    schedules?: boolean | Chef$schedulesArgs<ExtArgs>
    _count?: boolean | ChefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chef"]>

  export type ChefSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type ChefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menus?: boolean | Chef$menusArgs<ExtArgs>
    schedules?: boolean | Chef$schedulesArgs<ExtArgs>
    _count?: boolean | ChefCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chef"
    objects: {
      menus: Prisma.$MenuPayload<ExtArgs>[]
      schedules: Prisma.$ChefSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["chef"]>
    composites: {}
  }


  type ChefGetPayload<S extends boolean | null | undefined | ChefDefaultArgs> = $Result.GetResult<Prisma.$ChefPayload, S>

  type ChefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChefFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChefCountAggregateInputType | true
    }

  export interface ChefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chef'], meta: { name: 'Chef' } }
    /**
     * Find zero or one Chef that matches the filter.
     * @param {ChefFindUniqueArgs} args - Arguments to find a Chef
     * @example
     * // Get one Chef
     * const chef = await prisma.chef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChefFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChefFindUniqueArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Chef that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChefFindUniqueOrThrowArgs} args - Arguments to find a Chef
     * @example
     * // Get one Chef
     * const chef = await prisma.chef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChefFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Chef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefFindFirstArgs} args - Arguments to find a Chef
     * @example
     * // Get one Chef
     * const chef = await prisma.chef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChefFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefFindFirstArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Chef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefFindFirstOrThrowArgs} args - Arguments to find a Chef
     * @example
     * // Get one Chef
     * const chef = await prisma.chef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChefFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Chefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chefs
     * const chefs = await prisma.chef.findMany()
     * 
     * // Get first 10 Chefs
     * const chefs = await prisma.chef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chefWithIdOnly = await prisma.chef.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChefFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Chef.
     * @param {ChefCreateArgs} args - Arguments to create a Chef.
     * @example
     * // Create one Chef
     * const Chef = await prisma.chef.create({
     *   data: {
     *     // ... data to create a Chef
     *   }
     * })
     * 
    **/
    create<T extends ChefCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChefCreateArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Chefs.
     *     @param {ChefCreateManyArgs} args - Arguments to create many Chefs.
     *     @example
     *     // Create many Chefs
     *     const chef = await prisma.chef.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChefCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chef.
     * @param {ChefDeleteArgs} args - Arguments to delete one Chef.
     * @example
     * // Delete one Chef
     * const Chef = await prisma.chef.delete({
     *   where: {
     *     // ... filter to delete one Chef
     *   }
     * })
     * 
    **/
    delete<T extends ChefDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChefDeleteArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Chef.
     * @param {ChefUpdateArgs} args - Arguments to update one Chef.
     * @example
     * // Update one Chef
     * const chef = await prisma.chef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChefUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChefUpdateArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Chefs.
     * @param {ChefDeleteManyArgs} args - Arguments to filter Chefs to delete.
     * @example
     * // Delete a few Chefs
     * const { count } = await prisma.chef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChefDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chefs
     * const chef = await prisma.chef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChefUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChefUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chef.
     * @param {ChefUpsertArgs} args - Arguments to update or create a Chef.
     * @example
     * // Update or create a Chef
     * const chef = await prisma.chef.upsert({
     *   create: {
     *     // ... data to create a Chef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chef we want to update
     *   }
     * })
    **/
    upsert<T extends ChefUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChefUpsertArgs<ExtArgs>>
    ): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Chefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefCountArgs} args - Arguments to filter Chefs to count.
     * @example
     * // Count the number of Chefs
     * const count = await prisma.chef.count({
     *   where: {
     *     // ... the filter for the Chefs we want to count
     *   }
     * })
    **/
    count<T extends ChefCountArgs>(
      args?: Subset<T, ChefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChefAggregateArgs>(args: Subset<T, ChefAggregateArgs>): Prisma.PrismaPromise<GetChefAggregateType<T>>

    /**
     * Group by Chef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefGroupByArgs} args - Group by arguments.
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
      T extends ChefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChefGroupByArgs['orderBy'] }
        : { orderBy?: ChefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chef model
   */
  readonly fields: ChefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    menus<T extends Chef$menusArgs<ExtArgs> = {}>(args?: Subset<T, Chef$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    schedules<T extends Chef$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Chef$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Chef model
   */ 
  interface ChefFieldRefs {
    readonly id: FieldRef<"Chef", 'Int'>
    readonly userId: FieldRef<"Chef", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Chef findUnique
   */
  export type ChefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter, which Chef to fetch.
     */
    where: ChefWhereUniqueInput
  }


  /**
   * Chef findUniqueOrThrow
   */
  export type ChefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter, which Chef to fetch.
     */
    where: ChefWhereUniqueInput
  }


  /**
   * Chef findFirst
   */
  export type ChefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter, which Chef to fetch.
     */
    where?: ChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chefs to fetch.
     */
    orderBy?: ChefOrderByWithRelationInput | ChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chefs.
     */
    cursor?: ChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chefs.
     */
    distinct?: ChefScalarFieldEnum | ChefScalarFieldEnum[]
  }


  /**
   * Chef findFirstOrThrow
   */
  export type ChefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter, which Chef to fetch.
     */
    where?: ChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chefs to fetch.
     */
    orderBy?: ChefOrderByWithRelationInput | ChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chefs.
     */
    cursor?: ChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chefs.
     */
    distinct?: ChefScalarFieldEnum | ChefScalarFieldEnum[]
  }


  /**
   * Chef findMany
   */
  export type ChefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter, which Chefs to fetch.
     */
    where?: ChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chefs to fetch.
     */
    orderBy?: ChefOrderByWithRelationInput | ChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chefs.
     */
    cursor?: ChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chefs.
     */
    skip?: number
    distinct?: ChefScalarFieldEnum | ChefScalarFieldEnum[]
  }


  /**
   * Chef create
   */
  export type ChefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * The data needed to create a Chef.
     */
    data: XOR<ChefCreateInput, ChefUncheckedCreateInput>
  }


  /**
   * Chef createMany
   */
  export type ChefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chefs.
     */
    data: ChefCreateManyInput | ChefCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Chef update
   */
  export type ChefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * The data needed to update a Chef.
     */
    data: XOR<ChefUpdateInput, ChefUncheckedUpdateInput>
    /**
     * Choose, which Chef to update.
     */
    where: ChefWhereUniqueInput
  }


  /**
   * Chef updateMany
   */
  export type ChefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chefs.
     */
    data: XOR<ChefUpdateManyMutationInput, ChefUncheckedUpdateManyInput>
    /**
     * Filter which Chefs to update
     */
    where?: ChefWhereInput
  }


  /**
   * Chef upsert
   */
  export type ChefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * The filter to search for the Chef to update in case it exists.
     */
    where: ChefWhereUniqueInput
    /**
     * In case the Chef found by the `where` argument doesn't exist, create a new Chef with this data.
     */
    create: XOR<ChefCreateInput, ChefUncheckedCreateInput>
    /**
     * In case the Chef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChefUpdateInput, ChefUncheckedUpdateInput>
  }


  /**
   * Chef delete
   */
  export type ChefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
    /**
     * Filter which Chef to delete.
     */
    where: ChefWhereUniqueInput
  }


  /**
   * Chef deleteMany
   */
  export type ChefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chefs to delete
     */
    where?: ChefWhereInput
  }


  /**
   * Chef.menus
   */
  export type Chef$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }


  /**
   * Chef.schedules
   */
  export type Chef$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    where?: ChefScheduleWhereInput
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    cursor?: ChefScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChefScheduleScalarFieldEnum | ChefScheduleScalarFieldEnum[]
  }


  /**
   * Chef without action
   */
  export type ChefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chef
     */
    select?: ChefSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefInclude<ExtArgs> | null
  }



  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    chefId: number | null
    price: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    chefId: number | null
    price: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    chefId: number | null
    title: string | null
    description: string | null
    price: number | null
    storeId: string | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    chefId: number | null
    title: string | null
    description: string | null
    price: number | null
    storeId: string | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    chefId: number
    title: number
    description: number
    price: number
    storeId: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    chefId?: true
    price?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    chefId?: true
    price?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    chefId?: true
    title?: true
    description?: true
    price?: true
    storeId?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    chefId?: true
    title?: true
    description?: true
    price?: true
    storeId?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    chefId?: true
    title?: true
    description?: true
    price?: true
    storeId?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    chefId: number
    title: string
    description: string | null
    price: number
    storeId: string
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chefId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
    chef?: boolean | ChefDefaultArgs<ExtArgs>
    orderItems?: boolean | Menu$orderItemsArgs<ExtArgs>
    availableDates?: boolean | Menu$availableDatesArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    chefId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    storeId?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chef?: boolean | ChefDefaultArgs<ExtArgs>
    orderItems?: boolean | Menu$orderItemsArgs<ExtArgs>
    availableDates?: boolean | Menu$availableDatesArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      chef: Prisma.$ChefPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      availableDates: Prisma.$ChefSchedulePayload<ExtArgs>[]
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chefId: number
      title: string
      description: string | null
      price: number
      storeId: string
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }


  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
    **/
    create<T extends MenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuCreateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Menus.
     *     @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menu = await prisma.menu.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
    **/
    delete<T extends MenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
    **/
    upsert<T extends MenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>
    ): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chef<T extends ChefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChefDefaultArgs<ExtArgs>>): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orderItems<T extends Menu$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    availableDates<T extends Menu$availableDatesArgs<ExtArgs> = {}>(args?: Subset<T, Menu$availableDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly chefId: FieldRef<"Menu", 'Int'>
    readonly title: FieldRef<"Menu", 'String'>
    readonly description: FieldRef<"Menu", 'String'>
    readonly price: FieldRef<"Menu", 'Float'>
    readonly storeId: FieldRef<"Menu", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }


  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }


  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }


  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }


  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }


  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }


  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }


  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }


  /**
   * Menu.orderItems
   */
  export type Menu$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Menu.availableDates
   */
  export type Menu$availableDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    where?: ChefScheduleWhereInput
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    cursor?: ChefScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChefScheduleScalarFieldEnum | ChefScheduleScalarFieldEnum[]
  }


  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MenuInclude<ExtArgs> | null
  }



  /**
   * Model ChefSchedule
   */

  export type AggregateChefSchedule = {
    _count: ChefScheduleCountAggregateOutputType | null
    _avg: ChefScheduleAvgAggregateOutputType | null
    _sum: ChefScheduleSumAggregateOutputType | null
    _min: ChefScheduleMinAggregateOutputType | null
    _max: ChefScheduleMaxAggregateOutputType | null
  }

  export type ChefScheduleAvgAggregateOutputType = {
    id: number | null
    menuId: number | null
    chefId: number | null
  }

  export type ChefScheduleSumAggregateOutputType = {
    id: number | null
    menuId: number | null
    chefId: number | null
  }

  export type ChefScheduleMinAggregateOutputType = {
    id: number | null
    menuId: number | null
    chefId: number | null
    date: Date | null
  }

  export type ChefScheduleMaxAggregateOutputType = {
    id: number | null
    menuId: number | null
    chefId: number | null
    date: Date | null
  }

  export type ChefScheduleCountAggregateOutputType = {
    id: number
    menuId: number
    chefId: number
    date: number
    _all: number
  }


  export type ChefScheduleAvgAggregateInputType = {
    id?: true
    menuId?: true
    chefId?: true
  }

  export type ChefScheduleSumAggregateInputType = {
    id?: true
    menuId?: true
    chefId?: true
  }

  export type ChefScheduleMinAggregateInputType = {
    id?: true
    menuId?: true
    chefId?: true
    date?: true
  }

  export type ChefScheduleMaxAggregateInputType = {
    id?: true
    menuId?: true
    chefId?: true
    date?: true
  }

  export type ChefScheduleCountAggregateInputType = {
    id?: true
    menuId?: true
    chefId?: true
    date?: true
    _all?: true
  }

  export type ChefScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChefSchedule to aggregate.
     */
    where?: ChefScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChefSchedules to fetch.
     */
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChefScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChefSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChefSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChefSchedules
    **/
    _count?: true | ChefScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChefScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChefScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChefScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChefScheduleMaxAggregateInputType
  }

  export type GetChefScheduleAggregateType<T extends ChefScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateChefSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChefSchedule[P]>
      : GetScalarType<T[P], AggregateChefSchedule[P]>
  }




  export type ChefScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChefScheduleWhereInput
    orderBy?: ChefScheduleOrderByWithAggregationInput | ChefScheduleOrderByWithAggregationInput[]
    by: ChefScheduleScalarFieldEnum[] | ChefScheduleScalarFieldEnum
    having?: ChefScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChefScheduleCountAggregateInputType | true
    _avg?: ChefScheduleAvgAggregateInputType
    _sum?: ChefScheduleSumAggregateInputType
    _min?: ChefScheduleMinAggregateInputType
    _max?: ChefScheduleMaxAggregateInputType
  }

  export type ChefScheduleGroupByOutputType = {
    id: number
    menuId: number
    chefId: number
    date: Date
    _count: ChefScheduleCountAggregateOutputType | null
    _avg: ChefScheduleAvgAggregateOutputType | null
    _sum: ChefScheduleSumAggregateOutputType | null
    _min: ChefScheduleMinAggregateOutputType | null
    _max: ChefScheduleMaxAggregateOutputType | null
  }

  type GetChefScheduleGroupByPayload<T extends ChefScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChefScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChefScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChefScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ChefScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ChefScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    chefId?: boolean
    date?: boolean
    chef?: boolean | ChefDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chefSchedule"]>

  export type ChefScheduleSelectScalar = {
    id?: boolean
    menuId?: boolean
    chefId?: boolean
    date?: boolean
  }

  export type ChefScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chef?: boolean | ChefDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }


  export type $ChefSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChefSchedule"
    objects: {
      chef: Prisma.$ChefPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      menuId: number
      chefId: number
      date: Date
    }, ExtArgs["result"]["chefSchedule"]>
    composites: {}
  }


  type ChefScheduleGetPayload<S extends boolean | null | undefined | ChefScheduleDefaultArgs> = $Result.GetResult<Prisma.$ChefSchedulePayload, S>

  type ChefScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChefScheduleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChefScheduleCountAggregateInputType | true
    }

  export interface ChefScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChefSchedule'], meta: { name: 'ChefSchedule' } }
    /**
     * Find zero or one ChefSchedule that matches the filter.
     * @param {ChefScheduleFindUniqueArgs} args - Arguments to find a ChefSchedule
     * @example
     * // Get one ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChefScheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleFindUniqueArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChefSchedule that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChefScheduleFindUniqueOrThrowArgs} args - Arguments to find a ChefSchedule
     * @example
     * // Get one ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChefScheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChefSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleFindFirstArgs} args - Arguments to find a ChefSchedule
     * @example
     * // Get one ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChefScheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleFindFirstArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChefSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleFindFirstOrThrowArgs} args - Arguments to find a ChefSchedule
     * @example
     * // Get one ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChefScheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChefSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChefSchedules
     * const chefSchedules = await prisma.chefSchedule.findMany()
     * 
     * // Get first 10 ChefSchedules
     * const chefSchedules = await prisma.chefSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chefScheduleWithIdOnly = await prisma.chefSchedule.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChefScheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChefSchedule.
     * @param {ChefScheduleCreateArgs} args - Arguments to create a ChefSchedule.
     * @example
     * // Create one ChefSchedule
     * const ChefSchedule = await prisma.chefSchedule.create({
     *   data: {
     *     // ... data to create a ChefSchedule
     *   }
     * })
     * 
    **/
    create<T extends ChefScheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleCreateArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChefSchedules.
     *     @param {ChefScheduleCreateManyArgs} args - Arguments to create many ChefSchedules.
     *     @example
     *     // Create many ChefSchedules
     *     const chefSchedule = await prisma.chefSchedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChefScheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChefSchedule.
     * @param {ChefScheduleDeleteArgs} args - Arguments to delete one ChefSchedule.
     * @example
     * // Delete one ChefSchedule
     * const ChefSchedule = await prisma.chefSchedule.delete({
     *   where: {
     *     // ... filter to delete one ChefSchedule
     *   }
     * })
     * 
    **/
    delete<T extends ChefScheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleDeleteArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChefSchedule.
     * @param {ChefScheduleUpdateArgs} args - Arguments to update one ChefSchedule.
     * @example
     * // Update one ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChefScheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleUpdateArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChefSchedules.
     * @param {ChefScheduleDeleteManyArgs} args - Arguments to filter ChefSchedules to delete.
     * @example
     * // Delete a few ChefSchedules
     * const { count } = await prisma.chefSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChefScheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChefScheduleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChefSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChefSchedules
     * const chefSchedule = await prisma.chefSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChefScheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChefSchedule.
     * @param {ChefScheduleUpsertArgs} args - Arguments to update or create a ChefSchedule.
     * @example
     * // Update or create a ChefSchedule
     * const chefSchedule = await prisma.chefSchedule.upsert({
     *   create: {
     *     // ... data to create a ChefSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChefSchedule we want to update
     *   }
     * })
    **/
    upsert<T extends ChefScheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChefScheduleUpsertArgs<ExtArgs>>
    ): Prisma__ChefScheduleClient<$Result.GetResult<Prisma.$ChefSchedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChefSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleCountArgs} args - Arguments to filter ChefSchedules to count.
     * @example
     * // Count the number of ChefSchedules
     * const count = await prisma.chefSchedule.count({
     *   where: {
     *     // ... the filter for the ChefSchedules we want to count
     *   }
     * })
    **/
    count<T extends ChefScheduleCountArgs>(
      args?: Subset<T, ChefScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChefScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChefSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChefScheduleAggregateArgs>(args: Subset<T, ChefScheduleAggregateArgs>): Prisma.PrismaPromise<GetChefScheduleAggregateType<T>>

    /**
     * Group by ChefSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChefScheduleGroupByArgs} args - Group by arguments.
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
      T extends ChefScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChefScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ChefScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChefScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChefScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChefSchedule model
   */
  readonly fields: ChefScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChefSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChefScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chef<T extends ChefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChefDefaultArgs<ExtArgs>>): Prisma__ChefClient<$Result.GetResult<Prisma.$ChefPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ChefSchedule model
   */ 
  interface ChefScheduleFieldRefs {
    readonly id: FieldRef<"ChefSchedule", 'Int'>
    readonly menuId: FieldRef<"ChefSchedule", 'Int'>
    readonly chefId: FieldRef<"ChefSchedule", 'Int'>
    readonly date: FieldRef<"ChefSchedule", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChefSchedule findUnique
   */
  export type ChefScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChefSchedule to fetch.
     */
    where: ChefScheduleWhereUniqueInput
  }


  /**
   * ChefSchedule findUniqueOrThrow
   */
  export type ChefScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChefSchedule to fetch.
     */
    where: ChefScheduleWhereUniqueInput
  }


  /**
   * ChefSchedule findFirst
   */
  export type ChefScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChefSchedule to fetch.
     */
    where?: ChefScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChefSchedules to fetch.
     */
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChefSchedules.
     */
    cursor?: ChefScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChefSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChefSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChefSchedules.
     */
    distinct?: ChefScheduleScalarFieldEnum | ChefScheduleScalarFieldEnum[]
  }


  /**
   * ChefSchedule findFirstOrThrow
   */
  export type ChefScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChefSchedule to fetch.
     */
    where?: ChefScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChefSchedules to fetch.
     */
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChefSchedules.
     */
    cursor?: ChefScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChefSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChefSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChefSchedules.
     */
    distinct?: ChefScheduleScalarFieldEnum | ChefScheduleScalarFieldEnum[]
  }


  /**
   * ChefSchedule findMany
   */
  export type ChefScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ChefSchedules to fetch.
     */
    where?: ChefScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChefSchedules to fetch.
     */
    orderBy?: ChefScheduleOrderByWithRelationInput | ChefScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChefSchedules.
     */
    cursor?: ChefScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChefSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChefSchedules.
     */
    skip?: number
    distinct?: ChefScheduleScalarFieldEnum | ChefScheduleScalarFieldEnum[]
  }


  /**
   * ChefSchedule create
   */
  export type ChefScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ChefSchedule.
     */
    data: XOR<ChefScheduleCreateInput, ChefScheduleUncheckedCreateInput>
  }


  /**
   * ChefSchedule createMany
   */
  export type ChefScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChefSchedules.
     */
    data: ChefScheduleCreateManyInput | ChefScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChefSchedule update
   */
  export type ChefScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ChefSchedule.
     */
    data: XOR<ChefScheduleUpdateInput, ChefScheduleUncheckedUpdateInput>
    /**
     * Choose, which ChefSchedule to update.
     */
    where: ChefScheduleWhereUniqueInput
  }


  /**
   * ChefSchedule updateMany
   */
  export type ChefScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChefSchedules.
     */
    data: XOR<ChefScheduleUpdateManyMutationInput, ChefScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ChefSchedules to update
     */
    where?: ChefScheduleWhereInput
  }


  /**
   * ChefSchedule upsert
   */
  export type ChefScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ChefSchedule to update in case it exists.
     */
    where: ChefScheduleWhereUniqueInput
    /**
     * In case the ChefSchedule found by the `where` argument doesn't exist, create a new ChefSchedule with this data.
     */
    create: XOR<ChefScheduleCreateInput, ChefScheduleUncheckedCreateInput>
    /**
     * In case the ChefSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChefScheduleUpdateInput, ChefScheduleUncheckedUpdateInput>
  }


  /**
   * ChefSchedule delete
   */
  export type ChefScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
    /**
     * Filter which ChefSchedule to delete.
     */
    where: ChefScheduleWhereUniqueInput
  }


  /**
   * ChefSchedule deleteMany
   */
  export type ChefScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChefSchedules to delete
     */
    where?: ChefScheduleWhereInput
  }


  /**
   * ChefSchedule without action
   */
  export type ChefScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChefSchedule
     */
    select?: ChefScheduleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChefScheduleInclude<ExtArgs> | null
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
    customerId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
    pickupDate: Date | null
    storeId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
    pickupDate: Date | null
    storeId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    customerId: number
    status: number
    orderDate: number
    pickupDate: number
    storeId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    customerId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    orderDate?: true
    pickupDate?: true
    storeId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    orderDate?: true
    pickupDate?: true
    storeId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    customerId?: true
    status?: true
    orderDate?: true
    pickupDate?: true
    storeId?: true
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
    customerId: number
    status: $Enums.OrderStatus
    orderDate: Date
    pickupDate: Date | null
    storeId: string | null
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
    customerId?: boolean
    status?: boolean
    orderDate?: boolean
    pickupDate?: boolean
    storeId?: boolean
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    store?: boolean | Order$storeArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    status?: boolean
    orderDate?: boolean
    pickupDate?: boolean
    storeId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    store?: boolean | Order$storeArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      store: Prisma.$StorePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      status: $Enums.OrderStatus
      orderDate: Date
      pickupDate: Date | null
      storeId: string | null
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

    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'> | Null>;

    store<T extends Order$storeArgs<ExtArgs> = {}>(args?: Subset<T, Order$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
    readonly customerId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly pickupDate: FieldRef<"Order", 'DateTime'>
    readonly storeId: FieldRef<"Order", 'String'>
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
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * Order.store
   */
  export type Order$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
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
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    menuId: number | null
    quantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    menuId: number | null
    quantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    menuId: number | null
    quantity: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    menuId: number | null
    quantity: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    menuId: number
    quantity: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    quantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    quantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    quantity?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    quantity?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    menuId?: true
    quantity?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    menuId: number
    quantity: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    quantity?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    menuId?: boolean
    quantity?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }


  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      menuId: number
      quantity: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }


  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
    **/
    create<T extends OrderItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderItems.
     *     @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     *     @example
     *     // Create many OrderItems
     *     const orderItem = await prisma.orderItem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
    **/
    delete<T extends OrderItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
    **/
    upsert<T extends OrderItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>
    ): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'Int'>
    readonly orderId: FieldRef<"OrderItem", 'Int'>
    readonly menuId: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }


  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }


  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }


  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }


  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }


  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderItemInclude<ExtArgs> | null
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


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const BillboardScalarFieldEnum: {
    id: 'id',
    storedId: 'storedId',
    label: 'label',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BillboardScalarFieldEnum = (typeof BillboardScalarFieldEnum)[keyof typeof BillboardScalarFieldEnum]


  export const ChefScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type ChefScalarFieldEnum = (typeof ChefScalarFieldEnum)[keyof typeof ChefScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    chefId: 'chefId',
    title: 'title',
    description: 'description',
    price: 'price',
    storeId: 'storeId'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const ChefScheduleScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    chefId: 'chefId',
    date: 'date'
  };

  export type ChefScheduleScalarFieldEnum = (typeof ChefScheduleScalarFieldEnum)[keyof typeof ChefScheduleScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    status: 'status',
    orderDate: 'orderDate',
    pickupDate: 'pickupDate',
    storeId: 'storeId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    menuId: 'menuId',
    quantity: 'quantity'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    
  /**
   * Deep Input Types
   */


  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createAt?: DateTimeFilter<"Store"> | Date | string
    updateAt?: DateTimeFilter<"Store"> | Date | string
    menus?: MenuListRelationFilter
    billboards?: BillboardListRelationFilter
    order?: OrderListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    menus?: MenuOrderByRelationAggregateInput
    billboards?: BillboardOrderByRelationAggregateInput
    order?: OrderOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    userId?: StringFilter<"Store"> | string
    createAt?: DateTimeFilter<"Store"> | Date | string
    updateAt?: DateTimeFilter<"Store"> | Date | string
    menus?: MenuListRelationFilter
    billboards?: BillboardListRelationFilter
    order?: OrderListRelationFilter
  }, "id" | "name">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    userId?: StringWithAggregatesFilter<"Store"> | string
    createAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type BillboardWhereInput = {
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storedId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type BillboardOrderByWithRelationInput = {
    id?: SortOrder
    storedId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type BillboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillboardWhereInput | BillboardWhereInput[]
    OR?: BillboardWhereInput[]
    NOT?: BillboardWhereInput | BillboardWhereInput[]
    storedId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type BillboardOrderByWithAggregationInput = {
    id?: SortOrder
    storedId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BillboardCountOrderByAggregateInput
    _max?: BillboardMaxOrderByAggregateInput
    _min?: BillboardMinOrderByAggregateInput
  }

  export type BillboardScalarWhereWithAggregatesInput = {
    AND?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    OR?: BillboardScalarWhereWithAggregatesInput[]
    NOT?: BillboardScalarWhereWithAggregatesInput | BillboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Billboard"> | string
    storedId?: StringWithAggregatesFilter<"Billboard"> | string
    label?: StringWithAggregatesFilter<"Billboard"> | string
    imageUrl?: StringWithAggregatesFilter<"Billboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Billboard"> | Date | string
  }

  export type ChefWhereInput = {
    AND?: ChefWhereInput | ChefWhereInput[]
    OR?: ChefWhereInput[]
    NOT?: ChefWhereInput | ChefWhereInput[]
    id?: IntFilter<"Chef"> | number
    userId?: IntFilter<"Chef"> | number
    menus?: MenuListRelationFilter
    schedules?: ChefScheduleListRelationFilter
  }

  export type ChefOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    menus?: MenuOrderByRelationAggregateInput
    schedules?: ChefScheduleOrderByRelationAggregateInput
  }

  export type ChefWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChefWhereInput | ChefWhereInput[]
    OR?: ChefWhereInput[]
    NOT?: ChefWhereInput | ChefWhereInput[]
    userId?: IntFilter<"Chef"> | number
    menus?: MenuListRelationFilter
    schedules?: ChefScheduleListRelationFilter
  }, "id">

  export type ChefOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: ChefCountOrderByAggregateInput
    _avg?: ChefAvgOrderByAggregateInput
    _max?: ChefMaxOrderByAggregateInput
    _min?: ChefMinOrderByAggregateInput
    _sum?: ChefSumOrderByAggregateInput
  }

  export type ChefScalarWhereWithAggregatesInput = {
    AND?: ChefScalarWhereWithAggregatesInput | ChefScalarWhereWithAggregatesInput[]
    OR?: ChefScalarWhereWithAggregatesInput[]
    NOT?: ChefScalarWhereWithAggregatesInput | ChefScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chef"> | number
    userId?: IntWithAggregatesFilter<"Chef"> | number
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    chefId?: IntFilter<"Menu"> | number
    title?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    storeId?: StringFilter<"Menu"> | string
    chef?: XOR<ChefRelationFilter, ChefWhereInput>
    orderItems?: OrderItemListRelationFilter
    availableDates?: ChefScheduleListRelationFilter
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    chefId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    storeId?: SortOrder
    chef?: ChefOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    availableDates?: ChefScheduleOrderByRelationAggregateInput
    store?: StoreOrderByWithRelationInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    chefId?: IntFilter<"Menu"> | number
    title?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    storeId?: StringFilter<"Menu"> | string
    chef?: XOR<ChefRelationFilter, ChefWhereInput>
    orderItems?: OrderItemListRelationFilter
    availableDates?: ChefScheduleListRelationFilter
    store?: XOR<StoreRelationFilter, StoreWhereInput>
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    chefId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    storeId?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    chefId?: IntWithAggregatesFilter<"Menu"> | number
    title?: StringWithAggregatesFilter<"Menu"> | string
    description?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    price?: FloatWithAggregatesFilter<"Menu"> | number
    storeId?: StringWithAggregatesFilter<"Menu"> | string
  }

  export type ChefScheduleWhereInput = {
    AND?: ChefScheduleWhereInput | ChefScheduleWhereInput[]
    OR?: ChefScheduleWhereInput[]
    NOT?: ChefScheduleWhereInput | ChefScheduleWhereInput[]
    id?: IntFilter<"ChefSchedule"> | number
    menuId?: IntFilter<"ChefSchedule"> | number
    chefId?: IntFilter<"ChefSchedule"> | number
    date?: DateTimeFilter<"ChefSchedule"> | Date | string
    chef?: XOR<ChefRelationFilter, ChefWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type ChefScheduleOrderByWithRelationInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
    date?: SortOrder
    chef?: ChefOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type ChefScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChefScheduleWhereInput | ChefScheduleWhereInput[]
    OR?: ChefScheduleWhereInput[]
    NOT?: ChefScheduleWhereInput | ChefScheduleWhereInput[]
    menuId?: IntFilter<"ChefSchedule"> | number
    chefId?: IntFilter<"ChefSchedule"> | number
    date?: DateTimeFilter<"ChefSchedule"> | Date | string
    chef?: XOR<ChefRelationFilter, ChefWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "id">

  export type ChefScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
    date?: SortOrder
    _count?: ChefScheduleCountOrderByAggregateInput
    _avg?: ChefScheduleAvgOrderByAggregateInput
    _max?: ChefScheduleMaxOrderByAggregateInput
    _min?: ChefScheduleMinOrderByAggregateInput
    _sum?: ChefScheduleSumOrderByAggregateInput
  }

  export type ChefScheduleScalarWhereWithAggregatesInput = {
    AND?: ChefScheduleScalarWhereWithAggregatesInput | ChefScheduleScalarWhereWithAggregatesInput[]
    OR?: ChefScheduleScalarWhereWithAggregatesInput[]
    NOT?: ChefScheduleScalarWhereWithAggregatesInput | ChefScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChefSchedule"> | number
    menuId?: IntWithAggregatesFilter<"ChefSchedule"> | number
    chefId?: IntWithAggregatesFilter<"ChefSchedule"> | number
    date?: DateTimeWithAggregatesFilter<"ChefSchedule"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    storeId?: StringNullableFilter<"Order"> | string | null
    orderItems?: OrderItemListRelationFilter
    store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    pickupDate?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    orderItems?: OrderItemOrderByRelationAggregateInput
    store?: StoreOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    storeId?: StringNullableFilter<"Order"> | string | null
    orderItems?: OrderItemListRelationFilter
    store?: XOR<StoreNullableRelationFilter, StoreWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    pickupDate?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
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
    customerId?: IntWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    pickupDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    storeId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    menuId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    order?: OrderOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: IntFilter<"OrderItem"> | number
    menuId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderItem"> | number
    orderId?: IntWithAggregatesFilter<"OrderItem"> | number
    menuId?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type StoreCreateInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuCreateNestedManyWithoutStoreInput
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    order?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuUncheckedCreateNestedManyWithoutStoreInput
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    order?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUpdateManyWithoutStoreNestedInput
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    order?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUncheckedUpdateManyWithoutStoreNestedInput
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    order?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    store: StoreCreateNestedOneWithoutBillboardsInput
  }

  export type BillboardUncheckedCreateInput = {
    id?: string
    storedId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutBillboardsNestedInput
  }

  export type BillboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storedId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardCreateManyInput = {
    id?: string
    storedId: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storedId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChefCreateInput = {
    userId: number
    menus?: MenuCreateNestedManyWithoutChefInput
    schedules?: ChefScheduleCreateNestedManyWithoutChefInput
  }

  export type ChefUncheckedCreateInput = {
    id?: number
    userId: number
    menus?: MenuUncheckedCreateNestedManyWithoutChefInput
    schedules?: ChefScheduleUncheckedCreateNestedManyWithoutChefInput
  }

  export type ChefUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    menus?: MenuUpdateManyWithoutChefNestedInput
    schedules?: ChefScheduleUpdateManyWithoutChefNestedInput
  }

  export type ChefUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    menus?: MenuUncheckedUpdateManyWithoutChefNestedInput
    schedules?: ChefScheduleUncheckedUpdateManyWithoutChefNestedInput
  }

  export type ChefCreateManyInput = {
    id?: number
    userId: number
  }

  export type ChefUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChefUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateInput = {
    title: string
    description?: string | null
    price: number
    chef: ChefCreateNestedOneWithoutMenusInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleCreateNestedManyWithoutMenuInput
    store: StoreCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
    storeId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    chef?: ChefUpdateOneRequiredWithoutMenusNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUpdateManyWithoutMenuNestedInput
    store?: StoreUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
    storeId: string
  }

  export type MenuUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
  }

  export type ChefScheduleCreateInput = {
    date: Date | string
    chef: ChefCreateNestedOneWithoutSchedulesInput
    menu: MenuCreateNestedOneWithoutAvailableDatesInput
  }

  export type ChefScheduleUncheckedCreateInput = {
    id?: number
    menuId: number
    chefId: number
    date: Date | string
  }

  export type ChefScheduleUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    chef?: ChefUpdateOneRequiredWithoutSchedulesNestedInput
    menu?: MenuUpdateOneRequiredWithoutAvailableDatesNestedInput
  }

  export type ChefScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChefScheduleCreateManyInput = {
    id?: number
    menuId: number
    chefId: number
    date: Date | string
  }

  export type ChefScheduleUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChefScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    store?: StoreCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    storeId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    store?: StoreUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    storeId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateInput = {
    quantity: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
    menu: MenuCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    menuId: number
    quantity: number
  }

  export type OrderItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    menu?: MenuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyInput = {
    id?: number
    orderId: number
    menuId: number
    quantity: number
  }

  export type OrderItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type BillboardListRelationFilter = {
    every?: BillboardWhereInput
    some?: BillboardWhereInput
    none?: BillboardWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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

  export type StoreRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type BillboardCountOrderByAggregateInput = {
    id?: SortOrder
    storedId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMaxOrderByAggregateInput = {
    id?: SortOrder
    storedId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BillboardMinOrderByAggregateInput = {
    id?: SortOrder
    storedId?: SortOrder
    label?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ChefScheduleListRelationFilter = {
    every?: ChefScheduleWhereInput
    some?: ChefScheduleWhereInput
    none?: ChefScheduleWhereInput
  }

  export type ChefScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChefCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChefAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChefMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChefMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChefSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type ChefRelationFilter = {
    is?: ChefWhereInput
    isNot?: ChefWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    price?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    storeId?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    price?: SortOrder
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

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type ChefScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
    date?: SortOrder
  }

  export type ChefScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
  }

  export type ChefScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
    date?: SortOrder
  }

  export type ChefScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
    date?: SortOrder
  }

  export type ChefScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    chefId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StoreNullableRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    pickupDate?: SortOrder
    storeId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    pickupDate?: SortOrder
    storeId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    pickupDate?: SortOrder
    storeId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuId?: SortOrder
    quantity?: SortOrder
  }

  export type MenuCreateNestedManyWithoutStoreInput = {
    create?: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput> | MenuCreateWithoutStoreInput[] | MenuUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutStoreInput | MenuCreateOrConnectWithoutStoreInput[]
    createMany?: MenuCreateManyStoreInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillboardCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput> | MenuCreateWithoutStoreInput[] | MenuUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutStoreInput | MenuCreateOrConnectWithoutStoreInput[]
    createMany?: MenuCreateManyStoreInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type BillboardUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MenuUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput> | MenuCreateWithoutStoreInput[] | MenuUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutStoreInput | MenuCreateOrConnectWithoutStoreInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutStoreInput | MenuUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MenuCreateManyStoreInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutStoreInput | MenuUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutStoreInput | MenuUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillboardUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput | OrderUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStoreInput | OrderUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStoreInput | OrderUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput> | MenuCreateWithoutStoreInput[] | MenuUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutStoreInput | MenuCreateOrConnectWithoutStoreInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutStoreInput | MenuUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MenuCreateManyStoreInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutStoreInput | MenuUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutStoreInput | MenuUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type BillboardUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput> | BillboardCreateWithoutStoreInput[] | BillboardUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: BillboardCreateOrConnectWithoutStoreInput | BillboardCreateOrConnectWithoutStoreInput[]
    upsert?: BillboardUpsertWithWhereUniqueWithoutStoreInput | BillboardUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: BillboardCreateManyStoreInputEnvelope
    set?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    disconnect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    delete?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    connect?: BillboardWhereUniqueInput | BillboardWhereUniqueInput[]
    update?: BillboardUpdateWithWhereUniqueWithoutStoreInput | BillboardUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: BillboardUpdateManyWithWhereWithoutStoreInput | BillboardUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput> | OrderCreateWithoutStoreInput[] | OrderUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutStoreInput | OrderCreateOrConnectWithoutStoreInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutStoreInput | OrderUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: OrderCreateManyStoreInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutStoreInput | OrderUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutStoreInput | OrderUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutBillboardsInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutBillboardsNestedInput = {
    create?: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutBillboardsInput
    upsert?: StoreUpsertWithoutBillboardsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutBillboardsInput, StoreUpdateWithoutBillboardsInput>, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type MenuCreateNestedManyWithoutChefInput = {
    create?: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput> | MenuCreateWithoutChefInput[] | MenuUncheckedCreateWithoutChefInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutChefInput | MenuCreateOrConnectWithoutChefInput[]
    createMany?: MenuCreateManyChefInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type ChefScheduleCreateNestedManyWithoutChefInput = {
    create?: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput> | ChefScheduleCreateWithoutChefInput[] | ChefScheduleUncheckedCreateWithoutChefInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutChefInput | ChefScheduleCreateOrConnectWithoutChefInput[]
    createMany?: ChefScheduleCreateManyChefInputEnvelope
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutChefInput = {
    create?: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput> | MenuCreateWithoutChefInput[] | MenuUncheckedCreateWithoutChefInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutChefInput | MenuCreateOrConnectWithoutChefInput[]
    createMany?: MenuCreateManyChefInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type ChefScheduleUncheckedCreateNestedManyWithoutChefInput = {
    create?: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput> | ChefScheduleCreateWithoutChefInput[] | ChefScheduleUncheckedCreateWithoutChefInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutChefInput | ChefScheduleCreateOrConnectWithoutChefInput[]
    createMany?: ChefScheduleCreateManyChefInputEnvelope
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuUpdateManyWithoutChefNestedInput = {
    create?: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput> | MenuCreateWithoutChefInput[] | MenuUncheckedCreateWithoutChefInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutChefInput | MenuCreateOrConnectWithoutChefInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutChefInput | MenuUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: MenuCreateManyChefInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutChefInput | MenuUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutChefInput | MenuUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type ChefScheduleUpdateManyWithoutChefNestedInput = {
    create?: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput> | ChefScheduleCreateWithoutChefInput[] | ChefScheduleUncheckedCreateWithoutChefInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutChefInput | ChefScheduleCreateOrConnectWithoutChefInput[]
    upsert?: ChefScheduleUpsertWithWhereUniqueWithoutChefInput | ChefScheduleUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: ChefScheduleCreateManyChefInputEnvelope
    set?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    disconnect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    delete?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    update?: ChefScheduleUpdateWithWhereUniqueWithoutChefInput | ChefScheduleUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: ChefScheduleUpdateManyWithWhereWithoutChefInput | ChefScheduleUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutChefNestedInput = {
    create?: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput> | MenuCreateWithoutChefInput[] | MenuUncheckedCreateWithoutChefInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutChefInput | MenuCreateOrConnectWithoutChefInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutChefInput | MenuUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: MenuCreateManyChefInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutChefInput | MenuUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutChefInput | MenuUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type ChefScheduleUncheckedUpdateManyWithoutChefNestedInput = {
    create?: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput> | ChefScheduleCreateWithoutChefInput[] | ChefScheduleUncheckedCreateWithoutChefInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutChefInput | ChefScheduleCreateOrConnectWithoutChefInput[]
    upsert?: ChefScheduleUpsertWithWhereUniqueWithoutChefInput | ChefScheduleUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: ChefScheduleCreateManyChefInputEnvelope
    set?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    disconnect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    delete?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    update?: ChefScheduleUpdateWithWhereUniqueWithoutChefInput | ChefScheduleUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: ChefScheduleUpdateManyWithWhereWithoutChefInput | ChefScheduleUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
  }

  export type ChefCreateNestedOneWithoutMenusInput = {
    create?: XOR<ChefCreateWithoutMenusInput, ChefUncheckedCreateWithoutMenusInput>
    connectOrCreate?: ChefCreateOrConnectWithoutMenusInput
    connect?: ChefWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput> | OrderItemCreateWithoutMenuInput[] | OrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuInput | OrderItemCreateOrConnectWithoutMenuInput[]
    createMany?: OrderItemCreateManyMenuInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ChefScheduleCreateNestedManyWithoutMenuInput = {
    create?: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput> | ChefScheduleCreateWithoutMenuInput[] | ChefScheduleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutMenuInput | ChefScheduleCreateOrConnectWithoutMenuInput[]
    createMany?: ChefScheduleCreateManyMenuInputEnvelope
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
  }

  export type StoreCreateNestedOneWithoutMenusInput = {
    create?: XOR<StoreCreateWithoutMenusInput, StoreUncheckedCreateWithoutMenusInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMenusInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput> | OrderItemCreateWithoutMenuInput[] | OrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuInput | OrderItemCreateOrConnectWithoutMenuInput[]
    createMany?: OrderItemCreateManyMenuInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ChefScheduleUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput> | ChefScheduleCreateWithoutMenuInput[] | ChefScheduleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutMenuInput | ChefScheduleCreateOrConnectWithoutMenuInput[]
    createMany?: ChefScheduleCreateManyMenuInputEnvelope
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChefUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<ChefCreateWithoutMenusInput, ChefUncheckedCreateWithoutMenusInput>
    connectOrCreate?: ChefCreateOrConnectWithoutMenusInput
    upsert?: ChefUpsertWithoutMenusInput
    connect?: ChefWhereUniqueInput
    update?: XOR<XOR<ChefUpdateToOneWithWhereWithoutMenusInput, ChefUpdateWithoutMenusInput>, ChefUncheckedUpdateWithoutMenusInput>
  }

  export type OrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput> | OrderItemCreateWithoutMenuInput[] | OrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuInput | OrderItemCreateOrConnectWithoutMenuInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuInput | OrderItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: OrderItemCreateManyMenuInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuInput | OrderItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuInput | OrderItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ChefScheduleUpdateManyWithoutMenuNestedInput = {
    create?: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput> | ChefScheduleCreateWithoutMenuInput[] | ChefScheduleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutMenuInput | ChefScheduleCreateOrConnectWithoutMenuInput[]
    upsert?: ChefScheduleUpsertWithWhereUniqueWithoutMenuInput | ChefScheduleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: ChefScheduleCreateManyMenuInputEnvelope
    set?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    disconnect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    delete?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    update?: ChefScheduleUpdateWithWhereUniqueWithoutMenuInput | ChefScheduleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: ChefScheduleUpdateManyWithWhereWithoutMenuInput | ChefScheduleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
  }

  export type StoreUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<StoreCreateWithoutMenusInput, StoreUncheckedCreateWithoutMenusInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMenusInput
    upsert?: StoreUpsertWithoutMenusInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMenusInput, StoreUpdateWithoutMenusInput>, StoreUncheckedUpdateWithoutMenusInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput> | OrderItemCreateWithoutMenuInput[] | OrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuInput | OrderItemCreateOrConnectWithoutMenuInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuInput | OrderItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: OrderItemCreateManyMenuInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuInput | OrderItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuInput | OrderItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ChefScheduleUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput> | ChefScheduleCreateWithoutMenuInput[] | ChefScheduleUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: ChefScheduleCreateOrConnectWithoutMenuInput | ChefScheduleCreateOrConnectWithoutMenuInput[]
    upsert?: ChefScheduleUpsertWithWhereUniqueWithoutMenuInput | ChefScheduleUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: ChefScheduleCreateManyMenuInputEnvelope
    set?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    disconnect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    delete?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    connect?: ChefScheduleWhereUniqueInput | ChefScheduleWhereUniqueInput[]
    update?: ChefScheduleUpdateWithWhereUniqueWithoutMenuInput | ChefScheduleUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: ChefScheduleUpdateManyWithWhereWithoutMenuInput | ChefScheduleUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
  }

  export type ChefCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ChefCreateWithoutSchedulesInput, ChefUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ChefCreateOrConnectWithoutSchedulesInput
    connect?: ChefWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutAvailableDatesInput = {
    create?: XOR<MenuCreateWithoutAvailableDatesInput, MenuUncheckedCreateWithoutAvailableDatesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAvailableDatesInput
    connect?: MenuWhereUniqueInput
  }

  export type ChefUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ChefCreateWithoutSchedulesInput, ChefUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ChefCreateOrConnectWithoutSchedulesInput
    upsert?: ChefUpsertWithoutSchedulesInput
    connect?: ChefWhereUniqueInput
    update?: XOR<XOR<ChefUpdateToOneWithWhereWithoutSchedulesInput, ChefUpdateWithoutSchedulesInput>, ChefUncheckedUpdateWithoutSchedulesInput>
  }

  export type MenuUpdateOneRequiredWithoutAvailableDatesNestedInput = {
    create?: XOR<MenuCreateWithoutAvailableDatesInput, MenuUncheckedCreateWithoutAvailableDatesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutAvailableDatesInput
    upsert?: MenuUpsertWithoutAvailableDatesInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutAvailableDatesInput, MenuUpdateWithoutAvailableDatesInput>, MenuUncheckedUpdateWithoutAvailableDatesInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StoreCreateNestedOneWithoutOrderInput = {
    create?: XOR<StoreCreateWithoutOrderInput, StoreUncheckedCreateWithoutOrderInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderInput
    connect?: StoreWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type StoreUpdateOneWithoutOrderNestedInput = {
    create?: XOR<StoreCreateWithoutOrderInput, StoreUncheckedCreateWithoutOrderInput>
    connectOrCreate?: StoreCreateOrConnectWithoutOrderInput
    upsert?: StoreUpsertWithoutOrderInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutOrderInput, StoreUpdateWithoutOrderInput>, StoreUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    connect?: MenuWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuUpsertWithoutOrderItemsInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutOrderItemsInput, MenuUpdateWithoutOrderItemsInput>, MenuUncheckedUpdateWithoutOrderItemsInput>
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MenuCreateWithoutStoreInput = {
    title: string
    description?: string | null
    price: number
    chef: ChefCreateNestedOneWithoutMenusInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutStoreInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutStoreInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput>
  }

  export type MenuCreateManyStoreInputEnvelope = {
    data: MenuCreateManyStoreInput | MenuCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type BillboardCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardUncheckedCreateWithoutStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BillboardCreateOrConnectWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardCreateManyStoreInputEnvelope = {
    data: BillboardCreateManyStoreInput | BillboardCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutStoreInput = {
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStoreInput = {
    id?: number
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStoreInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderCreateManyStoreInputEnvelope = {
    data: OrderCreateManyStoreInput | OrderCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithWhereUniqueWithoutStoreInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutStoreInput, MenuUncheckedUpdateWithoutStoreInput>
    create: XOR<MenuCreateWithoutStoreInput, MenuUncheckedCreateWithoutStoreInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutStoreInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutStoreInput, MenuUncheckedUpdateWithoutStoreInput>
  }

  export type MenuUpdateManyWithWhereWithoutStoreInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutStoreInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    chefId?: IntFilter<"Menu"> | number
    title?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    storeId?: StringFilter<"Menu"> | string
  }

  export type BillboardUpsertWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    update: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
    create: XOR<BillboardCreateWithoutStoreInput, BillboardUncheckedCreateWithoutStoreInput>
  }

  export type BillboardUpdateWithWhereUniqueWithoutStoreInput = {
    where: BillboardWhereUniqueInput
    data: XOR<BillboardUpdateWithoutStoreInput, BillboardUncheckedUpdateWithoutStoreInput>
  }

  export type BillboardUpdateManyWithWhereWithoutStoreInput = {
    where: BillboardScalarWhereInput
    data: XOR<BillboardUpdateManyMutationInput, BillboardUncheckedUpdateManyWithoutStoreInput>
  }

  export type BillboardScalarWhereInput = {
    AND?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    OR?: BillboardScalarWhereInput[]
    NOT?: BillboardScalarWhereInput | BillboardScalarWhereInput[]
    id?: StringFilter<"Billboard"> | string
    storedId?: StringFilter<"Billboard"> | string
    label?: StringFilter<"Billboard"> | string
    imageUrl?: StringFilter<"Billboard"> | string
    createdAt?: DateTimeFilter<"Billboard"> | Date | string
    updatedAt?: DateTimeFilter<"Billboard"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
    create: XOR<OrderCreateWithoutStoreInput, OrderUncheckedCreateWithoutStoreInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutStoreInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutStoreInput, OrderUncheckedUpdateWithoutStoreInput>
  }

  export type OrderUpdateManyWithWhereWithoutStoreInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutStoreInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    customerId?: IntFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    storeId?: StringNullableFilter<"Order"> | string | null
  }

  export type StoreCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuCreateNestedManyWithoutStoreInput
    order?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutBillboardsInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuUncheckedCreateNestedManyWithoutStoreInput
    order?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutBillboardsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
  }

  export type StoreUpsertWithoutBillboardsInput = {
    update: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
    create: XOR<StoreCreateWithoutBillboardsInput, StoreUncheckedCreateWithoutBillboardsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutBillboardsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutBillboardsInput, StoreUncheckedUpdateWithoutBillboardsInput>
  }

  export type StoreUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUpdateManyWithoutStoreNestedInput
    order?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutBillboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUncheckedUpdateManyWithoutStoreNestedInput
    order?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type MenuCreateWithoutChefInput = {
    title: string
    description?: string | null
    price: number
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleCreateNestedManyWithoutMenuInput
    store: StoreCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutChefInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    storeId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
    availableDates?: ChefScheduleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutChefInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput>
  }

  export type MenuCreateManyChefInputEnvelope = {
    data: MenuCreateManyChefInput | MenuCreateManyChefInput[]
    skipDuplicates?: boolean
  }

  export type ChefScheduleCreateWithoutChefInput = {
    date: Date | string
    menu: MenuCreateNestedOneWithoutAvailableDatesInput
  }

  export type ChefScheduleUncheckedCreateWithoutChefInput = {
    id?: number
    menuId: number
    date: Date | string
  }

  export type ChefScheduleCreateOrConnectWithoutChefInput = {
    where: ChefScheduleWhereUniqueInput
    create: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput>
  }

  export type ChefScheduleCreateManyChefInputEnvelope = {
    data: ChefScheduleCreateManyChefInput | ChefScheduleCreateManyChefInput[]
    skipDuplicates?: boolean
  }

  export type MenuUpsertWithWhereUniqueWithoutChefInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutChefInput, MenuUncheckedUpdateWithoutChefInput>
    create: XOR<MenuCreateWithoutChefInput, MenuUncheckedCreateWithoutChefInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutChefInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutChefInput, MenuUncheckedUpdateWithoutChefInput>
  }

  export type MenuUpdateManyWithWhereWithoutChefInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutChefInput>
  }

  export type ChefScheduleUpsertWithWhereUniqueWithoutChefInput = {
    where: ChefScheduleWhereUniqueInput
    update: XOR<ChefScheduleUpdateWithoutChefInput, ChefScheduleUncheckedUpdateWithoutChefInput>
    create: XOR<ChefScheduleCreateWithoutChefInput, ChefScheduleUncheckedCreateWithoutChefInput>
  }

  export type ChefScheduleUpdateWithWhereUniqueWithoutChefInput = {
    where: ChefScheduleWhereUniqueInput
    data: XOR<ChefScheduleUpdateWithoutChefInput, ChefScheduleUncheckedUpdateWithoutChefInput>
  }

  export type ChefScheduleUpdateManyWithWhereWithoutChefInput = {
    where: ChefScheduleScalarWhereInput
    data: XOR<ChefScheduleUpdateManyMutationInput, ChefScheduleUncheckedUpdateManyWithoutChefInput>
  }

  export type ChefScheduleScalarWhereInput = {
    AND?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
    OR?: ChefScheduleScalarWhereInput[]
    NOT?: ChefScheduleScalarWhereInput | ChefScheduleScalarWhereInput[]
    id?: IntFilter<"ChefSchedule"> | number
    menuId?: IntFilter<"ChefSchedule"> | number
    chefId?: IntFilter<"ChefSchedule"> | number
    date?: DateTimeFilter<"ChefSchedule"> | Date | string
  }

  export type ChefCreateWithoutMenusInput = {
    userId: number
    schedules?: ChefScheduleCreateNestedManyWithoutChefInput
  }

  export type ChefUncheckedCreateWithoutMenusInput = {
    id?: number
    userId: number
    schedules?: ChefScheduleUncheckedCreateNestedManyWithoutChefInput
  }

  export type ChefCreateOrConnectWithoutMenusInput = {
    where: ChefWhereUniqueInput
    create: XOR<ChefCreateWithoutMenusInput, ChefUncheckedCreateWithoutMenusInput>
  }

  export type OrderItemCreateWithoutMenuInput = {
    quantity: number
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuInput = {
    id?: number
    orderId: number
    quantity: number
  }

  export type OrderItemCreateOrConnectWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput>
  }

  export type OrderItemCreateManyMenuInputEnvelope = {
    data: OrderItemCreateManyMenuInput | OrderItemCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type ChefScheduleCreateWithoutMenuInput = {
    date: Date | string
    chef: ChefCreateNestedOneWithoutSchedulesInput
  }

  export type ChefScheduleUncheckedCreateWithoutMenuInput = {
    id?: number
    chefId: number
    date: Date | string
  }

  export type ChefScheduleCreateOrConnectWithoutMenuInput = {
    where: ChefScheduleWhereUniqueInput
    create: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput>
  }

  export type ChefScheduleCreateManyMenuInputEnvelope = {
    data: ChefScheduleCreateManyMenuInput | ChefScheduleCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutMenusInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    billboards?: BillboardCreateNestedManyWithoutStoreInput
    order?: OrderCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMenusInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
    order?: OrderUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMenusInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMenusInput, StoreUncheckedCreateWithoutMenusInput>
  }

  export type ChefUpsertWithoutMenusInput = {
    update: XOR<ChefUpdateWithoutMenusInput, ChefUncheckedUpdateWithoutMenusInput>
    create: XOR<ChefCreateWithoutMenusInput, ChefUncheckedCreateWithoutMenusInput>
    where?: ChefWhereInput
  }

  export type ChefUpdateToOneWithWhereWithoutMenusInput = {
    where?: ChefWhereInput
    data: XOR<ChefUpdateWithoutMenusInput, ChefUncheckedUpdateWithoutMenusInput>
  }

  export type ChefUpdateWithoutMenusInput = {
    userId?: IntFieldUpdateOperationsInput | number
    schedules?: ChefScheduleUpdateManyWithoutChefNestedInput
  }

  export type ChefUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    schedules?: ChefScheduleUncheckedUpdateManyWithoutChefNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuInput, OrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<OrderItemCreateWithoutMenuInput, OrderItemUncheckedCreateWithoutMenuInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuInput, OrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: IntFilter<"OrderItem"> | number
    orderId?: IntFilter<"OrderItem"> | number
    menuId?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
  }

  export type ChefScheduleUpsertWithWhereUniqueWithoutMenuInput = {
    where: ChefScheduleWhereUniqueInput
    update: XOR<ChefScheduleUpdateWithoutMenuInput, ChefScheduleUncheckedUpdateWithoutMenuInput>
    create: XOR<ChefScheduleCreateWithoutMenuInput, ChefScheduleUncheckedCreateWithoutMenuInput>
  }

  export type ChefScheduleUpdateWithWhereUniqueWithoutMenuInput = {
    where: ChefScheduleWhereUniqueInput
    data: XOR<ChefScheduleUpdateWithoutMenuInput, ChefScheduleUncheckedUpdateWithoutMenuInput>
  }

  export type ChefScheduleUpdateManyWithWhereWithoutMenuInput = {
    where: ChefScheduleScalarWhereInput
    data: XOR<ChefScheduleUpdateManyMutationInput, ChefScheduleUncheckedUpdateManyWithoutMenuInput>
  }

  export type StoreUpsertWithoutMenusInput = {
    update: XOR<StoreUpdateWithoutMenusInput, StoreUncheckedUpdateWithoutMenusInput>
    create: XOR<StoreCreateWithoutMenusInput, StoreUncheckedCreateWithoutMenusInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMenusInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMenusInput, StoreUncheckedUpdateWithoutMenusInput>
  }

  export type StoreUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
    order?: OrderUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
    order?: OrderUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type ChefCreateWithoutSchedulesInput = {
    userId: number
    menus?: MenuCreateNestedManyWithoutChefInput
  }

  export type ChefUncheckedCreateWithoutSchedulesInput = {
    id?: number
    userId: number
    menus?: MenuUncheckedCreateNestedManyWithoutChefInput
  }

  export type ChefCreateOrConnectWithoutSchedulesInput = {
    where: ChefWhereUniqueInput
    create: XOR<ChefCreateWithoutSchedulesInput, ChefUncheckedCreateWithoutSchedulesInput>
  }

  export type MenuCreateWithoutAvailableDatesInput = {
    title: string
    description?: string | null
    price: number
    chef: ChefCreateNestedOneWithoutMenusInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuInput
    store: StoreCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutAvailableDatesInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
    storeId: string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutAvailableDatesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutAvailableDatesInput, MenuUncheckedCreateWithoutAvailableDatesInput>
  }

  export type ChefUpsertWithoutSchedulesInput = {
    update: XOR<ChefUpdateWithoutSchedulesInput, ChefUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ChefCreateWithoutSchedulesInput, ChefUncheckedCreateWithoutSchedulesInput>
    where?: ChefWhereInput
  }

  export type ChefUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ChefWhereInput
    data: XOR<ChefUpdateWithoutSchedulesInput, ChefUncheckedUpdateWithoutSchedulesInput>
  }

  export type ChefUpdateWithoutSchedulesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    menus?: MenuUpdateManyWithoutChefNestedInput
  }

  export type ChefUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    menus?: MenuUncheckedUpdateManyWithoutChefNestedInput
  }

  export type MenuUpsertWithoutAvailableDatesInput = {
    update: XOR<MenuUpdateWithoutAvailableDatesInput, MenuUncheckedUpdateWithoutAvailableDatesInput>
    create: XOR<MenuCreateWithoutAvailableDatesInput, MenuUncheckedCreateWithoutAvailableDatesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutAvailableDatesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutAvailableDatesInput, MenuUncheckedUpdateWithoutAvailableDatesInput>
  }

  export type MenuUpdateWithoutAvailableDatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    chef?: ChefUpdateOneRequiredWithoutMenusNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    store?: StoreUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutAvailableDatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type OrderItemCreateWithoutOrderInput = {
    quantity: number
    menu: MenuCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    menuId: number
    quantity: number
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutOrderInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuCreateNestedManyWithoutStoreInput
    billboards?: BillboardCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutOrderInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    menus?: MenuUncheckedCreateNestedManyWithoutStoreInput
    billboards?: BillboardUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutOrderInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutOrderInput, StoreUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type StoreUpsertWithoutOrderInput = {
    update: XOR<StoreUpdateWithoutOrderInput, StoreUncheckedUpdateWithoutOrderInput>
    create: XOR<StoreCreateWithoutOrderInput, StoreUncheckedCreateWithoutOrderInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutOrderInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutOrderInput, StoreUncheckedUpdateWithoutOrderInput>
  }

  export type StoreUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUpdateManyWithoutStoreNestedInput
    billboards?: BillboardUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: MenuUncheckedUpdateManyWithoutStoreNestedInput
    billboards?: BillboardUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    store?: StoreCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
    storeId?: string | null
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuCreateWithoutOrderItemsInput = {
    title: string
    description?: string | null
    price: number
    chef: ChefCreateNestedOneWithoutMenusInput
    availableDates?: ChefScheduleCreateNestedManyWithoutMenuInput
    store: StoreCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
    storeId: string
    availableDates?: ChefScheduleUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutOrderItemsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store?: StoreUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MenuUpsertWithoutOrderItemsInput = {
    update: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuUpdateWithoutOrderItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    chef?: ChefUpdateOneRequiredWithoutMenusNestedInput
    availableDates?: ChefScheduleUpdateManyWithoutMenuNestedInput
    store?: StoreUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
    availableDates?: ChefScheduleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyStoreInput = {
    id?: number
    chefId: number
    title: string
    description?: string | null
    price: number
  }

  export type BillboardCreateManyStoreInput = {
    id?: string
    label: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyStoreInput = {
    id?: number
    customerId: number
    status: $Enums.OrderStatus
    orderDate?: Date | string
    pickupDate?: Date | string | null
  }

  export type MenuUpdateWithoutStoreInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    chef?: ChefUpdateOneRequiredWithoutMenusNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type BillboardUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillboardUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutStoreInput = {
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MenuCreateManyChefInput = {
    id?: number
    title: string
    description?: string | null
    price: number
    storeId: string
  }

  export type ChefScheduleCreateManyChefInput = {
    id?: number
    menuId: number
    date: Date | string
  }

  export type MenuUpdateWithoutChefInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    orderItems?: OrderItemUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUpdateManyWithoutMenuNestedInput
    store?: StoreUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuNestedInput
    availableDates?: ChefScheduleUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    storeId?: StringFieldUpdateOperationsInput | string
  }

  export type ChefScheduleUpdateWithoutChefInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutAvailableDatesNestedInput
  }

  export type ChefScheduleUncheckedUpdateWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChefScheduleUncheckedUpdateManyWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyMenuInput = {
    id?: number
    orderId: number
    quantity: number
  }

  export type ChefScheduleCreateManyMenuInput = {
    id?: number
    chefId: number
    date: Date | string
  }

  export type OrderItemUpdateWithoutMenuInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ChefScheduleUpdateWithoutMenuInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    chef?: ChefUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ChefScheduleUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChefScheduleUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: number
    menuId: number
    quantity: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    menu?: MenuUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StoreCountOutputTypeDefaultArgs instead
     */
    export type StoreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChefCountOutputTypeDefaultArgs instead
     */
    export type ChefCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChefCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StoreDefaultArgs instead
     */
    export type StoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillboardDefaultArgs instead
     */
    export type BillboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillboardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChefDefaultArgs instead
     */
    export type ChefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChefDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChefScheduleDefaultArgs instead
     */
    export type ChefScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChefScheduleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>

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