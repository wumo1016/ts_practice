// 如果想给全局的接口新增功能 使用global
declare global {
  // 方便查看类型的
  type Computed<T> = {
    [K in keyof T]: T[K]
  }

  interface String {
    double(): string
  }
}

export {}
