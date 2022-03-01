/* 
- 1.多个装饰器时会倒着执行
*/

/* --------------------------------- 不带参数 --------------------------------- */
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

/* --------------------------------- 带参数 --------------------------------- */
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
})()
