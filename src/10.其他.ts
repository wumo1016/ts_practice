
/* ----------------- 兼容性 -------------------- */
// 普通类型
type Mystr = { toString(): string } // 只要具有 toString 方法即可

let str1: Mystr = 1
let str2: Mystr = '123'

// 接口 多的可以赋给少的
interface I1 {
  name: string
}
interface I2 {
  name: string
  age: number
}

let i1: I1 = { name: 'wyb' }
let i2: I2 = { name: 'wyb', age: 456 }
i1 = i2
// i2 = i1 // 类型 "I1" 中缺少属性 "age"，但类型 "I2" 中需要该属性

// 函数 参数个数兼容性
let sum1 = (a: string, b: string): string => a + b
let sum2 = (a: string): string => a
sum1 = sum2
// 函数 返回值兼容性
type sum3 = (a: string, b: string) => { name: string }
type sum4 = (a: string) => { name: string, age: number }
sum1 = sum2

// 参数是逆变可以传父类 函数的返回值是协变可以传子类

class Parent {
  money!: string
}

class Child extends Parent {
  house!: string
}

class Grandson extends Child {
  eat!: string
}

function getFn(cb: (person: Child) => Child){

}

getFn((person: Parent) => new Child)
getFn((person: Parent) => new Grandson)
