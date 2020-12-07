
// 例子： 传入什么类型，返回什么类型
function echo<T>(a: T): T{
  return a
}
echo(123)
echo('123')

// 多个泛型
// 例子： 类型交换
const swap = <T, K>(tuple: [T, K]): [K, T] => {
  return [tuple[1], tuple[0]]
}

// 约束泛型 只能传入一个有length属性的参数
interface IWithLength {
  length: number
}
function echoWithArr<T extends IWithLength>(arg: T): T{
  console.log(arg.length)
  return arg
}
echo('12345')
echo([1,2,3])

