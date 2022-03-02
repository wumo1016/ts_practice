/* 
- 1.多个装饰器时会倒着执行
*/

/* --------------------------------- 类装饰器不带参数 --------------------------------- */
;(function () {
  function D1(targetClass) {
    // targetClass 就是装饰的类
    console.log(targetClass.name) // 类名
    console.log(targetClass.age) // Test类
  }

  @D1
  class Test {
    static age: string = 'wyb'
  }
})

/* --------------------------------- 类装饰器带参数 --------------------------------- */
;(function () {
  function D1(params) {
    return function (targetClass) {
      console.log(params) // wyb
      console.log(targetClass.name) // 类名
      console.log(targetClass.age) // Test类
    }
  }

  @D1('wyb')
  class Test {
    static age: string = 'wyb'
  }
})

/* --------------------------------- 类装饰器装饰器继承 --------------------------------- */
;(function () {
  // 希望在类被创建的时候 装饰器内能知道
  // 装饰器类返回的结果将会替代原来的类
  function D1<T extends { new (...args: any): any }>(
    targetClass: new (...args: any) => Test
  ) {
    // 此地的类名 ChildClass 可省略 省略后即为匿名类
    return class extends targetClass {
      // class ChildClass extends targetClass {
      constructor() {
        super()
        console.log(targetClass.name, '类被创建')
      }
      say() {
        console.log('wyb')
      }
    }
    // return ChildClass
  }

  @D1
  class Test {}

  const test = new Test()
  ;(test as any).say()
})

/* --------------------------------- 方法装饰器 --------------------------------- */
// 也可带参数 使用方法与类装饰器一致
// 装饰器在new之前就已经执行了
;(function () {
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} proto Test.prototype
   * @param {*} key 方法名
   * @param {*} descriptor 属性描述符
   */
  function D1(proto, key, descriptor) {
    console.log(proto, key, descriptor)
    const fn = descriptor.value // 对应被装饰的方法
    fn()
  }

  class Test {
    @D1
    say() {
      console.log('say执行啦')
    }
  }
})

/* --------------------------------- 方法装饰器 拦截器 --------------------------------- */
// 也可带参数 使用方法与类装饰器一致
;(function () {
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} proto Test.prototype
   * @param {*} key 方法名
   * @param {*} descriptor 属性描述符
   */
  function D1(proto, key, descriptor) {
    const fn = descriptor.value
    descriptor.value = function (...args) {
      console.log('前置拦截器')
      fn.call(this, ...args)
      console.log('后置拦截器')
    }
  }

  class Test {
    @D1
    say(name) {
      console.log('say', name)
    }
  }

  const test = new Test()
  test.say('---wyb---')
})()
