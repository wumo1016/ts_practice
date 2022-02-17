// 用来描述对象形状和结构(规范对象结构) interface
// interface 可以被类实现和继承
// type 可以使用联合类型

// 描述对象
interface school {
  readonly name: string // 只读
  age: number // 后面的逗号可以不写 也可以是分号等
  address?: string // ? 表示这个属性可选
}

const school1: school = {
  name: '小红',
  age: 123
}

// 描述函数
interface ICount {
  (): number
  speak(): number // 属性(函数)
  count: number // 属性
}

const fn: ICount = () => {
  return fn.count++
}
fn.count = 11
fn.speak = () => 0

// 接口合并 同名的接口会进行合并(已有不能覆盖 没有添加)
interface IVegettables {
  state: string
  color: string
}

interface IVegettables {
  size: number
}

// 接口可扩展
interface ImySchool {
  type: string
  [key: string]: any // 可以添加多个任意属性
}

// 接口可扩展 接口继承
interface mySchool extends school {
  type: string
}

const mySchool1: mySchool = {
  ...school1,
  type: 'ceshi'
}

// 接口断言
const school2: school = {
  name: '小红',
  age: 123,
  lesson: '语文'
} as school
