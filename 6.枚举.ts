// 第一项默认是0 下面递增
enum Direction {
  up,
  dowm,
  left,
  right
}
// 取值
console.log(Direction.up, Direction[0]) // 0 up

// 手动赋值数字
enum Direction1 {
  up = 2,
  dowm,
  left,
  right
}
console.log(Direction1.dowm) // 3

// 手动赋值字符串 如果有一个被赋值为字符串，下面的都得是字符串
enum Direction2 {
  up,
  dowm = 'dowm',
  left = 'left',
  right = 'right'
}
