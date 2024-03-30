/*
 * @Description: 子类型互斥(只能是指定类型中的一种)
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-30 20:55:46
 */

interface Man1 {
  fortune: string
}
interface Man2 {
  funny: string
}
interface Man3 {
  foreign: string
}

type ManType = Man1 | Man2 | Man3 // 我希望MainType只能是其中的一种类型

const man: ManType = {
  fortune: '富有',
  funny: '风趣',
  foreign: '洋派'
}

// 核心就是 我要排除你的属性，在我的结构里将你的属性定义成 never
type DiscardType<T, U> = { [K in Exclude<keyof T, keyof U>]?: never }

type OrType<T, U> = (DiscardType<T, U> & U) | (DiscardType<U, T> & T)

type manType2 = OrType<Man3, OrType<Man1, Man2>> // 对多个对象可以进行互斥

const man2: manType2 = {
  fortune: '富有'
}

export {}
