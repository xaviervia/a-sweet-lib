declare module 'a-sweet-lib' {
  declare function arity(n: number): (f: (...xs: Array<any>) => any) => (...xs: Array<any>) => any
  declare function compose(...fs: Array<(x: any) => any>): (x: any) => any
  declare function curry(f: (...xs: Array<any>) => any, arity: ?number): (x: any) => any
  declare function map(f: (x:any) => any): (x: any) => any
  declare function reduce(f: (x2:any, item: any, i: string | number, x: any) => any): (x: any) => any

  declare function identity<A>(x: A): A
  declare function always<A>(x: A): () => A
}
