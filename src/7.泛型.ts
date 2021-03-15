import { type } from "node:os"

// 例子： 传入什么类型，返回什么类型
function echo<T>(a: T): T {
  return a
}
echo<number>(123)
echo('123') // 也可以不传 会自动推断

// 多个泛型
// 例子： 类型交换
const swap = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]]
}

// 约束泛型 只能传入一个有length属性的参数
interface IWithLength {
  length: number
}
function echoWithArr<T extends IWithLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
echo('12345')
echo([1, 2, 3])

class Queue {
  private data: any[] = []
  push(item: any) {
    return this.data.push(item)
  }
  pop() {
    return this.data.pop()
  }
}
const queue1 = new Queue()
queue1.push(1)
queue1.push('str')
// console.log(queue1.pop().toFixed())  // 编译的时候才报错


// keyof K就是必须是T中的key
const getValue = <T extends object, K extends keyof T>(obj: T, key: K) => {

}
getValue({ a: 1, b: 2 }, 'a')

type T1 = keyof { a: 1, b: 2 }
type T2 = keyof string // string的所有属性
type T3 = keyof any // string | number | symbol

// 泛型类
class Queue1<T> {
  private data: any[] = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.pop()
  }
}
const queue2 = new Queue1<number>()
queue2.push(1)
// queue2.push('str') 报错

class My {
  eat(){}
}

function createInstance<T>(clazz: { new (): T }){ // new () 表示My类 然后返回My的实例
  return new clazz()
}

const ins1 = createInstance<My>(My)

// 泛型接口
interface KeyPair<K, V> {
  key: K,
  value: V
}

let kp1: KeyPair<string, number> = {
  key: '123',
  value: 123,
}

// 泛型数组
const arr1: Array<string> = ['1']
