/* 修饰符
  public 修饰的属性或方法是公有地，默认
  private 修饰的属性或方法是私有的 只能在自己中访问 (不能实例化 也不能继承)
  protected 修饰的属性或方法是受保护的 只能在自己或子类中访问 (能继承 但不能实例化)
  readonly 只读属性
  static 静态属性和方法只能通过类访问(内部可以互相访问)
*/

/* ---------------------------- 类的定义 --------------------------------- */
class Animal {
  name: string // 声明后会添加到this上 否则不能直接设置
  readonly age: number // 除了在constructor中 其他地方不能修改
  height!: number // 如果不需要初始化就这样 或者设置默认值
  constructor(name: string, age: number) {
    // 也可以不提前声明 直接这样写 constructor(public name: string, public age: number)
    this.name = name
    this.age = age
  }
  private run() {
    console.log(`${this.name} is running`)
  }
  protected cry() {
    this.run()
    console.log(`${this.name} is crying`)
  }
  static test = '123' // es7语法 Animal.test
  // es6 写法 功能一致
  static get test1() {
    return 123
  }
}
const snake = new Animal('snake', 18)

// snake.run()  // 属性“run”为私有属性，只能在类“Animal”中访问。
// snake.cry()  // 属性“cry”受保护，只能在类“Animal”及其子类中访问。
// snake.age = 20 // 无法分配到 "age" ，因为它是只读属性。

/* ---------------------------- 类的继承 --------------------------------- */
// super的用法：
// 1.在子类constructor中当作父类构造函数调用
// 2.在子类方法中获取父类的属性和方法 (super.run() 相当于 _Animal.prototype.run)

class Dog extends Animal {
  bark() {
    // super.run()
    super.cry()
    console.log(`${this.name} is barking`)
  }
}
const duoduo = new Dog('duoduo', 20)
duoduo.bark()

// 装饰器(类装饰器 属性装饰器(包括静态属性) 参数装饰器)
// 作用就是扩展类中的属性和方法
// 装饰器函数时从下往上执行

function add1(target: any) {
  console.log(1)
  target.prototype.eat = function () {
    // 需要在类上提前声明
    console.log('eat')
  }
}
function add2(value: number) {
  return function (target: any) {
    console.log(2)
  }
}

function toUpper(target: any, key: string) {
  // 因为这个调这个方法的时候 属性还并未赋值
  let value = ''
  Object.defineProperty(target, key, {
    get() {
      console.log('获取值')
      return value.toUpperCase()
    },
    set(newValue: string) {
      value = newValue
      console.log('设置值')
    }
  })
}

@add1
@add2(123)
class Person {
  eat!: () => void
  @toUpper
  public name: string = 'wyb'
}

const p1 = new Person()
p1.eat()
console.log(p1.name)

// 类实现接口
interface Radio {
  switchRadio(tigger: boolean): void
}
interface Battery {
  checkBatteryStatus(): void
}

class Car implements Radio {
  switchRadio(tigger: boolean) {}
}
// 一个类实现多个接口
class Cellphone implements Radio, Battery {
  switchRadio(tigger: boolean) {}
  checkBatteryStatus() {}
}

// 抽象类 不能被实例化(new)
abstract class Animal1 {
  abstract name: string // 没有具体实现 需要子类实现 且子类必须实现
  eat() {
    // 子类可以没有
    console.log('eat')
  }
}

/* ---------------------- 类方法重载 -------------------------  */
;(function () {
  class Parent {
    say(key: number): number
    say(key: string): string
    say(key) {
      return key
    }
  }
})

export {  }
