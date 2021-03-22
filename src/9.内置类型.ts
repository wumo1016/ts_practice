import { type } from "node:os"

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
  name: string,
  age: number
}
type Partial1<T> = { // 自定义无限层可选
  [K in keyof T]?: T[K] extends object ? Partial1<T[K]> : T[K]
}
type IIPerson = Partial<IPerson>
let n6: IIPerson = {
  name: 'wyb',
}
/* Omit 将指定的属性删除 其他的不变 */
type IOmit = Omit<IPerson, 'name'>
let n7: IOmit = {
  age: 123,
}

/* Required 将所有属性变成必填的 */
interface IPerson1 {
  name?: string,
  age: number
}
type IIPerson1 = Required<IPerson1>
let n8: IIPerson1 = {
  name: 'wyb',
  age: 123
}

/* Readonly 将所有属性变成只读的 */

/* Exclude 排除指定属性 */
type MyExclude = Exclude<string | number | boolean, boolean>

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
  name: string,
  age: number
}
type Mypick = Pick<IPerson2, 'name' | 'age'>

/* Extract 排除共有的属性 */