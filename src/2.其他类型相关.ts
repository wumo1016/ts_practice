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


// type inference 类型推论
let a = 123

// 交叉类型
interface IName {
  name: string
}
type IPerson1 = IName & { age: number }
let person1: IPerson1 = { name: '123', age: 123 }


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

export { }
