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

/* --------------------------------- 条件类型 --------------------------------- */
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

/* --------------------------------- 模板字符串类型 --------------------------------- */
;(function () {
  // 组装
  type name = 'jiangwen'
  type age = 30
  type sayName = `handsome, ${name} ${age}`

  // 分发
  type Direction = 'top' | 'bottom' | 'right' | 'left'
  type AllMargin = `margin-${Direction}`
  type AllPadding = `padding-${Direction}`

  // 分发组装
  type IR = '1.0' | '2.0' | '3.0'
  type IL = 20 | 30 | 40
  type IRL = `${IR}-${IL}`

  // 泛型分发
  type sayHello<
    T extends string | boolean | null | undefined | number | bigint
  > = `hello , ${T}`
  // type sayHello<T> = `hello , ${T & string}`; // 有的时候可以偷懒，直接采用此方案来解析
  type R1 = sayHello<'jiang'>
  type R2 = sayHello<30> // 以上都是字面量
  type R3 = sayHello<number> // 可以传递基础类型

  // 字符串可以支持工具类型 Uppercase、LowerCase、 Capitalize、 UnCapitalize
  type Person = {
    name: string
    age: number
    address: string
  }
  let person: Person = { name: 'jw', age: 30, address: '北京' }
  type WithGetter<T> = {
    [K in keyof T as `get${Capitalize<K & string>}`]?: () => T[K]
  }

  type Compute<T> = { [K in keyof T]: T[K] }
  type WithGetterType = Compute<WithGetter<Person>>
  let personGetter: WithGetterType = {
    getName() {
      return person.name
    },
    getAge() {
      return person.age
    },
    getAddress() {
      return person.address
    }
  }

  // infer 可以进行位置推断
  // 可以推断数组 | 元组 | string
  type GetNameFirstChar<T> = T extends `${infer F} ${infer X}` ? F : never
  type FirstChar = GetNameFirstChar<'jiang wen'> // 可以通过infer 来进行字符串的位置推断，符合即可推断（中间可以配置分隔符）
})

export {}
