// union types 联合类型
let union: string | number

// 字符串字面量类型
type test3 = 'up' | 'down'
let data1: test3 = 'up'

// type inference 类型推论
let a = 123

// union types 联合类型
let b: string | number

// 交叉类型
interface IName {
  name: string
}
type IPerson1 = IName & { age: number }
let person1: IPerson1 = { name: '123', age: 123 }

// type assertion 类型断言
function getLength(data: string | number): number {
  const str = data as string
  if (str.length) {
    return str.length
  } else {
    return str.toString().length
  }
}
// type guard 类型守卫
function getLength1(data: string | number): number {
  if (typeof data === 'string') {
    return data.length
  } else {
    return data.toString().length
  }
}

// 类型别名
type test1 = string | number