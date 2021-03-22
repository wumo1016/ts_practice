
// 解决同一个文件的同名问题
// 两个重名的命名空间会合并 但是空间内如果有重名的变量则会报错
// namespace 可以无限嵌套
namespace Home1 {
  export class Dog { // 命名空间中的内容 需要导出

  }
}

namespace Home2 {
  export class Dog {

  }
}

// commonjs可以使用 export = 123 使用require引入