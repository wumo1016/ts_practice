
function sum1(a: string, b: string): string {
  return a + b
}


// 类型别名
type test = string | number

sum1('a', 'b')
let sum2 = (a: number, b: number): test => {
  return 123
}

// 使用 interface 声明函数
interface sum3 {
  (a: number, b: number): number
}

