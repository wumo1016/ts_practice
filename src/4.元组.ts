/* --------------------------------- 元组定义 --------------------------------- */
/* 
- 值必须与定义的类型一一对应
*/
;(function () {
  let tuple: [string, number]
  tuple = ['0', 1]
  tuple.push(3) // 可以放入元组已经定义的类型 但是不能通过索引拿到多余的元素
  // tuple[2] = 123 // 不能通过索引添加元素 可以修改已有的元素
  console.log(tuple)
})

/* --------------------------------- 可变元组 --------------------------------- */
;(function () {
  // 可变元组
  const tiple1: [number, string, ...any[]] = [1, '2', 3, 4]
  // 元组标签 仅仅可读性好
  const tiple2: [age: number, name: string, ...args: any[]] = [1, '2', 3, 4]
  console.log(tiple2[0])
  console.log(tiple2[0])
})
