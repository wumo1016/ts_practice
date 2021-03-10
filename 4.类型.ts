// type inference 类型推论
let a = 123

// union types 联合类型
let b: string | number

// type assertion 类型断言
function getLength(data: string | number): number {
  const str = data as string
  if(str.length){
    return str.length
  } else {
    return str.toString().length
  }
}
// type guard 类型守卫
function getLength1(data: string | number): number {
  if(typeof data === 'string'){
    return data.length
  } else {
    return data.toString().length
  }
}

// 类型别名
type test1 = string | number
