/* 单例设计模式
- 1.将构造器设计为私有的 不允许外部创建类的实例
- 2.至少提供一个静态属性或方法 用来获取实例
*/

class Parent {
  static instance

  private constructor() {}

  static getInstance() {
    if (!this.instance) this.instance = new Parent()
    return this.instance
  }
}

export {}
