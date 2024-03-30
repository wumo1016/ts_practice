/*
 * @Description: 将某些属性变成可选的
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-30 20:26:37
 */

interface Person {
  name: string
  age: number
  address: string
}

type PartialPropsOptional<T extends object, K extends keyof T> = Partial<
  Pick<T, K>
> &
  Omit<T, K>

// 为方便查看类型

type p1 = Computed<PartialPropsOptional<Person, 'age' | 'address'>>

export {}
