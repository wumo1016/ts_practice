// 仅仅用于编译检查 并不会实现功能
// declare var jQuery: (selector: string) => any

declare module '*.vue' // 引入.vue文件不报错
declare module 'jquery' {
  const name: string
}

declare type test123 = 'string'
