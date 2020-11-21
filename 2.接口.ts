// 用来描述对象形状的 interface

interface school {
  readonly name: string, // 只读
  age: number,
  address?: string, // ? 表示这个属性可选
}

const school1: school = {
  name: '小红',
  age: 123,
}

// 接口可扩展
interface mySchool extends school {
  type: string,
  [key: string]: any // 可以添加多个任意属性
}

const mySchool1: mySchool = {
  ...school1,
  type: 'ceshi',
  a: 1,
  b: 2,
}

// 类型断言
const school2: school = {
  name: '小红',
  age: 123,
  lesson: '语文'
} as school
