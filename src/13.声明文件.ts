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
  interface String{
    double(): string
  }
}
 
export {}