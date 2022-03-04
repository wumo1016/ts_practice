import 'reflect-metadata'

/* 
- 1.同一类执行顺序：多个装饰器时会倒着执行
- 2.不同类执行顺序：属性装饰器 => (参数装饰器 => 方法装饰器)(对应的参数装饰器执行完紧接着执行对应的方法装饰器) => 构造器参数装饰器 => 类装饰器
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
})

/* --------------------------------- 普通参数装饰器 --------------------------------- */
;(function () {
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} proto Test.prototype
   * @param {*} key 参数名
   * @param {*} position 参数的位置
   */
  function D1(proto: any, key: string, position) {
    console.log(proto, key, position) // {} say 1
  }

  class Test {
    say(age: number, @D1 name: string) {}
  }
})

/* --------------------------------- 构造器参数装饰器 --------------------------------- */
;(function () {
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} targetClass Test
   * @param {*} key
   * @param {*} position 参数的位置
   */
  function D1(targetClass: any, key: string, position) {
    console.log(targetClass, key, position) // {} undefined 1
    const paramsTypes = Reflect.getMetadata('design:paramtypes', targetClass) // 所有构造器参数类型组成的数组
    console.log(paramsTypes) // [ [Function: String], [Function: Number] ]
  }

  class Test {
    constructor(@D1 name: string, age: number) {}
  }
})

/* --------------------------------- 属性装饰器 --------------------------------- */
;(function () {
  /**
   * @Author: wyb
   * @Descripttion:
   * @param {*} proto Test.prototype
   * @param {*} key 属性名
   */
  function D1(proto: any, key: string | symbol) {
    console.log(proto, key)
  }

  class Test {
    @D1
    name: string = 'wyb'
  }
})

/* --------------------------------- 元数据 --------------------------------- */
/* 
- Reflect.defineMetadata 定义元数据
  - 4个参数：key value target targetKey
  - 3个参数：key value target
  - 2个参数：直接在类、属性、方法上定义元数据(示例Test2)
- Reflect.getMetadata 获取元数据
  - 3个参数：key target targetKey
  - 2个参数：key target
- Reflect.hasMetadata 是否存在数据
  - 3个参数：key target targetKey
  - 2个参数：key target
- Reflect.hasOwnMetadata 只获取自己类上定义的元数据(无法获取来自继承的)
- Reflect.getMetadataKeys 获取指定对象的所有元数据key(包括内置的元数据key)
- 三个内置元数据key
  - design:type
  - design:paramtypes
  - design:returntype
*/
;(function () {
  function D1(proto: any, key: string | symbol) {
    // 获取对应key的类型
    const PropClass = Reflect.getMetadata('design:type', proto, key)
    console.log(PropClass) // [Function: String]
  }
  function D2(proto, key, descriptor) {
    Reflect.defineMetadata('path', 'wyb', proto, key) // 定义元数据(因为执行顺序 所以在方法装饰器中定义 可以在类装饰器上拿到)
  }
  function D3(targetClass) {
    console.log(Reflect.getMetadata('path', targetClass.prototype, 'say')) // 获取元数据
  }

  @D3
  class Test {
    @D1
    name: string = 'wyb'

    @D2
    say() {}
  }
  /* ------------------------------ */
  @Reflect.metadata('key_test2', '哈哈哈')
  class Test2 {
    @Reflect.metadata('key_user', '哈哈哈')
    username = 'wyb'

    @Reflect.metadata('key_say', '哈哈哈')
    say() {}
  }
  console.log(Reflect.getMetadata('key_test2', Test2)) // 哈哈哈
  console.log(Reflect.getMetadata('key_user', Test2.prototype, 'username')) // 哈哈哈
  console.log(Reflect.getMetadata('key_say', Test2.prototype, 'say')) // 哈哈哈
})()
