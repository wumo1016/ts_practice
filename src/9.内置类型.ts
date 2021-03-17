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
// Partial 将所有参数变成可选类型
interface IPerson {
  name: string,
  age: number
}

let n5: IPerson = {
  name: 'wyb',
  age: 18
}

type IIPerson = Partial<IPerson>
let n6: IIPerson = {
  name: 'wyb',
}
/* Omit 将指定的属性忽略 */
type IOmit = Omit<IPerson, 'name'>
let n7: IOmit = {
  age: 123,
}

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

