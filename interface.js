declare module 'a-sweet-lib' {
  declare function compose(...fs: Array<(x: any) => any>): (x: any) => any
}
