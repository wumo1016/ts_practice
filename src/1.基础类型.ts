// 冒号后面的都是类型
// 直接表明类型的叫做 类型注解

/* --------------------------------- 三个基本类型 boolean number string --------------------------------- */
/* 
- 可以用大写的 但是大的是属于包装器 如果使用new只能用大写的
- str = new String(123) // 但不能将类型“String”分配给类型“string”
*/
;(function () {
  let bool: boolean = true
  let num: number = 1
  let str: string = ''
})

/* --------------------------------- unknow any --------------------------------- */
/* 
- unknown
  - 其他类型也都可以分配给unkonw 但是unkonw不能分配给其他类型
  - 不能通过变量取值
  - 和其他类型联合类型都是 unknown
  - 和其他类型交叉类型都是其他类型v
- any
  - 可以分配给其他类型 其他类型也都可以分配给any
*/
;(function () {
  let unknow: unknown = 1
  let test: any = 1
})

/* --------------------------------- void null undefined never --------------------------------- */
/* 
- null和undefined是任何类型的子类型（如果配置文件开启了 strict:true 则无效）
*/
;(function () {
  let test1: number = null
  let test2: string = undefined
})

/* --------------------------------- never --------------------------------- */
/* 
- 永远走不到的判断/出错/死循环
- never也是其他类型的子类型
*/
;(function () {
  function test(val: string) {
    if (typeof val === 'string') {
    } else {
      console.log(val) // 永远走不到的判断 此时val就是never类型
    }
  }
})

/* --------------------------------- object(object/array/function) --------------------------------- */
;(function () {
  let test1: object = {}
  let test2: object = []
  let test3: object = function () {}
})

/* --------------------------------- symbol bigint --------------------------------- */
;(function () {
  let test4: symbol = Symbol()

  // BigInt相关
  const max = Number.MAX_SAFE_INTEGER
  console.log(max + 1 === max + 2) // true
  console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2)) // false
  console.log(max) // 9007199254740991
  console.log(BigInt(max) + BigInt(1)) // 9007199254740992n
  console.log(BigInt(max) + 1n) // 简写 目标版本target需要大于等于2020
})

/* --------------------------------- 数组 --------------------------------- */
;(function () {
  let test1: number[] = [1, 2, 3]
  let test2: Array<number> = [1, 2, 3]
})
