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
