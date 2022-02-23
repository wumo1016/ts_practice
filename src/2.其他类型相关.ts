/* ----------------- union types 联合类型 ---------------- */

// 确定类型之前只能调用公共的方法
let union: string | number

/* ---------------------- 类型强转 -------------------------  */
// 强制转换为某个类型 但必须是联合类型中的一个
let test1: string | number | undefined
// console.log((<string>test1).indexOf('1'));

/* ---------------------- 字面量类型 -------------------------- */
type test2 = 'up' | 'down'
let data1: test2 = 'up'

/* ---------------------- 类型别名 type ---------------------------- */
type test3 = '1' | '2'
let test4: test3

/* ---------------------- type inference 类型推论 类型推断 ----------------------- */
let a = 123

/* -------------------------- 交叉类型 ------------------------------------ */
//  如果两个属性的类型不一样 则会变成 never 类型
interface IName {
  name: string
}
type IPerson1 = IName & { age: number }
let person1: IPerson1 = { name: '123', age: 123 }

/* ----------------------- type guard 类型守卫 --------------------------- */
// 产生的时机： 1.typeof 2.in 3.instanceof 4. == === != !===
function getLength1(data: string | number): number {
  if (typeof data === 'string') {
    return data.length
  } else {
    return data.toString().length
  }
}

class P1 {
  eat1() {}
}
class P2 {
  eat2() {}
}
function createClass(clazz: new () => P1 | P2) {
  const r = new clazz()
  if (r instanceof P1) {
    console.log(r.eat1)
  } else {
    console.log(r.eat2)
  }
  return r
}

/* ----------------------- 自定义类型守卫 --------------------------- */
;(function () {
  // const isString = (str: any) => typeof str === 'string' // 输出时没有提示
  const isString = (str: any): str is string => typeof str === 'string' // 当返回true的时候 str的类型就是string
  const obj = {
    name: 'wyb',
    getAge() {
      return 18
    }
  }
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (isString(value)) {
      console.log(value.length)
    }
  })
})

/* --------------------- is语法 -------------------------- */
//  用来定义自己的类型
function isString(val: any): val is string {
  // 判定就是字符串
  return Object.prototype.toString.call(val) === '[object String]'
}
let str = '1'
if (isString(str)) {
  console.log(str)
}

/* ------------------------ 条件类型 ---------------------------- */
interface Fish {
  name: string
  type: '鱼'
}
interface Bird {
  name: string
  type: '鸟'
}
interface Swiming {
  swiming: string
}
interface Sky {
  sky: string
}
type MyType<T> = T extends Bird ? Sky : Swiming // 如果传入的是联合类型 就会进行条件的分发
type IEnv = MyType<Bird>

export {}
