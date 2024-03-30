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

// 函数 参数个数兼容性(少的可以赋给多的)
let sum1 = (a: string, b: string): string => a + b
let sum2 = (a: string): string => a
sum1 = sum2
// 函数 返回值兼容性(多的可以赋给少的)
type sum3 = (a: string, b: string) => { name: string }
type sum4 = (a: string) => { name: string; age: number }
let s3!: sum3
let s4!: sum4
s3 = s4

// 参数是逆变可以传父类 函数的返回值是协变 可以传子类

class Parent {
  money!: string
}

class Child extends Parent {
  house!: string
}

class Grandson extends Child {
  eat!: string
}

function getFn(cb: (person: Child) => Child) {}

getFn((person: Parent) => new Child())
getFn((person: Parent) => new Grandson())

/* --------------------------------- as const --------------------------------- */
;(function () {
  const list = [1, 2, 3] as const
  // list[0] = 0 // 无法分配到 "0" ，因为它是只读属性
})()

/* --------------------------------- readonly --------------------------------- */
/* 
定义：只能对数组和元组使用
*/
;(function () {
  //
  // 1.数组
  const list: readonly number[] = [1, 2, 3]
  // list[0] = 0 // 类型“readonly number[]”中的索引签名仅允许读取
  // 2.元组
  const list1: readonly [number, string] = [1, '2']
  // list1.push(3) // 类型“readonly [number, string]”上不存在属性“push”
})

/* --------------------------------- keyof --------------------------------- */
/* 
定义：获取一个类或对象或一个而接口类型中的所有属性的联合类型
*/
;(function () {
  class Test {
    name!: string
    say() {}
  }
  type T0 = keyof Test // 虽然不显示 但是在用的时候会检查 ? 静态属性如何获取
  // let t: T0 = 'say1' // 类型“"say1"”不可分配给类型“keyof Test”

  type T1 = keyof { a: 1; b: 2 } // "a" | "b"
  type T2 = keyof string // string的所有属性
  type T3 = keyof any // string | number | symbol
})

/* --------------------------------- infer --------------------------------- */
/*
1.定义：只能在extends语句中使用 后面跟一个泛型 表示声明一个类型
2.出现的位置
  - 1.函数的参数类型位置上
  - 2.函数的返回值类型位置上
  - 3.泛型具体化类型上
*/
;(function () {
  // 示例1：表达式成立就会返回参数类型 否则就会返回传入的类型
  type T1 = (name: string) => string
  type inferType1<T> = T extends (params: infer P) => any ? P : T // type r1 = string
  // type inferType<T> = T extends (params: infer P) => number ? P : T // ype r1 = (name: string) => string
  type r1 = inferType1<T1>

  // 示例2：表达式成立就会返回参数类型 否则就会返回传入的类型
  type T2 = (name: string) => string
  type inferType2<T> = T extends (params: any) => infer P ? P : T
  type r2 = inferType2<T2>

  // 示例3：
  type T3<T> = T extends Set<infer P> ? P : T
  type r3 = T3<Set<string>>
  // type r3 = T3<number>
})

/* --------------------------------- typeof --------------------------------- */
;(function () {
  const age: number = 13
  type P = typeof age // number 获取类型
})

/* --------------------------------- 三斜线指令 --------------------------------- */
/* 
- 类似于在声明文件中引入其他声明文件(只能放在最上面)
  - 例如: /// <reference types="vite/client" />
*/
;(function () {})

export {}
