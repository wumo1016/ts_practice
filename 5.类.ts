// 修饰符
/* 
  public 修饰的属性或方法是公有地，默认
  private 修饰的属性或方法是私有的
  protected 修饰的属性或方法是受保护的
  readonly 只读属性
*/

// 类的定义
class Animal {
  name: string
  readonly age: number
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  private run() {
    console.log(`${this.name} is running`)
  }
  protected cry(){
    console.log(`${this.name} is crying`)
  }
}

const snake = new Animal('snake', 18)
// snake.run()  属性“run”为私有属性，只能在类“Animal”中访问。
// snake.cry()  属性“cry”受保护，只能在类“Animal”及其子类中访问。
// snake.age = 20 无法分配到 "age" ，因为它是只读属性。

// 类的继承
class Dog extends Animal {
  bark(){
    // super.run()
    super.cry()
    console.log(`${this.name} is barking`)
  }
}
const duoduo = new Dog('duoduo', 20)
duoduo.bark()

// 类实现接口
interface Radio {
  switchRadio(tigger: boolean): void
}
interface Battery {
  checkBatteryStatus(): void
}

class Car implements Radio {
  switchRadio(tigger: boolean){

  }
}
// 一个类实现多个接口
class Cellphone implements Radio, Battery {
  switchRadio(tigger: boolean){

  }
  checkBatteryStatus(){

  }
}
