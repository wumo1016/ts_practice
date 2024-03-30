// 当引入第三方包的时候 在ts中和使用会报错 这时候需要声明一下这个变量已经呗生命过了
// 单独的文件 以 .d.ts 结尾 例如： declare.d.ts

// jQuery('123')

// 一般第三方库有已经写好的第三方声明库，秩序直接安装即可
// https://www.typescriptlang.org/dt/search?search= 可以搜索相应库的声明文件
// 例如 jquery 的 @types/jquery

// 有些库自带声明文件 比如 redux

// 文件都以 .d.ts 结尾
// 使用 declare 来声明变量 只是为了编译检查
// 使用 declare 声明的类型 可以在全局使用
/* 如果 declare 重名 */

// declare namespace Test1{
//   namespace fn{
//     function extend(): void
//   }
// }

// Test1.fn.extend

declare module 'mitt' {
  type PType = string | number | symbol
  type Listener = (...args: any[]) => void

  const on: (type: PType, listener: Listener) => void
  const emit: (type: PType, ...args: any[]) => void
}

declare module '*.jpg' {
  const str: string
  export default str
}

// 仅仅用于编译检查 并不会实现功能
// declare var jQuery: (selector: string) => any

// 模块声明
declare module '*.vue' // 引入.vue文件不报错
declare module 'jquery' {
  const name: string
  // export default $
  export = $ // 兼容commonjs
}
// import $ from 'jquery' // 使用

declare type test123 = 'string'

// type interface 可以不加declare 因为它们不是原生js语法 其他的不加则会报错

/* 如何查找第三方模块的(按照以下顺序查找)
- node_modules/xxx/package.json => types
- node_modules/xxx/index.d.ts
- node_modules/@types/index.d.ts
*/
