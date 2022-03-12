// 用来描述对象形状和结构(规范对象结构) interface
// interface 可以被类实现和继承
// type 可以使用联合类型

/* --------------------------------- 描述对象 --------------------------------- */
;(function () {
  interface ISchool {
    readonly name: string // 只读
    age: number // 后面的逗号可以不写 也可以是分号等
    address?: string // ? 表示这个属性可选
  }

  const school: ISchool = {
    name: '小红',
    age: 123
  }
})

/* --------------------------------- 描述函数 --------------------------------- */
;(function () {
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
})

/* --------------------------------- 接口合并 --------------------------------- */
/* 
- 同名的接口会进行合并(已有不能覆盖 没有的添加)
*/
;(function () {
  interface IVegettables {
    state: string
    color: string
  }

  interface IVegettables {
    size: number
  }
})

/* --------------------------------- 接口可扩展 --------------------------------- */
;(function () {
  interface ISchool {
    type: string
    [key: string]: any // 可以添加多个任意属性
  }
})

/* --------------------------------- 接口继承 --------------------------------- */
;(function () {
  interface ISchool {
    name: string
    age: number
  }
  interface IMySchool extends ISchool {
    type: string
  }

  const school: ISchool = {
    name: '小红',
    age: 123
  }
  const mySchool: IMySchool = {
    ...school,
    type: 'ceshi'
  }
})

/* --------------------------------- 接口断言 --------------------------------- */
/* 
- 多的可以断言成少的
*/
;(function () {
  interface ISchool {
    name: string
    age: number
  }

  const school: ISchool = {
    name: '小红',
    age: 123,
    lesson: '语文'
  } as ISchool
})

/* --------------------------------- 额外的类型检查 --------------------------------- */
;(function () {
  interface I {
    name: string
  }

  const fn = (data: I) => {}
  const obj = { name: 'wyb', age: 18 }

  // fn({ name: 'wyb', age: 18 }) // 类型“{ name: string; age: number; }”的参数不能赋给类型“I”的参数
  fn(obj) // 成立 因为obj不会经过额外属性检查 只要有 I 中的属性即可
})
