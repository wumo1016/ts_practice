// 普通枚举
enum DIRECTION { // 大写是规范
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
// console.log(DIRECTION[0]); // 支持反举

// 异构枚举
enum DIRECTION1 { // 如果有个数字，下面会递增推断。如果是字符串，下面的都必须手动声明
  UP = 'test', // 字符串不支持反举
  DOWN = 5,
  LEFT,
  RIGHT
}

// 常量枚举 
const enum DIRECTION2 { // 编译的时候 获取的直接值(普通是这样DIRECTION.UP 而常量直接是它对应的值 0)
  UP,
  DOWN,
  LEFT,
  RIGHT
}
// console.log(DIRECTION2.UP);