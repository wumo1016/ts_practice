
function sum1(a: string, b: string): string {
  return a + b
}

// 类型别名
type test = string | number

sum1('a', 'b')
const sum2 = (a: number, b: number): test => {
  return 123
}

