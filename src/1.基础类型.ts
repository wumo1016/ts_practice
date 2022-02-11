// 冒号后面的都是类型
// 直接表明类型的叫做 类型注解

/* ------ 最基本的三个类型 boolean number string --------- */
let bool: boolean = true
let num: number = 1
let str: string = ''
// 可以用大的 但是大的是属于包装器 如果使用new只能用大写的
// str = new String(123) // 不能将类型“String”分配给类型“string”

/* --------------------- 数组 -------------------------- */
let arr: number[] = [1, 2, 3]
let arr2: (number | string)[] = [1, 2, '3']
let arr3: any[] = [1, '2', {}]
let arr4: Array<number> = [1, 2, 3]

/* --------------------- 元组 ------------------------------ */
// 值必须与定义的类型一一对应
let tuple: [string, number] = ['12', 123]
tuple.push(1) // 可以放入元组已经定义的类型 但是不能通过索引拿到多余的元素
// tuple[3] = 123 // 不能通过索引添加元素

/* ---------------------- 枚举 ----------------------------- */
// 普通枚举
enum DIRECTION { // 大写是规范
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
// console.log(DIRECTION[0]); // 支持反举

// 异构枚举
enum DIRECTION1 { // 如果有个数字，下面会递增推断。如果是字符串，下面的都必须手动声明
  UP = 'test', // 字符串不支持反举
  DOWN = 5,
  LEFT,
  RIGHT
}

// 常量枚举 
const enum DIRECTION2 { // 编译的时候 获取的直接值(普通是这样DIRECTION.UP 而常量直接是它对应的值 0)
  UP,
  DOWN,
  LEFT,
  RIGHT
}
// console.log(DIRECTION2.UP);

/* ---------- 其他类型 unknow any void null undefined never object symbol bigint -------------- */
let unknow: unknown = 1

let unknow1: any = 1

// any可以分配给其他类型 其他类型也都可以分配给any
// 其他类型也都可以分配给unkonw 但是unkonw不能分配给其他类型

// void只能赋值 null或undefined
function unknow3(): void { }

// null和undefined是任何类型的子类型（如果配置文件开启了 strict:true 则无效）
let unknow4: null = null
let unknow5: undefined = undefined

// 代码无法到达终点 无法执行到结尾 出错 死循环 永远走不到的判断
// never也是其他类型的子类型
function unknow6(): never {
  throw '123'
}
function unknow7(): never {
  while (true) { }
}

// {} [] function
let unknow8 = (obj: object) => []

let unknow9: symbol = Symbol()

let unknow10: bigint = BigInt(1)

// BigInt相关
const max = Number.MAX_SAFE_INTEGER
console.log(max + 1 === max + 2); // true
console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2)); // false
console.log(max);                      // 9007199254740991
console.log(BigInt(max) + BigInt(1));  // 9007199254740992n

export {}
