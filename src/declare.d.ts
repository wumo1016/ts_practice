// 仅仅用于编译检查 并不会实现功能
// declare var jQuery: (selector: string) => any

// 模块声明
declare module '*.vue' // 引入.vue文件不报错
declare module 'jquery' {
  const name: string
  // export default $
  export = $ // 兼容commonjs
}
// import $ from 'jquery' // 使用

declare type test123 = 'string'

// type interface 可以不加declare 因为它们不是原生js语法 其他的不加则会报错
