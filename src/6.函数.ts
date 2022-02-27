// 使用function声明
function sum1(a: string, b: string): string {
  return a + b
}
sum1('a', 'b')

// 使用表达式声明
let sum2 = (a: number, b: number): number => {
  return 123
}

// 指定函数类型
type type1 = (a: number, b: number) => number
let sum3: type1 = (a, b = 3) => {
  return 123
}

// 使用 interface 声明函数
interface sum3 {
  (a: number, b: number): number
}

// 可选参数 与 默认值不能一起使用
// 可选参数
function sum4(a: number, b?: number): number {
  // return a + b!
  return a + (b as number)
}

// rest参数
function sum5(a: number, ...args: any[]): number {
  return a
}

/* ---------------------- 函数重载 -------------------------  */
// 1.由一个实现签名+一个或多个重载签名合成
// 2.外部函数调用重载函数时，只能调用重载签名，实现签名下的函数体是给重载签名写的
// 3.参数默认值只能在实现签名中书写

// 根据函数参数的不同返回不同类型的结果
// number => number[]
// string => string[]

;(function () {
  function toArray(value: number): number
  function toArray(value: string): string
  function toArray(value: any) {
    if (typeof value === 'string') {
      return value
    } else {
      return value
    }
  }
  let r1 = toArray('123456')
  // console.log((<string>r1).length) // 没有函数重载时 直接转换成相应类型
  console.log(r1.length) // 如果没有函数重载 r1: number | string 将会报错
  let r2 = toArray(123)
  console.log(r2)
})

/* ---------------------- 构造函数 -------------------------  */
;(function () {
  // 构造函数类型
  type TypeConstructor = new (...arg) => any

  const func = () => {}
  class test {}
  // let t: TypeConstructor = func
  let t: TypeConstructor = test
})

export {}
