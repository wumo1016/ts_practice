/* ---------------------- global objects -------------------------  */
;(function () {
  // global objects
  const n1 = new Date() // Date
  const n2 = /abc/ // RegExp

  // build-in object
  const n3 = Math // Math

  // DOM and BOM
  const n4 = document.body // HTMLElement
  const n5 = navigator // Navigator
})

/* ---------------------- Partial -------------------------  */
/* 
定义: 将所有参数变成可选类型 单层可选
*/
;(function () {
  // 示例1
  interface IPerson {
    name: string
    age: number
  }
  type P1 = Partial<IPerson>
})

/* ---------------------- Required -------------------------  */
/* 
定义: 将所有属性变成必填的
*/
;(function () {
  // 示例1
  interface IPerson {
    name?: string
    age: number
  }
  type IIPerson = Required<IPerson>
})

/* ---------------------- Readonly -------------------------  */
/* 
定义: 将所有属性变成只读的
*/
;(function () {
  // 示例1
  interface IPerson {
    name: string
    age: number
  }
  type IIPerson = Readonly<IPerson>
})

/* ---------------------- Omit -------------------------  */
/* 
定义: 删除指定的属性
*/
;(function () {
  // 示例1
  interface IPerson {
    name: string
    age: number
  }
  type IIPerson = Omit<IPerson, 'name'>
})

/* ---------------------- Exclude -------------------------  */
/* 
定义: 排除指定属性
*/
;(function () {
  type MyExclude = Exclude<string | number | boolean, boolean> //
})()

/* ---------------------- ReturnType -------------------------  */
/* 
定义: 获取返回的返回值类型
*/
;(function () {
  function getSchool(name: string, age: number) {
    return {
      name: 'wyb',
      age: 18
    }
  }
  // let s = getSchool()
  // type MyType = typeof s
  type MyType = ReturnType<typeof getSchool>
})()

/* ---------------------- Parameters -------------------------  */
/* 
定义: 获取所有参数类型
*/
;(function () {
  function getSchool(name: string, age: number) {
    return {
      name: 'wyb',
      age: 18
    }
  }
  type MyP = Parameters<typeof getSchool>
})()

/* ---------------------- Pick -------------------------  */
/* 
定义: 包含有指定类型中的指定属性
*/
;(function () {
  interface IPerson2 {
    name: string
    age: number
  }
  type Mypick = Pick<IPerson2, 'name' | 'age'>
})()

/* ---------------------- Extract -------------------------  */
/* 
定义: 第一个参数是否继承于第二个参数 如果是返回第一个参数 否则返回 never
*/
;(function () {
  // 实现
  type MyExtract<T, U> = T extends U ? T : never
  // 示例1：类 一般指子类在前父类在后成立 除非父子属性一致
  class P1 {
    name: string
  }
  class P2 extends P1 {
    age: number
  }
  type E1 = Extract<P2, P1> // P2

  // 示例2: 联合类型(比较的时候是一个一个比较的 符合就返回 相当于取交集)
  type E2 = Extract<string | object | number, string | number> // string | number

  // 示例2: 函数 参数和返回值都得是后面的子类型
  type func1 = (name: string, age: number) => string
  type func2 = (name: string) => string
  type E3 = Extract<func2, func1> // func2
})

/* ---------------------- Record -------------------------  */
/* 
定义: 构建一个键值对都被约束为指定类型的类型
*/
;(function () {
  interface Person {
    name: string
    age: number
  }
  type R1 = Record<string, Person>
})()
