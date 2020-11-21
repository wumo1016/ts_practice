
// 用来在代码执行时传入的类型，来确定结果

function createArray<T>(len, value: T): T[] {
  const resuslt = Array(len).fill(value)
  return resuslt
}

const arr1 = createArray(3, 123)

// 多个泛型
// 例子： 类型交换
const swap = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]]
}
