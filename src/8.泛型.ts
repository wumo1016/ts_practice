/* 泛型
1.可以时A-Z任意一个字母 也可以是一个语义化的单词
*/

/* --------------------------------- 泛型函数 --------------------------------- */
;(function () {
  // 示例1
  function echo<T>(a: T): T {
    return a
  }
  echo<number>(123)
  echo('123') // 也可以不传 会自动推断
  echo([1, 2, 3])

  // 示例2：多个泛型使用逗号间隔
  const swap = <T, K>(tuple: [T, K]): [K, T] => {
    return [tuple[1], tuple[0]]
  }
  console.log(swap([1, '2']))
})

/* --------------------------------- 泛型接口 --------------------------------- */
;(function () {
  interface KeyPair<K, V = number> {
    key: K
    value: V
  }

  let kp1: KeyPair<string> = {
    key: '123',
    value: 123
  }
})

/* --------------------------------- 泛型类 --------------------------------- */
;(function () {
  // 示例1
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
  console.log(queue2.pop().toFixed(2))
  // 示例2
  class My {
    eat() {}
  }
  function createInstance<T>(clazz: { new (): T }) {
    // new () 表示My类 然后返回My的实例
    return new clazz()
  }
  const ins1 = createInstance<My>(My)
})

/* --------------------------------- 泛型默认值 --------------------------------- */
;(function () {
  // 示例1
  function echo<T = string>(a): T {
    return a
  }
  echo<number>(123)
  echo(123)
})

/* --------------------------------- 约束泛型 extends --------------------------------- */
;(function () {
  // 示例1：只能传入一个有length属性的参数
  interface IWithLength {
    length: number
  }
  function echoWithArr<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
  }
  // 示例2：keyof K就是必须是T中的key T[K]就是返回值的类型
  const getValue = <T extends object, K extends keyof T>(
    obj: T,
    key: K
  ): T[K] => obj[key]
  getValue({ a: 1, b: '2' }, 'a')
})
