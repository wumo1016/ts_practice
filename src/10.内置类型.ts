// global objects
const n1: Array<number> = [1, 2, 2]
const n2 = new Date()
const n3 = /abc/

// build-in object
Math.random()

// DOM and BOM
const n4 = document.body

// Utility Types
/* Partial 将所有参数变成可选类型 单层可选 */
interface IPerson {
  name: string
  age: number
}
type Partial1<T> = {
  // 自定义无限层可选
  [K in keyof T]?: T[K] extends object ? Partial1<T[K]> : T[K]
}
type IIPerson = Partial<IPerson>
let n6: IIPerson = {
  name: 'wyb'
}
/* Omit 将指定的属性删除 其他的不变 */
type IOmit = Omit<IPerson, 'name'>
let n7: IOmit = {
  age: 123
}

/* Required 将所有属性变成必填的 */
interface IPerson1 {
  name?: string
  age: number
}
type IIPerson1 = Required<IPerson1>
let n8: IIPerson1 = {
  name: 'wyb',
  age: 123
}

/* Readonly 将所有属性变成只读的 */

/* ---------------------- Exclude -------------------------  */
/* 
定义: 排除指定属性
*/
;(function () {
  type MyExclude = Exclude<string | number | boolean, boolean> // 
})()

/* ReturnType 获取返回的返回值类型 */
function getSchool(name: string, age: number) {
  return {
    name: 'wyb',
    age: 18
  }
}
// let s = getSchool()
// type MyType = typeof s
type MyType = ReturnType<typeof getSchool>

/* Parameters 获取所有参数类型 */
type MyP = Parameters<typeof getSchool>

/* Pick 包含有指定类型中的指定属性 */
interface IPerson2 {
  name: string
  age: number
}
type Mypick = Pick<IPerson2, 'name' | 'age'>

/* ---------------------- Extract -------------------------  */
/* 
定义: 第一个参数是否继承于第二个参数 如果是返回第一个参数 否则返回 never
*/
;(function () {
  // 实现
  type MyExtract<T, U> = T extends U ? T : never
  // 示例1：类 一般指子类在前父类在后成立 除非父子属性一致
  class P1 {
    name: string
  }
  class P2 extends P1 {
    age: number
  }
  type E1 = Extract<P2, P1> // P2

  // 示例2: 联合类型(比较的时候是一个一个比较的 符合就返回 相当于取交集)
  type E2 = Extract<string | object | number, string | number> // string | number

  // 示例2: 函数 参数和返回值都得是后面的子类型
  type func1 = (name: string, age: number) => string
  type func2 = (name: string) => string
  type E3 = Extract<func2, func1> // func2
})
