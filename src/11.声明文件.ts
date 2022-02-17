// 当引入第三方包的时候 在ts中和使用会报错 这时候需要声明一下这个变量已经呗生命过了
// 单独的文件 以 .d.ts 结尾 例如： declare.d.ts

jQuery('123')

// 一般第三方库有已经写好的第三方声明库，秩序直接安装即可
// https://www.typescriptlang.org/dt/search?search= 可以搜索相应库的声明文件
// 例如 jquery 的 @types/jquery

// 有些库自带声明文件 比如 redux

// 文件都以 .d.ts 结尾
// 使用 declare 来声明变量 只是为了编译检查
// 使用 declare 声明的类型 可以在全局使用
/* 如果 declare 重名 */

let a: test123

// declare namespace Test1{
//   namespace fn{
//     function extend(): void
//   }
// }

// Test1.fn.extend

// 如果想给全局的接口新增功能 使用global
declare global {
  interface String {
    double(): string
  }
}

export {}
