
// 冒号后面的都是类型

// 简单类型
const str: string = ''
const num: number = 1
const boolean: boolean = true
const n: null = null
const u: undefined = undefined
const array: any[] = []
const create = (obj: object) => { }

// 联合类型
let age: string | number = 2

// 数组 对象 函数
const arr: number[] = [1, 2, 3]

// 元组 值必须与定义的类型一一对应
const tuple: [string, number] = ['12', 123]

// 枚举
enum USER_ROLE {
  USER,
  MANAHGER,
  ADMIN
}


