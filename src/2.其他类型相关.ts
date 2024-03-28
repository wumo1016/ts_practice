/* --------------------------------- union types 联合类型 --------------------------------- */
/* 
- 确定类型之前只能调用公共的方法
*/
;(function () {
  let value: string | number
})

/* --------------------------------- 类型强转 ---------------------------------  */
/* 
- 强制转换为某个类型 但必须是现有类型的子集
*/
;(function () {
  let value: string | number | undefined
  console.log((<string>value).indexOf('1'))
  console.log((value as number).toFixed(1))
})

/* --------------------------------- 字面量类型 --------------------------------- */
;(function () {
  type T1 = 'up' | 'down'
  let value: T1 = 'up'
})

/* --------------------------------- 类型别名 type --------------------------------- */
;(function () {
  type T1 = '1' | '2'
  let value: T1 = '1'
})

/* --------------------------------- type inference 类型推论 类型推断 --------------------------------- */
;(function () {
  let value = 123
})

/* --------------------------------- 交叉类型 --------------------------------- */
/*
- 合并两个类型
- 如果两个属性的类型不一样 则会变成 never 类型
*/
;(function () {
  interface I1 {
    name: string
  }
  type T1 = I1 & { age: number }
  let value: T1 = { name: '123', age: 123 }
})

/* --------------------------------- type guard 类型守卫 --------------------------------- */
/* 
- 产生的时机： 1.typeof 2.in 3.instanceof 4. == === != !===
*/
;(function () {
  function getLength(data: string | number): number {
    if (typeof data === 'string') {
      return data.length
    } else {
      return data.toString().length
    }
  }

  class P1 {
    eat1() {}
  }
  class P2 {
    eat2() {}
  }
  function createClass(clazz: new () => P1 | P2) {
    const r = new clazz()
    if (r instanceof P1) {
      console.log(r.eat1)
    } else {
      console.log(r.eat2)
    }
    return r
  }
})

/* --------------------------------- 自定义类型守卫 is --------------------------------- */
;(function () {
  const isString = (str: any) => typeof str === 'string' // 输出时没有提示
  // const isString = (str: any): str is string => typeof str === 'string' // 当返回true的时候 str的类型就是string
  const obj = {
    name: 'wyb',
    getAge() {
      return 18
    }
  }
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    if (isString(value)) {
      console.log(value.length)
    }
  })
})

/* --------------------- is语法 -------------------------- */
//  自定义类型保护类型 如果结果是true的话 返回什么类型
;(function () {
  function isString(val: any): val is string {
    // 判定就是字符串
    return Object.prototype.toString.call(val) === '[object String]'
  }
  let str = '1'
  if (isString(str)) {
    console.log(str)
  }
})

/* --------------------------------- 条件类型 --------------------------------- */ {
}
;(function () {
  interface Bird {
    name: string
    type: '鸟'
  }
  interface Fish {
    name: string
    type: '鱼'
  }
  interface Sky {
    sky: string
  }
  interface Swiming {
    swiming: string
  }
  type MyType<T> = T extends Bird ? Sky : Swiming
  type T1 = MyType<Bird>
  type T2 = MyType<Fish>
})

export {}
