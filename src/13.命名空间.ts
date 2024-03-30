/* 模块和命名空间
- 外部模块
- 内部模块

- 作用域
  - 只要文件中出现 import / export 就被认为是一个作用域
*/

// 直接当成一个对象即可

// 解决同一个文件的同名问题
// 两个重名的命名空间会合并 但是空间内如果有重名的变量则会报错
// namespace 可以无限嵌套
namespace Home {
  export class Dog {
    // 命名空间中的内容 需要导出
  }
}
const dog = new Home.Dog()

// 开发全部采用 import export
// 写声明文件的时候，如果模块是commonjs ， 或者想快速的导出一个值可以采用ts语法
// export  = 'abc'
// import x = require("xxxx")
// 使用时可以采用es模块的方式导入

export {}
