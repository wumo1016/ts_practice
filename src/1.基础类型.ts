// 冒号后面的都是类型

/* --------------------------------- 三个基本类型 boolean number string --------------------------------- */
let bool: boolean = true
let num: number = 1
let str: string = ''
// 可以用大的 但是大的是属于包装器 如果使用new只能用大写的
// str = new String(123) // 不能将类型“String”分配给类型“string”

/* --------------------------------- unknow any void null undefined never --------------------------------- */
let unknow: unknown = 1
let unknow1: any = 1
// any可以分配给其他类型 其他类型也都可以分配给any
// 其他类型也都可以分配给unkonw 但是unkonw不能分配给其他类型

// void只能赋值 null或undefined
function unknow3(): void {}

// null和undefined是任何类型的子类型（如果配置文件开启了 strict:true 则无效）
let unknow4: null = null
let unknow5: undefined = undefined

// 代码无法到达终点 无法执行到结尾 出错 死循环 永远走不到的判断
// never也是其他类型的子类型
function unknow6(): never {
  throw '123'
}
function unknow7(): never {
  while (true) {}
}

/* --------------------------------- object symbol bigint --------------------------------- */
// {} [] function
let unknow8 = (obj: object) => []
let unknow9: symbol = Symbol()
let unknow10: bigint = BigInt(1)

// BigInt相关
const max = Number.MAX_SAFE_INTEGER
console.log(max + 1 === max + 2) // true
console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2)) // false
console.log(max) // 9007199254740991
console.log(BigInt(max) + BigInt(1)) // 9007199254740992n

/* --------------------- 数组 -------------------------- */
let arr: number[] = [1, 2, 3]
let arr2: (number | string)[] = [1, 2, '3']
let arr3: any[] = [1, '2', {}]
let arr4: Array<number> = [1, 2, 3]

export {}
