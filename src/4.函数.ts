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
// 剩余运算符
function sum4(a: number, b?: number, ...args: any[]): number {
  // return a + b!
  return a + (b as number)
}

// 函数重载
// 根据函数参数的不同返回不同类型的结果
// number => number[]
// string => string[]

// 重载方法必须写在真实方法上面
function toArray(value:number): number[]
function toArray(value:string): string[]
function toArray(value: number | string){
  if(typeof value === 'string'){
    return value.split('')
  } else {
    return value.toString().split('').map(v => Number(v))
  }
}
let r = toArray('123456')
console.log(r)











export { }
