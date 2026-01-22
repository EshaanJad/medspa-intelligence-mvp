
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ImportJob
 * 
 */
export type ImportJob = $Result.DefaultSelection<Prisma.$ImportJobPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model CreditProfile
 * 
 */
export type CreditProfile = $Result.DefaultSelection<Prisma.$CreditProfilePayload>
/**
 * Model LoyaltyAccount
 * 
 */
export type LoyaltyAccount = $Result.DefaultSelection<Prisma.$LoyaltyAccountPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.importJob`: Exposes CRUD operations for the **ImportJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImportJobs
    * const importJobs = await prisma.importJob.findMany()
    * ```
    */
  get importJob(): Prisma.ImportJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditProfile`: Exposes CRUD operations for the **CreditProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditProfiles
    * const creditProfiles = await prisma.creditProfile.findMany()
    * ```
    */
  get creditProfile(): Prisma.CreditProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loyaltyAccount`: Exposes CRUD operations for the **LoyaltyAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoyaltyAccounts
    * const loyaltyAccounts = await prisma.loyaltyAccount.findMany()
    * ```
    */
  get loyaltyAccount(): Prisma.LoyaltyAccountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    ImportJob: 'ImportJob',
    Guest: 'Guest',
    Appointment: 'Appointment',
    CreditProfile: 'CreditProfile',
    LoyaltyAccount: 'LoyaltyAccount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "importJob" | "guest" | "appointment" | "creditProfile" | "loyaltyAccount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ImportJob: {
        payload: Prisma.$ImportJobPayload<ExtArgs>
        fields: Prisma.ImportJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImportJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImportJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          findFirst: {
            args: Prisma.ImportJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImportJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          findMany: {
            args: Prisma.ImportJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          create: {
            args: Prisma.ImportJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          createMany: {
            args: Prisma.ImportJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImportJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          delete: {
            args: Prisma.ImportJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          update: {
            args: Prisma.ImportJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          deleteMany: {
            args: Prisma.ImportJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImportJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImportJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>[]
          }
          upsert: {
            args: Prisma.ImportJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImportJobPayload>
          }
          aggregate: {
            args: Prisma.ImportJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImportJob>
          }
          groupBy: {
            args: Prisma.ImportJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImportJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImportJobCountArgs<ExtArgs>
            result: $Utils.Optional<ImportJobCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      CreditProfile: {
        payload: Prisma.$CreditProfilePayload<ExtArgs>
        fields: Prisma.CreditProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          findFirst: {
            args: Prisma.CreditProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          findMany: {
            args: Prisma.CreditProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>[]
          }
          create: {
            args: Prisma.CreditProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          createMany: {
            args: Prisma.CreditProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>[]
          }
          delete: {
            args: Prisma.CreditProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          update: {
            args: Prisma.CreditProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          deleteMany: {
            args: Prisma.CreditProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>[]
          }
          upsert: {
            args: Prisma.CreditProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditProfilePayload>
          }
          aggregate: {
            args: Prisma.CreditProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditProfile>
          }
          groupBy: {
            args: Prisma.CreditProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CreditProfileCountAggregateOutputType> | number
          }
        }
      }
      LoyaltyAccount: {
        payload: Prisma.$LoyaltyAccountPayload<ExtArgs>
        fields: Prisma.LoyaltyAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoyaltyAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          findFirst: {
            args: Prisma.LoyaltyAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoyaltyAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          findMany: {
            args: Prisma.LoyaltyAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[]
          }
          create: {
            args: Prisma.LoyaltyAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          createMany: {
            args: Prisma.LoyaltyAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoyaltyAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[]
          }
          delete: {
            args: Prisma.LoyaltyAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          update: {
            args: Prisma.LoyaltyAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          deleteMany: {
            args: Prisma.LoyaltyAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoyaltyAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>[]
          }
          upsert: {
            args: Prisma.LoyaltyAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoyaltyAccountPayload>
          }
          aggregate: {
            args: Prisma.LoyaltyAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoyaltyAccount>
          }
          groupBy: {
            args: Prisma.LoyaltyAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoyaltyAccountCountArgs<ExtArgs>
            result: $Utils.Optional<LoyaltyAccountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    importJob?: ImportJobOmit
    guest?: GuestOmit
    appointment?: AppointmentOmit
    creditProfile?: CreditProfileOmit
    loyaltyAccount?: LoyaltyAccountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type GuestCountOutputType
   */

  export type GuestCountOutputType = {
    appointments: number
    loyaltyAccounts: number
  }

  export type GuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | GuestCountOutputTypeCountAppointmentsArgs
    loyaltyAccounts?: boolean | GuestCountOutputTypeCountLoyaltyAccountsArgs
  }

  // Custom InputTypes
  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestCountOutputType
     */
    select?: GuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * GuestCountOutputType without action
   */
  export type GuestCountOutputTypeCountLoyaltyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyAccountWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    role: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "role" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ImportJob
   */

  export type AggregateImportJob = {
    _count: ImportJobCountAggregateOutputType | null
    _min: ImportJobMinAggregateOutputType | null
    _max: ImportJobMaxAggregateOutputType | null
  }

  export type ImportJobMinAggregateOutputType = {
    id: string | null
    filename: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ImportJobMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ImportJobCountAggregateOutputType = {
    id: number
    filename: number
    status: number
    log: number
    createdAt: number
    _all: number
  }


  export type ImportJobMinAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    createdAt?: true
  }

  export type ImportJobMaxAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    createdAt?: true
  }

  export type ImportJobCountAggregateInputType = {
    id?: true
    filename?: true
    status?: true
    log?: true
    createdAt?: true
    _all?: true
  }

  export type ImportJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportJob to aggregate.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImportJobs
    **/
    _count?: true | ImportJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImportJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImportJobMaxAggregateInputType
  }

  export type GetImportJobAggregateType<T extends ImportJobAggregateArgs> = {
        [P in keyof T & keyof AggregateImportJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImportJob[P]>
      : GetScalarType<T[P], AggregateImportJob[P]>
  }




  export type ImportJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImportJobWhereInput
    orderBy?: ImportJobOrderByWithAggregationInput | ImportJobOrderByWithAggregationInput[]
    by: ImportJobScalarFieldEnum[] | ImportJobScalarFieldEnum
    having?: ImportJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImportJobCountAggregateInputType | true
    _min?: ImportJobMinAggregateInputType
    _max?: ImportJobMaxAggregateInputType
  }

  export type ImportJobGroupByOutputType = {
    id: string
    filename: string
    status: string
    log: JsonValue | null
    createdAt: Date
    _count: ImportJobCountAggregateOutputType | null
    _min: ImportJobMinAggregateOutputType | null
    _max: ImportJobMaxAggregateOutputType | null
  }

  type GetImportJobGroupByPayload<T extends ImportJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImportJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImportJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImportJobGroupByOutputType[P]>
            : GetScalarType<T[P], ImportJobGroupByOutputType[P]>
        }
      >
    >


  export type ImportJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    log?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    log?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    status?: boolean
    log?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["importJob"]>

  export type ImportJobSelectScalar = {
    id?: boolean
    filename?: boolean
    status?: boolean
    log?: boolean
    createdAt?: boolean
  }

  export type ImportJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "status" | "log" | "createdAt", ExtArgs["result"]["importJob"]>

  export type $ImportJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImportJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      status: string
      log: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["importJob"]>
    composites: {}
  }

  type ImportJobGetPayload<S extends boolean | null | undefined | ImportJobDefaultArgs> = $Result.GetResult<Prisma.$ImportJobPayload, S>

  type ImportJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImportJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImportJobCountAggregateInputType | true
    }

  export interface ImportJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImportJob'], meta: { name: 'ImportJob' } }
    /**
     * Find zero or one ImportJob that matches the filter.
     * @param {ImportJobFindUniqueArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImportJobFindUniqueArgs>(args: SelectSubset<T, ImportJobFindUniqueArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImportJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImportJobFindUniqueOrThrowArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImportJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ImportJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindFirstArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImportJobFindFirstArgs>(args?: SelectSubset<T, ImportJobFindFirstArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImportJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindFirstOrThrowArgs} args - Arguments to find a ImportJob
     * @example
     * // Get one ImportJob
     * const importJob = await prisma.importJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImportJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ImportJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImportJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImportJobs
     * const importJobs = await prisma.importJob.findMany()
     * 
     * // Get first 10 ImportJobs
     * const importJobs = await prisma.importJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const importJobWithIdOnly = await prisma.importJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImportJobFindManyArgs>(args?: SelectSubset<T, ImportJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImportJob.
     * @param {ImportJobCreateArgs} args - Arguments to create a ImportJob.
     * @example
     * // Create one ImportJob
     * const ImportJob = await prisma.importJob.create({
     *   data: {
     *     // ... data to create a ImportJob
     *   }
     * })
     * 
     */
    create<T extends ImportJobCreateArgs>(args: SelectSubset<T, ImportJobCreateArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImportJobs.
     * @param {ImportJobCreateManyArgs} args - Arguments to create many ImportJobs.
     * @example
     * // Create many ImportJobs
     * const importJob = await prisma.importJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImportJobCreateManyArgs>(args?: SelectSubset<T, ImportJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImportJobs and returns the data saved in the database.
     * @param {ImportJobCreateManyAndReturnArgs} args - Arguments to create many ImportJobs.
     * @example
     * // Create many ImportJobs
     * const importJob = await prisma.importJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImportJobs and only return the `id`
     * const importJobWithIdOnly = await prisma.importJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImportJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ImportJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImportJob.
     * @param {ImportJobDeleteArgs} args - Arguments to delete one ImportJob.
     * @example
     * // Delete one ImportJob
     * const ImportJob = await prisma.importJob.delete({
     *   where: {
     *     // ... filter to delete one ImportJob
     *   }
     * })
     * 
     */
    delete<T extends ImportJobDeleteArgs>(args: SelectSubset<T, ImportJobDeleteArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImportJob.
     * @param {ImportJobUpdateArgs} args - Arguments to update one ImportJob.
     * @example
     * // Update one ImportJob
     * const importJob = await prisma.importJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImportJobUpdateArgs>(args: SelectSubset<T, ImportJobUpdateArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImportJobs.
     * @param {ImportJobDeleteManyArgs} args - Arguments to filter ImportJobs to delete.
     * @example
     * // Delete a few ImportJobs
     * const { count } = await prisma.importJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImportJobDeleteManyArgs>(args?: SelectSubset<T, ImportJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImportJobs
     * const importJob = await prisma.importJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImportJobUpdateManyArgs>(args: SelectSubset<T, ImportJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImportJobs and returns the data updated in the database.
     * @param {ImportJobUpdateManyAndReturnArgs} args - Arguments to update many ImportJobs.
     * @example
     * // Update many ImportJobs
     * const importJob = await prisma.importJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImportJobs and only return the `id`
     * const importJobWithIdOnly = await prisma.importJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImportJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ImportJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImportJob.
     * @param {ImportJobUpsertArgs} args - Arguments to update or create a ImportJob.
     * @example
     * // Update or create a ImportJob
     * const importJob = await prisma.importJob.upsert({
     *   create: {
     *     // ... data to create a ImportJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImportJob we want to update
     *   }
     * })
     */
    upsert<T extends ImportJobUpsertArgs>(args: SelectSubset<T, ImportJobUpsertArgs<ExtArgs>>): Prisma__ImportJobClient<$Result.GetResult<Prisma.$ImportJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImportJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobCountArgs} args - Arguments to filter ImportJobs to count.
     * @example
     * // Count the number of ImportJobs
     * const count = await prisma.importJob.count({
     *   where: {
     *     // ... the filter for the ImportJobs we want to count
     *   }
     * })
    **/
    count<T extends ImportJobCountArgs>(
      args?: Subset<T, ImportJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImportJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImportJobAggregateArgs>(args: Subset<T, ImportJobAggregateArgs>): Prisma.PrismaPromise<GetImportJobAggregateType<T>>

    /**
     * Group by ImportJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImportJobGroupByArgs} args - Group by arguments.
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
      T extends ImportJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImportJobGroupByArgs['orderBy'] }
        : { orderBy?: ImportJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImportJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImportJob model
   */
  readonly fields: ImportJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImportJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImportJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImportJob model
   */
  interface ImportJobFieldRefs {
    readonly id: FieldRef<"ImportJob", 'String'>
    readonly filename: FieldRef<"ImportJob", 'String'>
    readonly status: FieldRef<"ImportJob", 'String'>
    readonly log: FieldRef<"ImportJob", 'Json'>
    readonly createdAt: FieldRef<"ImportJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImportJob findUnique
   */
  export type ImportJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob findUniqueOrThrow
   */
  export type ImportJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob findFirst
   */
  export type ImportJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportJobs.
     */
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob findFirstOrThrow
   */
  export type ImportJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter, which ImportJob to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImportJobs.
     */
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob findMany
   */
  export type ImportJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter, which ImportJobs to fetch.
     */
    where?: ImportJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImportJobs to fetch.
     */
    orderBy?: ImportJobOrderByWithRelationInput | ImportJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImportJobs.
     */
    cursor?: ImportJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImportJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImportJobs.
     */
    skip?: number
    distinct?: ImportJobScalarFieldEnum | ImportJobScalarFieldEnum[]
  }

  /**
   * ImportJob create
   */
  export type ImportJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data needed to create a ImportJob.
     */
    data: XOR<ImportJobCreateInput, ImportJobUncheckedCreateInput>
  }

  /**
   * ImportJob createMany
   */
  export type ImportJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImportJobs.
     */
    data: ImportJobCreateManyInput | ImportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportJob createManyAndReturn
   */
  export type ImportJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data used to create many ImportJobs.
     */
    data: ImportJobCreateManyInput | ImportJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImportJob update
   */
  export type ImportJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data needed to update a ImportJob.
     */
    data: XOR<ImportJobUpdateInput, ImportJobUncheckedUpdateInput>
    /**
     * Choose, which ImportJob to update.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob updateMany
   */
  export type ImportJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImportJobs.
     */
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyInput>
    /**
     * Filter which ImportJobs to update
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to update.
     */
    limit?: number
  }

  /**
   * ImportJob updateManyAndReturn
   */
  export type ImportJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The data used to update ImportJobs.
     */
    data: XOR<ImportJobUpdateManyMutationInput, ImportJobUncheckedUpdateManyInput>
    /**
     * Filter which ImportJobs to update
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to update.
     */
    limit?: number
  }

  /**
   * ImportJob upsert
   */
  export type ImportJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * The filter to search for the ImportJob to update in case it exists.
     */
    where: ImportJobWhereUniqueInput
    /**
     * In case the ImportJob found by the `where` argument doesn't exist, create a new ImportJob with this data.
     */
    create: XOR<ImportJobCreateInput, ImportJobUncheckedCreateInput>
    /**
     * In case the ImportJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImportJobUpdateInput, ImportJobUncheckedUpdateInput>
  }

  /**
   * ImportJob delete
   */
  export type ImportJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
    /**
     * Filter which ImportJob to delete.
     */
    where: ImportJobWhereUniqueInput
  }

  /**
   * ImportJob deleteMany
   */
  export type ImportJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImportJobs to delete
     */
    where?: ImportJobWhereInput
    /**
     * Limit how many ImportJobs to delete.
     */
    limit?: number
  }

  /**
   * ImportJob without action
   */
  export type ImportJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImportJob
     */
    select?: ImportJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImportJob
     */
    omit?: ImportJobOmit<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    normalizedName: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    normalizedName: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    fullName: number
    normalizedName: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    fullName?: true
    normalizedName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    fullName?: true
    normalizedName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    fullName?: true
    normalizedName?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    fullName: string | null
    normalizedName: string | null
    email: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    normalizedName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Guest$appointmentsArgs<ExtArgs>
    creditProfile?: boolean | Guest$creditProfileArgs<ExtArgs>
    loyaltyAccounts?: boolean | Guest$loyaltyAccountsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    normalizedName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    normalizedName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    fullName?: boolean
    normalizedName?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "normalizedName" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Guest$appointmentsArgs<ExtArgs>
    creditProfile?: boolean | Guest$creditProfileArgs<ExtArgs>
    loyaltyAccounts?: boolean | Guest$loyaltyAccountsArgs<ExtArgs>
    _count?: boolean | GuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      creditProfile: Prisma.$CreditProfilePayload<ExtArgs> | null
      loyaltyAccounts: Prisma.$LoyaltyAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string | null
      normalizedName: string | null
      email: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
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
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Guest$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creditProfile<T extends Guest$creditProfileArgs<ExtArgs> = {}>(args?: Subset<T, Guest$creditProfileArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loyaltyAccounts<T extends Guest$loyaltyAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Guest$loyaltyAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly fullName: FieldRef<"Guest", 'String'>
    readonly normalizedName: FieldRef<"Guest", 'String'>
    readonly email: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.appointments
   */
  export type Guest$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Guest.creditProfile
   */
  export type Guest$creditProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    where?: CreditProfileWhereInput
  }

  /**
   * Guest.loyaltyAccounts
   */
  export type Guest$loyaltyAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    where?: LoyaltyAccountWhereInput
    orderBy?: LoyaltyAccountOrderByWithRelationInput | LoyaltyAccountOrderByWithRelationInput[]
    cursor?: LoyaltyAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoyaltyAccountScalarFieldEnum | LoyaltyAccountScalarFieldEnum[]
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    serviceName: string | null
    appointmentDate: Date | null
    status: string | null
    rawId: string | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    serviceName: string | null
    appointmentDate: Date | null
    status: string | null
    rawId: string | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    guestId: number
    serviceName: number
    appointmentDate: number
    status: number
    rawId: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    guestId?: true
    serviceName?: true
    appointmentDate?: true
    status?: true
    rawId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    guestId?: true
    serviceName?: true
    appointmentDate?: true
    status?: true
    rawId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    guestId?: true
    serviceName?: true
    appointmentDate?: true
    status?: true
    rawId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    guestId: string
    serviceName: string
    appointmentDate: Date
    status: string | null
    rawId: string | null
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    serviceName?: boolean
    appointmentDate?: boolean
    status?: boolean
    rawId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    serviceName?: boolean
    appointmentDate?: boolean
    status?: boolean
    rawId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    serviceName?: boolean
    appointmentDate?: boolean
    status?: boolean
    rawId?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    guestId?: boolean
    serviceName?: boolean
    appointmentDate?: boolean
    status?: boolean
    rawId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "serviceName" | "appointmentDate" | "status" | "rawId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      serviceName: string
      appointmentDate: Date
      status: string | null
      rawId: string | null
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly guestId: FieldRef<"Appointment", 'String'>
    readonly serviceName: FieldRef<"Appointment", 'String'>
    readonly appointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'String'>
    readonly rawId: FieldRef<"Appointment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model CreditProfile
   */

  export type AggregateCreditProfile = {
    _count: CreditProfileCountAggregateOutputType | null
    _avg: CreditProfileAvgAggregateOutputType | null
    _sum: CreditProfileSumAggregateOutputType | null
    _min: CreditProfileMinAggregateOutputType | null
    _max: CreditProfileMaxAggregateOutputType | null
  }

  export type CreditProfileAvgAggregateOutputType = {
    approvedAmount: number | null
  }

  export type CreditProfileSumAggregateOutputType = {
    approvedAmount: number | null
  }

  export type CreditProfileMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    provider: string | null
    approvedAmount: number | null
    expirationDate: Date | null
  }

  export type CreditProfileMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    provider: string | null
    approvedAmount: number | null
    expirationDate: Date | null
  }

  export type CreditProfileCountAggregateOutputType = {
    id: number
    guestId: number
    provider: number
    approvedAmount: number
    expirationDate: number
    _all: number
  }


  export type CreditProfileAvgAggregateInputType = {
    approvedAmount?: true
  }

  export type CreditProfileSumAggregateInputType = {
    approvedAmount?: true
  }

  export type CreditProfileMinAggregateInputType = {
    id?: true
    guestId?: true
    provider?: true
    approvedAmount?: true
    expirationDate?: true
  }

  export type CreditProfileMaxAggregateInputType = {
    id?: true
    guestId?: true
    provider?: true
    approvedAmount?: true
    expirationDate?: true
  }

  export type CreditProfileCountAggregateInputType = {
    id?: true
    guestId?: true
    provider?: true
    approvedAmount?: true
    expirationDate?: true
    _all?: true
  }

  export type CreditProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditProfile to aggregate.
     */
    where?: CreditProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditProfiles to fetch.
     */
    orderBy?: CreditProfileOrderByWithRelationInput | CreditProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditProfiles
    **/
    _count?: true | CreditProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditProfileMaxAggregateInputType
  }

  export type GetCreditProfileAggregateType<T extends CreditProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditProfile[P]>
      : GetScalarType<T[P], AggregateCreditProfile[P]>
  }




  export type CreditProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditProfileWhereInput
    orderBy?: CreditProfileOrderByWithAggregationInput | CreditProfileOrderByWithAggregationInput[]
    by: CreditProfileScalarFieldEnum[] | CreditProfileScalarFieldEnum
    having?: CreditProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditProfileCountAggregateInputType | true
    _avg?: CreditProfileAvgAggregateInputType
    _sum?: CreditProfileSumAggregateInputType
    _min?: CreditProfileMinAggregateInputType
    _max?: CreditProfileMaxAggregateInputType
  }

  export type CreditProfileGroupByOutputType = {
    id: string
    guestId: string
    provider: string
    approvedAmount: number | null
    expirationDate: Date | null
    _count: CreditProfileCountAggregateOutputType | null
    _avg: CreditProfileAvgAggregateOutputType | null
    _sum: CreditProfileSumAggregateOutputType | null
    _min: CreditProfileMinAggregateOutputType | null
    _max: CreditProfileMaxAggregateOutputType | null
  }

  type GetCreditProfileGroupByPayload<T extends CreditProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CreditProfileGroupByOutputType[P]>
        }
      >
    >


  export type CreditProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    provider?: boolean
    approvedAmount?: boolean
    expirationDate?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditProfile"]>

  export type CreditProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    provider?: boolean
    approvedAmount?: boolean
    expirationDate?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditProfile"]>

  export type CreditProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    provider?: boolean
    approvedAmount?: boolean
    expirationDate?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditProfile"]>

  export type CreditProfileSelectScalar = {
    id?: boolean
    guestId?: boolean
    provider?: boolean
    approvedAmount?: boolean
    expirationDate?: boolean
  }

  export type CreditProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "provider" | "approvedAmount" | "expirationDate", ExtArgs["result"]["creditProfile"]>
  export type CreditProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type CreditProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type CreditProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $CreditProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditProfile"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      provider: string
      approvedAmount: number | null
      expirationDate: Date | null
    }, ExtArgs["result"]["creditProfile"]>
    composites: {}
  }

  type CreditProfileGetPayload<S extends boolean | null | undefined | CreditProfileDefaultArgs> = $Result.GetResult<Prisma.$CreditProfilePayload, S>

  type CreditProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditProfileCountAggregateInputType | true
    }

  export interface CreditProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditProfile'], meta: { name: 'CreditProfile' } }
    /**
     * Find zero or one CreditProfile that matches the filter.
     * @param {CreditProfileFindUniqueArgs} args - Arguments to find a CreditProfile
     * @example
     * // Get one CreditProfile
     * const creditProfile = await prisma.creditProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditProfileFindUniqueArgs>(args: SelectSubset<T, CreditProfileFindUniqueArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditProfileFindUniqueOrThrowArgs} args - Arguments to find a CreditProfile
     * @example
     * // Get one CreditProfile
     * const creditProfile = await prisma.creditProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileFindFirstArgs} args - Arguments to find a CreditProfile
     * @example
     * // Get one CreditProfile
     * const creditProfile = await prisma.creditProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditProfileFindFirstArgs>(args?: SelectSubset<T, CreditProfileFindFirstArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileFindFirstOrThrowArgs} args - Arguments to find a CreditProfile
     * @example
     * // Get one CreditProfile
     * const creditProfile = await prisma.creditProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditProfiles
     * const creditProfiles = await prisma.creditProfile.findMany()
     * 
     * // Get first 10 CreditProfiles
     * const creditProfiles = await prisma.creditProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditProfileWithIdOnly = await prisma.creditProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditProfileFindManyArgs>(args?: SelectSubset<T, CreditProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditProfile.
     * @param {CreditProfileCreateArgs} args - Arguments to create a CreditProfile.
     * @example
     * // Create one CreditProfile
     * const CreditProfile = await prisma.creditProfile.create({
     *   data: {
     *     // ... data to create a CreditProfile
     *   }
     * })
     * 
     */
    create<T extends CreditProfileCreateArgs>(args: SelectSubset<T, CreditProfileCreateArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditProfiles.
     * @param {CreditProfileCreateManyArgs} args - Arguments to create many CreditProfiles.
     * @example
     * // Create many CreditProfiles
     * const creditProfile = await prisma.creditProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditProfileCreateManyArgs>(args?: SelectSubset<T, CreditProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditProfiles and returns the data saved in the database.
     * @param {CreditProfileCreateManyAndReturnArgs} args - Arguments to create many CreditProfiles.
     * @example
     * // Create many CreditProfiles
     * const creditProfile = await prisma.creditProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditProfiles and only return the `id`
     * const creditProfileWithIdOnly = await prisma.creditProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditProfile.
     * @param {CreditProfileDeleteArgs} args - Arguments to delete one CreditProfile.
     * @example
     * // Delete one CreditProfile
     * const CreditProfile = await prisma.creditProfile.delete({
     *   where: {
     *     // ... filter to delete one CreditProfile
     *   }
     * })
     * 
     */
    delete<T extends CreditProfileDeleteArgs>(args: SelectSubset<T, CreditProfileDeleteArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditProfile.
     * @param {CreditProfileUpdateArgs} args - Arguments to update one CreditProfile.
     * @example
     * // Update one CreditProfile
     * const creditProfile = await prisma.creditProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditProfileUpdateArgs>(args: SelectSubset<T, CreditProfileUpdateArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditProfiles.
     * @param {CreditProfileDeleteManyArgs} args - Arguments to filter CreditProfiles to delete.
     * @example
     * // Delete a few CreditProfiles
     * const { count } = await prisma.creditProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditProfileDeleteManyArgs>(args?: SelectSubset<T, CreditProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditProfiles
     * const creditProfile = await prisma.creditProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditProfileUpdateManyArgs>(args: SelectSubset<T, CreditProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditProfiles and returns the data updated in the database.
     * @param {CreditProfileUpdateManyAndReturnArgs} args - Arguments to update many CreditProfiles.
     * @example
     * // Update many CreditProfiles
     * const creditProfile = await prisma.creditProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditProfiles and only return the `id`
     * const creditProfileWithIdOnly = await prisma.creditProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreditProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditProfile.
     * @param {CreditProfileUpsertArgs} args - Arguments to update or create a CreditProfile.
     * @example
     * // Update or create a CreditProfile
     * const creditProfile = await prisma.creditProfile.upsert({
     *   create: {
     *     // ... data to create a CreditProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditProfile we want to update
     *   }
     * })
     */
    upsert<T extends CreditProfileUpsertArgs>(args: SelectSubset<T, CreditProfileUpsertArgs<ExtArgs>>): Prisma__CreditProfileClient<$Result.GetResult<Prisma.$CreditProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileCountArgs} args - Arguments to filter CreditProfiles to count.
     * @example
     * // Count the number of CreditProfiles
     * const count = await prisma.creditProfile.count({
     *   where: {
     *     // ... the filter for the CreditProfiles we want to count
     *   }
     * })
    **/
    count<T extends CreditProfileCountArgs>(
      args?: Subset<T, CreditProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditProfileAggregateArgs>(args: Subset<T, CreditProfileAggregateArgs>): Prisma.PrismaPromise<GetCreditProfileAggregateType<T>>

    /**
     * Group by CreditProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditProfileGroupByArgs} args - Group by arguments.
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
      T extends CreditProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditProfileGroupByArgs['orderBy'] }
        : { orderBy?: CreditProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditProfile model
   */
  readonly fields: CreditProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditProfile model
   */
  interface CreditProfileFieldRefs {
    readonly id: FieldRef<"CreditProfile", 'String'>
    readonly guestId: FieldRef<"CreditProfile", 'String'>
    readonly provider: FieldRef<"CreditProfile", 'String'>
    readonly approvedAmount: FieldRef<"CreditProfile", 'Float'>
    readonly expirationDate: FieldRef<"CreditProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditProfile findUnique
   */
  export type CreditProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreditProfile to fetch.
     */
    where: CreditProfileWhereUniqueInput
  }

  /**
   * CreditProfile findUniqueOrThrow
   */
  export type CreditProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreditProfile to fetch.
     */
    where: CreditProfileWhereUniqueInput
  }

  /**
   * CreditProfile findFirst
   */
  export type CreditProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreditProfile to fetch.
     */
    where?: CreditProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditProfiles to fetch.
     */
    orderBy?: CreditProfileOrderByWithRelationInput | CreditProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditProfiles.
     */
    cursor?: CreditProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditProfiles.
     */
    distinct?: CreditProfileScalarFieldEnum | CreditProfileScalarFieldEnum[]
  }

  /**
   * CreditProfile findFirstOrThrow
   */
  export type CreditProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreditProfile to fetch.
     */
    where?: CreditProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditProfiles to fetch.
     */
    orderBy?: CreditProfileOrderByWithRelationInput | CreditProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditProfiles.
     */
    cursor?: CreditProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditProfiles.
     */
    distinct?: CreditProfileScalarFieldEnum | CreditProfileScalarFieldEnum[]
  }

  /**
   * CreditProfile findMany
   */
  export type CreditProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreditProfiles to fetch.
     */
    where?: CreditProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditProfiles to fetch.
     */
    orderBy?: CreditProfileOrderByWithRelationInput | CreditProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditProfiles.
     */
    cursor?: CreditProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditProfiles.
     */
    skip?: number
    distinct?: CreditProfileScalarFieldEnum | CreditProfileScalarFieldEnum[]
  }

  /**
   * CreditProfile create
   */
  export type CreditProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditProfile.
     */
    data: XOR<CreditProfileCreateInput, CreditProfileUncheckedCreateInput>
  }

  /**
   * CreditProfile createMany
   */
  export type CreditProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditProfiles.
     */
    data: CreditProfileCreateManyInput | CreditProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditProfile createManyAndReturn
   */
  export type CreditProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CreditProfiles.
     */
    data: CreditProfileCreateManyInput | CreditProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditProfile update
   */
  export type CreditProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditProfile.
     */
    data: XOR<CreditProfileUpdateInput, CreditProfileUncheckedUpdateInput>
    /**
     * Choose, which CreditProfile to update.
     */
    where: CreditProfileWhereUniqueInput
  }

  /**
   * CreditProfile updateMany
   */
  export type CreditProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditProfiles.
     */
    data: XOR<CreditProfileUpdateManyMutationInput, CreditProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreditProfiles to update
     */
    where?: CreditProfileWhereInput
    /**
     * Limit how many CreditProfiles to update.
     */
    limit?: number
  }

  /**
   * CreditProfile updateManyAndReturn
   */
  export type CreditProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * The data used to update CreditProfiles.
     */
    data: XOR<CreditProfileUpdateManyMutationInput, CreditProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreditProfiles to update
     */
    where?: CreditProfileWhereInput
    /**
     * Limit how many CreditProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditProfile upsert
   */
  export type CreditProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditProfile to update in case it exists.
     */
    where: CreditProfileWhereUniqueInput
    /**
     * In case the CreditProfile found by the `where` argument doesn't exist, create a new CreditProfile with this data.
     */
    create: XOR<CreditProfileCreateInput, CreditProfileUncheckedCreateInput>
    /**
     * In case the CreditProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditProfileUpdateInput, CreditProfileUncheckedUpdateInput>
  }

  /**
   * CreditProfile delete
   */
  export type CreditProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
    /**
     * Filter which CreditProfile to delete.
     */
    where: CreditProfileWhereUniqueInput
  }

  /**
   * CreditProfile deleteMany
   */
  export type CreditProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditProfiles to delete
     */
    where?: CreditProfileWhereInput
    /**
     * Limit how many CreditProfiles to delete.
     */
    limit?: number
  }

  /**
   * CreditProfile without action
   */
  export type CreditProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditProfile
     */
    select?: CreditProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditProfile
     */
    omit?: CreditProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditProfileInclude<ExtArgs> | null
  }


  /**
   * Model LoyaltyAccount
   */

  export type AggregateLoyaltyAccount = {
    _count: LoyaltyAccountCountAggregateOutputType | null
    _avg: LoyaltyAccountAvgAggregateOutputType | null
    _sum: LoyaltyAccountSumAggregateOutputType | null
    _min: LoyaltyAccountMinAggregateOutputType | null
    _max: LoyaltyAccountMaxAggregateOutputType | null
  }

  export type LoyaltyAccountAvgAggregateOutputType = {
    pointsBalance: number | null
    rewardsBalance: number | null
  }

  export type LoyaltyAccountSumAggregateOutputType = {
    pointsBalance: number | null
    rewardsBalance: number | null
  }

  export type LoyaltyAccountMinAggregateOutputType = {
    id: string | null
    guestId: string | null
    programName: string | null
    pointsBalance: number | null
    rewardsBalance: number | null
  }

  export type LoyaltyAccountMaxAggregateOutputType = {
    id: string | null
    guestId: string | null
    programName: string | null
    pointsBalance: number | null
    rewardsBalance: number | null
  }

  export type LoyaltyAccountCountAggregateOutputType = {
    id: number
    guestId: number
    programName: number
    pointsBalance: number
    rewardsBalance: number
    _all: number
  }


  export type LoyaltyAccountAvgAggregateInputType = {
    pointsBalance?: true
    rewardsBalance?: true
  }

  export type LoyaltyAccountSumAggregateInputType = {
    pointsBalance?: true
    rewardsBalance?: true
  }

  export type LoyaltyAccountMinAggregateInputType = {
    id?: true
    guestId?: true
    programName?: true
    pointsBalance?: true
    rewardsBalance?: true
  }

  export type LoyaltyAccountMaxAggregateInputType = {
    id?: true
    guestId?: true
    programName?: true
    pointsBalance?: true
    rewardsBalance?: true
  }

  export type LoyaltyAccountCountAggregateInputType = {
    id?: true
    guestId?: true
    programName?: true
    pointsBalance?: true
    rewardsBalance?: true
    _all?: true
  }

  export type LoyaltyAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyAccount to aggregate.
     */
    where?: LoyaltyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyAccounts to fetch.
     */
    orderBy?: LoyaltyAccountOrderByWithRelationInput | LoyaltyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoyaltyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoyaltyAccounts
    **/
    _count?: true | LoyaltyAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoyaltyAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoyaltyAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoyaltyAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoyaltyAccountMaxAggregateInputType
  }

  export type GetLoyaltyAccountAggregateType<T extends LoyaltyAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateLoyaltyAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoyaltyAccount[P]>
      : GetScalarType<T[P], AggregateLoyaltyAccount[P]>
  }




  export type LoyaltyAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoyaltyAccountWhereInput
    orderBy?: LoyaltyAccountOrderByWithAggregationInput | LoyaltyAccountOrderByWithAggregationInput[]
    by: LoyaltyAccountScalarFieldEnum[] | LoyaltyAccountScalarFieldEnum
    having?: LoyaltyAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoyaltyAccountCountAggregateInputType | true
    _avg?: LoyaltyAccountAvgAggregateInputType
    _sum?: LoyaltyAccountSumAggregateInputType
    _min?: LoyaltyAccountMinAggregateInputType
    _max?: LoyaltyAccountMaxAggregateInputType
  }

  export type LoyaltyAccountGroupByOutputType = {
    id: string
    guestId: string
    programName: string
    pointsBalance: number | null
    rewardsBalance: number | null
    _count: LoyaltyAccountCountAggregateOutputType | null
    _avg: LoyaltyAccountAvgAggregateOutputType | null
    _sum: LoyaltyAccountSumAggregateOutputType | null
    _min: LoyaltyAccountMinAggregateOutputType | null
    _max: LoyaltyAccountMaxAggregateOutputType | null
  }

  type GetLoyaltyAccountGroupByPayload<T extends LoyaltyAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoyaltyAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoyaltyAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoyaltyAccountGroupByOutputType[P]>
            : GetScalarType<T[P], LoyaltyAccountGroupByOutputType[P]>
        }
      >
    >


  export type LoyaltyAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    programName?: boolean
    pointsBalance?: boolean
    rewardsBalance?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loyaltyAccount"]>

  export type LoyaltyAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    programName?: boolean
    pointsBalance?: boolean
    rewardsBalance?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loyaltyAccount"]>

  export type LoyaltyAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guestId?: boolean
    programName?: boolean
    pointsBalance?: boolean
    rewardsBalance?: boolean
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loyaltyAccount"]>

  export type LoyaltyAccountSelectScalar = {
    id?: boolean
    guestId?: boolean
    programName?: boolean
    pointsBalance?: boolean
    rewardsBalance?: boolean
  }

  export type LoyaltyAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guestId" | "programName" | "pointsBalance" | "rewardsBalance", ExtArgs["result"]["loyaltyAccount"]>
  export type LoyaltyAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type LoyaltyAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }
  export type LoyaltyAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guest?: boolean | GuestDefaultArgs<ExtArgs>
  }

  export type $LoyaltyAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoyaltyAccount"
    objects: {
      guest: Prisma.$GuestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guestId: string
      programName: string
      pointsBalance: number | null
      rewardsBalance: number | null
    }, ExtArgs["result"]["loyaltyAccount"]>
    composites: {}
  }

  type LoyaltyAccountGetPayload<S extends boolean | null | undefined | LoyaltyAccountDefaultArgs> = $Result.GetResult<Prisma.$LoyaltyAccountPayload, S>

  type LoyaltyAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoyaltyAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoyaltyAccountCountAggregateInputType | true
    }

  export interface LoyaltyAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoyaltyAccount'], meta: { name: 'LoyaltyAccount' } }
    /**
     * Find zero or one LoyaltyAccount that matches the filter.
     * @param {LoyaltyAccountFindUniqueArgs} args - Arguments to find a LoyaltyAccount
     * @example
     * // Get one LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoyaltyAccountFindUniqueArgs>(args: SelectSubset<T, LoyaltyAccountFindUniqueArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoyaltyAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoyaltyAccountFindUniqueOrThrowArgs} args - Arguments to find a LoyaltyAccount
     * @example
     * // Get one LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoyaltyAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoyaltyAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountFindFirstArgs} args - Arguments to find a LoyaltyAccount
     * @example
     * // Get one LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoyaltyAccountFindFirstArgs>(args?: SelectSubset<T, LoyaltyAccountFindFirstArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoyaltyAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountFindFirstOrThrowArgs} args - Arguments to find a LoyaltyAccount
     * @example
     * // Get one LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoyaltyAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, LoyaltyAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoyaltyAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoyaltyAccounts
     * const loyaltyAccounts = await prisma.loyaltyAccount.findMany()
     * 
     * // Get first 10 LoyaltyAccounts
     * const loyaltyAccounts = await prisma.loyaltyAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loyaltyAccountWithIdOnly = await prisma.loyaltyAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoyaltyAccountFindManyArgs>(args?: SelectSubset<T, LoyaltyAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoyaltyAccount.
     * @param {LoyaltyAccountCreateArgs} args - Arguments to create a LoyaltyAccount.
     * @example
     * // Create one LoyaltyAccount
     * const LoyaltyAccount = await prisma.loyaltyAccount.create({
     *   data: {
     *     // ... data to create a LoyaltyAccount
     *   }
     * })
     * 
     */
    create<T extends LoyaltyAccountCreateArgs>(args: SelectSubset<T, LoyaltyAccountCreateArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoyaltyAccounts.
     * @param {LoyaltyAccountCreateManyArgs} args - Arguments to create many LoyaltyAccounts.
     * @example
     * // Create many LoyaltyAccounts
     * const loyaltyAccount = await prisma.loyaltyAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoyaltyAccountCreateManyArgs>(args?: SelectSubset<T, LoyaltyAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoyaltyAccounts and returns the data saved in the database.
     * @param {LoyaltyAccountCreateManyAndReturnArgs} args - Arguments to create many LoyaltyAccounts.
     * @example
     * // Create many LoyaltyAccounts
     * const loyaltyAccount = await prisma.loyaltyAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoyaltyAccounts and only return the `id`
     * const loyaltyAccountWithIdOnly = await prisma.loyaltyAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoyaltyAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, LoyaltyAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoyaltyAccount.
     * @param {LoyaltyAccountDeleteArgs} args - Arguments to delete one LoyaltyAccount.
     * @example
     * // Delete one LoyaltyAccount
     * const LoyaltyAccount = await prisma.loyaltyAccount.delete({
     *   where: {
     *     // ... filter to delete one LoyaltyAccount
     *   }
     * })
     * 
     */
    delete<T extends LoyaltyAccountDeleteArgs>(args: SelectSubset<T, LoyaltyAccountDeleteArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoyaltyAccount.
     * @param {LoyaltyAccountUpdateArgs} args - Arguments to update one LoyaltyAccount.
     * @example
     * // Update one LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoyaltyAccountUpdateArgs>(args: SelectSubset<T, LoyaltyAccountUpdateArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoyaltyAccounts.
     * @param {LoyaltyAccountDeleteManyArgs} args - Arguments to filter LoyaltyAccounts to delete.
     * @example
     * // Delete a few LoyaltyAccounts
     * const { count } = await prisma.loyaltyAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoyaltyAccountDeleteManyArgs>(args?: SelectSubset<T, LoyaltyAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoyaltyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoyaltyAccounts
     * const loyaltyAccount = await prisma.loyaltyAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoyaltyAccountUpdateManyArgs>(args: SelectSubset<T, LoyaltyAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoyaltyAccounts and returns the data updated in the database.
     * @param {LoyaltyAccountUpdateManyAndReturnArgs} args - Arguments to update many LoyaltyAccounts.
     * @example
     * // Update many LoyaltyAccounts
     * const loyaltyAccount = await prisma.loyaltyAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoyaltyAccounts and only return the `id`
     * const loyaltyAccountWithIdOnly = await prisma.loyaltyAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoyaltyAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoyaltyAccount.
     * @param {LoyaltyAccountUpsertArgs} args - Arguments to update or create a LoyaltyAccount.
     * @example
     * // Update or create a LoyaltyAccount
     * const loyaltyAccount = await prisma.loyaltyAccount.upsert({
     *   create: {
     *     // ... data to create a LoyaltyAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoyaltyAccount we want to update
     *   }
     * })
     */
    upsert<T extends LoyaltyAccountUpsertArgs>(args: SelectSubset<T, LoyaltyAccountUpsertArgs<ExtArgs>>): Prisma__LoyaltyAccountClient<$Result.GetResult<Prisma.$LoyaltyAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoyaltyAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountCountArgs} args - Arguments to filter LoyaltyAccounts to count.
     * @example
     * // Count the number of LoyaltyAccounts
     * const count = await prisma.loyaltyAccount.count({
     *   where: {
     *     // ... the filter for the LoyaltyAccounts we want to count
     *   }
     * })
    **/
    count<T extends LoyaltyAccountCountArgs>(
      args?: Subset<T, LoyaltyAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoyaltyAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoyaltyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoyaltyAccountAggregateArgs>(args: Subset<T, LoyaltyAccountAggregateArgs>): Prisma.PrismaPromise<GetLoyaltyAccountAggregateType<T>>

    /**
     * Group by LoyaltyAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoyaltyAccountGroupByArgs} args - Group by arguments.
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
      T extends LoyaltyAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoyaltyAccountGroupByArgs['orderBy'] }
        : { orderBy?: LoyaltyAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoyaltyAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoyaltyAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoyaltyAccount model
   */
  readonly fields: LoyaltyAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoyaltyAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoyaltyAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guest<T extends GuestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuestDefaultArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoyaltyAccount model
   */
  interface LoyaltyAccountFieldRefs {
    readonly id: FieldRef<"LoyaltyAccount", 'String'>
    readonly guestId: FieldRef<"LoyaltyAccount", 'String'>
    readonly programName: FieldRef<"LoyaltyAccount", 'String'>
    readonly pointsBalance: FieldRef<"LoyaltyAccount", 'Float'>
    readonly rewardsBalance: FieldRef<"LoyaltyAccount", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * LoyaltyAccount findUnique
   */
  export type LoyaltyAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyAccount to fetch.
     */
    where: LoyaltyAccountWhereUniqueInput
  }

  /**
   * LoyaltyAccount findUniqueOrThrow
   */
  export type LoyaltyAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyAccount to fetch.
     */
    where: LoyaltyAccountWhereUniqueInput
  }

  /**
   * LoyaltyAccount findFirst
   */
  export type LoyaltyAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyAccount to fetch.
     */
    where?: LoyaltyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyAccounts to fetch.
     */
    orderBy?: LoyaltyAccountOrderByWithRelationInput | LoyaltyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyAccounts.
     */
    cursor?: LoyaltyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyAccounts.
     */
    distinct?: LoyaltyAccountScalarFieldEnum | LoyaltyAccountScalarFieldEnum[]
  }

  /**
   * LoyaltyAccount findFirstOrThrow
   */
  export type LoyaltyAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyAccount to fetch.
     */
    where?: LoyaltyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyAccounts to fetch.
     */
    orderBy?: LoyaltyAccountOrderByWithRelationInput | LoyaltyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoyaltyAccounts.
     */
    cursor?: LoyaltyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoyaltyAccounts.
     */
    distinct?: LoyaltyAccountScalarFieldEnum | LoyaltyAccountScalarFieldEnum[]
  }

  /**
   * LoyaltyAccount findMany
   */
  export type LoyaltyAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter, which LoyaltyAccounts to fetch.
     */
    where?: LoyaltyAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoyaltyAccounts to fetch.
     */
    orderBy?: LoyaltyAccountOrderByWithRelationInput | LoyaltyAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoyaltyAccounts.
     */
    cursor?: LoyaltyAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoyaltyAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoyaltyAccounts.
     */
    skip?: number
    distinct?: LoyaltyAccountScalarFieldEnum | LoyaltyAccountScalarFieldEnum[]
  }

  /**
   * LoyaltyAccount create
   */
  export type LoyaltyAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a LoyaltyAccount.
     */
    data: XOR<LoyaltyAccountCreateInput, LoyaltyAccountUncheckedCreateInput>
  }

  /**
   * LoyaltyAccount createMany
   */
  export type LoyaltyAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoyaltyAccounts.
     */
    data: LoyaltyAccountCreateManyInput | LoyaltyAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoyaltyAccount createManyAndReturn
   */
  export type LoyaltyAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * The data used to create many LoyaltyAccounts.
     */
    data: LoyaltyAccountCreateManyInput | LoyaltyAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoyaltyAccount update
   */
  export type LoyaltyAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a LoyaltyAccount.
     */
    data: XOR<LoyaltyAccountUpdateInput, LoyaltyAccountUncheckedUpdateInput>
    /**
     * Choose, which LoyaltyAccount to update.
     */
    where: LoyaltyAccountWhereUniqueInput
  }

  /**
   * LoyaltyAccount updateMany
   */
  export type LoyaltyAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoyaltyAccounts.
     */
    data: XOR<LoyaltyAccountUpdateManyMutationInput, LoyaltyAccountUncheckedUpdateManyInput>
    /**
     * Filter which LoyaltyAccounts to update
     */
    where?: LoyaltyAccountWhereInput
    /**
     * Limit how many LoyaltyAccounts to update.
     */
    limit?: number
  }

  /**
   * LoyaltyAccount updateManyAndReturn
   */
  export type LoyaltyAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * The data used to update LoyaltyAccounts.
     */
    data: XOR<LoyaltyAccountUpdateManyMutationInput, LoyaltyAccountUncheckedUpdateManyInput>
    /**
     * Filter which LoyaltyAccounts to update
     */
    where?: LoyaltyAccountWhereInput
    /**
     * Limit how many LoyaltyAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoyaltyAccount upsert
   */
  export type LoyaltyAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the LoyaltyAccount to update in case it exists.
     */
    where: LoyaltyAccountWhereUniqueInput
    /**
     * In case the LoyaltyAccount found by the `where` argument doesn't exist, create a new LoyaltyAccount with this data.
     */
    create: XOR<LoyaltyAccountCreateInput, LoyaltyAccountUncheckedCreateInput>
    /**
     * In case the LoyaltyAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoyaltyAccountUpdateInput, LoyaltyAccountUncheckedUpdateInput>
  }

  /**
   * LoyaltyAccount delete
   */
  export type LoyaltyAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
    /**
     * Filter which LoyaltyAccount to delete.
     */
    where: LoyaltyAccountWhereUniqueInput
  }

  /**
   * LoyaltyAccount deleteMany
   */
  export type LoyaltyAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoyaltyAccounts to delete
     */
    where?: LoyaltyAccountWhereInput
    /**
     * Limit how many LoyaltyAccounts to delete.
     */
    limit?: number
  }

  /**
   * LoyaltyAccount without action
   */
  export type LoyaltyAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoyaltyAccount
     */
    select?: LoyaltyAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoyaltyAccount
     */
    omit?: LoyaltyAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoyaltyAccountInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ImportJobScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    status: 'status',
    log: 'log',
    createdAt: 'createdAt'
  };

  export type ImportJobScalarFieldEnum = (typeof ImportJobScalarFieldEnum)[keyof typeof ImportJobScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    normalizedName: 'normalizedName',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    serviceName: 'serviceName',
    appointmentDate: 'appointmentDate',
    status: 'status',
    rawId: 'rawId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const CreditProfileScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    provider: 'provider',
    approvedAmount: 'approvedAmount',
    expirationDate: 'expirationDate'
  };

  export type CreditProfileScalarFieldEnum = (typeof CreditProfileScalarFieldEnum)[keyof typeof CreditProfileScalarFieldEnum]


  export const LoyaltyAccountScalarFieldEnum: {
    id: 'id',
    guestId: 'guestId',
    programName: 'programName',
    pointsBalance: 'pointsBalance',
    rewardsBalance: 'rewardsBalance'
  };

  export type LoyaltyAccountScalarFieldEnum = (typeof LoyaltyAccountScalarFieldEnum)[keyof typeof LoyaltyAccountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ImportJobWhereInput = {
    AND?: ImportJobWhereInput | ImportJobWhereInput[]
    OR?: ImportJobWhereInput[]
    NOT?: ImportJobWhereInput | ImportJobWhereInput[]
    id?: StringFilter<"ImportJob"> | string
    filename?: StringFilter<"ImportJob"> | string
    status?: StringFilter<"ImportJob"> | string
    log?: JsonNullableFilter<"ImportJob">
    createdAt?: DateTimeFilter<"ImportJob"> | Date | string
  }

  export type ImportJobOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    log?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ImportJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImportJobWhereInput | ImportJobWhereInput[]
    OR?: ImportJobWhereInput[]
    NOT?: ImportJobWhereInput | ImportJobWhereInput[]
    filename?: StringFilter<"ImportJob"> | string
    status?: StringFilter<"ImportJob"> | string
    log?: JsonNullableFilter<"ImportJob">
    createdAt?: DateTimeFilter<"ImportJob"> | Date | string
  }, "id">

  export type ImportJobOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    log?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ImportJobCountOrderByAggregateInput
    _max?: ImportJobMaxOrderByAggregateInput
    _min?: ImportJobMinOrderByAggregateInput
  }

  export type ImportJobScalarWhereWithAggregatesInput = {
    AND?: ImportJobScalarWhereWithAggregatesInput | ImportJobScalarWhereWithAggregatesInput[]
    OR?: ImportJobScalarWhereWithAggregatesInput[]
    NOT?: ImportJobScalarWhereWithAggregatesInput | ImportJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImportJob"> | string
    filename?: StringWithAggregatesFilter<"ImportJob"> | string
    status?: StringWithAggregatesFilter<"ImportJob"> | string
    log?: JsonNullableWithAggregatesFilter<"ImportJob">
    createdAt?: DateTimeWithAggregatesFilter<"ImportJob"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    fullName?: StringNullableFilter<"Guest"> | string | null
    normalizedName?: StringNullableFilter<"Guest"> | string | null
    email?: StringNullableFilter<"Guest"> | string | null
    phone?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    appointments?: AppointmentListRelationFilter
    creditProfile?: XOR<CreditProfileNullableScalarRelationFilter, CreditProfileWhereInput> | null
    loyaltyAccounts?: LoyaltyAccountListRelationFilter
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    normalizedName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    creditProfile?: CreditProfileOrderByWithRelationInput
    loyaltyAccounts?: LoyaltyAccountOrderByRelationAggregateInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    fullName?: StringNullableFilter<"Guest"> | string | null
    normalizedName?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    appointments?: AppointmentListRelationFilter
    creditProfile?: XOR<CreditProfileNullableScalarRelationFilter, CreditProfileWhereInput> | null
    loyaltyAccounts?: LoyaltyAccountListRelationFilter
  }, "id" | "email" | "phone">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    normalizedName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    fullName?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    normalizedName?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    email?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    guestId?: StringFilter<"Appointment"> | string
    serviceName?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    rawId?: StringNullableFilter<"Appointment"> | string | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    serviceName?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrderInput | SortOrder
    rawId?: SortOrderInput | SortOrder
    guest?: GuestOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rawId?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    guestId?: StringFilter<"Appointment"> | string
    serviceName?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id" | "rawId">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    serviceName?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrderInput | SortOrder
    rawId?: SortOrderInput | SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    guestId?: StringWithAggregatesFilter<"Appointment"> | string
    serviceName?: StringWithAggregatesFilter<"Appointment"> | string
    appointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    rawId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
  }

  export type CreditProfileWhereInput = {
    AND?: CreditProfileWhereInput | CreditProfileWhereInput[]
    OR?: CreditProfileWhereInput[]
    NOT?: CreditProfileWhereInput | CreditProfileWhereInput[]
    id?: StringFilter<"CreditProfile"> | string
    guestId?: StringFilter<"CreditProfile"> | string
    provider?: StringFilter<"CreditProfile"> | string
    approvedAmount?: FloatNullableFilter<"CreditProfile"> | number | null
    expirationDate?: DateTimeNullableFilter<"CreditProfile"> | Date | string | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type CreditProfileOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    provider?: SortOrder
    approvedAmount?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    guest?: GuestOrderByWithRelationInput
  }

  export type CreditProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guestId?: string
    AND?: CreditProfileWhereInput | CreditProfileWhereInput[]
    OR?: CreditProfileWhereInput[]
    NOT?: CreditProfileWhereInput | CreditProfileWhereInput[]
    provider?: StringFilter<"CreditProfile"> | string
    approvedAmount?: FloatNullableFilter<"CreditProfile"> | number | null
    expirationDate?: DateTimeNullableFilter<"CreditProfile"> | Date | string | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id" | "guestId">

  export type CreditProfileOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    provider?: SortOrder
    approvedAmount?: SortOrderInput | SortOrder
    expirationDate?: SortOrderInput | SortOrder
    _count?: CreditProfileCountOrderByAggregateInput
    _avg?: CreditProfileAvgOrderByAggregateInput
    _max?: CreditProfileMaxOrderByAggregateInput
    _min?: CreditProfileMinOrderByAggregateInput
    _sum?: CreditProfileSumOrderByAggregateInput
  }

  export type CreditProfileScalarWhereWithAggregatesInput = {
    AND?: CreditProfileScalarWhereWithAggregatesInput | CreditProfileScalarWhereWithAggregatesInput[]
    OR?: CreditProfileScalarWhereWithAggregatesInput[]
    NOT?: CreditProfileScalarWhereWithAggregatesInput | CreditProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditProfile"> | string
    guestId?: StringWithAggregatesFilter<"CreditProfile"> | string
    provider?: StringWithAggregatesFilter<"CreditProfile"> | string
    approvedAmount?: FloatNullableWithAggregatesFilter<"CreditProfile"> | number | null
    expirationDate?: DateTimeNullableWithAggregatesFilter<"CreditProfile"> | Date | string | null
  }

  export type LoyaltyAccountWhereInput = {
    AND?: LoyaltyAccountWhereInput | LoyaltyAccountWhereInput[]
    OR?: LoyaltyAccountWhereInput[]
    NOT?: LoyaltyAccountWhereInput | LoyaltyAccountWhereInput[]
    id?: StringFilter<"LoyaltyAccount"> | string
    guestId?: StringFilter<"LoyaltyAccount"> | string
    programName?: StringFilter<"LoyaltyAccount"> | string
    pointsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
    rewardsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }

  export type LoyaltyAccountOrderByWithRelationInput = {
    id?: SortOrder
    guestId?: SortOrder
    programName?: SortOrder
    pointsBalance?: SortOrderInput | SortOrder
    rewardsBalance?: SortOrderInput | SortOrder
    guest?: GuestOrderByWithRelationInput
  }

  export type LoyaltyAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoyaltyAccountWhereInput | LoyaltyAccountWhereInput[]
    OR?: LoyaltyAccountWhereInput[]
    NOT?: LoyaltyAccountWhereInput | LoyaltyAccountWhereInput[]
    guestId?: StringFilter<"LoyaltyAccount"> | string
    programName?: StringFilter<"LoyaltyAccount"> | string
    pointsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
    rewardsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
    guest?: XOR<GuestScalarRelationFilter, GuestWhereInput>
  }, "id">

  export type LoyaltyAccountOrderByWithAggregationInput = {
    id?: SortOrder
    guestId?: SortOrder
    programName?: SortOrder
    pointsBalance?: SortOrderInput | SortOrder
    rewardsBalance?: SortOrderInput | SortOrder
    _count?: LoyaltyAccountCountOrderByAggregateInput
    _avg?: LoyaltyAccountAvgOrderByAggregateInput
    _max?: LoyaltyAccountMaxOrderByAggregateInput
    _min?: LoyaltyAccountMinOrderByAggregateInput
    _sum?: LoyaltyAccountSumOrderByAggregateInput
  }

  export type LoyaltyAccountScalarWhereWithAggregatesInput = {
    AND?: LoyaltyAccountScalarWhereWithAggregatesInput | LoyaltyAccountScalarWhereWithAggregatesInput[]
    OR?: LoyaltyAccountScalarWhereWithAggregatesInput[]
    NOT?: LoyaltyAccountScalarWhereWithAggregatesInput | LoyaltyAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoyaltyAccount"> | string
    guestId?: StringWithAggregatesFilter<"LoyaltyAccount"> | string
    programName?: StringWithAggregatesFilter<"LoyaltyAccount"> | string
    pointsBalance?: FloatNullableWithAggregatesFilter<"LoyaltyAccount"> | number | null
    rewardsBalance?: FloatNullableWithAggregatesFilter<"LoyaltyAccount"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobCreateInput = {
    id?: string
    filename: string
    status: string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ImportJobUncheckedCreateInput = {
    id?: string
    filename: string
    status: string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ImportJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobCreateManyInput = {
    id?: string
    filename: string
    status: string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ImportJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImportJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    log?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutGuestInput
    creditProfile?: CreditProfileCreateNestedOneWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGuestInput
    creditProfile?: CreditProfileUncheckedCreateNestedOneWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutGuestNestedInput
    creditProfile?: CreditProfileUpdateOneWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutGuestNestedInput
    creditProfile?: CreditProfileUncheckedUpdateOneWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateManyInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
    guest: GuestCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    guestId: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
    guest?: GuestUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyInput = {
    id?: string
    guestId: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CreditProfileCreateInput = {
    id?: string
    provider?: string
    approvedAmount?: number | null
    expirationDate?: Date | string | null
    guest: GuestCreateNestedOneWithoutCreditProfileInput
  }

  export type CreditProfileUncheckedCreateInput = {
    id?: string
    guestId: string
    provider?: string
    approvedAmount?: number | null
    expirationDate?: Date | string | null
  }

  export type CreditProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guest?: GuestUpdateOneRequiredWithoutCreditProfileNestedInput
  }

  export type CreditProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreditProfileCreateManyInput = {
    id?: string
    guestId: string
    provider?: string
    approvedAmount?: number | null
    expirationDate?: Date | string | null
  }

  export type CreditProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreditProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoyaltyAccountCreateInput = {
    id?: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
    guest: GuestCreateNestedOneWithoutLoyaltyAccountsInput
  }

  export type LoyaltyAccountUncheckedCreateInput = {
    id?: string
    guestId: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
  }

  export type LoyaltyAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    guest?: GuestUpdateOneRequiredWithoutLoyaltyAccountsNestedInput
  }

  export type LoyaltyAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LoyaltyAccountCreateManyInput = {
    id?: string
    guestId: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
  }

  export type LoyaltyAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LoyaltyAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImportJobCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    log?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportJobMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ImportJobMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type CreditProfileNullableScalarRelationFilter = {
    is?: CreditProfileWhereInput | null
    isNot?: CreditProfileWhereInput | null
  }

  export type LoyaltyAccountListRelationFilter = {
    every?: LoyaltyAccountWhereInput
    some?: LoyaltyAccountWhereInput
    none?: LoyaltyAccountWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoyaltyAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    normalizedName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    normalizedName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    normalizedName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GuestScalarRelationFilter = {
    is?: GuestWhereInput
    isNot?: GuestWhereInput
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    serviceName?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    rawId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    serviceName?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    rawId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    serviceName?: SortOrder
    appointmentDate?: SortOrder
    status?: SortOrder
    rawId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CreditProfileCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    provider?: SortOrder
    approvedAmount?: SortOrder
    expirationDate?: SortOrder
  }

  export type CreditProfileAvgOrderByAggregateInput = {
    approvedAmount?: SortOrder
  }

  export type CreditProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    provider?: SortOrder
    approvedAmount?: SortOrder
    expirationDate?: SortOrder
  }

  export type CreditProfileMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    provider?: SortOrder
    approvedAmount?: SortOrder
    expirationDate?: SortOrder
  }

  export type CreditProfileSumOrderByAggregateInput = {
    approvedAmount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LoyaltyAccountCountOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    programName?: SortOrder
    pointsBalance?: SortOrder
    rewardsBalance?: SortOrder
  }

  export type LoyaltyAccountAvgOrderByAggregateInput = {
    pointsBalance?: SortOrder
    rewardsBalance?: SortOrder
  }

  export type LoyaltyAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    programName?: SortOrder
    pointsBalance?: SortOrder
    rewardsBalance?: SortOrder
  }

  export type LoyaltyAccountMinOrderByAggregateInput = {
    id?: SortOrder
    guestId?: SortOrder
    programName?: SortOrder
    pointsBalance?: SortOrder
    rewardsBalance?: SortOrder
  }

  export type LoyaltyAccountSumOrderByAggregateInput = {
    pointsBalance?: SortOrder
    rewardsBalance?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentCreateNestedManyWithoutGuestInput = {
    create?: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput> | AppointmentCreateWithoutGuestInput[] | AppointmentUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestInput | AppointmentCreateOrConnectWithoutGuestInput[]
    createMany?: AppointmentCreateManyGuestInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CreditProfileCreateNestedOneWithoutGuestInput = {
    create?: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
    connectOrCreate?: CreditProfileCreateOrConnectWithoutGuestInput
    connect?: CreditProfileWhereUniqueInput
  }

  export type LoyaltyAccountCreateNestedManyWithoutGuestInput = {
    create?: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput> | LoyaltyAccountCreateWithoutGuestInput[] | LoyaltyAccountUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: LoyaltyAccountCreateOrConnectWithoutGuestInput | LoyaltyAccountCreateOrConnectWithoutGuestInput[]
    createMany?: LoyaltyAccountCreateManyGuestInputEnvelope
    connect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput> | AppointmentCreateWithoutGuestInput[] | AppointmentUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestInput | AppointmentCreateOrConnectWithoutGuestInput[]
    createMany?: AppointmentCreateManyGuestInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type CreditProfileUncheckedCreateNestedOneWithoutGuestInput = {
    create?: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
    connectOrCreate?: CreditProfileCreateOrConnectWithoutGuestInput
    connect?: CreditProfileWhereUniqueInput
  }

  export type LoyaltyAccountUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput> | LoyaltyAccountCreateWithoutGuestInput[] | LoyaltyAccountUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: LoyaltyAccountCreateOrConnectWithoutGuestInput | LoyaltyAccountCreateOrConnectWithoutGuestInput[]
    createMany?: LoyaltyAccountCreateManyGuestInputEnvelope
    connect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AppointmentUpdateManyWithoutGuestNestedInput = {
    create?: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput> | AppointmentCreateWithoutGuestInput[] | AppointmentUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestInput | AppointmentCreateOrConnectWithoutGuestInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGuestInput | AppointmentUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: AppointmentCreateManyGuestInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGuestInput | AppointmentUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGuestInput | AppointmentUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CreditProfileUpdateOneWithoutGuestNestedInput = {
    create?: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
    connectOrCreate?: CreditProfileCreateOrConnectWithoutGuestInput
    upsert?: CreditProfileUpsertWithoutGuestInput
    disconnect?: CreditProfileWhereInput | boolean
    delete?: CreditProfileWhereInput | boolean
    connect?: CreditProfileWhereUniqueInput
    update?: XOR<XOR<CreditProfileUpdateToOneWithWhereWithoutGuestInput, CreditProfileUpdateWithoutGuestInput>, CreditProfileUncheckedUpdateWithoutGuestInput>
  }

  export type LoyaltyAccountUpdateManyWithoutGuestNestedInput = {
    create?: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput> | LoyaltyAccountCreateWithoutGuestInput[] | LoyaltyAccountUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: LoyaltyAccountCreateOrConnectWithoutGuestInput | LoyaltyAccountCreateOrConnectWithoutGuestInput[]
    upsert?: LoyaltyAccountUpsertWithWhereUniqueWithoutGuestInput | LoyaltyAccountUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: LoyaltyAccountCreateManyGuestInputEnvelope
    set?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    disconnect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    delete?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    connect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    update?: LoyaltyAccountUpdateWithWhereUniqueWithoutGuestInput | LoyaltyAccountUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: LoyaltyAccountUpdateManyWithWhereWithoutGuestInput | LoyaltyAccountUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: LoyaltyAccountScalarWhereInput | LoyaltyAccountScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput> | AppointmentCreateWithoutGuestInput[] | AppointmentUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutGuestInput | AppointmentCreateOrConnectWithoutGuestInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutGuestInput | AppointmentUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: AppointmentCreateManyGuestInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutGuestInput | AppointmentUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutGuestInput | AppointmentUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type CreditProfileUncheckedUpdateOneWithoutGuestNestedInput = {
    create?: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
    connectOrCreate?: CreditProfileCreateOrConnectWithoutGuestInput
    upsert?: CreditProfileUpsertWithoutGuestInput
    disconnect?: CreditProfileWhereInput | boolean
    delete?: CreditProfileWhereInput | boolean
    connect?: CreditProfileWhereUniqueInput
    update?: XOR<XOR<CreditProfileUpdateToOneWithWhereWithoutGuestInput, CreditProfileUpdateWithoutGuestInput>, CreditProfileUncheckedUpdateWithoutGuestInput>
  }

  export type LoyaltyAccountUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput> | LoyaltyAccountCreateWithoutGuestInput[] | LoyaltyAccountUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: LoyaltyAccountCreateOrConnectWithoutGuestInput | LoyaltyAccountCreateOrConnectWithoutGuestInput[]
    upsert?: LoyaltyAccountUpsertWithWhereUniqueWithoutGuestInput | LoyaltyAccountUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: LoyaltyAccountCreateManyGuestInputEnvelope
    set?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    disconnect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    delete?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    connect?: LoyaltyAccountWhereUniqueInput | LoyaltyAccountWhereUniqueInput[]
    update?: LoyaltyAccountUpdateWithWhereUniqueWithoutGuestInput | LoyaltyAccountUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: LoyaltyAccountUpdateManyWithWhereWithoutGuestInput | LoyaltyAccountUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: LoyaltyAccountScalarWhereInput | LoyaltyAccountScalarWhereInput[]
  }

  export type GuestCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<GuestCreateWithoutAppointmentsInput, GuestUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutAppointmentsInput
    connect?: GuestWhereUniqueInput
  }

  export type GuestUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<GuestCreateWithoutAppointmentsInput, GuestUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutAppointmentsInput
    upsert?: GuestUpsertWithoutAppointmentsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutAppointmentsInput, GuestUpdateWithoutAppointmentsInput>, GuestUncheckedUpdateWithoutAppointmentsInput>
  }

  export type GuestCreateNestedOneWithoutCreditProfileInput = {
    create?: XOR<GuestCreateWithoutCreditProfileInput, GuestUncheckedCreateWithoutCreditProfileInput>
    connectOrCreate?: GuestCreateOrConnectWithoutCreditProfileInput
    connect?: GuestWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GuestUpdateOneRequiredWithoutCreditProfileNestedInput = {
    create?: XOR<GuestCreateWithoutCreditProfileInput, GuestUncheckedCreateWithoutCreditProfileInput>
    connectOrCreate?: GuestCreateOrConnectWithoutCreditProfileInput
    upsert?: GuestUpsertWithoutCreditProfileInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutCreditProfileInput, GuestUpdateWithoutCreditProfileInput>, GuestUncheckedUpdateWithoutCreditProfileInput>
  }

  export type GuestCreateNestedOneWithoutLoyaltyAccountsInput = {
    create?: XOR<GuestCreateWithoutLoyaltyAccountsInput, GuestUncheckedCreateWithoutLoyaltyAccountsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutLoyaltyAccountsInput
    connect?: GuestWhereUniqueInput
  }

  export type GuestUpdateOneRequiredWithoutLoyaltyAccountsNestedInput = {
    create?: XOR<GuestCreateWithoutLoyaltyAccountsInput, GuestUncheckedCreateWithoutLoyaltyAccountsInput>
    connectOrCreate?: GuestCreateOrConnectWithoutLoyaltyAccountsInput
    upsert?: GuestUpsertWithoutLoyaltyAccountsInput
    connect?: GuestWhereUniqueInput
    update?: XOR<XOR<GuestUpdateToOneWithWhereWithoutLoyaltyAccountsInput, GuestUpdateWithoutLoyaltyAccountsInput>, GuestUncheckedUpdateWithoutLoyaltyAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutGuestInput = {
    id?: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
  }

  export type AppointmentUncheckedCreateWithoutGuestInput = {
    id?: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
  }

  export type AppointmentCreateOrConnectWithoutGuestInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput>
  }

  export type AppointmentCreateManyGuestInputEnvelope = {
    data: AppointmentCreateManyGuestInput | AppointmentCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type CreditProfileCreateWithoutGuestInput = {
    id?: string
    provider?: string
    approvedAmount?: number | null
    expirationDate?: Date | string | null
  }

  export type CreditProfileUncheckedCreateWithoutGuestInput = {
    id?: string
    provider?: string
    approvedAmount?: number | null
    expirationDate?: Date | string | null
  }

  export type CreditProfileCreateOrConnectWithoutGuestInput = {
    where: CreditProfileWhereUniqueInput
    create: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
  }

  export type LoyaltyAccountCreateWithoutGuestInput = {
    id?: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
  }

  export type LoyaltyAccountUncheckedCreateWithoutGuestInput = {
    id?: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
  }

  export type LoyaltyAccountCreateOrConnectWithoutGuestInput = {
    where: LoyaltyAccountWhereUniqueInput
    create: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput>
  }

  export type LoyaltyAccountCreateManyGuestInputEnvelope = {
    data: LoyaltyAccountCreateManyGuestInput | LoyaltyAccountCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutGuestInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutGuestInput, AppointmentUncheckedUpdateWithoutGuestInput>
    create: XOR<AppointmentCreateWithoutGuestInput, AppointmentUncheckedCreateWithoutGuestInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutGuestInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutGuestInput, AppointmentUncheckedUpdateWithoutGuestInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutGuestInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutGuestInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    guestId?: StringFilter<"Appointment"> | string
    serviceName?: StringFilter<"Appointment"> | string
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    status?: StringNullableFilter<"Appointment"> | string | null
    rawId?: StringNullableFilter<"Appointment"> | string | null
  }

  export type CreditProfileUpsertWithoutGuestInput = {
    update: XOR<CreditProfileUpdateWithoutGuestInput, CreditProfileUncheckedUpdateWithoutGuestInput>
    create: XOR<CreditProfileCreateWithoutGuestInput, CreditProfileUncheckedCreateWithoutGuestInput>
    where?: CreditProfileWhereInput
  }

  export type CreditProfileUpdateToOneWithWhereWithoutGuestInput = {
    where?: CreditProfileWhereInput
    data: XOR<CreditProfileUpdateWithoutGuestInput, CreditProfileUncheckedUpdateWithoutGuestInput>
  }

  export type CreditProfileUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreditProfileUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LoyaltyAccountUpsertWithWhereUniqueWithoutGuestInput = {
    where: LoyaltyAccountWhereUniqueInput
    update: XOR<LoyaltyAccountUpdateWithoutGuestInput, LoyaltyAccountUncheckedUpdateWithoutGuestInput>
    create: XOR<LoyaltyAccountCreateWithoutGuestInput, LoyaltyAccountUncheckedCreateWithoutGuestInput>
  }

  export type LoyaltyAccountUpdateWithWhereUniqueWithoutGuestInput = {
    where: LoyaltyAccountWhereUniqueInput
    data: XOR<LoyaltyAccountUpdateWithoutGuestInput, LoyaltyAccountUncheckedUpdateWithoutGuestInput>
  }

  export type LoyaltyAccountUpdateManyWithWhereWithoutGuestInput = {
    where: LoyaltyAccountScalarWhereInput
    data: XOR<LoyaltyAccountUpdateManyMutationInput, LoyaltyAccountUncheckedUpdateManyWithoutGuestInput>
  }

  export type LoyaltyAccountScalarWhereInput = {
    AND?: LoyaltyAccountScalarWhereInput | LoyaltyAccountScalarWhereInput[]
    OR?: LoyaltyAccountScalarWhereInput[]
    NOT?: LoyaltyAccountScalarWhereInput | LoyaltyAccountScalarWhereInput[]
    id?: StringFilter<"LoyaltyAccount"> | string
    guestId?: StringFilter<"LoyaltyAccount"> | string
    programName?: StringFilter<"LoyaltyAccount"> | string
    pointsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
    rewardsBalance?: FloatNullableFilter<"LoyaltyAccount"> | number | null
  }

  export type GuestCreateWithoutAppointmentsInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditProfile?: CreditProfileCreateNestedOneWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creditProfile?: CreditProfileUncheckedCreateNestedOneWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutAppointmentsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutAppointmentsInput, GuestUncheckedCreateWithoutAppointmentsInput>
  }

  export type GuestUpsertWithoutAppointmentsInput = {
    update: XOR<GuestUpdateWithoutAppointmentsInput, GuestUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<GuestCreateWithoutAppointmentsInput, GuestUncheckedCreateWithoutAppointmentsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutAppointmentsInput, GuestUncheckedUpdateWithoutAppointmentsInput>
  }

  export type GuestUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditProfile?: CreditProfileUpdateOneWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditProfile?: CreditProfileUncheckedUpdateOneWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateWithoutCreditProfileInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountCreateNestedManyWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutCreditProfileInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGuestInput
    loyaltyAccounts?: LoyaltyAccountUncheckedCreateNestedManyWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutCreditProfileInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutCreditProfileInput, GuestUncheckedCreateWithoutCreditProfileInput>
  }

  export type GuestUpsertWithoutCreditProfileInput = {
    update: XOR<GuestUpdateWithoutCreditProfileInput, GuestUncheckedUpdateWithoutCreditProfileInput>
    create: XOR<GuestCreateWithoutCreditProfileInput, GuestUncheckedCreateWithoutCreditProfileInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutCreditProfileInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutCreditProfileInput, GuestUncheckedUpdateWithoutCreditProfileInput>
  }

  export type GuestUpdateWithoutCreditProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUpdateManyWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutCreditProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutGuestNestedInput
    loyaltyAccounts?: LoyaltyAccountUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type GuestCreateWithoutLoyaltyAccountsInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutGuestInput
    creditProfile?: CreditProfileCreateNestedOneWithoutGuestInput
  }

  export type GuestUncheckedCreateWithoutLoyaltyAccountsInput = {
    id?: string
    fullName?: string | null
    normalizedName?: string | null
    email?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutGuestInput
    creditProfile?: CreditProfileUncheckedCreateNestedOneWithoutGuestInput
  }

  export type GuestCreateOrConnectWithoutLoyaltyAccountsInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutLoyaltyAccountsInput, GuestUncheckedCreateWithoutLoyaltyAccountsInput>
  }

  export type GuestUpsertWithoutLoyaltyAccountsInput = {
    update: XOR<GuestUpdateWithoutLoyaltyAccountsInput, GuestUncheckedUpdateWithoutLoyaltyAccountsInput>
    create: XOR<GuestCreateWithoutLoyaltyAccountsInput, GuestUncheckedCreateWithoutLoyaltyAccountsInput>
    where?: GuestWhereInput
  }

  export type GuestUpdateToOneWithWhereWithoutLoyaltyAccountsInput = {
    where?: GuestWhereInput
    data: XOR<GuestUpdateWithoutLoyaltyAccountsInput, GuestUncheckedUpdateWithoutLoyaltyAccountsInput>
  }

  export type GuestUpdateWithoutLoyaltyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutGuestNestedInput
    creditProfile?: CreditProfileUpdateOneWithoutGuestNestedInput
  }

  export type GuestUncheckedUpdateWithoutLoyaltyAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    normalizedName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutGuestNestedInput
    creditProfile?: CreditProfileUncheckedUpdateOneWithoutGuestNestedInput
  }

  export type AppointmentCreateManyGuestInput = {
    id?: string
    serviceName: string
    appointmentDate: Date | string
    status?: string | null
    rawId?: string | null
  }

  export type LoyaltyAccountCreateManyGuestInput = {
    id?: string
    programName: string
    pointsBalance?: number | null
    rewardsBalance?: number | null
  }

  export type AppointmentUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceName?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    rawId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoyaltyAccountUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LoyaltyAccountUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LoyaltyAccountUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    programName?: StringFieldUpdateOperationsInput | string
    pointsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
    rewardsBalance?: NullableFloatFieldUpdateOperationsInput | number | null
  }



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